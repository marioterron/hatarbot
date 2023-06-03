/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */

const COMMANDS = {
  saySomething:
    "Que pasa (chavales|jais)?|Klk (chavales|jais)?|Que os contais?",
};

const QUESTIONS = {
  cafe: "(cafe|café).*?$",
  chupito: "(chupito|chupitos).*?$",
  venio: "Si fueras venio",
  vino: "(vino).*?$",
};

const RANDOM_RESPONSES = [
  "A quien madruga un calvo le ayuda",
  "Por la mañana el tiempo es oro pero por la tarde es plata",
  "Si apoya y espera, se la traga entera",
  "Eso es pasado? Qué pasado? Pasado antiguo?",
  "Tengo una boca pequeña a veces pero buena desencajación",
];

const RESPONSES = {
  cafe: "No puedo estoy en casa",
  chupito: "Avec trois chupitos, je fais l'amour toute la nuit",
  venio: "Fueras estao",
  vino: "Vale, pero no me eches los aposentos",
};

export { COMMANDS, QUESTIONS, RANDOM_RESPONSES, RESPONSES };
