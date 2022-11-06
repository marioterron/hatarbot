type Key = "cafe" | "venio";

const QUESTIONS: Record<Key, string> = {
  cafe: "[^$s]*[cafe|café]*[^$s]*[?]$",
  venio: "fueras venio",
};

const RESPONSES: Record<Key, string> = {
  cafe: "No puedo estoy en casa",
  venio: "Fueras estao",
};

export type { Key };
export { QUESTIONS, RESPONSES };
