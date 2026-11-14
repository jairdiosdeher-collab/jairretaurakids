import React, { useState, useMemo } from 'react';
import {
  MathTopicId,
  MathLevel,
  MathExercise,
  MathProgressState,
  MathVisualDiagram
} from '../../types/game';
import {
  MATH_TOPICS,
  getExercisesForTopic,
  generateExtraMathExercise
} from '../../data/mathExercises';
import { audioService } from '../../services/audioService';
import mathStudioImg from '../../assets/images/math_smart_studio_1794688256069.jpg';
import {
  Calculator,
  CheckCircle2,
  Lightbulb,
  Volume2,
  ArrowRight,
  RefreshCw,
  Sparkles,
  BookOpen,
  Award,
  X,
  HelpCircle
} from 'lucide-react';

interface MathStudioModalProps {
  mathProgress: MathProgressState;
  initialTopicId?: MathTopicId;
  onRecordAttempt: (topicId: MathTopicId, exerciseId: string, isCorrect: boolean, level: MathLevel) => void;
  onClose: () => void;
}

const MathDiagramView: React.FC<{ diagram: MathVisualDiagram }> = ({ diagram }) => {
  if (diagram.kind === 'fraction_bar') {
    const segments = Array.from({ length: diagram.denominator }, (_, idx) => idx < diagram.numerator);
    return (
      <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
        <div className="text-xs font-bold text-rose-900">
          Representación visual: {diagram.label || `${diagram.numerator}/${diagram.denominator}`}
        </div>
        <div className="flex w-full h-11 rounded-xl overflow-hidden border-2 border-rose-400 bg-white">
          {segments.map((filled, idx) => (
            <div
              key={idx}
              className={`flex-1 flex items-center justify-center text-xs font-extrabold border-r last:border-r-0 border-rose-300 ${
                filled ? 'bg-rose-500 text-white' : 'bg-white text-slate-400'
              }`}
            >
              1/{diagram.denominator}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (diagram.kind === 'geometry_shape') {
    return (
      <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex flex-col sm:flex-row items-center gap-4">
        <svg width="160" height="108" viewBox="0 0 160 108" className="shrink-0" aria-hidden="true">
          {diagram.shape === 'square' && (
            <>
              <rect
                x="44"
                y="16"
                width="72"
                height="72"
                rx="4"
                fill={diagram.highlight === 'area' ? '#c7d2fe' : '#eef2ff'}
                stroke="#4f46e5"
                strokeWidth="3.5"
              />
              <text x="80" y="102" textAnchor="middle" fontSize="11" fontWeight="700" fill="#312e81">
                {diagram.dimensions[0]}
              </text>
              <text x="124" y="56" fontSize="11" fontWeight="700" fill="#312e81">
                {diagram.dimensions[1] || diagram.dimensions[0]}
              </text>
            </>
          )}
          {diagram.shape === 'rectangle' && (
            <>
              <rect
                x="20"
                y="18"
                width="104"
                height="62"
                rx="4"
                fill={diagram.highlight === 'area' ? '#c7d2fe' : '#eef2ff'}
                stroke="#4f46e5"
                strokeWidth="3.5"
              />
              <text x="72" y="96" textAnchor="middle" fontSize="11" fontWeight="700" fill="#312e81">
                Base: {diagram.dimensions[0]}
              </text>
              <text x="130" y="52" fontSize="10" fontWeight="700" fill="#312e81">
                {diagram.dimensions[1]}
              </text>
            </>
          )}
          {diagram.shape === 'triangle' && (
            <>
              <polygon
                points="80,14 24,84 136,84"
                fill={diagram.highlight === 'area' ? '#c7d2fe' : '#eef2ff'}
                stroke="#4f46e5"
                strokeWidth="3.5"
              />
              <line x1="80" y1="14" x2="80" y2="84" stroke="#4338ca" strokeDasharray="4 3" strokeWidth="2" />
              <text x="80" y="100" textAnchor="middle" fontSize="10" fontWeight="700" fill="#312e81">
                {diagram.dimensions[0]}
              </text>
              <text x="86" y="56" fontSize="10" fontWeight="700" fill="#312e81">
                {diagram.dimensions[1]}
              </text>
            </>
          )}
        </svg>
        <div className="text-xs text-indigo-950 space-y-1">
          <div className="font-extrabold">Esquema geométrico</div>
          <div>
            {diagram.highlight === 'perimeter'
              ? 'El contorno marcado en azul oscuro representa el perímetro.'
              : 'La superficie sombreada representa el área interior.'}
          </div>
        </div>
      </div>
    );
  }

  if (diagram.kind === 'ruler_measure') {
    const maxMark = Math.max(12, diagram.endCm + 1);
    const marks = Array.from({ length: maxMark + 1 }, (_, i) => i);
    const startPct = (diagram.startCm / maxMark) * 100;
    const widthPct = ((diagram.endCm - diagram.startCm) / maxMark) * 100;

    return (
      <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200 space-y-3">
        <div className="text-xs font-bold text-orange-950">
          Regla graduada en {diagram.unit}
        </div>
        <div className="relative h-6 w-full">
          <div
            className="absolute top-1 h-4 rounded-full bg-emerald-600 border border-emerald-800 shadow-xs"
            style={{ left: `${startPct}%`, width: `${widthPct}%` }}
            title={`Desde ${diagram.startCm} hasta ${diagram.endCm} ${diagram.unit}`}
          />
        </div>
        <div className="relative bg-amber-100 border-2 border-amber-400 rounded-xl px-2 py-3">
          <div className="flex justify-between items-start text-[11px] font-bold text-amber-950 tabular-nums">
            {marks.map((m) => (
              <div key={m} className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-amber-800 mb-1" />
                <span>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (diagram.kind === 'number_groups') {
    const groupsArr = Array.from({ length: Math.min(diagram.groups, 6) }, (_, g) => g);
    return (
      <div className="p-4 rounded-2xl bg-violet-50/70 border border-violet-200 space-y-2">
        <div className="text-xs font-bold text-violet-950">
          {diagram.operation === 'divide'
            ? `Reparto en ${diagram.groups} grupos iguales`
            : `${diagram.groups} grupos visuales`}
        </div>
        <div className="flex flex-wrap gap-2.5">
          {groupsArr.map((g) => (
            <div
              key={g}
              className="px-3 py-2 rounded-xl bg-white border border-violet-200 flex flex-wrap gap-1.5 max-w-[140px]"
            >
              {Array.from({ length: Math.min(diagram.perGroup, 10) }, (_, idx) => (
                <span key={idx} className="w-3 h-3 rounded-full bg-violet-500 inline-block" />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

const normalizeAnswer = (val: string): string => {
  return val.trim().toLowerCase().replace(',', '.').replace(/\s+/g, '');
};

export const MathStudioModal: React.FC<MathStudioModalProps> = ({
  mathProgress,
  initialTopicId = 'sumas',
  onRecordAttempt,
  onClose
}) => {
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState<MathTopicId>(initialTopicId);
  const [selectedLevel, setSelectedLevel] = useState<MathLevel>(1);
  const [customExercise, setCustomExercise] = useState<MathExercise | null>(null);

  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showExample, setShowExample] = useState<boolean>(true);
  const [feedbackState, setFeedbackState] = useState<'idle' | 'correct' | 'needs_help'>('idle');

  const activeTopic = useMemo(
    () => MATH_TOPICS.find((t) => t.id === selectedTopicId) || MATH_TOPICS[0],
    [selectedTopicId]
  );

  const curatedExercise = useMemo(() => {
    const list = getExercisesForTopic(selectedTopicId, selectedLevel);
    return list[0] || getExercisesForTopic(selectedTopicId)[0];
  }, [selectedTopicId, selectedLevel]);

  const currentExercise = customExercise || curatedExercise;
  const topicProg = mathProgress[selectedTopicId];

  const handleSelectTopic = (topicId: MathTopicId) => {
    audioService.playClick();
    setSelectedTopicId(topicId);
    const unlocked = mathProgress[topicId]?.unlockedLevel || 1;
    setSelectedLevel(unlocked);
    setCustomExercise(null);
    setUserAnswer('');
    setShowHint(false);
    setFeedbackState('idle');
  };

  const handleSelectLevel = (level: MathLevel) => {
    audioService.playClick();
    setSelectedLevel(level);
    setCustomExercise(null);
    setUserAnswer('');
    setShowHint(false);
    setFeedbackState('idle');
  };

  const handleGenerateExtra = () => {
    audioService.playClick();
    const extra = generateExtraMathExercise(selectedTopicId, selectedLevel);
    setCustomExercise(extra);
    setUserAnswer('');
    setShowHint(false);
    setFeedbackState('idle');
  };

  const handleCheckAnswer = (e?: React.FormEvent, choiceOverride?: string) => {
    if (e) e.preventDefault();
    const raw = choiceOverride !== undefined ? choiceOverride : userAnswer;
    if (!raw.trim()) return;

    const normalizedUser = normalizeAnswer(raw);
    const validSet = new Set([
      normalizeAnswer(currentExercise.correctAnswer),
      ...(currentExercise.acceptedAnswers || []).map(normalizeAnswer)
    ]);

    const isCorrect = validSet.has(normalizedUser);
    onRecordAttempt(selectedTopicId, currentExercise.id, isCorrect, selectedLevel);

    if (isCorrect) {
      audioService.playSuccess();
      setFeedbackState('correct');
    } else {
      audioService.playClick();
      setFeedbackState('needs_help');
    }
  };

  const handleNextStep = () => {
    audioService.playStationAdvance();
    if (selectedLevel < 3) {
      setSelectedLevel((prev) => (prev + 1) as MathLevel);
      setCustomExercise(null);
    } else {
      setCustomExercise(generateExtraMathExercise(selectedTopicId, selectedLevel));
    }
    setUserAnswer('');
    setShowHint(false);
    setFeedbackState('idle');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 flex items-center justify-center p-2 sm:p-6">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[93vh]">
        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-teal-800 via-sky-900 to-slate-900 text-white shrink-0 overflow-hidden">
          {!heroImgFailed && (
            <img
              src={mathStudioImg}
              alt="Mesa educativa de Matemáticas Inteligentes con bloques geométricos y fracciones"
              referrerPolicy="no-referrer"
              onError={() => setHeroImgFailed(true)}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          )}
          <div className="relative z-10 px-5 sm:px-7 py-5 flex items-center justify-between gap-4 bg-gradient-to-r from-slate-900/85 via-slate-900/65 to-transparent">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-teal-500/25 border border-teal-300/35 flex items-center justify-center text-teal-200 shrink-0">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Matemáticas Inteligentes
                </h2>
                <p className="text-xs sm:text-sm text-sky-100">
                  Aprende el procedimiento paso a paso con ejemplos resueltos y práctica progresiva sin conexión
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                audioService.stopSpeaking();
                onClose();
              }}
              aria-label="Cerrar Matemáticas Inteligentes"
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Workspace */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 bg-slate-50/70">
          {/* Sidebar: 10 Math Topics */}
          <aside className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                10 Rutas de Aprendizaje
              </h3>
              <span className="text-[11px] font-bold text-teal-700">100% Offline</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-2 gap-2">
              {MATH_TOPICS.map((topic) => {
                const prog = mathProgress[topic.id];
                const isSelected = topic.id === selectedTopicId;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => handleSelectTopic(topic.id)}
                    className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between min-h-[78px] ${
                      isSelected
                        ? 'border-teal-600 bg-teal-50/70 ring-2 ring-teal-500/20 shadow-xs'
                        : 'border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: topic.color }}
                      />
                      <span className="text-[11px] font-bold text-slate-500 tabular-nums">
                        {prog?.correct || 0} ✓
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug mt-1">
                      {topic.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Learning Canvas: Explanation + Example + Interactive Exercise */}
          <section className="lg:col-span-8 p-4 sm:p-6 space-y-5">
            {/* Topic Header & Progressive Level Selector */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
              <div>
                <div className="text-xs font-bold text-teal-700">
                  Tema activo · Nivel alcanzado {topicProg?.unlockedLevel || 1}/3
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {activeTopic.name}: {currentExercise.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{activeTopic.shortDescription}</p>
              </div>

              {/* 3 Progressive Levels */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl shrink-0">
                {([1, 2, 3] as MathLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => handleSelectLevel(lvl)}
                    className={`px-3 py-2 rounded-lg text-xs font-extrabold transition-colors whitespace-nowrap ${
                      selectedLevel === lvl
                        ? 'bg-teal-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Nivel {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* 1. Explicación Sencilla & 2. Ejemplo Resuelto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2.5 shadow-xs">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-sky-800">
                    <BookOpen className="w-4 h-4 text-sky-600" />
                    <span>1. Explicación sencilla</span>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      audioService.speak(
                        `${currentExercise.conceptExplanation}. Problema: ${currentExercise.question}`
                      )
                    }
                    className="p-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 transition-colors"
                    title="Escuchar explicación y ejercicio"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {currentExercise.conceptExplanation}
                </p>
              </div>

              <div className="bg-amber-50/60 rounded-2xl border border-amber-200 p-5 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-900">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>2. Ejemplo resuelto</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowExample((prev) => !prev)}
                    className="text-[11px] font-bold text-amber-800 underline"
                  >
                    {showExample ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>
                {showExample ? (
                  <div className="space-y-2 text-xs sm:text-sm text-amber-950">
                    <div className="font-bold">{currentExercise.workedExample.problem}</div>
                    <ol className="list-decimal list-inside space-y-1 text-xs text-slate-700">
                      {currentExercise.workedExample.steps.map((st, idx) => (
                        <li key={idx}>{st}</li>
                      ))}
                    </ol>
                    <div className="text-xs font-extrabold text-amber-900 pt-1">
                      Resultado del ejemplo: {currentExercise.workedExample.result}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-amber-800">
                    Ejemplo oculto para ponerte a prueba. Puedes abrirlo cuando lo necesites.
                  </p>
                )}
              </div>
            </div>

            {/* 3. Ejercicio Interactivo */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-teal-800">
                  3. Tu turno · Ejercicio interactivo
                </span>
                <button
                  type="button"
                  onClick={handleGenerateExtra}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Generar práctica extra</span>
                </button>
              </div>

              <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {currentExercise.question}
              </p>

              {/* Dynamic Visual Diagram */}
              {currentExercise.visualDiagram && (
                <MathDiagramView diagram={currentExercise.visualDiagram} />
              )}

              {/* Hint Box */}
              <div>
                <button
                  type="button"
                  onClick={() => {
                    audioService.playClick();
                    setShowHint((prev) => !prev);
                  }}
                  className="text-xs font-bold text-violet-700 hover:text-violet-900 flex items-center gap-1.5"
                >
                  <Lightbulb className="w-4 h-4" />
                  <span>{showHint ? 'Ocultar pista' : '¿Necesitas una pista para empezar?'}</span>
                </button>
                {showHint && (
                  <div className="mt-2 p-3.5 rounded-xl bg-violet-50 border border-violet-200 text-xs sm:text-sm text-violet-950">
                    {currentExercise.hint}
                  </div>
                )}
              </div>

              {/* Answer Controls */}
              {currentExercise.answerType === 'choice' && currentExercise.choices ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  {currentExercise.choices.map((ch) => {
                    const isPicked = userAnswer === ch;
                    return (
                      <button
                        key={ch}
                        type="button"
                        onClick={() => {
                          setUserAnswer(ch);
                          handleCheckAnswer(undefined, ch);
                        }}
                        className={`py-4 px-4 rounded-2xl border-2 text-base font-extrabold transition-all min-h-[56px] ${
                          isPicked && feedbackState === 'correct'
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                            : isPicked && feedbackState === 'needs_help'
                            ? 'bg-amber-50 border-amber-500 text-amber-900'
                            : 'bg-slate-50 hover:bg-teal-50 border-slate-200 hover:border-teal-400 text-slate-900'
                        }`}
                      >
                        {ch}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <form onSubmit={handleCheckAnswer} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                  <div className="flex items-center gap-2 flex-1">
                    <input
                      type="text"
                      inputMode="decimal"
                      value={userAnswer}
                      onChange={(e) => {
                        setUserAnswer(e.target.value);
                        if (feedbackState !== 'idle') setFeedbackState('idle');
                      }}
                      placeholder="Escribe tu respuesta aquí..."
                      aria-label="Respuesta matemática"
                      className="flex-1 px-4 py-3.5 rounded-2xl border-2 border-slate-300 bg-slate-50 focus:bg-white focus:border-teal-600 focus:outline-none text-base font-extrabold text-slate-900 tabular-nums"
                    />
                    {currentExercise.unitLabel && (
                      <span className="text-sm font-bold text-slate-600 whitespace-nowrap px-2">
                        {currentExercise.unitLabel}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={!userAnswer.trim()}
                    className="px-6 py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-700 disabled:opacity-40 text-white font-extrabold text-sm shadow-sm transition-colors whitespace-nowrap min-h-[52px]"
                  >
                    Comprobar procedimiento
                  </button>
                </form>
              )}

              {/* Positive Feedback */}
              {feedbackState === 'correct' && (
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>¡Respuesta correcta!</span>
                  </div>
                  <p className="text-sm text-emerald-950 leading-relaxed">
                    {currentExercise.positiveFeedback}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span>{selectedLevel < 3 ? `Avanzar al Nivel ${selectedLevel + 1}` : 'Practicar otro reto'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleGenerateExtra}
                      className="px-4 py-2.5 rounded-xl bg-white border border-emerald-300 hover:bg-emerald-100 text-emerald-900 font-bold text-xs transition-colors"
                    >
                      Otro ejercicio de Nivel {selectedLevel}
                    </button>
                  </div>
                </div>
              )}

              {/* Step-by-Step Procedure Explanation when an error occurs */}
              {feedbackState === 'needs_help' && (
                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-300 space-y-3">
                  <div className="flex items-center gap-2 text-amber-950 font-extrabold text-sm">
                    <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>¡Buen intento! Veamos el procedimiento paso a paso juntos:</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-slate-800 bg-white/80 p-4 rounded-xl border border-amber-200">
                    {currentExercise.stepByStepCorrection.map((step, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {step}
                      </li>
                    ))}
                  </ol>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <span className="text-xs text-amber-900 font-medium">
                      Observa cada paso e inténtalo de nuevo para consolidar lo aprendido.
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setUserAnswer('');
                        setFeedbackState('idle');
                      }}
                      className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors"
                    >
                      Intentar de nuevo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Topic Progress Footer Strip */}
            <div className="bg-white rounded-2xl border border-slate-200 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-600" />
                <span>
                  Avance en <strong>{activeTopic.name}</strong>:{' '}
                  <strong className="text-slate-900 tabular-nums">{topicProg?.correct || 0}</strong>{' '}
                  ejercicios resueltos en{' '}
                  <strong className="text-slate-900 tabular-nums">{topicProg?.attempts || 0}</strong>{' '}
                  intentos.
                </span>
              </div>
              <span className="text-[11px] text-slate-500">
                Cada error es una oportunidad para comprender el procedimiento.
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
