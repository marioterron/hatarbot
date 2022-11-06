import * as dotenv from "dotenv";
import { Context, Telegraf } from "telegraf";

import type { Key } from "./constants";
import { QUESTIONS, RESPONSES } from "./constants";

dotenv.config();

const bot = new Telegraf<Context>(process.env.BOT_TOKEN || "");

bot.start((ctx) => {
  const welcomeMessage = `Hola chavales como estamos? Yo estoy un poco triste ☹`;
  ctx.reply(welcomeMessage);
});

Object.keys(QUESTIONS).forEach((key) => {
  bot.hears(new RegExp(key, "i"), (ctx) => ctx.reply(RESPONSES[key as Key]));
});

bot.launch();
