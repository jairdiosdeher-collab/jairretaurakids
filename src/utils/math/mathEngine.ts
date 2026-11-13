export type MathOperation = "suma" | "resta" | "multiplicacion" | "division";
export interface MathQuestion {
  id: string; a: number; b: number; operation: MathOperation; answer: number;
  prompt: string; hint: string; explanation: string[];
}
const symbol: Record<MathOperation, string> = { suma: "+", resta: "−", multiplicacion: "×", division: "÷" };

export function createQuestion(level: number): MathQuestion {
  const choices: MathOperation[] = level <= 1 ? ["suma"] :
    level === 2 ? ["suma", "resta"] :
    level === 3 ? ["resta", "multiplicacion"] : ["suma", "resta", "multiplicacion", "division"];
  const operation = choices[Math.floor(Math.random() * choices.length)];
  const max = level <= 1 ? 10 : level === 2 ? 20 : 12;
  let a = 1 + Math.floor(Math.random() * max);
  let b = 1 + Math.floor(Math.random() * max);
  let answer = 0;
  if (operation === "suma") answer = a + b;
  if (operation === "resta") { if (b > a) [a, b] = [b, a]; answer = a - b; }
  if (operation === "multiplicacion") { a = 2 + Math.floor(Math.random() * 10); b = 2 + Math.floor(Math.random() * 10); answer = a * b; }
  if (operation === "division") { b = 2 + Math.floor(Math.random() * 9); answer = 2 + Math.floor(Math.random() * 10); a = b * answer; }
  const explanation = operation === "suma" ? ["La suma reúne dos cantidades.", "Partimos de " + a + " y agregamos " + b + " unidades.", "El resultado es " + answer + "."] :
    operation === "resta" ? ["La resta permite saber cuánto queda.", "Comenzamos con " + a + " y quitamos " + b + ".", "El resultado es " + answer + "."] :
    operation === "multiplicacion" ? ["Multiplicar es sumar grupos iguales.", "Tenemos " + a + " grupos de " + b + " unidades.", "En total: " + answer + "."] :
    ["Dividir es repartir en grupos iguales.", "Repartimos " + a + " en " + b + " grupos.", "Cada grupo recibe " + answer + "."];
  return {
    id: String(Date.now()) + "-" + String(Math.random()),
    a, b, operation, answer, prompt: a + " " + symbol[operation] + " " + b + " = ?",
    hint: operation === "suma" ? "Cuenta hacia adelante desde el número mayor." :
      operation === "resta" ? "Empieza en el primer número y cuenta hacia atrás." :
      operation === "multiplicacion" ? "Piensa en grupos iguales o en una suma repetida." :
      "Busca qué número multiplicado por el divisor produce el total.",
    explanation
  };
}
export function checkAnswer(raw: string, expected: number): boolean {
  if (!raw.trim()) return false;
  const parsed = Number(raw.replace(",", "."));
  return Number.isFinite(parsed) && parsed === expected;
}
