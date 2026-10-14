var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// projects.json
var projects_default = {
  github: "ssrjkk",
  projects: [
  {
    name: "shroud",
    lang: "Rust, Solidity, TS",
    stars: 0,
    desc: "Приватный программируемый ML над шифрованными данными: fhEVM-контракты, FHE-обучение поверх шифртекста, ZK-доказательство вычислений, стриминговые выплаты.\nСтек: Solidity, TypeScript SDK, Rust-нода",
    desc_en: "Private, programmable ML on encrypted data: fhEVM contracts, FHE training over ciphertext, ZK proof of compute, streaming payouts.\nStack: Solidity, TypeScript SDK, Rust node"
  },
  {
    name: "tippy-on-base",
    lang: "Python",
    stars: 0,
    desc: "Tip-бот на Base: превращает любой Telegram-чат в on-chain экономику сообщества — мгновенные USDC-переводы, реакции, страницы донатов, пейволы и предсказательные рынки. Нулевой газ для пользователей.\nСтек: Python, Ethereum/Base",
    desc_en: "Tip bot on Base: turns any Telegram chat into an on-chain community economy — instant USDC transfers, reactions, donation pages, paywalls and prediction markets. Zero gas for users.\nStack: Python, Ethereum/Base"
  },
  {
    name: "wake",
    lang: "Python, TS",
    stars: 0,
    desc: "Мультивендорный торговый терминал: перп-рынки Lighter + Arcus, copy trading, Predict, AI-агент. Фронтенд React + Vite + Tailwind, бэкенд FastAPI.\nСтек: Python, TypeScript, React, FastAPI, wagmi/viem",
    desc_en: "Multi-venue trading terminal: Lighter + Arcus perp markets, copy trading, Predict, AI agent. React + Vite + Tailwind frontend, FastAPI backend.\nStack: Python, TypeScript, React, FastAPI, wagmi/viem"
  },
  {
    name: "raven",
    lang: "Python, TS, Go, Rust",
    stars: 3,
    desc: "Self-hosted MCP-сервер: 66 инструментов поверх stdio и HTTP. Изоляция воркспейса, авторизация по ключам, MIT-лицензия.\nСтек: Python, TypeScript, Go, Rust, Ollama, PostgreSQL",
    desc_en: "Self-hosted MCP server: 66 tools over stdio and HTTP. Workspace confinement, keyed auth, MIT licensed.\nStack: Python, TypeScript, Go, Rust, Ollama, PostgreSQL"
  },
  {
    name: "agent-skills",
    lang: "Python",
    stars: 1,
    desc: "100 курируемых двуязычных (EN/RU) навыков в универсальном формате Agent Skills для Claude Code, OpenCode, Cursor, Windsurf и любых LLM/GLM-агентов + Python SDK/CLI с CI-валидацией.\nСтек: Python, Agent Skills, SDK/CLI",
    desc_en: "100 curated bilingual (EN/RU) skills in the universal Agent Skills format for Claude Code, OpenCode, Cursor, Windsurf and every LLM/GLM agent + Python SDK/CLI with CI-enforced validation.\nStack: Python, Agent Skills, SDK/CLI"
  },
  {
    name: "drafter",
    lang: "TypeScript",
    stars: 1,
    desc: "Браузерный AI QA-ассистент с agentic-анализом кодовой базы. Генерирует тест-планы, тест-кейсы, код автотестов и баг-репорты.\nСтек: TypeScript",
    desc_en: "Browser-based AI QA assistant with agentic codebase analysis. Generates test plans, test cases, automation code, and bug reports.\nStack: TypeScript"
  },
  {
    name: "noema",
    lang: "Python",
    stars: 0,
    desc: "Нейро-символический инженерный движок: генерирует технические решения, формально верифицирует их через Z3, аудирует каждый шаг и сам чинит инциденты через pull-реквесты.\nСтек: Python, Z3, gRPC",
    desc_en: "Neuro-symbolic engineering mind: generates technical solutions, formally verifies them with Z3, audits every thought step, and autonomously fixes its own incidents via pull requests.\nStack: Python, Z3, gRPC"
  },
  {
    name: "volley",
    lang: "C++",
    stars: 0,
    desc: "Платформа нагрузочного тестирования HTTP-сервисов. Асинхронное ядро C++20 (Boost.Beast/ASIO), YAML-сценарии, OAuth2/Vault/mTLS, OTLP+Prometheus, Python SDK, gRPC control plane.\nСтек: C++20, Boost.Beast, OTLP, Prometheus, Kubernetes",
    desc_en: "Load-testing platform for HTTP services. C++20 async core (Boost.Beast/ASIO), YAML scenarios, OAuth2/Vault/mTLS, OTLP+Prometheus, Python SDK, gRPC control plane.\nStack: C++20, Boost.Beast, OTLP, Prometheus, Kubernetes"
  },
  {
    name: "qualix",
    lang: "Python",
    stars: 0,
    desc: "QA-платформа автоматизации — 317 тестов, 100% покрытие, security hardening, готовность к k8s. FastAPI + pytest + Playwright + Locust.\nСтек: Python, FastAPI, Pytest, Playwright, Locust, Kubernetes",
    desc_en: "QA automation platform — 317 tests, 100% coverage, security hardening, k8s-ready. FastAPI + pytest + Playwright + Locust.\nStack: Python, FastAPI, Pytest, Playwright, Locust, Kubernetes"
  },
  {
    name: "qa-arsenal",
    lang: "Python",
    stars: 0,
    desc: "Единый QA-монорепозиторий: 5 наборов тестов из 5 репозиториев (hh.ru api+ui, guap.ru python+go, amoCRM). API/UI/load/DB/Kafka тесты — Python/pytest, Playwright, Go.\nСтек: Python, pytest, Playwright, Go, Kafka",
    desc_en: "Unified QA monorepo: 5 target suites consolidated from 5 repos (hh.ru api+ui, guap.ru python+go, amoCRM). API/UI/load/DB/Kafka tests — Python/pytest, Playwright, Go.\nStack: Python, pytest, Playwright, Go, Kafka"
  },
  {
    name: "mobius",
    lang: "Python",
    stars: 0,
    desc: "Автоматизация мобильных тестов Android/iOS: Appium 2.x + pytest, screen objects, пул устройств, параллельный запуск. 947 тестов, 99% покрытие.\nСтек: Python, Appium 2.x, pytest",
    desc_en: "Mobile test automation for Android and iOS: Appium 2.x + pytest, screen objects, device pooling, parallel execution. 947 tests, 99% coverage.\nStack: Python, Appium 2.x, pytest"
  },
  {
    name: "bothive",
    lang: "TypeScript",
    stars: 0,
    desc: "Платформа оркестрации нескольких ботов для Telegram, Twitch, YouTube и Twitter.\nСтек: TypeScript, Node.js, React, BullMQ, Prisma, OpenTelemetry",
    desc_en: "Multi-bot orchestration platform for Telegram, Twitch, YouTube and Twitter.\nStack: TypeScript, Node.js, React, BullMQ, Prisma, OpenTelemetry"
  },
  {
    name: "ezzoffer",
    lang: "TypeScript",
    stars: 0,
    desc: "AI-автоотклик на hh.ru: подбор вакансий, сопроводительные письма, управление резюме и Telegram-уведомления.\nСтек: TypeScript, Next.js, React",
    desc_en: "AI-powered job search automation for hh.ru: vacancy matching, cover letters, resume management and Telegram notifications.\nStack: TypeScript, Next.js, React"
  },
  {
    name: "harvest",
    lang: "Python",
    stars: 0,
    desc: "Фермер EVM-тестнетов: автоматический фарм активностей, мультикошельки, операторский портал с live-лентой, планировщик и Telegram-бот.\nСтек: Python",
    desc_en: "EVM testnet farmer: automated activity farming, multi-wallet support, operator portal with live feed, scheduler and Telegram bot.\nStack: Python"
  }
],
  channels: [
    {
      name: "B2W Main",
      url: "https://t.me/b2wmain"
    },
    {
      name: "B2W Shitpost",
      url: "https://t.me/b2wshitpost"
    }
  ],
  links: [
    {
      name: "GitHub",
      url: "https://github.com/ssrjkk"
    },
    {
      name: "Telegram",
      url: "https://t.me/ssrjkk"
    },
    {
      name: "Tippy on Base",
      url: "https://t.me/tippy_on_base_bot"
    },
    {
      name: "Wake Trade",
      url: "https://t.me/waketrade_bot"
    },
    {
      name: "Harvest Testnet",
      url: "https://t.me/harvest_testnet_bot"
    }
  ]
};


// worker.js
var GITHUB_USERNAME = projects_default.github;
var RAW_PROJECTS = projects_default.projects;
var CHANNELS = projects_default.channels;
var LINKS = projects_default.links;
var API = "https://api.telegram.org";
var GH_API = "https://api.github.com/repos";
var STARS_TTL = 3600;
var PAGE_SIZE = 3;
var LANG = {
  ru: {
    start: "\u041F\u0440\u0438\u0432\u0435\u0442! \u042F \u0431\u043E\u0442 ssrjkk.\n\n\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0438\u043B\u0438 \u043A\u043D\u043E\u043F\u043A\u0438 \u043D\u0438\u0436\u0435.",
    menu: "\u0413\u043B\u0430\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E:",
    projectsTitle: "<b>\u041C\u043E\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B:</b>",
    linksTitle: "\u0412\u0441\u0435 \u0441\u0441\u044B\u043B\u043A\u0438:",
    channelsTitle: "Telegram-\u043A\u0430\u043D\u0430\u043B\u044B:",
    help: "/start - \u0437\u0430\u043F\u0443\u0441\u043A\n/projects - \u043F\u0440\u043E\u0435\u043A\u0442\u044B GitHub\n/search <\u0437\u0430\u043F\u0440\u043E\u0441> - \u043F\u043E\u0438\u0441\u043A \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432\n/top - \u0442\u043E\u043F \u043F\u043E \u0437\u0432\u0451\u0437\u0434\u0430\u043C\n/links - \u0441\u0441\u044B\u043B\u043A\u0438\n/channels - \u043A\u0430\u043D\u0430\u043B\u044B\n/about - \u043E\u0431\u043E \u043C\u043D\u0435\n/stats - \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 (\u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446)\n/help - \u0441\u043F\u0440\u0430\u0432\u043A\u0430",
    unknown: "\u041D\u0435 \u0437\u043D\u0430\u044E \u0442\u0430\u043A\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B.\n\n",
    page: /* @__PURE__ */ __name((cur, total) => `\u0421\u0442\u0440. ${cur}/${total}`, "page"),
    prev: "\u2B05\uFE0F",
    next: "\u27A1\uFE0F",
    projects: "\u{1F4E6} \u041F\u0440\u043E\u0435\u043A\u0442\u044B",
    top: "\u{1F3C6} \u0422\u043E\u043F",
    links: "\u{1F517} \u0421\u0441\u044B\u043B\u043A\u0438",
    channels: "\u{1F4E2} \u041A\u0430\u043D\u0430\u043B\u044B",
    helpBtn: "\u2753 \u041F\u043E\u043C\u043E\u0449\u044C",
    lang: "\u{1F310} \u042F\u0437\u044B\u043A",
    aboutBtn: "\u{1F464} \u041E\u0431\u043E \u043C\u043D\u0435",
    langMenu: "\u0412\u044B\u0431\u0435\u0440\u0438 \u044F\u0437\u044B\u043A:",
    langSet: /* @__PURE__ */ __name((l) => `\u042F\u0437\u044B\u043A: ${l === "ru" ? "\u{1F1F7}\u{1F1FA} \u0420\u0443\u0441\u0441\u043A\u0438\u0439" : "\u{1F1EC}\u{1F1E7} English"}`, "langSet"),
    back: "\u{1F519} \u041D\u0430\u0437\u0430\u0434",
    notOwner: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0443.",
    notConfigured: "\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u043D\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D (OWNER_ID).",
    statsEmpty: "\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445.",
    stats: /* @__PURE__ */ __name((s) => `\u{1F4CA} <b>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430</b>

\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439: <b>${s.users}</b>
\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439: <b>${s.msgs}</b>
\u0421\u0435\u0433\u043E\u0434\u043D\u044F: <b>${s.today}</b>
\u041A\u043E\u043C\u0430\u043D\u0434: <b>${s.cmds}</b>

\u041F\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u0430\u043C:
${s.cmdList}

\u0422\u043E\u043F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439:
${s.topUsers}

\u0420\u0435\u0444\u0435\u0440\u0430\u043B\u044B:
${s.refList}`, "stats"),
    searchPrompt: "\u0424\u043E\u0440\u043C\u0430\u0442: /search <\u0437\u0430\u043F\u0440\u043E\u0441>\n\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: /search python",
    searchEmpty: /* @__PURE__ */ __name((q) => `\u041F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \xAB${q}\xBB \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.`, "searchEmpty"),
    searchTitle: /* @__PURE__ */ __name((q) => `<b>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \xAB${q}\xBB:</b>`, "searchTitle"),
    topTitle: "<b>\u{1F3C6} \u0422\u043E\u043F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043F\u043E \u0437\u0432\u0451\u0437\u0434\u0430\u043C:</b>",
    about: "\u{1F464} <b>\u041E\u0431\u043E \u043C\u043D\u0435</b>\n\n\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E \u0431\u043E\u0442\u043E\u0432, AI-\u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B, Web3 \u0438 QA-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B.\n\u0412\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u2014 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u043A\u043E\u0434 \u043D\u0430 GitHub.\n\n\u{1F6E0} \u0421\u0442\u0435\u043A: Python, TypeScript, Go, Rust, C++, Solidity\n\u{1F4E6} \u041F\u0440\u043E\u0435\u043A\u0442\u044B: 12 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0435\u0432 \u2014 \u043E\u0442 AI-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u043E\u0432 \u0434\u043E \u043D\u0430\u0433\u0440\u0443\u0437\u043E\u0447\u043D\u043E\u0433\u043E \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F\n\u{1F4E2} \u041A\u0430\u043D\u0430\u043B\u044B: @b2wmain, @b2wshitpost\n\n\u041A\u043D\u043E\u043F\u043A\u0438 \u043D\u0438\u0436\u0435 \u2014 \u043C\u043E\u0438 \u0441\u0441\u044B\u043B\u043A\u0438 \u{1F447}",
    broadcastPrompt: "\u0424\u043E\u0440\u043C\u0430\u0442: /broadcast <\u0442\u0435\u043A\u0441\u0442>",
    broadcastDone: /* @__PURE__ */ __name((ok, fail) => `\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E: <b>${ok}</b>, \u043D\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E: <b>${fail}</b>.`, "broadcastDone"),
    broadcastEmpty: "\u0412 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0435 \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F."
  },
  en: {
    start: "Hi! I'm ssrjkk bot.\n\nUse commands or the buttons below.",
    menu: "Main menu:",
    projectsTitle: "<b>My projects:</b>",
    linksTitle: "All links:",
    channelsTitle: "Telegram channels:",
    help: "/start - start\n/projects - GitHub projects\n/search <query> - search projects\n/top - top by stars\n/links - links\n/channels - channels\n/about - about me\n/stats - stats (owner)\n/help - help",
    unknown: "Unknown command.\n\n",
    page: /* @__PURE__ */ __name((cur, total) => `Page ${cur}/${total}`, "page"),
    prev: "\u2B05\uFE0F",
    next: "\u27A1\uFE0F",
    projects: "\u{1F4E6} Projects",
    top: "\u{1F3C6} Top",
    links: "\u{1F517} Links",
    channels: "\u{1F4E2} Channels",
    helpBtn: "\u2753 Help",
    lang: "\u{1F310} Language",
    aboutBtn: "\u{1F464} About me",
    langMenu: "Choose language:",
    langSet: /* @__PURE__ */ __name((l) => `Language: ${l === "ru" ? "\u{1F1F7}\u{1F1FA} Russian" : "\u{1F1EC}\u{1F1E7} English"}`, "langSet"),
    back: "\u{1F519} Back",
    notOwner: "Only the owner can use this command.",
    notConfigured: "Owner is not configured (OWNER_ID).",
    statsEmpty: "No data yet.",
    stats: /* @__PURE__ */ __name((s) => `\u{1F4CA} <b>Statistics</b>

Users: <b>${s.users}</b>
Messages: <b>${s.msgs}</b>
Today: <b>${s.today}</b>
Commands: <b>${s.cmds}</b>

By command:
${s.cmdList}

Top users:
${s.topUsers}

Referrals:
${s.refList}`, "stats"),
    searchPrompt: "Format: /search <query>\nExample: /search python",
    searchEmpty: /* @__PURE__ */ __name((q) => `Nothing found for \xAB${q}\xBB.`, "searchEmpty"),
    searchTitle: /* @__PURE__ */ __name((q) => `<b>Results for \xAB${q}\xBB:</b>`, "searchTitle"),
    topTitle: "<b>\u{1F3C6} Top projects by stars:</b>",
    about: "\u{1F464} <b>About me</b>\n\nI build bots, AI tools, Web3 and QA platforms.\nAll projects are open source on GitHub.\n\n\u{1F6E0} Stack: Python, TypeScript, Go, Rust, C++, Solidity\n\u{1F4E6} Projects: 12 repos \u2014 from AI assistants to load testing\n\u{1F4E2} Channels: @b2wmain, @b2wshitpost\n\nButtons below are my links \u{1F447}",
    broadcastPrompt: "Format: /broadcast <text>",
    broadcastDone: /* @__PURE__ */ __name((ok, fail) => `Sent: <b>${ok}</b>, failed: <b>${fail}</b>.`, "broadcastDone"),
    broadcastEmpty: "No users to broadcast to."
  }
};
var COMMANDS = [
  { command: "start", description: "\u0417\u0430\u043F\u0443\u0441\u043A" },
  { command: "projects", description: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B GitHub" },
  { command: "search", description: "\u041F\u043E\u0438\u0441\u043A \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432" },
  { command: "top", description: "\u0422\u043E\u043F \u043F\u043E \u0437\u0432\u0451\u0437\u0434\u0430\u043C" },
  { command: "links", description: "\u0412\u0441\u0435 \u0441\u0441\u044B\u043B\u043A\u0438" },
  { command: "channels", description: "Telegram-\u043A\u0430\u043D\u0430\u043B\u044B" },
  { command: "about", description: "\u041E\u0431\u043E \u043C\u043D\u0435" },
  { command: "stats", description: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430" },
  { command: "myid", description: "\u041C\u043E\u0439 ID" },
  { command: "help", description: "\u0421\u043F\u0440\u0430\u0432\u043A\u0430" }
];
var langCache = /* @__PURE__ */ new Map();
var starsCache = null;
var starsFetchedAt = 0;
async function callApi(token, method, payload) {
  const res = await fetch(`${API}/bot${token}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    console.error(`Telegram API ${method}: HTTP ${res.status}`);
    return null;
  }
  const body = await res.json();
  if (!body.ok) {
    console.error(`Telegram API ${method}: ${JSON.stringify(body)}`);
    return null;
  }
  return body.result;
}
__name(callApi, "callApi");
async function sendMessage(token, chatId, text, keyboard) {
  const payload = {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
    link_preview_options: { is_disabled: true }
  };
  if (keyboard) {
    payload.reply_markup = { inline_keyboard: keyboard };
  }
  return callApi(token, "sendMessage", payload);
}
__name(sendMessage, "sendMessage");
async function editMessage(token, chatId, messageId, text, keyboard) {
  const payload = {
    chat_id: chatId,
    message_id: messageId,
    text,
    parse_mode: "HTML",
    link_preview_options: { is_disabled: true }
  };
  if (keyboard) {
    payload.reply_markup = { inline_keyboard: keyboard };
  }
  return callApi(token, "editMessageText", payload);
}
__name(editMessage, "editMessage");
async function getLang(env, chatId) {
  if (langCache.has(chatId)) return langCache.get(chatId);
  let lang = "ru";
  try {
    const v = await env.BOT_KV.get(`lang:${chatId}`);
    if (v === "en") lang = "en";
  } catch (e) {
    console.error("getLang error:", e);
  }
  langCache.set(chatId, lang);
  return lang;
}
__name(getLang, "getLang");
async function getStars(env, ctx) {
  const now = Date.now();
  if (starsCache && now - starsFetchedAt < STARS_TTL * 1e3) return starsCache;
  let cached = null;
  try {
    cached = JSON.parse(await env.BOT_KV.get("stars"));
  } catch (e) {
    console.error("getStars KV error:", e);
  }
  if (cached && now - cached.ts < STARS_TTL * 1e3) {
    starsCache = cached.data;
    starsFetchedAt = cached.ts;
    return starsCache;
  }
  const result = {};
  await Promise.allSettled(
    RAW_PROJECTS.map(async (p) => {
      try {
        const r = await fetch(`${GH_API}/${GITHUB_USERNAME}/${p.name}`, {
          headers: { "User-Agent": "ssrjkk-bot", Accept: "application/vnd.github+json" }
        });
        if (r.ok) {
          const j = await r.json();
          result[p.name] = { stars: j.stargazers_count ?? 0 };
        }
      } catch (e) {
        console.error(`GitHub fetch ${p.name}:`, e);
      }
    })
  );
  starsCache = result;
  starsFetchedAt = now;
  if (ctx) {
    ctx.waitUntil(
      env.BOT_KV.put("stars", JSON.stringify({ ts: now, data: result }), {
        expirationTtl: STARS_TTL
      }).catch((e) => console.error("stars KV put:", e))
    );
  }
  return result;
}
__name(getStars, "getStars");
function desc(p, lang) {
  return lang === "en" && p.desc_en ? p.desc_en : p.desc;
}
__name(desc, "desc");
function projectCard(p, stars, lang) {
  const s = stars ? stars[p.name] : null;
  const starCount = s && s.stars > 0 ? ` ${s.stars}*` : "";
  return `<b>${p.name}</b> [${p.lang}]${starCount}
  ${desc(p, lang)}
  <a href="https://github.com/${GITHUB_USERNAME}/${p.name}">GitHub</a>`;
}
__name(projectCard, "projectCard");
function sortByStars(projects, stars) {
  return [...projects].sort(
    (a, b) => (stars[b.name] ? stars[b.name].stars : 0) - (stars[a.name] ? stars[a.name].stars : 0)
  );
}
__name(sortByStars, "sortByStars");
async function projectsList(env, ctx, lang, page) {
  const stars = await getStars(env, ctx);
  const sorted = RAW_PROJECTS;
  const total = sorted.length;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safe = Math.min(Math.max(page, 0), pages - 1);
  const start = safe * PAGE_SIZE;
  const lines = sorted.slice(start, start + PAGE_SIZE).map((p) => projectCard(p, stars, lang));
  return {
    text: `${LANG[lang].projectsTitle}

${lines.join("\n\n")}`,
    page: safe,
    pages
  };
}
__name(projectsList, "projectsList");
async function startText(env, ctx, lang) {
  const total = RAW_PROJECTS.length;
  let sum = 0;
  try {
    const stars = await getStars(env, ctx);
    for (const p of RAW_PROJECTS) sum += (stars[p.name] ? stars[p.name].stars : 0) || 0;
  } catch (e) {}
  if (lang === "ru") return `\u{1F44B} \u041F\u0440\u0438\u0432\u0435\u0442! \u042F \u0431\u043E\u0442 ssrjkk.\n\n\u{1F4E6} \u041F\u0440\u043E\u0435\u043A\u0442\u043E\u0432: ${total} \u00B7 \u2B50 \u0417\u0432\u0451\u0437\u0434: ${sum}\n\n\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u0438\u043B\u0438 \u043A\u043D\u043E\u043F\u043A\u0438 \u043D\u0438\u0436\u0435 \u2014 \u043F\u0440\u043E\u0435\u043A\u0442\u044B, \u0442\u043E\u043F, \u043F\u043E\u0438\u0441\u043A, \u0441\u0441\u044B\u043B\u043A\u0438.`;
  return `\u{1F44B} Hi! I'm ssrjkk bot.\n\n\u{1F4E6} Projects: ${total} \u00B7 \u2B50 Stars: ${sum}\n\nUse commands or the buttons below \u2014 projects, top, search, links.`;
}
__name(startText, "startText");
async function topText(env, ctx, lang) {
  const stars = await getStars(env, ctx);
  const medals = ["\u{1F947}", "\u{1F948}", "\u{1F949}"];
  const lines = sortByStars(RAW_PROJECTS, stars).slice(0, 3).map((p, i) => {
    const s = stars[p.name] ? stars[p.name].stars : 0;
    return `${medals[i]} <b>${p.name}</b> [${p.lang}] \u2014 ${s}*`;
  });
  return `${LANG[lang].topTitle}

${lines.join("\n")}`;
}
__name(topText, "topText");
function mainMenu(lang) {
  return [
    [
      { text: LANG[lang].projects, callback_data: "page:0" },
      { text: LANG[lang].top, callback_data: "show:top" }
    ],
    [
      { text: LANG[lang].links, callback_data: "show:links" },
      { text: LANG[lang].channels, callback_data: "show:channels" }
    ],
    [
      { text: LANG[lang].helpBtn, callback_data: "show:help" },
      { text: LANG[lang].lang, callback_data: "show:lang" }
    ],
    [{ text: LANG[lang].aboutBtn, callback_data: "show:about" }]
  ];
}
__name(mainMenu, "mainMenu");
function projectsKeyboard(lang, page, pages) {
  const rows = [];
  const nav = [];
  if (page > 0) nav.push({ text: LANG[lang].prev, callback_data: `page:${page - 1}` });
  nav.push({ text: LANG[lang].page(page + 1, pages), callback_data: "noop" });
  if (page < pages - 1) nav.push({ text: LANG[lang].next, callback_data: `page:${page + 1}` });
  rows.push(nav);
  rows.push([{ text: LANG[lang].back, callback_data: "show:menu" }]);
  return rows;
}
__name(projectsKeyboard, "projectsKeyboard");
function urlKeyboard(lang, items) {
  const rows = items.map((i) => [{ text: i.name, url: i.url }]);
  rows.push([{ text: LANG[lang].back, callback_data: "show:menu" }]);
  return rows;
}
__name(urlKeyboard, "urlKeyboard");
function langKeyboard(lang) {
  return [
    [
      { text: "\u{1F1F7}\u{1F1FA} \u0420\u0443\u0441\u0441\u043A\u0438\u0439", callback_data: "lang:ru" },
      { text: "\u{1F1EC}\u{1F1E7} English", callback_data: "lang:en" }
    ],
    [{ text: LANG[lang].back, callback_data: "show:menu" }]
  ];
}
__name(langKeyboard, "langKeyboard");
function track(env, ctx, userId, kind, value) {
  if (!userId) return;
  ctx.waitUntil(
    env.BOT_DB.prepare("INSERT INTO events (user_id, kind, value) VALUES (?, ?, ?)").bind(userId, kind, value ?? null).run().catch((e) => console.error("track error:", e))
  );
}
__name(track, "track");
async function handleMessage(env, ctx, msg) {
  const token = env.BOT_TOKEN;
  const chatId = msg.chat.id;
  const userId = msg.from ? msg.from.id : null;
  const raw = (msg.text || "").trim();
  track(env, ctx, userId, "msg");
  const cmd = raw.split(/\s+/)[0];
  if (cmd === "/start" || cmd === "/start@ssrjkk_bot") {
    const payload = raw.split(/\s+/)[1];
    const ref = payload ? payload.replace(/^ref=/, "") : null;
    if (ref) track(env, ctx, userId, "ref", ref);
    const lang2 = await getLang(env, chatId);
    await sendMessage(token, chatId, await startText(env, ctx, lang2), mainMenu(lang2));
    return;
  }
  const lang = await getLang(env, chatId);
  if (cmd === "/projects" || cmd === "/projects@ssrjkk_bot") {
    track(env, ctx, userId, "cmd", "projects");
    const { text, page, pages } = await projectsList(env, ctx, lang, 0);
    await sendMessage(token, chatId, text, projectsKeyboard(lang, page, pages));
    return;
  }
  if (cmd === "/top" || cmd === "/top@ssrjkk_bot") {
    track(env, ctx, userId, "cmd", "top");
    await sendMessage(token, chatId, await topText(env, ctx, lang));
    return;
  }
  if (cmd === "/search" || cmd === "/search@ssrjkk_bot") {
    track(env, ctx, userId, "cmd", "search");
    const q = raw.split(/\s+/).slice(1).join(" ").trim().toLowerCase();
    if (!q) {
      await sendMessage(token, chatId, LANG[lang].searchPrompt);
      return;
    }
    const stars = await getStars(env, ctx);
    const found = sortByStars(
      RAW_PROJECTS.filter(
        (p) => p.name.toLowerCase().includes(q) || (p.lang || "").toLowerCase().includes(q) || (p.desc || "").toLowerCase().includes(q) || (p.desc_en || "").toLowerCase().includes(q)
      ),
      stars
    ).slice(0, 10);
    if (!found.length) {
      await sendMessage(token, chatId, LANG[lang].searchEmpty(q));
      return;
    }
    const lines = found.map((p) => projectCard(p, stars, lang));
    await sendMessage(token, chatId, `${LANG[lang].searchTitle(q)}

${lines.join("\n\n")}`);
    return;
  }
  if (cmd === "/links" || cmd === "/links@ssrjkk_bot") {
    track(env, ctx, userId, "cmd", "links");
    await sendMessage(token, chatId, LANG[lang].linksTitle, urlKeyboard(lang, LINKS));
    return;
  }
  if (cmd === "/channels" || cmd === "/channels@ssrjkk_bot") {
    track(env, ctx, userId, "cmd", "channels");
    await sendMessage(token, chatId, LANG[lang].channelsTitle, urlKeyboard(lang, CHANNELS));
    return;
  }
  if (cmd === "/about" || cmd === "/about@ssrjkk_bot") {
    track(env, ctx, userId, "cmd", "about");
    await sendMessage(token, chatId, LANG[lang].about, urlKeyboard(lang, LINKS));
    return;
  }
  if (cmd === "/help" || cmd === "/help@ssrjkk_bot") {
    track(env, ctx, userId, "cmd", "help");
    await sendMessage(token, chatId, LANG[lang].help);
    return;
  }
  if (cmd === "/stats" || cmd === "/stats@ssrjkk_bot") {
    track(env, ctx, userId, "cmd", "stats");
    await showStats(env, ctx, chatId, lang);
    return;
  }
  if (cmd === "/myid" || cmd === "/myid@ssrjkk_bot") {
    await sendMessage(token, chatId, `Your ID: <code>${userId}</code>`);
    return;
  }
  if (cmd === "/broadcast" || cmd === "/broadcast@ssrjkk_bot") {
    track(env, ctx, userId, "cmd", "broadcast");
    await handleBroadcast(env, token, chatId, lang, raw);
    return;
  }
  if (cmd.startsWith("/")) track(env, ctx, userId, "cmd", cmd);
  await sendMessage(token, chatId, LANG[lang].unknown + LANG[lang].help);
}
__name(handleMessage, "handleMessage");
async function handleBroadcast(env, token, chatId, lang, raw) {
  const owner = env.OWNER_ID;
  if (!owner) {
    await sendMessage(token, chatId, LANG[lang].notConfigured);
    return;
  }
  if (String(chatId) !== String(owner)) {
    await sendMessage(token, chatId, LANG[lang].notOwner);
    return;
  }
  const text = raw.split(/\s+/).slice(1).join(" ").trim();
  if (!text) {
    await sendMessage(token, chatId, LANG[lang].broadcastPrompt);
    return;
  }
  const rows = await env.BOT_DB.prepare(
    "SELECT DISTINCT user_id FROM events WHERE user_id IS NOT NULL"
  ).all();
  const ids = rows.results.map((r) => r.user_id);
  if (!ids.length) {
    await sendMessage(token, chatId, LANG[lang].broadcastEmpty);
    return;
  }
  let ok = 0;
  let fail = 0;
  for (let i = 0; i < ids.length; i += 10) {
    const chunk = ids.slice(i, i + 10);
    const res = await Promise.allSettled(chunk.map((id) => sendMessage(token, id, text)));
    res.forEach((r) => {
      if (r.status === "fulfilled" && r.value) ok++;
      else fail++;
    });
  }
  await sendMessage(token, chatId, LANG[lang].broadcastDone(ok, fail));
}
__name(handleBroadcast, "handleBroadcast");
async function showStats(env, ctx, chatId, lang) {
  const token = env.BOT_TOKEN;
  const owner = env.OWNER_ID;
  if (!owner) {
    await sendMessage(token, chatId, LANG[lang].notConfigured);
    return;
  }
  if (String(chatId) !== String(owner)) {
    await sendMessage(token, chatId, LANG[lang].notOwner);
    return;
  }
  const users = await env.BOT_DB.prepare(
    "SELECT COUNT(DISTINCT user_id) c FROM events WHERE kind = 'msg'"
  ).first();
  const msgs = await env.BOT_DB.prepare(
    "SELECT COUNT(*) c FROM events WHERE kind = 'msg'"
  ).first();
  const today = await env.BOT_DB.prepare(
    "SELECT COUNT(*) c FROM events WHERE kind = 'msg' AND ts >= date('now', 'start of day')"
  ).first();
  const cmdRows = await env.BOT_DB.prepare(
    "SELECT value, COUNT(*) c FROM events WHERE kind = 'cmd' GROUP BY value ORDER BY c DESC"
  ).all();
  const userRows = await env.BOT_DB.prepare(
    "SELECT user_id, COUNT(*) c FROM events WHERE kind = 'msg' GROUP BY user_id ORDER BY c DESC LIMIT 5"
  ).all();
  const refRows = await env.BOT_DB.prepare(
    "SELECT value, COUNT(*) c FROM events WHERE kind = 'ref' GROUP BY value ORDER BY c DESC"
  ).all();
  const cmdList = cmdRows.results.length ? cmdRows.results.map((r) => `  /${r.value} \u2014 ${r.c}`).join("\n") : LANG[lang].statsEmpty;
  const topUsers = userRows.results.length ? userRows.results.map((r) => `  <code>${r.user_id}</code> \u2014 ${r.c}`).join("\n") : LANG[lang].statsEmpty;
  const refList = refRows.results.length ? refRows.results.map((r) => `  ${r.value} \u2014 ${r.c}`).join("\n") : LANG[lang].statsEmpty;
  await sendMessage(
    token,
    chatId,
    LANG[lang].stats({
      users: users ? users.c : 0,
      msgs: msgs ? msgs.c : 0,
      today: today ? today.c : 0,
      cmds: cmdRows.results.reduce((a, r) => a + r.c, 0),
      cmdList,
      topUsers,
      refList
    })
  );
}
__name(showStats, "showStats");
async function handleCallback(env, ctx, cb) {
  const token = env.BOT_TOKEN;
  const chatId = cb.message.chat.id;
  const messageId = cb.message.message_id;
  const data = cb.data || "";
  const lang = await getLang(env, chatId);
  if (data === "noop") {
    await callApi(token, "answerCallbackQuery", { callback_query_id: cb.id });
    return;
  }
  if (data.startsWith("page:")) {
    const { text, page, pages } = await projectsList(env, ctx, lang, parseInt(data.split(":")[1], 10));
    await editMessage(token, chatId, messageId, text, projectsKeyboard(lang, page, pages));
    await callApi(token, "answerCallbackQuery", { callback_query_id: cb.id });
    return;
  }
  if (data.startsWith("show:")) {
    const what = data.split(":")[1];
    let text;
    let kb;
    if (what === "menu") {
      text = LANG[lang].menu;
      kb = mainMenu(lang);
    } else if (what === "top") {
      text = await topText(env, ctx, lang);
      kb = [[{ text: LANG[lang].back, callback_data: "show:menu" }]];
    } else if (what === "links") {
      text = LANG[lang].linksTitle;
      kb = urlKeyboard(lang, LINKS);
    } else if (what === "channels") {
      text = LANG[lang].channelsTitle;
      kb = urlKeyboard(lang, CHANNELS);
    } else if (what === "about") {
      text = LANG[lang].about;
      kb = urlKeyboard(lang, LINKS);
    } else if (what === "help") {
      text = LANG[lang].help;
      kb = [[{ text: LANG[lang].back, callback_data: "show:menu" }]];
    } else if (what === "lang") {
      text = LANG[lang].langMenu;
      kb = langKeyboard(lang);
    } else {
      text = LANG[lang].menu;
      kb = mainMenu(lang);
    }
    await editMessage(token, chatId, messageId, text, kb);
    await callApi(token, "answerCallbackQuery", { callback_query_id: cb.id });
    return;
  }
  if (data.startsWith("lang:")) {
    const l = data.split(":")[1] === "en" ? "en" : "ru";
    langCache.set(chatId, l);
    ctx.waitUntil(env.BOT_KV.put(`lang:${chatId}`, l).catch((e) => console.error("lang put:", e)));
    await editMessage(token, chatId, messageId, LANG[l].langSet(l), langKeyboard(l));
    await callApi(token, "answerCallbackQuery", { callback_query_id: cb.id });
    return;
  }
}
__name(handleCallback, "handleCallback");
async function handleInline(env, query) {
  const token = env.BOT_TOKEN;
  const q = (query.query || "").toLowerCase().trim();
  const lang = query.from && query.from.language_code === "en" ? "en" : "ru";
  const stars = await getStars(env, null);
  const results = RAW_PROJECTS.filter(
    (p) => !q || p.name.toLowerCase().includes(q) || (p.lang || "").toLowerCase().includes(q) || (p.desc || "").toLowerCase().includes(q) || (p.desc_en || "").toLowerCase().includes(q)
  ).slice(0, 30).map((p, i) => ({
    type: "article",
    id: String(i),
    title: p.name,
    description: desc(p, lang).slice(0, 100),
    reply_markup: {
      inline_keyboard: [
        [{ text: "GitHub", url: `https://github.com/${GITHUB_USERNAME}/${p.name}` }]
      ]
    },
    input_message_content: {
      message_text: projectCard(p, stars, lang),
      parse_mode: "HTML",
      link_preview_options: { is_disabled: true }
    }
  }));
  await callApi(token, "answerInlineQuery", {
    inline_query_id: query.id,
    results,
    cache_time: 60,
    is_personal: true
  });
}
__name(handleInline, "handleInline");
async function setupWebhook(env, origin) {
  const webhook = await callApi(env.BOT_TOKEN, "setWebhook", {
    url: `${origin}/webhook`,
    drop_pending_updates: true,
    allowed_updates: ["message", "callback_query", "inline_query"],
    ...env.WEBHOOK_SECRET ? { secret_token: env.WEBHOOK_SECRET } : {}
  });
  const commands = await callApi(env.BOT_TOKEN, "setMyCommands", {
    commands: COMMANDS
  });
  return { webhook, commands };
}
__name(setupWebhook, "setupWebhook");
var worker_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return new Response("OK", { status: 200 });
    }
    if (url.pathname === "/setup") {
      if (!env.SETUP_KEY || url.searchParams.get("key") !== env.SETUP_KEY) {
        return new Response("Forbidden", { status: 403 });
      }
      if (!env.BOT_TOKEN) {
        return new Response("BOT_TOKEN not set", { status: 500 });
      }
      const result = await setupWebhook(env, url.origin);
      return new Response(JSON.stringify(result, null, 2), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (url.pathname !== "/webhook" || request.method !== "POST") {
      return new Response("Not found", { status: 404 });
    }
    if (!env.BOT_TOKEN) {
      return new Response("BOT_TOKEN not set", { status: 500 });
    }
    if (env.WEBHOOK_SECRET && request.headers.get("X-Telegram-Bot-Api-Secret-Token") !== env.WEBHOOK_SECRET) {
      return new Response("Forbidden", { status: 403 });
    }
    try {
      const update = await request.json();
      if (update.message && update.message.text) {
        await handleMessage(env, ctx, update.message);
      } else if (update.callback_query) {
        await handleCallback(env, ctx, update.callback_query);
      } else if (update.inline_query) {
        await handleInline(env, update.inline_query);
      }
    } catch (e) {
      console.error("Webhook error:", e);
      return new Response("Error", { status: 500 });
    }
    return new Response("OK", { status: 200 });
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
