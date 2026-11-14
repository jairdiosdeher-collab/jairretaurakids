import React, { useState } from 'react';
import { MISSIONS } from '../../data/missions';
import { GAME_ZONES } from '../../data/zones';
import { CHARACTERS } from '../../data/characters';
import { audioService } from '../../services/audioService';
import { Play, CheckCircle2, MapPin, X, Sparkles, Filter } from 'lucide-react';

interface MissionsListModalProps {
  completedMissions: number[];
  onSelectMission: (missionId: number) => void;
  onClose: () => void;
}

export const MissionsListModal: React.FC<MissionsListModalProps> = ({
  completedMissions,
  onSelectMission,
  onClose
}) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  const filteredMissions = MISSIONS.filter((m) => {
    const isDone = completedMissions.includes(m.id);
    if (filter === 'completed') return isDone;
    if (filter === 'pending') return !isDone;
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-slate-900 text-white px-6 py-5 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-xl font-extrabold text-white">Catálogo de 12 Misiones Educativas</h2>
            <div className="text-xs text-teal-200">
              Historias visuales ramificadas para aprender habilidades para la vida
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

        {/* Filter Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl">
            <button
              type="button"
              onClick={() => {
                audioService.playClick();
                setFilter('all');
              }}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
                filter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas (12)
            </button>
            <button
              type="button"
              onClick={() => {
                audioService.playClick();
                setFilter('pending');
              }}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
                filter === 'pending' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Por Descubrir ({12 - completedMissions.length})
            </button>
            <button
              type="button"
              onClick={() => {
                audioService.playClick();
                setFilter('completed');
              }}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
                filter === 'completed' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Completadas ({completedMissions.length})
            </button>
          </div>

          <div className="text-xs font-semibold text-teal-700 hidden sm:block">
            {completedMissions.length}/12 Misiones Superadas
          </div>
        </div>

        {/* Missions Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMissions.map((m) => {
            const isDone = completedMissions.includes(m.id);
            const zone = GAME_ZONES[m.zoneId];

            return (
              <div
                key={m.id}
                onClick={() => {
                  audioService.playClick();
                  onClose();
                  onSelectMission(m.id);
                }}
                className={`cursor-pointer p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isDone
                    ? 'bg-emerald-50/40 border-emerald-200 hover:border-emerald-300'
                    : 'bg-white border-slate-200 hover:border-teal-300 hover:shadow-md'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 font-black text-xs flex items-center justify-center shrink-0">
                        {m.id}
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        {zone.name}
                      </span>
                    </div>
                    {isDone ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Superada
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-slate-400">Disponible</span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                      {m.title}
                    </h3>
                    <div className="text-xs font-semibold text-teal-700 mt-0.5">{m.skillFocus}</div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{m.subtitle}</p>

                  {/* Characters involved */}
                  <div className="flex items-center gap-1.5 pt-1">
                    <span className="text-[11px] text-slate-400 font-medium mr-1">Personajes:</span>
                    {m.primaryCharacters.map((cId) => {
                      const char = CHARACTERS[cId];
                      return (
                        <span
                          key={cId}
                          className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-xs"
                          style={{ backgroundColor: char.color }}
                          title={char.name}
                        >
                          {char.name[0]}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-700 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Insignia: {m.badge.skillName}</span>
                  </span>
                  <button
                    type="button"
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                      isDone
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-teal-600 hover:bg-teal-700 text-white shadow-xs'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{isDone ? 'Repetir' : 'Comenzar'}</span>
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
