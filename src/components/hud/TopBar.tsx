import React, { useState, useRef, useEffect } from 'react';
import { GameMode } from '../../types/game';
import { audioService } from '../../services/audioService';
import {
  Volume2,
  VolumeX,
  Sparkles,
  BookOpen,
  Award,
  GraduationCap,
  Map,
  SlidersHorizontal,
  Menu,
  X,
  Layers,
  Calculator,
  BookHeart,
  TrendingUp,
  ChevronDown
} from 'lucide-react';

interface TopBarProps {
  currentMode: GameMode;
  onOpenModeSelector: () => void;
  onOpenBadges: () => void;
  onOpenSkillsBook: () => void;
  onOpenGuide: () => void;
  onOpenMissionsList: () => void;
  onOpenMathStudio: () => void;
  onOpenDailyReflection: () => void;
  onOpenProgressDashboard: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  narrationEnabled: boolean;
  onToggleNarration: () => void;
  volume: number;
  onChangeVolume: (vol: number) => void;
  speechRate: number;
  onChangeSpeechRate: (rate: number) => void;
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
  onOpenMathStudio,
  onOpenDailyReflection,
  onOpenProgressDashboard,
  soundEnabled,
  onToggleSound,
  narrationEnabled,
  onToggleNarration,
  volume,
  onChangeVolume,
  speechRate,
  onChangeSpeechRate,
  viewMode,
  onToggleViewMode
}) => {
  const [isAudioMenuOpen, setIsAudioMenuOpen] = useState(false);
  const [isLibraryMenuOpen, setIsLibraryMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const audioMenuRef = useRef<HTMLDivElement>(null);
  const libraryMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (audioMenuRef.current && !audioMenuRef.current.contains(event.target as Node)) {
        setIsAudioMenuOpen(false);
      }
      if (libraryMenuRef.current && !libraryMenuRef.current.contains(event.target as Node)) {
        setIsLibraryMenuOpen(false);
      }
    };
    if (isAudioMenuOpen || isLibraryMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAudioMenuOpen, isLibraryMenuOpen]);

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
    <header className="relative z-30 bg-white border-b border-slate-200/90 shadow-xs">
      <div className="flex items-center justify-between gap-3 sm:gap-6 px-3 sm:px-8 py-3">
        {/* Zone 1: Brand wordmark + Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0">
          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              setIsMobileMenuOpen((prev) => !prev);
            }}
            className="lg:hidden w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors focus-visible:outline-2 focus-visible:outline-teal-600"
            aria-label={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              audioService.playClick();
            }}
            className="text-base sm:text-xl font-extrabold tracking-tight text-teal-800 whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-teal-600 rounded-md"
          >
            JAIRRESTAURA
          </a>
        </div>

        {/* Zone 2: Desktop single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs font-semibold text-slate-700" aria-label="Navegación principal">
          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              onOpenMissionsList();
            }}
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-teal-600 rounded-md px-1.5 py-1"
          >
            <Map className="w-3.5 h-3.5 text-teal-600" />
            <span>Misiones</span>
          </button>

          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              onOpenMathStudio();
            }}
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-teal-600 rounded-md px-1.5 py-1"
          >
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            <span>Matemáticas</span>
          </button>

          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              onOpenDailyReflection();
            }}
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-teal-600 rounded-md px-1.5 py-1"
          >
            <BookHeart className="w-3.5 h-3.5 text-violet-600" />
            <span>Mi Reflexión</span>
          </button>

          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              onOpenProgressDashboard();
            }}
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-teal-600 rounded-md px-1.5 py-1"
          >
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Progreso</span>
          </button>

          {/* Resources Dropdown (Badges, Skills Book, Educator Guide) */}
          <div className="relative" ref={libraryMenuRef}>
            <button
              type="button"
              onClick={() => {
                audioService.playClick();
                setIsLibraryMenuOpen((prev) => !prev);
              }}
              aria-expanded={isLibraryMenuOpen}
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-teal-600 rounded-md px-1.5 py-1"
            >
              <span>Recursos</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {isLibraryMenuOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl border border-slate-200 shadow-2xl p-2 space-y-1 z-50">
                <button
                  type="button"
                  onClick={() => {
                    audioService.playClick();
                    setIsLibraryMenuOpen(false);
                    onOpenBadges();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-bold text-slate-800 text-left"
                >
                  <Award className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Insignias Educativas</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    audioService.playClick();
                    setIsLibraryMenuOpen(false);
                    onOpenSkillsBook();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-bold text-slate-800 text-left"
                >
                  <BookOpen className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Cuaderno de Habilidades</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    audioService.playClick();
                    setIsLibraryMenuOpen(false);
                    onOpenGuide();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-bold text-slate-800 text-left"
                >
                  <GraduationCap className="w-4 h-4 text-violet-600 shrink-0" />
                  <span>Guía para Educadores</span>
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Action cluster */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* View Mode Switcher (3D vs 2D) */}
          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              onToggleViewMode();
            }}
            className="px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 whitespace-nowrap shrink-0 transition-colors hidden sm:flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-teal-600"
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
            className="w-9 h-9 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors focus-visible:outline-2 focus-visible:outline-teal-600"
            title={soundEnabled ? 'Silenciar audio' : 'Activar audio'}
            aria-label={soundEnabled ? 'Silenciar audio' : 'Activar audio'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-teal-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Volume & Voice Speed Popover */}
          <div className="relative" ref={audioMenuRef}>
            <button
              type="button"
              onClick={() => {
                audioService.playClick();
                setIsAudioMenuOpen((prev) => !prev);
              }}
              className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-teal-600 ${
                isAudioMenuOpen
                  ? 'border-teal-500 bg-teal-50 text-teal-700'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
              }`}
              title="Controles de volumen y narración"
              aria-label="Controles de volumen y narración"
              aria-expanded={isAudioMenuOpen}
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>

            {isAudioMenuOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl border border-slate-200 shadow-2xl p-4 space-y-4 z-50 text-slate-800">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    Audio y Narración
                  </span>
                  <button
                    type="button"
                    onClick={onToggleSound}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors ${
                      soundEnabled
                        ? 'bg-teal-50 text-teal-700 hover:bg-teal-100'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {soundEnabled ? 'Sonido Activo' : 'Silenciado'}
                  </button>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <label htmlFor="audio-volume-range" className="font-semibold text-slate-700">
                      Volumen general
                    </label>
                    <span className="font-bold text-teal-700 tabular-nums">{Math.round(volume * 100)}%</span>
                  </div>
                  <input
                    id="audio-volume-range"
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={Math.round(volume * 100)}
                    onChange={(e) => onChangeVolume(Number(e.target.value) / 100)}
                    className="w-full accent-teal-600 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <div className="text-xs font-semibold text-slate-700">Narración por voz</div>
                    <div className="text-[11px] text-slate-400">Lectura guiada en español</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      audioService.playClick();
                      onToggleNarration();
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                      narrationEnabled
                        ? 'bg-teal-600 text-white hover:bg-teal-700'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {narrationEnabled ? 'Activa' : 'Pausada'}
                  </button>
                </div>

                <div className="space-y-1.5 pt-1 border-t border-slate-100">
                  <div className="text-xs font-semibold text-slate-700">Velocidad de lectura</div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { label: 'Pausada', rate: 0.8 },
                      { label: 'Normal', rate: 0.95 },
                      { label: 'Ágil', rate: 1.15 }
                    ].map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => {
                          audioService.playClick();
                          onChangeSpeechRate(opt.rate);
                        }}
                        className={`py-1.5 rounded-lg text-[11px] font-bold transition-colors ${
                          Math.abs(speechRate - opt.rate) < 0.05
                            ? 'bg-teal-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mode Selector Button */}
          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              onOpenModeSelector();
            }}
            className="px-2.5 sm:px-3.5 py-2 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm focus-visible:outline-2 focus-visible:outline-teal-600"
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>{getModeLabel()}</span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {isMobileMenuOpen && (
        <nav
          className="lg:hidden border-t border-slate-200 bg-slate-50 px-4 py-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5 shadow-md"
          aria-label="Navegación móvil"
        >
          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              setIsMobileMenuOpen(false);
              onOpenMissionsList();
            }}
            className="flex items-center gap-2 px-3 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:border-teal-400 min-h-[44px]"
          >
            <Map className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Misiones (12)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              setIsMobileMenuOpen(false);
              onOpenMathStudio();
            }}
            className="flex items-center gap-2 px-3 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:border-sky-400 min-h-[44px]"
          >
            <Calculator className="w-4 h-4 text-sky-600 shrink-0" />
            <span>Matemáticas</span>
          </button>

          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              setIsMobileMenuOpen(false);
              onOpenDailyReflection();
            }}
            className="flex items-center gap-2 px-3 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:border-violet-400 min-h-[44px]"
          >
            <BookHeart className="w-4 h-4 text-violet-600 shrink-0" />
            <span>Mi Reflexión</span>
          </button>

          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              setIsMobileMenuOpen(false);
              onOpenProgressDashboard();
            }}
            className="flex items-center gap-2 px-3 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:border-emerald-400 min-h-[44px]"
          >
            <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Progreso</span>
          </button>

          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              setIsMobileMenuOpen(false);
              onOpenBadges();
            }}
            className="flex items-center gap-2 px-3 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:border-amber-400 min-h-[44px]"
          >
            <Award className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Insignias</span>
          </button>

          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              setIsMobileMenuOpen(false);
              onOpenSkillsBook();
            }}
            className="flex items-center gap-2 px-3 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:border-teal-400 min-h-[44px]"
          >
            <BookOpen className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Cuaderno</span>
          </button>

          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              setIsMobileMenuOpen(false);
              onOpenGuide();
            }}
            className="flex items-center gap-2 px-3 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:border-violet-400 min-h-[44px]"
          >
            <GraduationCap className="w-4 h-4 text-violet-600 shrink-0" />
            <span>Guía Educadores</span>
          </button>

          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              setIsMobileMenuOpen(false);
              onToggleViewMode();
            }}
            className="sm:hidden flex items-center gap-2 px-3 py-3 rounded-xl bg-teal-50 border border-teal-200 text-xs font-bold text-teal-800 min-h-[44px]"
          >
            <Layers className="w-4 h-4 text-teal-700 shrink-0" />
            <span>{viewMode === '3d' ? 'Mapa 2D' : 'Mundo 3D'}</span>
          </button>
        </nav>
      )}
    </header>
  );
};
