import React from 'react';
import { GameMode } from '../../types/game';
import { audioService } from '../../services/audioService';
import { Volume2, VolumeX, Sparkles, BookOpen, Award, GraduationCap, Map } from 'lucide-react';

interface TopBarProps {
  currentMode: GameMode;
  onOpenModeSelector: () => void;
  onOpenBadges: () => void;
  onOpenSkillsBook: () => void;
  onOpenGuide: () => void;
  onOpenMissionsList: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  viewMode: '3d' | 'illustrated_map';
  onToggleViewMode: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentMode,
  onOpenModeSelector,
  onOpenBadges,
  onOpenSkillsBook,
  onOpenGuide,
  onOpenMissionsList,
  soundEnabled,
  onToggleSound,
  viewMode,
  onToggleViewMode
}) => {
  const getModeLabel = () => {
    switch (currentMode) {
      case 'infantil':
        return 'Infantil (6-10)';
      case 'juvenil':
        return 'Juvenil (11-16)';
      case 'adulto':
        return 'Adulto y Familiar';
    }
  };

  return (
    <header className="relative z-30 flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-8 py-3.5 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Zone 1: Single element Brand wordmark */}
      <div className="flex items-center gap-3 shrink-0">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            audioService.playClick();
          }}
          className="text-lg sm:text-xl font-extrabold tracking-tight text-teal-800 whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block" />
          JAIRRESTAURA
        </a>
        <span className="text-xs text-slate-400 hidden xl:inline">·</span>
        <span className="text-xs font-medium text-slate-500 hidden xl:inline whitespace-nowrap">
          El Mundo de las Soluciones
        </span>
      </div>

      {/* Zone 2: 4-5 clean single-line text navigation links */}
      <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600">
        <button
          type="button"
          onClick={() => {
            audioService.playClick();
            onOpenMissionsList();
          }}
          className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <Map className="w-3.5 h-3.5" />
          <span>Misiones (12)</span>
        </button>

        <button
          type="button"
          onClick={() => {
            audioService.playClick();
            onOpenBadges();
          }}
          className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <Award className="w-3.5 h-3.5" />
          <span>Insignias</span>
        </button>

        <button
          type="button"
          onClick={() => {
            audioService.playClick();
            onOpenSkillsBook();
          }}
          className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Cuaderno de Habilidades</span>
        </button>

        <button
          type="button"
          onClick={() => {
            audioService.playClick();
            onOpenGuide();
          }}
          className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Guía Educadores</span>
        </button>
      </nav>

      {/* Zone 3: 1 primary action cluster */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* View Mode Switcher (3D vs 2D) */}
        <button
          type="button"
          onClick={() => {
            audioService.playClick();
            onToggleViewMode();
          }}
          className="px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 whitespace-nowrap shrink-0 transition-colors hidden sm:flex items-center gap-1.5"
          title="Alternar entre Vista 3D y Mapa Ilustrado Ligero"
        >
          <span>{viewMode === '3d' ? '3D Activo' : 'Mapa 2D'}</span>
        </button>

        {/* Audio Mute Quick Toggle */}
        <button
          type="button"
          onClick={() => {
            audioService.playClick();
            onToggleSound();
          }}
          className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors"
          title={soundEnabled ? 'Silenciar audio' : 'Activar audio'}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-teal-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
        </button>

        {/* Mode Selector Pill / Button */}
        <button
          type="button"
          onClick={() => {
            audioService.playClick();
            onOpenModeSelector();
          }}
          className="px-3.5 py-1.5 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{getModeLabel()}</span>
        </button>
      </div>
    </header>
  );
};
