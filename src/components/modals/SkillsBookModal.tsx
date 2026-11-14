import React, { useState } from 'react';
import { MISSIONS } from '../../data/missions';
import { audioService } from '../../services/audioService';
import { BookOpen, Sparkles, Heart, CheckCircle2, X } from 'lucide-react';

interface SkillsBookModalProps {
  completedMissions: number[];
  reflections: {
    missionId: number;
    date: string;
    mode: string;
    decisionTaken: string;
    keyLearning: string;
  }[];
  onClose: () => void;
  onSelectMission: (missionId: number) => void;
}

export const SkillsBookModal: React.FC<SkillsBookModalProps> = ({
  completedMissions,
  reflections,
  onClose,
  onSelectMission
}) => {
  const [personalPledge, setPersonalPledge] = useState<string>(() => {
    return localStorage.getItem('jairrestaura_pledge') || '';
  });
  const [savedPledgeMessage, setSavedPledgeMessage] = useState<boolean>(false);

  const handleSavePledge = () => {
    audioService.playSuccess();
    localStorage.setItem('jairrestaura_pledge', personalPledge);
    setSavedPledgeMessage(true);
    setTimeout(() => setSavedPledgeMessage(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-slate-900 text-white px-6 py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600/50 flex items-center justify-center text-teal-200 shadow-sm">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">Cuaderno de Habilidades para la Vida</h2>
              <div className="text-xs text-teal-200">
                Compendio de aprendizajes, reflexiones y acuerdos restaurativos
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Guiding Quote */}
          <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
                Lema de JAIRRESTAURA
              </div>
              <div className="text-base font-extrabold text-teal-900 mt-0.5">
                "Aprender a vivir, comprender y construir juntos."
              </div>
              <p className="text-xs text-teal-800 mt-1">
                Este cuaderno reúne los principios de la convivencia pacífica. Cada misión te ayuda a
                nutrir la empatía, el respeto a los límites propios y la solidaridad comunitaria.
              </p>
            </div>
          </div>

          {/* Personal Pledge Section */}
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <Heart className="w-4 h-4 text-amber-600" />
              <span>Mi Compromiso Personal de Convivencia</span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed">
              Escribe una pequeña promesa o valor que desees practicar hoy con tu familia, amigos o
              compañeros:
            </p>
            <textarea
              value={personalPledge}
              onChange={(e) => setPersonalPledge(e.target.value)}
              placeholder="Ejemplo: Hoy escucharé sin interrumpir a quien me hable y cuidaré mis palabras..."
              rows={2}
              className="w-full p-3 rounded-xl bg-white border border-amber-300 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleSavePledge}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors"
              >
                Guardar Compromiso
              </button>
              {savedPledgeMessage && (
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> ¡Guardado en tu cuaderno local!
                </span>
              )}
            </div>
          </div>

          {/* 12 Skills Summary & Learned Status */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Las 12 Habilidades para la Vida en El Mundo de las Soluciones
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {MISSIONS.map((m) => {
                const isDone = completedMissions.includes(m.id);
                const rec = reflections.find((r) => r.missionId === m.id);

                return (
                  <div
                    key={m.id}
                    onClick={() => {
                      audioService.playClick();
                      onClose();
                      onSelectMission(m.id);
                    }}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                      isDone
                        ? 'bg-white border-teal-300 hover:border-teal-400 shadow-sm'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-extrabold text-teal-700">Misión {m.id}</span>
                      {isDone && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Completada
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">{m.title}</h4>
                    <div className="text-xs text-slate-600 font-medium">{m.skillFocus}</div>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">{m.subtitle}</p>

                    {rec && (
                      <div className="mt-3 p-2.5 rounded-xl bg-teal-50/60 border border-teal-100 text-[11px] text-teal-900">
                        <span className="font-bold">Tu aprendizaje:</span> {rec.keyLearning}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
