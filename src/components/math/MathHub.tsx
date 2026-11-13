import React, { useEffect, useMemo, useState } from "react";
import { checkAnswer, createQuestion, type MathQuestion } from "../../utils/math/mathEngine";

type Props = { onClose: () => void };
type Progress = { correct: number; attempts: number; bestStreak: number };
const STORAGE_KEY = "jair-math-kids-progress-v1";
const initialProgress: Progress = { correct: 0, attempts: 0, bestStreak: 0 };

export function MathHub({ onClose }: Props) {
  const [level, setLevel] = useState(1);
  const [question, setQuestion] = useState<MathQuestion>(() => createQuestion(1));
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<"idle" | "correct" | "incorrect">("idle");
  const [showHint, setShowHint] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [streak, setStreak] = useState(0);
  const [progress, setProgress] = useState<Progress>(() => {
    try { const saved = localStorage.getItem(STORAGE_KEY); return saved ? { ...initialProgress, ...JSON.parse(saved) } : initialProgress; }
    catch { return initialProgress; }
  });
  useEffect(() => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch { /* almacenamiento local no disponible */ } }, [progress]);
  const accuracy = useMemo(() => progress.attempts ? Math.round(progress.correct / progress.attempts * 100) : 0, [progress]);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (feedback !== "idle" || !answer.trim()) return;
    const correct = checkAnswer(answer, question.answer);
    setProgress((p) => ({ correct: p.correct + (correct ? 1 : 0), attempts: p.attempts + 1, bestStreak: Math.max(p.bestStreak, correct ? streak + 1 : 0) }));
    setFeedback(correct ? "correct" : "incorrect");
    setStreak((s) => correct ? s + 1 : 0);
  }
  function next() {
    setQuestion(createQuestion(level)); setAnswer(""); setFeedback("idle"); setShowHint(false); setShowSteps(false);
  }
  function changeLevel(n: number) {
    setLevel(n); setQuestion(createQuestion(n)); setAnswer(""); setFeedback("idle"); setShowHint(false); setShowSteps(false);
  }

  const levels = [
    { id: 1, name: "Comienzo", detail: "Sumas sencillas" },
    { id: 2, name: "Explorador", detail: "Suma y resta" },
    { id: 3, name: "Constructor", detail: "Multiplicación" },
    { id: 4, name: "Desafío", detail: "Cuatro operaciones" }
  ];

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/90 p-3 sm:p-6" role="dialog" aria-modal="true" aria-label="Jair Math Kids">
      <div className="mx-auto min-h-full max-w-5xl overflow-hidden rounded-3xl bg-slate-50 shadow-2xl">
        <header className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 px-5 py-5 text-white sm:px-8">
          <div><p className="text-xs font-bold uppercase tracking-widest text-indigo-200">JAIRRESTAURAKIDS presenta</p><h1 className="mt-1 text-2xl font-black sm:text-3xl">🧮 JAIR MATH KIDS</h1><p className="mt-1 text-sm text-indigo-100">Aprender matemáticas paso a paso y a tu ritmo</p></div>
          <button onClick={onClose} className="rounded-xl border border-white/30 px-4 py-2 text-sm font-bold hover:bg-white/15">✕ Cerrar</button>
        </header>
        <main className="grid gap-5 p-4 sm:p-7 lg:grid-cols-[1fr_280px]">
          <section className="space-y-5">
            <div className="rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm">
              <h2 className="mb-3 font-extrabold text-slate-800">Elige tu nivel de práctica</h2>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {levels.map((item) => <button key={item.id} onClick={() => changeLevel(item.id)} className={"rounded-xl border p-3 text-left transition " + (level === item.id ? "border-indigo-600 bg-indigo-50 ring-2 ring-indigo-200" : "border-slate-200 bg-white hover:border-indigo-300")}><span className="block text-sm font-extrabold text-slate-800">{item.name}</span><span className="mt-1 block text-xs text-slate-500">{item.detail}</span></button>)}
              </div>
            </div>
            <div className="rounded-3xl border border-violet-100 bg-white p-5 shadow-sm sm:p-8">
              <div className="flex items-center justify-between gap-3"><span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-800">RETO DE HOY</span><span className="text-sm font-semibold text-slate-500">Racha: {streak} ⭐</span></div>
              <p className="mt-7 text-center text-sm font-semibold text-slate-500">Resuelve con calma:</p>
              <div className="my-5 text-center text-4xl font-black tracking-wide text-indigo-800 sm:text-6xl">{question.prompt}</div>
              <form onSubmit={submit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="math-answer">Tu respuesta</label>
                <input id="math-answer" value={answer} onChange={(e) => setAnswer(e.target.value)} inputMode="decimal" autoComplete="off" placeholder="Escribe tu respuesta" disabled={feedback !== "idle"} className="min-w-0 flex-1 rounded-xl border-2 border-slate-200 px-4 py-3 text-center text-xl font-bold text-slate-800 outline-none focus:border-indigo-500 disabled:bg-slate-100" />
                <button type="submit" disabled={!answer.trim() || feedback !== "idle"} className="rounded-xl bg-indigo-700 px-6 py-3 font-bold text-white hover:bg-indigo-800 disabled:opacity-40">Comprobar</button>
              </form>
              {feedback === "correct" && <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center" role="status"><p className="text-lg font-black text-emerald-800">¡Muy bien! Respuesta correcta 🎉</p><p className="mt-1 text-sm text-emerald-700">Has avanzado un paso más. ¡Sigue aprendiendo!</p></div>}
              {feedback === "incorrect" && <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center" role="status"><p className="font-black text-amber-900">¡No pasa nada! Aprender también es intentarlo.</p><p className="mt-1 text-sm text-amber-800">La respuesta correcta es {question.answer}. Revisa la pista y los pasos.</p></div>}
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <button onClick={() => setShowHint(!showHint)} className="rounded-xl border border-indigo-200 px-4 py-2 text-sm font-bold text-indigo-800 hover:bg-indigo-50">{showHint ? "Ocultar pista" : "💡 Necesito una pista"}</button>
                <button onClick={() => setShowSteps(!showSteps)} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50">{showSteps ? "Ocultar explicación" : "📘 Ver explicación"}</button>
                {feedback !== "idle" && <button onClick={next} className="rounded-xl bg-emerald-600 px-5 py-2 text-sm font-bold text-white hover:bg-emerald-700">Siguiente ejercicio →</button>}
              </div>
              {showHint && <div className="mt-4 rounded-xl bg-sky-50 p-4 text-sm text-sky-900"><strong>Pista:</strong> {question.hint}</div>}
              {showSteps && <ol className="mt-4 list-inside list-decimal space-y-2 rounded-xl bg-slate-100 p-4 text-sm text-slate-700">{question.explanation.map((step, i) => <li key={i}>{step}</li>)}</ol>}
            </div>
          </section>
          <aside className="space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="font-extrabold text-slate-800">Mi avance</h2>
              <div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl bg-emerald-50 p-3"><p className="text-2xl font-black text-emerald-700">{progress.correct}</p><p className="text-xs font-semibold text-emerald-800">Correctas</p></div><div className="rounded-xl bg-indigo-50 p-3"><p className="text-2xl font-black text-indigo-700">{progress.attempts}</p><p className="text-xs font-semibold text-indigo-800">Intentos</p></div></div>
              <div className="mt-3 rounded-xl bg-amber-50 p-3"><p className="text-2xl font-black text-amber-700">{progress.bestStreak} ⭐</p><p className="text-xs font-semibold text-amber-800">Mejor racha</p></div>
              <div className="mt-4"><div className="mb-1 flex justify-between text-xs font-bold text-slate-600"><span>Precisión</span><span>{accuracy}%</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: accuracy + "%" }} /></div></div>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">El avance se guarda en este dispositivo. No necesitas crear una cuenta.</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 p-5"><h3 className="font-extrabold text-amber-950">🌱 Recuerda</h3><p className="mt-2 text-sm leading-relaxed text-amber-900">Cada persona aprende a su propio ritmo. Puedes pedir una pista, revisar la explicación y volver a intentarlo sin afán.</p></div>
          </aside>
        </main>
        <footer className="border-t border-slate-200 px-5 py-4 text-center text-xs text-slate-500">JAIR MATH KIDS · Práctica educativa local · Sin registro obligatorio</footer>
      </div>
    </div>
  );
}
