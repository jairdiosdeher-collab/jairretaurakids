/**
 * JAIRRESTAURA – EL MUNDO DE LAS SOLUCIONES
 * Videojuego educativo interactivo en 3D
 * Slogan: "Aprender a vivir, comprender y construir juntos"
 */

import React, { useState, useEffect } from 'react';
import {
  GameMode,
  ZoneId,
  CharacterId,
  DailyReflectionEntry,
  MathTopicId,
  MathLevel,
  MathProgressState
} from './types/game';
import { getMissionById } from './data/missions';
import { INITIAL_MATH_PROGRESS } from './data/mathExercises';
import { audioService } from './services/audioService';

import { TopBar } from './components/hud/TopBar';
import { BottomDock } from './components/hud/BottomDock';
import { WorldCanvas } from './components/world3d/WorldCanvas';
import { IllustratedMap } from './components/world2d/IllustratedMap';
import { MissionPlayer } from './components/mission/MissionPlayer';

import { BadgesModal } from './components/modals/BadgesModal';
import { SkillsBookModal } from './components/modals/SkillsBookModal';
import { ParentEducatorGuideModal } from './components/modals/ParentEducatorGuideModal';
import { ModeSelectorModal } from './components/modals/ModeSelectorModal';
import { MissionsListModal } from './components/modals/MissionsListModal';
import { CharacterModal } from './components/modals/CharacterModal';
import { ZoneModal } from './components/modals/ZoneModal';
import { DailyReflectionModal } from './components/modals/DailyReflectionModal';
import { MathStudioModal } from './components/modals/MathStudioModal';
import { ProgressDashboardModal } from './components/modals/ProgressDashboardModal';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { MathHub } from './components/math/MathHub';

export default function App() {
  // Local storage persisted state
  const [completedMissions, setCompletedMissions] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('jairrestaura_completed');
      return saved ? JSON.parse(saved) : [1]; // Start with Mission 1 completed for immediate sample progress
    } catch {
      return [1];
    }
  });

  const [completedActivities, setCompletedActivities] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('jairrestaura_activities');
      return saved ? JSON.parse(saved) : [1];
    } catch {
      return [1];
    }
  });

  const [earnedBadges, setEarnedBadges] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('jairrestaura_badges');
      return saved ? JSON.parse(saved) : ['badge_escucha'];
    } catch {
      return ['badge_escucha'];
    }
  });

  const [reflections, setReflections] = useState<
    {
      missionId: number;
      date: string;
      mode: string;
      decisionTaken: string;
      keyLearning: string;
    }[]
  >(() => {
    try {
      const saved = localStorage.getItem('jairrestaura_reflections');
      return saved
        ? JSON.parse(saved)
        : [
            {
              missionId: 1,
              date: new Date().toLocaleDateString('es-ES'),
              mode: 'infantil',
              decisionTaken: 'Pausar el juego y mirar a los ojos',
              keyLearning: 'Escuchar con atención es el regalo más generoso que podemos darle a otra persona.'
            }
          ];
    } catch {
      return [];
    }
  });

  const [dailyReflections, setDailyReflections] = useState<DailyReflectionEntry[]>(() => {
    try {
      const saved = localStorage.getItem('jairrestaura_daily_reflections');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [mathProgress, setMathProgress] = useState<MathProgressState>(() => {
    try {
      const saved = localStorage.getItem('jairrestaura_math_progress');
      if (saved) {
        return { ...INITIAL_MATH_PROGRESS, ...JSON.parse(saved) };
      }
      return INITIAL_MATH_PROGRESS;
    } catch {
      return INITIAL_MATH_PROGRESS;
    }
  });

  const [currentMode, setCurrentMode] = useState<GameMode>(() => {
    try {
      const saved = localStorage.getItem('jairrestaura_mode') as GameMode;
      return saved || 'infantil';
    } catch {
      return 'infantil';
    }
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [narrationEnabled, setNarrationEnabled] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(0.8);
  const [speechRate, setSpeechRate] = useState<number>(0.95);
  const [viewMode, setViewMode] = useState<'3d' | 'illustrated_map'>('3d');
  const [isMathHubOpen, setIsMathHubOpen] = useState(false);

  // Exploration & Modal State
  const [activeZoneId, setActiveZoneId] = useState<ZoneId | null>(null);
  const [activeMissionId, setActiveMissionId] = useState<number | null>(null);
  const [activeCharacterId, setActiveCharacterId] = useState<CharacterId | null>(null);

  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState<boolean>(false);
  const [isSkillsBookModalOpen, setIsSkillsBookModalOpen] = useState<boolean>(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState<boolean>(false);
  const [isModeSelectorOpen, setIsModeSelectorOpen] = useState<boolean>(false);
  const [isMissionsListOpen, setIsMissionsListOpen] = useState<boolean>(false);
  const [isZoneModalOpen, setIsZoneModalOpen] = useState<boolean>(false);

  const [isDailyReflectionOpen, setIsDailyReflectionOpen] = useState<boolean>(false);
  const [isMathStudioOpen, setIsMathStudioOpen] = useState<boolean>(false);
  const [mathInitialTopic, setMathInitialTopic] = useState<MathTopicId>('sumas');
  const [isProgressDashboardOpen, setIsProgressDashboardOpen] = useState<boolean>(false);

  // Sync state to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('jairrestaura_completed', JSON.stringify(completedMissions));
      localStorage.setItem('jairrestaura_activities', JSON.stringify(completedActivities));
      localStorage.setItem('jairrestaura_badges', JSON.stringify(earnedBadges));
      localStorage.setItem('jairrestaura_reflections', JSON.stringify(reflections));
      localStorage.setItem('jairrestaura_daily_reflections', JSON.stringify(dailyReflections));
      localStorage.setItem('jairrestaura_math_progress', JSON.stringify(mathProgress));
      localStorage.setItem('jairrestaura_mode', currentMode);
    } catch {
      // localStorage unavailable or restricted
    }
  }, [
    completedMissions,
    completedActivities,
    earnedBadges,
    reflections,
    dailyReflections,
    mathProgress,
    currentMode
  ]);

  // Close open modals with Escape key for accessibility
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      audioService.stopSpeaking();

      if (isMathHubOpen) setIsMathHubOpen(false);
      else if (isDailyReflectionOpen) setIsDailyReflectionOpen(false);
      else if (isMathStudioOpen) setIsMathStudioOpen(false);
      else if (isProgressDashboardOpen) setIsProgressDashboardOpen(false);
      else if (isBadgesModalOpen) setIsBadgesModalOpen(false);
      else if (isSkillsBookModalOpen) setIsSkillsBookModalOpen(false);
      else if (isGuideModalOpen) setIsGuideModalOpen(false);
      else if (isModeSelectorOpen) setIsModeSelectorOpen(false);
      else if (isMissionsListOpen) setIsMissionsListOpen(false);
      else if (isZoneModalOpen) setIsZoneModalOpen(false);
      else if (activeCharacterId) setActiveCharacterId(null);
      else if (activeMissionId) setActiveMissionId(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isMathHubOpen,
    isDailyReflectionOpen,
    isMathStudioOpen,
    isProgressDashboardOpen,
    isBadgesModalOpen,
    isSkillsBookModalOpen,
    isGuideModalOpen,
    isModeSelectorOpen,
    isMissionsListOpen,
    isZoneModalOpen,
    activeCharacterId,
    activeMissionId
  ]);

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    audioService.setSoundEnabled(next);
    audioService.setNarrationEnabled(next && narrationEnabled);
  };

  const handleToggleNarration = () => {
    const next = !narrationEnabled;
    setNarrationEnabled(next);
    audioService.setNarrationEnabled(next && soundEnabled);
  };

  const handleChangeVolume = (nextVol: number) => {
    setVolume(nextVol);
    audioService.setVolume(nextVol);
  };

  const handleChangeSpeechRate = (nextRate: number) => {
    setSpeechRate(nextRate);
    audioService.setSpeechRate(nextRate);
  };

  const handleSelectZone = (zoneId: ZoneId | null) => {
    setActiveZoneId(zoneId);
    if (zoneId) {
      setIsZoneModalOpen(true);
    }
  };

  const handleSelectCharacter = (characterId: CharacterId) => {
    setActiveCharacterId(characterId);
  };

  const handleOpenMission = (missionId: number) => {
    setIsMissionsListOpen(false);
    setIsZoneModalOpen(false);
    setActiveCharacterId(null);
    setIsBadgesModalOpen(false);
    setIsSkillsBookModalOpen(false);
    setIsProgressDashboardOpen(false);
    setActiveMissionId(missionId);
  };

  const handlePracticeCompleted = (missionId: number) => {
    setCompletedActivities((prev) => (prev.includes(missionId) ? prev : [...prev, missionId]));
  };

  const handleCompleteMission = (missionId: number, badgeId: string, reflectionNote: string) => {
    if (!completedMissions.includes(missionId)) {
      setCompletedMissions((prev) => [...prev, missionId]);
    }
    if (!completedActivities.includes(missionId)) {
      setCompletedActivities((prev) => [...prev, missionId]);
    }
    if (!earnedBadges.includes(badgeId)) {
      setEarnedBadges((prev) => [...prev, badgeId]);
    }

    const newReflection = {
      missionId,
      date: new Date().toLocaleDateString('es-ES'),
      mode: currentMode,
      decisionTaken: 'Decisión formativa adoptada',
      keyLearning: reflectionNote
    };

    setReflections((prev) => {
      const filtered = prev.filter((r) => r.missionId !== missionId);
      return [...filtered, newReflection];
    });
  };

  const handleSaveDailyReflection = (entry: DailyReflectionEntry) => {
    setDailyReflections((prev) => {
      const exists = prev.some((item) => item.id === entry.id);
      if (exists) {
        return prev.map((item) => (item.id === entry.id ? entry : item));
      }
      return [entry, ...prev];
    });
  };

  const handleDeleteDailyReflection = (id: string) => {
    setDailyReflections((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRecordMathAttempt = (
    topicId: MathTopicId,
    exerciseId: string,
    isCorrect: boolean,
    level: MathLevel
  ) => {
    setMathProgress((prev) => {
      const current = prev[topicId] || INITIAL_MATH_PROGRESS[topicId];
      const nextCompletedIds =
        isCorrect && !current.completedIds.includes(exerciseId)
          ? [...current.completedIds, exerciseId]
          : current.completedIds;
      const unlockedCandidate = isCorrect ? Math.min(3, level + 1) : current.unlockedLevel;
      const nextUnlockedLevel = Math.max(current.unlockedLevel, unlockedCandidate) as MathLevel;

      return {
        ...prev,
        [topicId]: {
          attempts: current.attempts + 1,
          correct: current.correct + (isCorrect ? 1 : 0),
          unlockedLevel: nextUnlockedLevel,
          completedIds: nextCompletedIds,
          lastPracticedAt: new Date().toISOString()
        }
      };
    });
  };

  const handleOpenMathStudio = (topicId: MathTopicId = 'sumas') => {
    setMathInitialTopic(topicId);
    setIsProgressDashboardOpen(false);
    setIsMathStudioOpen(true);
  };

  const activeMission = activeMissionId ? getMissionById(activeMissionId) : null;

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col bg-slate-950 font-sans select-none">
      {/* 1. Header Top Bar (Strict Top Bar Contract) */}
      <TopBar
        currentMode={currentMode}
        onOpenModeSelector={() => setIsModeSelectorOpen(true)}
        onOpenBadges={() => setIsBadgesModalOpen(true)}
        onOpenSkillsBook={() => setIsSkillsBookModalOpen(true)}
        onOpenGuide={() => setIsGuideModalOpen(true)}
        onOpenMissionsList={() => setIsMissionsListOpen(true)}
        onOpenMathStudio={() => handleOpenMathStudio(mathInitialTopic)}
        onOpenDailyReflection={() => setIsDailyReflectionOpen(true)}
        onOpenProgressDashboard={() => setIsProgressDashboardOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        narrationEnabled={narrationEnabled}
        onToggleNarration={handleToggleNarration}
        volume={volume}
        onChangeVolume={handleChangeVolume}
        speechRate={speechRate}
        onChangeSpeechRate={handleChangeSpeechRate}
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode(viewMode === '3d' ? 'illustrated_map' : '3d')}
      />

      <button
        type="button"
        onClick={() => setIsMathHubOpen(true)}
        className="fixed right-3 top-20 z-40 rounded-full border border-white/30 bg-indigo-700 px-4 py-3 text-sm font-extrabold text-white shadow-xl transition hover:scale-105 hover:bg-indigo-800 sm:right-6"
        aria-label="Abrir JAIR MATH KIDS"
      >
        🧮 JAIR MATH KIDS
      </button>

      {/* 2. Main Stage (3D World Canvas or 2D Illustrated Map) */}
      <main className="relative flex-1 w-full h-full overflow-hidden">
        {viewMode === '3d' ? (
          <ErrorBoundary
            fallbackMessage="Se detectó una incompatibilidad con el acelerador 3D de este navegador. Puedes continuar sin problemas en el Mapa Ilustrado 2D."
            onFallbackTo2D={() => setViewMode('illustrated_map')}
          >
            <WorldCanvas
              activeZoneId={activeZoneId}
              onSelectZone={handleSelectZone}
              onSelectCharacter={handleSelectCharacter}
              onOpenMission={handleOpenMission}
              completedMissions={completedMissions}
              onWebGLError={() => setViewMode('illustrated_map')}
            />
          </ErrorBoundary>
        ) : (
          <IllustratedMap
            activeZoneId={activeZoneId}
            onSelectZone={handleSelectZone}
            onOpenMission={handleOpenMission}
            onOpenMathStudio={() => handleOpenMathStudio(mathInitialTopic)}
            onOpenDailyReflection={() => setIsDailyReflectionOpen(true)}
            onOpenProgressDashboard={() => setIsProgressDashboardOpen(true)}
            completedMissions={completedMissions}
          />
        )}

        {/* 3. Collapsible Bottom Control Dock (Pinned Bottom Center) */}
        {!activeMission && (
          <BottomDock
            activeZoneId={activeZoneId}
            onSelectZone={handleSelectZone}
            viewMode={viewMode}
            onToggleViewMode={() => setViewMode(viewMode === '3d' ? 'illustrated_map' : '3d')}
            onOpenMissionsList={() => setIsMissionsListOpen(true)}
            completedCount={completedMissions.length}
          />
        )}
      </main>

      {/* 4. Interactive 5-Station Mission Player Modal */}
      {activeMission && (
        <MissionPlayer
          mission={activeMission}
          currentMode={currentMode}
          onCompleteMission={handleCompleteMission}
          onPracticeCompleted={handlePracticeCompleted}
          onExit={() => setActiveMissionId(null)}
        />
      )}

      {/* Módulo JAIR MATH KIDS */}
      {isMathHubOpen && <MathHub onClose={() => setIsMathHubOpen(false)} />}

      {/* 5. Educational Modules & Modals */}
      {isMathStudioOpen && (
        <MathStudioModal
          mathProgress={mathProgress}
          initialTopicId={mathInitialTopic}
          onRecordAttempt={handleRecordMathAttempt}
          onClose={() => setIsMathStudioOpen(false)}
        />
      )}

      {isDailyReflectionOpen && (
        <DailyReflectionModal
          entries={dailyReflections}
          onSaveEntry={handleSaveDailyReflection}
          onDeleteEntry={handleDeleteDailyReflection}
          onClose={() => setIsDailyReflectionOpen(false)}
        />
      )}

      {isProgressDashboardOpen && (
        <ProgressDashboardModal
          completedMissions={completedMissions}
          completedActivities={completedActivities}
          earnedBadges={earnedBadges}
          dailyReflections={dailyReflections}
          mathProgress={mathProgress}
          onOpenMission={handleOpenMission}
          onOpenMathTopic={handleOpenMathStudio}
          onOpenDailyReflection={() => {
            setIsProgressDashboardOpen(false);
            setIsDailyReflectionOpen(true);
          }}
          onOpenBadges={() => {
            setIsProgressDashboardOpen(false);
            setIsBadgesModalOpen(true);
          }}
          onClose={() => setIsProgressDashboardOpen(false)}
        />
      )}

      {isBadgesModalOpen && (
        <BadgesModal
          earnedBadges={earnedBadges}
          onClose={() => setIsBadgesModalOpen(false)}
          onSelectMission={handleOpenMission}
        />
      )}

      {isSkillsBookModalOpen && (
        <SkillsBookModal
          completedMissions={completedMissions}
          reflections={reflections}
          onClose={() => setIsSkillsBookModalOpen(false)}
          onSelectMission={handleOpenMission}
        />
      )}

      {isGuideModalOpen && (
        <ParentEducatorGuideModal onClose={() => setIsGuideModalOpen(false)} />
      )}

      {isModeSelectorOpen && (
        <ModeSelectorModal
          currentMode={currentMode}
          onSelectMode={(mode) => setCurrentMode(mode)}
          onClose={() => setIsModeSelectorOpen(false)}
        />
      )}

      {isMissionsListOpen && (
        <MissionsListModal
          completedMissions={completedMissions}
          onSelectMission={handleOpenMission}
          onClose={() => setIsMissionsListOpen(false)}
        />
      )}

      {activeCharacterId && (
        <CharacterModal
          characterId={activeCharacterId}
          onClose={() => setActiveCharacterId(null)}
          onSelectMission={handleOpenMission}
        />
      )}

      {isZoneModalOpen && activeZoneId && (
        <ZoneModal
          zoneId={activeZoneId}
          completedMissions={completedMissions}
          onClose={() => setIsZoneModalOpen(false)}
          onSelectMission={handleOpenMission}
        />
      )}
    </div>
  );
}
