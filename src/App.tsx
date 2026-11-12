/**
 * JAIRRESTAURA – EL MUNDO DE LAS SOLUCIONES
 * Videojuego educativo interactivo en 3D
 * Slogan: "Aprender a vivir, comprender y construir juntos"
 */

import React, { useState, useEffect } from 'react';
import { GameMode, ZoneId, CharacterId } from './types/game';
import { MISSIONS, getMissionById } from './data/missions';
import { GAME_ZONES } from './data/zones';
import { CHARACTERS } from './data/characters';
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

  const [currentMode, setCurrentMode] = useState<GameMode>(() => {
    try {
      const saved = localStorage.getItem('jairrestaura_mode') as GameMode;
      return saved || 'infantil';
    } catch {
      return 'infantil';
    }
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'3d' | 'illustrated_map'>('3d');

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

  // Sync state to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('jairrestaura_completed', JSON.stringify(completedMissions));
      localStorage.setItem('jairrestaura_badges', JSON.stringify(earnedBadges));
      localStorage.setItem('jairrestaura_reflections', JSON.stringify(reflections));
      localStorage.setItem('jairrestaura_mode', currentMode);
    } catch {
      // localStorage unavailable or restricted
    }
  }, [completedMissions, earnedBadges, reflections, currentMode]);

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    audioService.setSoundEnabled(next);
    audioService.setNarrationEnabled(next);
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
    setActiveMissionId(missionId);
  };

  const handleCompleteMission = (missionId: number, badgeId: string, reflectionNote: string) => {
    if (!completedMissions.includes(missionId)) {
      setCompletedMissions((prev) => [...prev, missionId]);
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
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode(viewMode === '3d' ? 'illustrated_map' : '3d')}
      />

      {/* 2. Main Stage (3D World Canvas or 2D Illustrated Map) */}
      <main className="relative flex-1 w-full h-full overflow-hidden">
        {viewMode === '3d' ? (
          <WorldCanvas
            activeZoneId={activeZoneId}
            onSelectZone={handleSelectZone}
            onSelectCharacter={handleSelectCharacter}
            onOpenMission={handleOpenMission}
            completedMissions={completedMissions}
          />
        ) : (
          <IllustratedMap
            activeZoneId={activeZoneId}
            onSelectZone={handleSelectZone}
            onOpenMission={handleOpenMission}
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
          onExit={() => setActiveMissionId(null)}
        />
      )}

      {/* 5. Modals */}
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
