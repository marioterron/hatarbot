import TelegramBot from "node-telegram-bot-api";

import { QUESTIONS, RESPONSES } from "../lib/constants";

export default async function handler(request, response) {
  try {
    const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);
    const { body } = request;

    if (body.message) {
      const {
        chat: { id },
        text,
      } = body.message;

      let message = ``;

      Object.keys(QUESTIONS).forEach((key) => {
        if (new RegExp(QUESTIONS[key], "i").test(text)) {
          message = RESPONSES[key];
        }
      });

      await bot.sendMessage(id, message, { parse_mode: "Markdown" });
    }
  } catch (error) {
    console.error("Error sending message", error.toString());
  }
  response.send("OK");
}
