import React, { useState } from 'react';
import { GAME_ZONES } from '../../data/zones';
import { ZoneId } from '../../types/game';
import { audioService } from '../../services/audioService';
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Compass,
  Layers,
  Sparkles,
  Volume2
} from 'lucide-react';

interface BottomDockProps {
  activeZoneId: ZoneId | null;
  onSelectZone: (zoneId: ZoneId | null) => void;
  viewMode: '3d' | 'illustrated_map';
  onToggleViewMode: () => void;
  onOpenMissionsList: () => void;
  completedCount: number;
}

export const BottomDock: React.FC<BottomDockProps> = ({
  activeZoneId,
  onSelectZone,
  viewMode,
  onToggleViewMode,
  onOpenMissionsList,
  completedCount
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const ZONES_ORDER: { id: ZoneId; label: string }[] = [
    { id: 'parque', label: 'Parque' },
    { id: 'escuela', label: 'Escuela' },
    { id: 'jardin', label: 'Jardín' },
    { id: 'puente', label: 'Puente' },
    { id: 'pequena_ciudad', label: 'Ciudad' },
    { id: 'plaza', label: 'Plaza' },
    { id: 'aventura', label: 'Aventuras' }
  ];

  return (
    <div
      className="fixed z-20 pointer-events-auto transition-transform duration-300"
      style={{
        bottom: '16px',
        left: '50%',
        transform: isCollapsed ? 'translate(-50%, calc(100% - 32px))' : 'translate(-50%, 0)',
        maxWidth: 'min(940px, 94vw)'
      }}
    >
      {/* Collapse Toggle Handle */}
      <div className="flex justify-center -mb-px">
        <button
          type="button"
          onClick={() => {
            audioService.playClick();
            setIsCollapsed(!isCollapsed);
          }}
          className="flex items-center gap-1.5 px-4 py-1 rounded-t-xl bg-slate-900/90 text-white text-[11px] font-semibold border-t border-x border-slate-700/80 shadow-md backdrop-blur-sm hover:bg-slate-800 transition-colors"
        >
          {isCollapsed ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" />
              <span>Mostrar Controles del Mundo</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" />
              <span>Ocultar Controles (Vista Panorámica)</span>
            </>
          )}
        </button>
      </div>

      {/* Unified Dock Container */}
      <div className="bg-slate-900/90 text-white rounded-2xl p-3 sm:p-4 border border-slate-700/80 shadow-2xl backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
        {/* Left Zone: Camera Presets & Reset */}
        <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto max-w-full pb-1 md:pb-0">
          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              onSelectZone(null);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeZoneId === null
                ? 'bg-teal-500 text-slate-950 shadow-sm'
                : 'bg-white/10 hover:bg-white/20 text-slate-200'
            }`}
          >
            Panorámica General
          </button>

          {ZONES_ORDER.map((z) => {
            const isSelected = activeZoneId === z.id;
            const zoneData = GAME_ZONES[z.id];

            return (
              <button
                key={z.id}
                type="button"
                onClick={() => {
                  audioService.playClick();
                  onSelectZone(z.id);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-white/10 hover:bg-white/20 text-slate-200'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: zoneData.color }}
                />
                <span>{z.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Zone: View switch & missions launch */}
        <div className="flex items-center gap-2 shrink-0 border-t md:border-t-0 md:border-l border-slate-700/80 pt-2 md:pt-0 md:pl-3 w-full md:w-auto justify-between md:justify-end">
          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              onToggleViewMode();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-slate-200 transition-colors whitespace-nowrap"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{viewMode === '3d' ? 'Cambiar a Mapa 2D' : 'Cambiar a 3D'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              onOpenMissionsList();
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-extrabold shadow-sm transition-colors whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Misiones ({completedCount}/12)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
