import TelegramBot from "node-telegram-bot-api";
import {
  COMMANDS,
  QUESTIONS,
  RANDOM_RESPONSES,
  RESPONSES,
} from "../lib/constants";

export default async function handler(request, response) {
  try {
    const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);
    const { body } = request;

    if (body.message) {
      const {
        chat: { id },
        text,
      } = body.message;

      const message = Object.keys(QUESTIONS).reduce((previous, current) => {
        if (new RegExp(QUESTIONS[current], "i").test(text)) {
          return `${RESPONSES[current]} `;
        }
        return previous;
      }, "");

      if (new RegExp(COMMANDS.saySomething, "i").test(text)) {
        await bot.sendMessage(
          id,
          RANDOM_RESPONSES[Math.random(0, RANDOM_RESPONSES.length)],
          {
            parse_mode: "Markdown",
          }
        );
      } else {
        await bot.sendMessage(id, message, { parse_mode: "Markdown" });
      }
    }
  } catch (error) {
    console.error("Error sending message", error.toString());
  }
  response.send("OK");
}
