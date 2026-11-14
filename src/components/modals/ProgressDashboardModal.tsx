import React, { useState } from 'react';
import {
  DailyReflectionEntry,
  MathProgressState,
  MathTopicId
} from '../../types/game';
import { MATH_TOPICS } from '../../data/mathExercises';
import { MISSIONS } from '../../data/missions';
import { DAILY_EMOTIONS, EmotionIllustration } from './DailyReflectionModal';
import { audioService } from '../../services/audioService';
import progressAtlasImg from '../../assets/images/educational_progress_atlas_1794688257252.jpg';
import {
  TrendingUp,
  Award,
  CheckCircle2,
  BookHeart,
  Calculator,
  Sparkles,
  ArrowRight,
  X,
  Compass
} from 'lucide-react';

interface ProgressDashboardModalProps {
  completedMissions: number[];
  completedActivities: number[];
  earnedBadges: string[];
  dailyReflections: DailyReflectionEntry[];
  mathProgress: MathProgressState;
  onOpenMission: (missionId: number) => void;
  onOpenMathTopic: (topicId: MathTopicId) => void;
  onOpenDailyReflection: () => void;
  onOpenBadges: () => void;
  onClose: () => void;
}

export const ProgressDashboardModal: React.FC<ProgressDashboardModalProps> = ({
  completedMissions,
  completedActivities,
  earnedBadges,
  dailyReflections,
  mathProgress,
  onOpenMission,
  onOpenMathTopic,
  onOpenDailyReflection,
  onOpenBadges,
  onClose
}) => {
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  const mathSummary = MATH_TOPICS.reduce(
    (acc, topic) => {
      const p = mathProgress[topic.id];
      if (p) {
        acc.totalCorrect += p.correct;
        acc.totalAttempts += p.attempts;
        if (p.correct > 0) acc.practicedTopics += 1;
      }
      return acc;
    },
    { totalCorrect: 0, totalAttempts: 0, practicedTopics: 0 }
  );

  // Supportive suggestions for reinforcement (no psychological labels or capability judgment)
  const mathTopicsToReinforce = MATH_TOPICS.filter((topic) => {
    const p = mathProgress[topic.id];
    if (!p || p.correct === 0) return true;
    if (p.attempts >= 2 && p.correct / p.attempts < 0.7) return true;
    return false;
  }).slice(0, 4);

  const pendingMissions = MISSIONS.filter((m) => !completedMissions.includes(m.id)).slice(0, 3);

  const missionPct = Math.round((completedMissions.length / 12) * 100);
  const ringRadius = 34;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringOffset = ringCircumference - (missionPct / 100) * ringCircumference;

  // Emotion counts (purely descriptive summary)
  const emotionCounts = DAILY_EMOTIONS.map((em) => ({
    ...em,
    count: dailyReflections.filter((r) => r.emotion === em.id).length
  })).filter((e) => e.count > 0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 flex items-center justify-center p-2 sm:p-6">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[93vh]">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white shrink-0 overflow-hidden">
          {!heroImgFailed && (
            <img
              src={progressAtlasImg}
              alt="Mapa de avances y logros educativos de JAIRRESTAURA"
              referrerPolicy="no-referrer"
              onError={() => setHeroImgFailed(true)}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          )}
          <div className="relative z-10 px-5 sm:px-7 py-5 flex items-center justify-between gap-4 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-transparent">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-400/20 border border-emerald-300/35 flex items-center justify-center text-emerald-200 shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Panel de Progreso Educativo
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100">
                  Resumen visual de tu recorrido por misiones, matemáticas, insignias y reflexiones
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar Panel de Progreso Educativo"
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50/70">
          {/* Top Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Misiones Completadas with SVG Ring */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex items-center gap-4 shadow-xs">
              <svg width="84" height="84" viewBox="0 0 84 84" className="shrink-0 -rotate-90" aria-hidden="true">
                <circle cx="42" cy="42" r={ringRadius} fill="none" stroke="#e2e8f0" strokeWidth="8" />
                <circle
                  cx="42"
                  cy="42"
                  r={ringRadius}
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={ringCircumference}
                  strokeDashoffset={ringOffset}
                />
              </svg>
              <div>
                <div className="text-xs font-bold text-slate-500">Misiones completadas</div>
                <div className="text-2xl font-black text-slate-900 tabular-nums">
                  {completedMissions.length} <span className="text-sm font-semibold text-slate-400">/ 12</span>
                </div>
                <div className="text-[11px] font-semibold text-teal-700 tabular-nums">{missionPct}% del mundo</div>
              </div>
            </div>

            {/* 2. Actividades realizadas */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col justify-between shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Actividades realizadas</span>
                <Sparkles className="w-4 h-4 text-sky-600" />
              </div>
              <div className="text-2xl font-black text-slate-900 tabular-nums mt-2">
                {completedActivities.length + mathSummary.totalCorrect}
              </div>
              <div className="text-[11px] text-slate-500 mt-1 tabular-nums">
                {completedActivities.length} prácticas de misión · {mathSummary.totalCorrect} ejercicios matemáticos
              </div>
            </div>

            {/* 3. Insignias obtenidas */}
            <div
              onClick={() => {
                audioService.playClick();
                onClose();
                onOpenBadges();
              }}
              className="cursor-pointer bg-white rounded-2xl border border-slate-200 hover:border-amber-300 p-4 sm:p-5 flex flex-col justify-between shadow-xs transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Insignias obtenidas</span>
                <Award className="w-4 h-4 text-amber-500" />
              </div>
              <div className="text-2xl font-black text-slate-900 tabular-nums mt-2">
                {earnedBadges.length} <span className="text-sm font-semibold text-slate-400">/ 12</span>
              </div>
              <div className="text-[11px] font-bold text-amber-700 mt-1 flex items-center gap-1">
                <span>Ver colección completa</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* 4. Reflexiones guardadas */}
            <div
              onClick={() => {
                audioService.playClick();
                onClose();
                onOpenDailyReflection();
              }}
              className="cursor-pointer bg-white rounded-2xl border border-slate-200 hover:border-violet-300 p-4 sm:p-5 flex flex-col justify-between shadow-xs transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Reflexiones guardadas</span>
                <BookHeart className="w-4 h-4 text-violet-600" />
              </div>
              <div className="text-2xl font-black text-slate-900 tabular-nums mt-2">
                {dailyReflections.length}
              </div>
              <div className="text-[11px] font-bold text-violet-700 mt-1 flex items-center gap-1">
                <span>Abrir Mi Reflexión Diaria</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Middle Row: Math Chart & Reflections Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Math Advances Bar Chart */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-4 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-teal-600" />
                    <span>Avances en Matemáticas Inteligentes</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Ejercicios resueltos y nivel alcanzado en cada tema ({mathSummary.practicedTopics}/10 temas iniciados)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    audioService.playClick();
                    onClose();
                    onOpenMathTopic('sumas');
                  }}
                  className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors"
                >
                  Ir a practicar
                </button>
              </div>

              <div className="space-y-3">
                {MATH_TOPICS.map((topic) => {
                  const prog = mathProgress[topic.id];
                  const solved = prog?.correct || 0;
                  const level = prog?.unlockedLevel || 1;
                  // 3 curated exercises = 100% baseline bar, capped nicely at 100%
                  const barPct = Math.min(100, Math.round((solved / 3) * 100));

                  return (
                    <div key={topic.id} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <button
                          type="button"
                          onClick={() => {
                            audioService.playClick();
                            onClose();
                            onOpenMathTopic(topic.id);
                          }}
                          className="font-bold text-slate-800 hover:text-teal-700 transition-colors text-left"
                        >
                          {topic.name}
                        </button>
                        <div className="text-[11px] text-slate-500 tabular-nums">
                          <span className="font-bold text-slate-800">{solved} resueltos</span> · Nivel {level}/3
                        </div>
                      </div>
                      <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${Math.max(barPct, solved > 0 ? 12 : 0)}%`,
                            backgroundColor: topic.color
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Reinforcement Suggestions & Daily Emotions Summary */}
            <div className="lg:col-span-5 space-y-5">
              {/* Topics to Reinforce (Supportive, Non-Diagnostic) */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3.5 shadow-xs">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-amber-600" />
                    <span>Temas sugeridos para reforzar</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Cada persona aprende a su propio ritmo. Aquí tienes ideas prácticas para seguir avanzando:
                  </p>
                </div>

                <div className="space-y-2">
                  {mathTopicsToReinforce.map((topic) => {
                    const prog = mathProgress[topic.id];
                    return (
                      <div
                        key={topic.id}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-extrabold text-slate-900">{topic.name}</div>
                          <div className="text-[11px] text-slate-500">
                            {!prog || prog.correct === 0
                              ? 'Aún sin explorar — ideal para comenzar en Nivel 1'
                              : 'Buen momento para repasar el procedimiento paso a paso'}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            audioService.playClick();
                            onClose();
                            onOpenMathTopic(topic.id);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shrink-0 transition-colors"
                        >
                          Practicar
                        </button>
                      </div>
                    );
                  })}

                  {pendingMissions.length > 0 && (
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Próximas misiones de convivencia por descubrir
                      </div>
                      {pendingMissions.map((m) => (
                        <div
                          key={m.id}
                          className="p-2.5 rounded-xl bg-teal-50/50 border border-teal-200 flex items-center justify-between gap-2"
                        >
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-teal-950 truncate">
                              Misión {m.id}: {m.title}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              audioService.playClick();
                              onClose();
                              onOpenMission(m.id);
                            }}
                            className="px-3 py-1 rounded-lg bg-white border border-teal-300 hover:bg-teal-100 text-teal-800 text-xs font-bold shrink-0"
                          >
                            Ir
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Reflections Emotion Overview */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-xs">
                <h3 className="text-sm font-extrabold text-slate-900">
                  Registro visual de Mi Reflexión Diaria
                </h3>
                {emotionCounts.length === 0 ? (
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Cuando guardes tus reflexiones diarias, aquí verás un recuento sencillo de tus
                    anotaciones personales (solo visible en este dispositivo).
                  </p>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {emotionCounts.map((em) => (
                      <div
                        key={em.id}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5"
                      >
                        <EmotionIllustration emotion={em.id} size={32} />
                        <div>
                          <div className="text-xs font-bold text-slate-900">{em.label}</div>
                          <div className="text-[11px] text-slate-500 tabular-nums">
                            {em.count} {em.count === 1 ? 'registro' : 'registros'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Respectful Pedagogical Note */}
          <div className="bg-white rounded-2xl border border-slate-200 px-5 py-3.5 flex items-center gap-2.5 text-xs text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Este panel acompaña el aprendizaje diario sin emitir etiquetas ni diagnósticos. Cada
              avance, pregunta y reflexión suma en tu camino educativo.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
