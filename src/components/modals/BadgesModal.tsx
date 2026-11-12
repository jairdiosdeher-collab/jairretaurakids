import React from 'react';
import { MISSIONS } from '../../data/missions';
import { audioService } from '../../services/audioService';
import { Award, Lock, CheckCircle2, X } from 'lucide-react';

interface BadgesModalProps {
  earnedBadges: string[];
  onClose: () => void;
  onSelectMission: (missionId: number) => void;
}

export const BadgesModal: React.FC<BadgesModalProps> = ({
  earnedBadges,
  onClose,
  onSelectMission
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white px-6 py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">Colección de Insignias Educativas</h2>
              <div className="text-xs text-amber-100">
                12 Reconocimientos formativos basados en habilidades para la vida
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

        {/* Progress Summary Strip */}
        <div className="bg-amber-50/70 border-b border-amber-200/60 px-6 py-3 flex items-center justify-between text-xs text-amber-900 shrink-0">
          <div className="font-medium">
            Progreso de Colección: <span className="font-bold">{earnedBadges.length} de 12 insignias</span>
          </div>
          <div className="text-[11px] text-amber-800">
            Los reconocimientos son celebraciones positivas del aprendizaje, sin prisa ni competencia.
          </div>
        </div>

        {/* Badges Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {MISSIONS.map((m) => {
            const isEarned = earnedBadges.includes(m.badge.id);

            return (
              <div
                key={m.badge.id}
                className={`p-5 rounded-2xl border flex flex-col justify-between transition-all ${
                  isEarned
                    ? 'bg-gradient-to-br from-amber-50/40 via-white to-yellow-50/30 border-amber-300 shadow-sm'
                    : 'bg-slate-50/70 border-slate-200 opacity-70'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${
                        isEarned
                          ? 'bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-950 ring-2 ring-amber-300/60'
                          : 'bg-slate-200 text-slate-400'
                      }`}
                    >
                      {isEarned ? <Award className="w-7 h-7" /> : <Lock className="w-6 h-6" />}
                    </div>
                    {isEarned ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Obtenida
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-500 font-medium">Por descubrir</span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 leading-snug">
                      {m.badge.title}
                    </h3>
                    <div className="text-xs font-bold text-teal-700 mt-0.5">{m.badge.skillName}</div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{m.badge.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      audioService.playClick();
                      onClose();
                      onSelectMission(m.id);
                    }}
                    className={`w-full py-2 rounded-xl text-xs font-bold transition-colors ${
                      isEarned
                        ? 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                        : 'bg-teal-600 hover:bg-teal-700 text-white'
                    }`}
                  >
                    {isEarned ? 'Repasar Misión' : `Jugar Misión ${m.id}`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
