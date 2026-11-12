import React from 'react';
import { GAME_ZONES } from '../../data/zones';
import { CHARACTERS } from '../../data/characters';
import { MISSIONS } from '../../data/missions';
import { ZoneId } from '../../types/game';
import { audioService } from '../../services/audioService';
import { Play, CheckCircle2, Sparkles, X, MapPin } from 'lucide-react';

interface ZoneModalProps {
  zoneId: ZoneId;
  completedMissions: number[];
  onClose: () => void;
  onSelectMission: (missionId: number) => void;
}

export const ZoneModal: React.FC<ZoneModalProps> = ({
  zoneId,
  completedMissions,
  onClose,
  onSelectMission
}) => {
  const zone = GAME_ZONES[zoneId];
  if (!zone) return null;

  const zoneMissions = MISSIONS.filter((m) => m.zoneId === zoneId);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div
          className="p-6 text-white flex items-start justify-between relative"
          style={{
            background: `linear-gradient(135deg, ${zone.color}, #0f172a)`
          }}
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Escenario del Mundo 3D
            </span>
            <h2 className="text-2xl font-black text-white mt-0.5">{zone.name}</h2>
            <div className="text-xs text-slate-200">{zone.tagline}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Zone Body */}
        <div className="p-6 space-y-5">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{zone.description}</p>

          {/* Characters Present */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Personajes en este espacio
            </div>
            <div className="flex flex-wrap gap-2">
              {zone.charactersPresent.map((cId) => {
                const char = CHARACTERS[cId];
                return (
                  <div
                    key={cId}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: char.color }}
                    />
                    <span>{char.name}</span>
                    <span className="text-[10px] text-slate-400">({char.role.split(' ')[0]})</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Missions in Zone */}
          <div className="space-y-2.5 pt-2 border-t border-slate-100">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Misiones de Convivencia en esta Zona</span>
            </div>
            <div className="space-y-2.5">
              {zoneMissions.map((m) => {
                const isDone = completedMissions.includes(m.id);

                return (
                  <div
                    key={m.id}
                    onClick={() => {
                      audioService.playClick();
                      onClose();
                      onSelectMission(m.id);
                    }}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center justify-between ${
                      isDone
                        ? 'bg-emerald-50/50 border-emerald-300 hover:border-emerald-400'
                        : 'bg-white border-slate-200 hover:border-teal-400 shadow-xs hover:shadow-sm'
                    }`}
                  >
                    <div className="min-w-0 pr-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-teal-800">Misión {m.id}</span>
                        {isDone && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3 h-3" /> Completada
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mt-0.5">{m.title}</h4>
                      <p className="text-xs text-slate-500 truncate">{m.skillFocus}</p>
                    </div>
                    <button
                      type="button"
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 shrink-0 ${
                        isDone
                          ? 'bg-emerald-600 text-white'
                          : 'bg-teal-600 text-white hover:bg-teal-700'
                      }`}
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>{isDone ? 'Repasar' : 'Jugar'}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
          >
            Explorar en el Mundo 3D
          </button>
        </div>
      </div>
    </div>
  );
};
