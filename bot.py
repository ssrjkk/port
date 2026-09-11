import asyncio
import logging
import os
from aiogram import Bot, Dispatcher, types, F
from aiogram.filters import CommandStart, Command
from aiogram.types import Message, InlineKeyboardMarkup, InlineKeyboardButton

BOT_TOKEN = os.environ.get("BOT_TOKEN", "8540301462:AAGFEe9oMEhCkJrlcEOjNvvslAtsUx7lmw8")

GITHUB_USERNAME = "ssrjkk"

PROJECTS = [
    {
        "name": "raven",
        "desc": "Self-hosted AI-ассистент для корпоративного использования. Подключается к мессенджерам (TG, Slack, Discord), умеет RAG по базам знаний, мониторинг, кодинг и управление ролями (RBAC). Все данные остаются на твоём сервере.\nСтек: Python, FastAPI, TypeScript, React, Go, Rust, Ollama, PostgreSQL",
        "lang": "Python, TS, Go, Rust",
        "stars": 3,
    },
    {
        "name": "claude-skills",
        "desc": "Библиотека из 21 skilla для Claude Code, OpenCode, Cursor и Windsurf. Каждый skill — готовая инструкция для AI-агента по конкретной задаче (тесты, деплой, ревью кода). Билингвальный (EN + RU), Python SDK + CLI, 100% тестовое покрытие.\nСтек: Python, pytest, CI/CD",
        "lang": "Python",
        "stars": 1,
    },
    {
        "name": "mobius",
        "desc": "Универсальный фреймворк для автоматизации тестирования мобильных приложений (Android/iOS). Строится на Appium 2.x с pytest. Есть параллельный запуск, Screen Object Model с защитой от StaleElement и 20+ встроенных утилит.\nСтек: Python, Appium 2.x, pytest",
        "lang": "Python",
        "stars": 0,
    },
    {
        "name": "cppload-workflow",
        "desc": "Enterprise-платформа для нагрузочного тестирования. Ядро написано на C++20 и выдаёт 50k+ RPS. Встроены OAuth2, Vault для секретов, OTLP для метрик и Helm-чарты для деплоя в Kubernetes.\nСтек: C++20, OAuth2, Vault, OTLP, Helm, Kubernetes",
        "lang": "C++",
        "stars": 0,
    },
    {
        "name": "qa-helper",
        "desc": "Набор утилит для QA-инженера: автогенерация тест-кейсов из документации, форматирование отчётов, интеграция с Allure и CI/CD-пайплайнами. Убирает рутину из ежедневной работы.\nСтек: Python, pytest, Allure, Docker, GitHub Actions",
        "lang": "Python",
        "stars": 0,
    },
    {
        "name": "bothive",
        "desc": "Telegram-бот на базе AI для автоматизации бизнес-процессов. Поддерживает чат-боты с клиентами, интеграции с CRM и базами данных, аналитику по диалогам. Быстрый запуск и кастомизация под задачи.\nСтек: Python, aiogram, OpenAI/Ollama, PostgreSQL",
        "lang": "Python",
        "stars": 0,
    },
    {
        "name": "noema",
        "desc": "Платформа для оркестрации AI-моделей. Управление промптами как кодом, цепочки (chains) из нескольких моделей, автоматический мониторинг качества и логирование всех запросов.\nСтек: Python, FastAPI, LangChain, Redis, PostgreSQL",
        "lang": "Python",
        "stars": 0,
    },
    {
        "name": "tippy",
        "desc": "Telegram-бот для чаевых и донатов в криптовалюте. Моментальные переводы между пользователями, уведомления в канал, интеграция с популярными криптокошельками.\nСтек: Python, aiogram, Bitcoin/Ethereum API",
        "lang": "Python",
        "stars": 0,
    },
]

CHANNELS = [
    {"name": "B2W Main", "url": "https://t.me/b2wmain"},
    {"name": "B2W Shitpost", "url": "https://t.me/b2wshitpost"},
]

LINKS = [
    {"name": "GitHub", "url": f"https://github.com/{GITHUB_USERNAME}"},
    {"name": "Telegram", "url": "https://t.me/ssrjkk"},
    {"name": "Tippy on Base", "url": "https://t.me/tippy_on_base_bot"},
    {"name": "ssrjkk_bot", "url": "https://t.me/ssrjkk_bot"},
]

logging.basicConfig(level=logging.INFO)
bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()


def projects_text():
    lines = []
    for p in PROJECTS:
        stars = f" {p['stars']}*" if p["stars"] else ""
        lines.append(
            f"<b>{p['name']}</b> [{p['lang']}]{stars}\n"
            f"  {p['desc']}\n"
            f"  <a href=\"https://github.com/{GITHUB_USERNAME}/{p['name']}\">GitHub</a>"
        )
    return "\n\n".join(lines)


@dp.message(CommandStart())
async def cmd_start(message: Message):
    kb = InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="GitHub", url=f"https://github.com/{GITHUB_USERNAME}")],
            [InlineKeyboardButton(text="Telegram", url="https://t.me/ssrjkk")],
        ]
    )
    await message.answer(
        "Привет! Я бот ssrjkk.\n\n"
        "Используй команды:\n"
        "/projects - мои проекты на GitHub\n"
        "/links - все ссылки\n"
        "/channels - Telegram-каналы\n"
        "/help - помощь",
        reply_markup=kb,
    )


@dp.message(Command("projects"))
async def cmd_projects(message: Message):
    await message.answer(f"<b>Мои проекты:</b>\n\n{projects_text()}", parse_mode="HTML")


@dp.message(Command("links"))
async def cmd_links(message: Message):
    kb = InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text=l["name"], url=l["url"])] for l in LINKS
        ]
    )
    await message.answer("Все ссылки:", reply_markup=kb)


@dp.message(Command("channels"))
async def cmd_channels(message: Message):
    kb = InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text=c["name"], url=c["url"])] for c in CHANNELS
        ]
    )
    await message.answer("Telegram-каналы:", reply_markup=kb)


@dp.message(Command("help"))
async def cmd_help(message: Message):
    await message.answer(
        "/start - запуск\n"
        "/projects - проекты GitHub\n"
        "/links - ссылки\n"
        "/channels - каналы\n"
        "/help - эта справка"
    )


async def main():
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
