import asyncio
import json
import logging
import os
from aiogram import Bot, Dispatcher, types, F
from aiogram.filters import CommandStart, Command
from aiogram.types import Message, InlineKeyboardMarkup, InlineKeyboardButton

BOT_TOKEN = os.environ.get("BOT_TOKEN")
if not BOT_TOKEN:
    raise SystemExit("BOT_TOKEN is not set (use env or `fly secrets set BOT_TOKEN=...`)")

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(BASE_DIR, "projects.json"), encoding="utf-8") as f:
    data = json.load(f)

GITHUB_USERNAME = data["github"]
PROJECTS = data["projects"]
CHANNELS = data["channels"]
LINKS = data["links"]

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
