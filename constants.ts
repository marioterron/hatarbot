type KeyQuestion = "cafe" | "venio";
type KeyCommand = "saySomething";

const COMMANDS: Record<KeyCommand, RegExp> = {
  saySomething:
    /Que pasa (chavales|jais)\?|Klk (chavales|jais)\?|Que os contais\?/,
};

const QUESTIONS: Record<KeyQuestion, string> = {
  cafe: "[^$s]*[cafe|café]*[^$s]*[?]$",
  venio: "fueras venio",
};

const RESPONSES: Record<KeyQuestion, string> = {
  cafe: "No puedo estoy en casa",
  venio: "Fueras estao",
};

const RANDOM_RESPONSES: string[] = [
  "A quien madruga un calvo le ayuda",
  "Por la mañana el tiempo es oro pero por la tarde es plata",
  "Si apoya y espera, se la traga entera",
  "Eso es pasado? Qué pasado? Pasado antiguo?",
  "Tengo una boca pequeña a veces pero buena desencajación",
];

export type { KeyCommand, KeyQuestion };
export { COMMANDS, QUESTIONS, RANDOM_RESPONSES, RESPONSES };
