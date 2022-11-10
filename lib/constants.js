/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */

const QUESTIONS = {
  cafe: "(cafe|café).*\?$",
  chupito: "(chupito|chupitos).*\?$",
  venio: "Si fueras venio",
  vino: "(vino).*\?$",
};

const RESPONSES = {
  cafe: "No puedo estoy en casa",
  chupito: "Avec trois chupitos, je fais l'amour toute la nuit",
  venio: "Fueras estao",
  vino: "Vale, pero no me eches los aposentos",
};

const COMMANDS = {
  saySomething: "(Hatar).+?(que te cuentas.\?*$|cuentate algo)*?$"
}

export { QUESTIONS, RESPONSES, COMMANDS };
