import React, { useState } from 'react';
import { CHARACTERS } from '../../data/characters';
import { MISSIONS } from '../../data/missions';
import { CharacterId } from '../../types/game';
import { audioService } from '../../services/audioService';
import { Volume2, Play, Sparkles, X } from 'lucide-react';

interface CharacterModalProps {
  characterId: CharacterId;
  onClose: () => void;
  onSelectMission: (missionId: number) => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({
  characterId,
  onClose,
  onSelectMission
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  const char = CHARACTERS[characterId];
  if (!char) return null;

  const characterMissions = MISSIONS.filter((m) =>
    m.primaryCharacters.includes(characterId)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150">
        {/* Header Banner */}
        <div
          className="p-6 text-white flex items-start justify-between relative"
          style={{
            background: `linear-gradient(135deg, ${char.color}, #0f172a)`
          }}
        >
          <div className="flex items-center gap-4">
            {char.avatarUrl && !imgFailed ? (
              <img
                src={char.avatarUrl}
                alt={`Ilustración de ${char.name}`}
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-white/40 shrink-0"
              />
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white font-black text-2xl shadow-md border border-white/20 shrink-0">
                {char.name[0]}
              </div>
            )}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Personaje Permanente
              </span>
              <h2 className="text-2xl font-black text-white">{char.name}</h2>
              <div className="text-xs text-slate-200">{char.role}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Character Details */}
        <div className="p-6 space-y-5">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Cualidad Principal
            </div>
            <p className="text-sm font-semibold text-slate-800">{char.trait}</p>
            <p className="text-xs text-slate-600 leading-relaxed">{char.description}</p>
          </div>

          {/* Personality Traits */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Rasgos de Convivencia
            </div>
            <div className="flex flex-wrap gap-1.5">
              {char.personality.map((p, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Missions with this character */}
          <div className="space-y-2.5 pt-2 border-t border-slate-100">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Misiones donde participa {char.name}</span>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {characterMissions.map((m) => (
                <div
                  key={m.id}
                  onClick={() => {
                    audioService.playClick();
                    onClose();
                    onSelectMission(m.id);
                  }}
                  className="cursor-pointer p-3 rounded-xl border border-slate-200 hover:border-teal-400 bg-slate-50 hover:bg-white flex items-center justify-between text-xs transition-all"
                >
                  <div className="min-w-0 pr-2">
                    <span className="font-bold text-teal-800">Misión {m.id}:</span>{' '}
                    <span className="font-semibold text-slate-900">{m.title}</span>
                    <div className="text-[11px] text-slate-500 truncate">{m.skillFocus}</div>
                  </div>
                  <Play className="w-4 h-4 text-teal-600 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Voice Greeting Button */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() =>
              audioService.speak(
                `Hola, soy ${char.name}. ${char.description}. ¡Acompáñame en nuestras misiones para aprender a convivir!`
              )
            }
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 hover:bg-teal-100 transition-colors"
          >
            <Volume2 className="w-4 h-4 text-teal-600" />
            <span>Escuchar saludo de {char.name}</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
