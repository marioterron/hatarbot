import * as dotenv from "dotenv";
import { Context, Telegraf } from "telegraf";

import {
  COMMANDS,
  KeyQuestion,
  QUESTIONS,
  RANDOM_RESPONSES,
  RESPONSES,
} from "./constants";

dotenv.config();

const bot = new Telegraf<Context>(process.env.BOT_TOKEN || "");

bot.start((ctx) => {
  const welcomeMessage = `Hola chavales como estamos? Yo estoy un poco triste ☹`;
  ctx.reply(welcomeMessage);
});

Object.keys(QUESTIONS).forEach((key) => {
  bot.hears(new RegExp(key, "i"), (ctx) =>
    ctx.reply(RESPONSES[key as KeyQuestion])
  );
});

bot.hears(new RegExp(COMMANDS.saySomething, "i"), (ctx) =>
  ctx.reply(
    RANDOM_RESPONSES[Math.floor(Math.random() * RANDOM_RESPONSES.length)]
  )
);

bot.launch();
