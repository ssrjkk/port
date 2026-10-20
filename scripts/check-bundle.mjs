/**
 * Проверка воркера port: данные и бандл не разошлись.
 *
 * В репозитории лежат два файла: projects.json (источник данных) и
 * cloudflare-worker/worker.js (собранный esbuild-бандл, в который projects.json
 * вшит). Сборка и данные живут отдельно, и ничто не мешает им разойтись: правка
 * projects.json без пересборки оставляет воркер со старым списком проектов,
 * и это видно только пользователям бота.
 *
 * Что проверяется:
 *
 *   1. projects.json разбирается и имеет ожидаемую форму.
 *   2. У каждого проекта заполнены name, lang, desc и desc_en — в боте они
 *      показываются пользователю, и пустое поле выглядит как поломка.
 *   3. Каждый проект (и раздел channels/links) присутствует в бандле: если
 *      данных больше, чем в бандле, бандл устарел.
 *   4. Каждая привязка и переменная окружения из wrangler.toml встречается в
 *      бандле: иначе бандл собран под другое окружение.
 *   5. Бандл остаётся модулем воркера (default export) и не ссылается на
 *      отсутствующий source map.
 *
 * Запуск: node scripts/check-bundle.mjs
 * Выход: 0 — всё в порядке, 1 — есть замечания (они печатаются в stderr).
 */

import { readFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DATA = join(ROOT, "projects.json");
const BUNDLE = join(ROOT, "cloudflare-worker", "worker.js");
const WRANGLER = join(ROOT, "cloudflare-worker", "wrangler.toml");

const problems = [];
const fail = (message) => problems.push(message);

// --- 1. Данные -----------------------------------------------------------
let data;
try {
  data = JSON.parse(readFileSync(DATA, "utf8"));
} catch (e) {
  console.error(`projects.json не разбирается: ${e.message}`);
  process.exit(1);
}

for (const key of ["github", "projects", "channels", "links"]) {
  if (!(key in data)) fail(`в projects.json нет ключа «${key}»`);
}
if (!Array.isArray(data.projects)) fail("projects.json: projects должен быть списком");

// --- 2. Поля проектов ----------------------------------------------------
const REQUIRED = ["name", "lang", "desc", "desc_en"];
for (const [i, p] of (data.projects || []).entries()) {
  for (const key of REQUIRED) {
    if (typeof p[key] !== "string" || p[key].trim() === "") {
      fail(`projects[${i}] (${p.name ?? "без имени"}): пустое поле «${key}»`);
    }
  }
  if (typeof p.stars !== "number" || p.stars < 0) {
    fail(`projects[${i}] (${p.name ?? "без имени"}): stars должен быть неотрицательным числом`);
  }
}

// --- 3. Бандл ------------------------------------------------------------
let bundle;
try {
  bundle = readFileSync(BUNDLE, "utf8");
} catch (e) {
  console.error(`бандл не читается: ${e.message}`);
  process.exit(1);
}

for (const p of data.projects || []) {
  if (!bundle.includes(`"${p.name}"`)) {
    fail(`«${p.name}» есть в projects.json, но нет в бандле — бандл устарел`);
    continue;
  }
  if (!bundle.includes(p.desc.slice(0, 40))) {
    fail(`описание проекта «${p.name}» не найдено в бандле — бандл устарел`);
  }
}
for (const ch of data.channels || []) {
  if (typeof ch === "string" && !bundle.includes(ch)) {
    fail(`канал «${ch}» есть в projects.json, но нет в бандле`);
  }
}

// --- 4. Привязки и переменные окружения ---------------------------------
let wrangler = "";
try {
  wrangler = readFileSync(WRANGLER, "utf8");
} catch (e) {
  fail(`wrangler.toml не читается: ${e.message}`);
}
const bindings = [...wrangler.matchAll(/^\s*binding\s*=\s*"([^"]+)"/gm)].map((m) => m[1]);
if (bindings.length === 0) fail("в wrangler.toml не найдено ни одной привязки");
for (const b of bindings) {
  if (!bundle.includes(b)) {
    fail(`привязка «${b}» объявлена в wrangler.toml, но не встречается в бандле`);
  }
}

// --- 5. Форма бандла -----------------------------------------------------
if (!/export\s*\{\s*\w+\s+as\s+default\s*\}/.test(bundle)) {
  fail("бандл не экспортирует обработчик по умолчанию — это не модуль воркера");
}
const mapMatch = bundle.match(/\/\/# sourceMappingURL=(\S+)/);
if (mapMatch) {
  const mapPath = join(dirname(BUNDLE), mapMatch[1]);
  if (!existsSync(mapPath)) {
    fail(`бандл ссылается на source map «${mapMatch[1]}», которого нет рядом`);
  }
}

if (problems.length) {
  console.error("Проверка воркера не пройдена:");
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

console.log(
  `Воркер в порядке: ${(data.projects || []).length} проектов, ` +
    `${bindings.length} привязок, бандл соответствует данным.`,
);
