import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Mission, GameMode, CharacterId, MissionAlternative } from '../../types/game';
import { CHARACTERS } from '../../data/characters';
import { audioService } from '../../services/audioService';
import {
  Volume2,
  VolumeX,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Heart,
  Eye,
  Brain,
  Compass,
  CheckSquare,
  Wrench,
  Award,
  BookOpen
} from 'lucide-react';

interface MissionPlayerProps {
  mission: Mission;
  currentMode: GameMode;
  onCompleteMission: (missionId: number, badgeId: string, reflectionNote: string) => void;
  onPracticeCompleted?: (missionId: number) => void;
  onExit: () => void;
}

export const MissionPlayer: React.FC<MissionPlayerProps> = ({
  mission,
  currentMode,
  onCompleteMission,
  onPracticeCompleted,
  onExit
}) => {
  const [currentStation, setCurrentStation] = useState<number>(1);
  const [selectedAlternative, setSelectedAlternative] = useState<MissionAlternative | null>(null);
  const [activePerspectiveIndex, setActivePerspectiveIndex] = useState<number>(0);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Station 5 interactive activity state
  const [orderedItems, setOrderedItems] = useState<{ id: string; text: string; correctOrder?: number }[]>([]);
  const [dragTargetsState, setDragTargetsState] = useState<Record<string, string>>({});
  const [selectedPairItem, setSelectedPairItem] = useState<{ id: string; matchId?: string } | null>(null);
  const [matchedPairIds, setMatchedPairIds] = useState<string[]>([]);
  const [breathPhase, setBreathPhase] = useState<number>(0);
  const [activityDone, setActivityDone] = useState<boolean>(false);

  const missionContent = mission.modes[currentMode] || mission.modes.infantil;
  const station5Data = missionContent.station5_practice;

  // Initialize Station 5 interactive activity items
  useEffect(() => {
    if (station5Data.items) {
      if (station5Data.type === 'drag_order') {
        // Scramble items initially
        const shuffled = [...station5Data.items].sort(() => Math.random() - 0.5);
        setOrderedItems(shuffled);
      }
    }
    setDragTargetsState({});
    setSelectedPairItem(null);
    setMatchedPairIds([]);
    setActivityDone(false);
  }, [currentStation, station5Data]);

  useEffect(() => {
    if (activityDone && onPracticeCompleted) {
      onPracticeCompleted(mission.id);
    }
  }, [activityDone, mission.id, onPracticeCompleted]);

  // Audio narration handler
  const handleToggleNarration = (text: string) => {
    if (isSpeaking) {
      audioService.stopSpeaking();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      audioService.speak(text, {
        onEnd: () => setIsSpeaking(false)
      });
    }
  };

  // Move forward a station
  const handleNextStation = () => {
    audioService.stopSpeaking();
    setIsSpeaking(false);
    audioService.playStationAdvance();
    setCurrentStation((prev) => Math.min(prev + 1, 5));
  };

  // Move back a station
  const handlePrevStation = () => {
    audioService.stopSpeaking();
    setIsSpeaking(false);
    audioService.playClick();
    setCurrentStation((prev) => Math.max(prev - 1, 1));
  };

  // Finish mission
  const handleFinishMission = () => {
    audioService.playBadgeUnlocked();
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
    setIsCompleted(true);
    const reflection = selectedAlternative
      ? selectedAlternative.educationalReflection
      : station5Data.skillTakeaway;
    onCompleteMission(mission.id, mission.badge.id, reflection);
  };

  // Order item swap helper for 'drag_order'
  const moveItem = (index: number, direction: 'up' | 'down') => {
    audioService.playClick();
    const newItems = [...orderedItems];
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= newItems.length) return;
    const temp = newItems[index];
    newItems[index] = newItems[targetIdx];
    newItems[targetIdx] = temp;
    setOrderedItems(newItems);

    // Check if fully ordered
    const isCorrect = newItems.every((item, idx) => item.correctOrder === idx + 1);
    if (isCorrect) {
      audioService.playSuccess();
      setActivityDone(true);
    }
  };

  // Categorize helper for 'assertive_filter' / 'emotion_thermometer'
  const handleAssignCategory = (itemId: string, categoryId: string) => {
    audioService.playClick();
    const updated = { ...dragTargetsState, [itemId]: categoryId };
    setDragTargetsState(updated);

    // Check if all items classified
    if (station5Data.items && Object.keys(updated).length === station5Data.items.length) {
      audioService.playSuccess();
      setActivityDone(true);
    }
  };

  // Pair match helper for 'connect_pairs'
  const handleSelectPairItem = (item: { id: string; text: string; matchId?: string }) => {
    if (matchedPairIds.includes(item.id)) return;
    audioService.playClick();

    if (!selectedPairItem) {
      setSelectedPairItem({ id: item.id, matchId: item.matchId });
    } else if (selectedPairItem.id === item.id) {
      setSelectedPairItem(null);
    } else {
      if (selectedPairItem.matchId && item.matchId && selectedPairItem.matchId === item.matchId) {
        audioService.playSuccess();
        const newMatched = [...matchedPairIds, selectedPairItem.id, item.id];
        setMatchedPairIds(newMatched);
        setSelectedPairItem(null);

        if (station5Data.items && newMatched.length === station5Data.items.length) {
          setActivityDone(true);
        }
      } else {
        setSelectedPairItem({ id: item.id, matchId: item.matchId });
      }
    }
  };

  // Station titles
  const STATIONS = [
    { num: 1, name: 'OBSERVO', icon: Eye, color: 'text-sky-600', bg: 'bg-sky-50' },
    { num: 2, name: 'COMPRENDO', icon: Brain, color: 'text-violet-600', bg: 'bg-violet-50' },
    { num: 3, name: 'DESCUBRO', icon: Compass, color: 'text-amber-600', bg: 'bg-amber-50' },
    { num: 4, name: 'ELIJO', icon: CheckSquare, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { num: 5, name: 'PRACTICO', icon: Wrench, color: 'text-teal-600', bg: 'bg-teal-50' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-md bg-teal-600 text-xs font-bold uppercase tracking-wider text-teal-100">
              Misión {mission.id}
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold leading-tight">{mission.title}</h2>
              <div className="text-xs text-teal-200 hidden sm:block">{mission.skillFocus}</div>
            </div>
          </div>
          <button
            onClick={() => {
              audioService.stopSpeaking();
              onExit();
            }}
            className="text-white/70 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/10 text-xs font-semibold transition-colors"
          >
            Volver al Mundo
          </button>
        </div>

        {/* 5-Station Stepper Navigation */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between shrink-0 overflow-x-auto">
          <div className="flex items-center gap-1 sm:gap-3 min-w-max mx-auto">
            {STATIONS.map((st) => {
              const Icon = st.icon;
              const isCurrent = currentStation === st.num;
              const isPast = currentStation > st.num;

              return (
                <div key={st.num} className="flex items-center">
                  <button
                    onClick={() => {
                      if (st.num < currentStation || isCompleted) {
                        audioService.playClick();
                        setCurrentStation(st.num);
                      }
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isCurrent
                        ? `${st.bg} ${st.color} ring-2 ring-current shadow-sm`
                        : isPast
                        ? 'text-teal-700 bg-teal-50/70 hover:bg-teal-100'
                        : 'text-slate-400 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>
                      {st.num}. {st.name}
                    </span>
                    {isPast && <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 ml-0.5" />}
                  </button>
                  {st.num < 5 && <div className="w-3 sm:w-6 h-0.5 bg-slate-200 mx-1 sm:mx-1.5" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Station Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          {/* =========================================
              ESTACIÓN 1: OBSERVO
             ========================================= */}
          {currentStation === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-600">
                    Estación 1: Observar la situación cotidiana
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    {missionContent.station1_observe.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleToggleNarration(
                      `${missionContent.station1_observe.title}. ${missionContent.station1_observe.sceneDescription}. ${missionContent.station1_observe.keyQuestion}`
                    )
                  }
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors shrink-0 ${
                    isSpeaking
                      ? 'bg-amber-100 text-amber-900 border-amber-300'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4 text-amber-600" /> : <Volume2 className="w-4 h-4 text-teal-600" />}
                  <span>{isSpeaking ? 'Pausar Voz' : 'Escuchar Historia'}</span>
                </button>
              </div>

              {/* Scene Context Description */}
              <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-100 text-slate-800 text-sm leading-relaxed">
                <p>{missionContent.station1_observe.sceneDescription}</p>
              </div>

              {/* Character Dialogues with visual speech bubbles */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Diálogos en la escena
                </div>
                {missionContent.station1_observe.dialogue.map((line, idx) => {
                  const speaker = line.speaker === 'narrador' ? null : CHARACTERS[line.speaker];
                  const isGuide = line.speaker === 'guia';

                  return (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all ${
                        isGuide
                          ? 'bg-teal-50/70 border-teal-200 text-teal-950'
                          : 'bg-white border-slate-200 text-slate-800'
                      }`}
                    >
                      {speaker && (
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0 shadow-sm"
                          style={{ backgroundColor: speaker.color }}
                        >
                          {speaker.name[0]}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900">
                            {speaker ? speaker.name : 'El Guía'}
                          </span>
                          {line.emotion && (
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium capitalize">
                              {line.emotion}
                            </span>
                          )}
                        </div>
                        <p className="text-sm mt-1 leading-relaxed">{line.text}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => audioService.speak(line.text)}
                        className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                        title="Escuchar este diálogo"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Guiding Question */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-amber-900">
                  Pregunta de reflexión: {missionContent.station1_observe.keyQuestion}
                </div>
              </div>
            </div>
          )}

          {/* =========================================
              ESTACIÓN 2: COMPRENDO
             ========================================= */}
          {currentStation === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-violet-600">
                    Estación 2: Mirar con ojos de empatía
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    {missionContent.station2_understand.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {missionContent.station2_understand.introduction}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleToggleNarration(
                      `${missionContent.station2_understand.title}. ${missionContent.station2_understand.introduction}`
                    )
                  }
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 hover:bg-slate-50 text-slate-700 shrink-0"
                >
                  <Volume2 className="w-4 h-4 text-teal-600" />
                  <span>Escuchar</span>
                </button>
              </div>

              {/* Character Perspective Selector Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
                {missionContent.station2_understand.perspectives.map((persp, idx) => {
                  const char = CHARACTERS[persp.characterId];
                  const isActive = activePerspectiveIndex === idx;

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        audioService.playClick();
                        setActivePerspectiveIndex(idx);
                      }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-violet-600 text-white shadow-sm ring-2 ring-violet-200'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: char.color }}
                      />
                      <span>Perspectiva de {char.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Perspective Empathy Card */}
              {missionContent.station2_understand.perspectives[activePerspectiveIndex] && (
                (() => {
                  const p = missionContent.station2_understand.perspectives[activePerspectiveIndex];
                  const char = CHARACTERS[p.characterId];

                  return (
                    <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/60 to-white p-6 space-y-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg shadow-sm"
                          style={{ backgroundColor: char.color }}
                        >
                          {char.name[0]}
                        </div>
                        <div>
                          <h4 className="text-base font-extrabold text-slate-900">{char.name}</h4>
                          <div className="text-xs text-slate-500">{char.role}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                          <div className="text-xs font-bold text-violet-700 uppercase tracking-wide">
                            ¿Qué siente en el cuerpo?
                          </div>
                          <div className="text-xs text-slate-700 leading-relaxed font-medium">
                            {p.feeling}
                          </div>
                        </div>
                        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                          <div className="text-xs font-bold text-sky-700 uppercase tracking-wide">
                            ¿Cómo ve la situación?
                          </div>
                          <div className="text-xs text-slate-700 leading-relaxed font-medium">
                            {p.perspective}
                          </div>
                        </div>
                        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                            ¿Qué necesita para sanar?
                          </div>
                          <div className="text-xs text-slate-700 leading-relaxed font-medium">
                            {p.need}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()
              )}

              {/* Empathy Reflection Prompt */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 italic flex items-center gap-3">
                <Heart className="w-5 h-5 text-rose-500 shrink-0" />
                <span>{missionContent.station2_understand.reflectionPrompt}</span>
              </div>
            </div>
          )}

          {/* =========================================
              ESTACIÓN 3: DESCUBRO
             ========================================= */}
          {currentStation === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Estación 3: Explorar alternativas y consecuencias
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  {missionContent.station3_discover.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {missionContent.station3_discover.guidance}
                </p>
              </div>

              {/* Alternatives List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {missionContent.station3_discover.alternatives.map((alt) => {
                  const isOptima = alt.type === 'optima';
                  const isConstructiva = alt.type === 'constructiva';

                  return (
                    <div
                      key={alt.id}
                      className={`p-5 rounded-2xl border flex flex-col justify-between space-y-4 transition-all ${
                        isOptima
                          ? 'bg-emerald-50/50 border-emerald-200 hover:border-emerald-300'
                          : isConstructiva
                          ? 'bg-amber-50/50 border-amber-200 hover:border-amber-300'
                          : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              isOptima
                                ? 'bg-emerald-200/60 text-emerald-900'
                                : isConstructiva
                                ? 'bg-amber-200/60 text-amber-900'
                                : 'bg-slate-200 text-slate-800'
                            }`}
                          >
                            {isOptima ? 'Camino de Oro' : isConstructiva ? 'Camino en Proceso' : 'Camino Reactivo'}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">{alt.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{alt.description}</p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-slate-200/60">
                        <div className="text-[11px] font-semibold text-slate-500 uppercase">
                          ¿Qué pasa si elijo esto?
                        </div>
                        <div className="text-xs text-slate-700 leading-relaxed">{alt.consequence}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* =========================================
              ESTACIÓN 4: ELIJO
             ========================================= */}
          {currentStation === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Estación 4: Tomar una decisión consciente
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  ¿Qué camino decides tomar?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Selecciona la alternativa con la que te identificas para reflexionar sobre sus aprendizajes:
                </p>
              </div>

              {/* Selectable Alternative Cards */}
              <div className="space-y-3">
                {missionContent.station3_discover.alternatives.map((alt) => {
                  const isSelected = selectedAlternative?.id === alt.id;

                  return (
                    <div
                      key={alt.id}
                      onClick={() => {
                        audioService.playClick();
                        setSelectedAlternative(alt);
                      }}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/20 shadow-sm'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-600 text-white'
                              : 'border-slate-300'
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-4 h-4" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-slate-900">{alt.title}</h4>
                          <p className="text-xs text-slate-600 mt-0.5">{alt.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Constructive Pedagogical Feedback on Chosen Alternative */}
              {selectedAlternative && (
                <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 space-y-2 animate-in fade-in duration-150">
                  <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Reflexión Pedagógica del Guía</span>
                  </div>
                  <p className="text-xs sm:text-sm text-teal-950 leading-relaxed">
                    {selectedAlternative.educationalReflection}
                  </p>
                  <div className="text-xs text-teal-700 italic pt-1">
                    {missionContent.station4_choose.closingReflection}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* =========================================
              ESTACIÓN 5: PRACTICO
             ========================================= */}
          {currentStation === 5 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-teal-600">
                  Estación 5: Practicar y afianzar la habilidad
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  {station5Data.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">{station5Data.instruction}</p>
              </div>

              {/* Activity Variant 1: Drag & Order Sequence */}
              {station5Data.type === 'drag_order' && (
                <div className="space-y-2.5">
                  {orderedItems.map((item, idx) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 font-black text-xs flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-slate-800">
                          {item.text}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          disabled={idx === 0}
                          onClick={() => moveItem(idx, 'up')}
                          className="px-2 py-1 text-xs rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          Subir
                        </button>
                        <button
                          type="button"
                          disabled={idx === orderedItems.length - 1}
                          onClick={() => moveItem(idx, 'down')}
                          className="px-2 py-1 text-xs rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          Bajar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Activity Variant 2: Assertive Filter / Thermometer */}
              {(station5Data.type === 'assertive_filter' ||
                station5Data.type === 'emotion_thermometer') && (
                <div className="space-y-4">
                  {station5Data.items?.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3"
                    >
                      <div className="text-xs sm:text-sm text-slate-800 font-medium">{item.text}</div>
                      <div className="flex flex-wrap gap-2">
                        {station5Data.targets?.map((target) => {
                          const isAssigned = dragTargetsState[item.id] === target.id;
                          return (
                            <button
                              key={target.id}
                              type="button"
                              onClick={() => handleAssignCategory(item.id, target.id)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                                isAssigned
                                  ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {target.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Activity Variant 2.5: Connect Pairs */}
              {station5Data.type === 'connect_pairs' && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200 text-xs text-sky-900 font-medium">
                    Haz clic en una frase y luego selecciona su contraparte empática para conectarlas:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {station5Data.items?.map((item) => {
                      const isSelected = selectedPairItem?.id === item.id;
                      const isMatched = matchedPairIds.includes(item.id);

                      return (
                        <div
                          key={item.id}
                          onClick={() => handleSelectPairItem(item)}
                          className={`cursor-pointer p-4 rounded-2xl border transition-all text-xs sm:text-sm font-medium ${
                            isMatched
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold shadow-xs'
                              : isSelected
                              ? 'bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 text-violet-950 shadow-sm'
                              : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span>{item.text}</span>
                            {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Activity Variant 3: Bridge Builder (Placing Planks) */}
              {station5Data.type === 'bridge_builder' && (
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900">
                    Haz clic en cada tablón para colocarlo firmemente en el Puente de la Convivencia:
                  </div>
                  {station5Data.items?.map((item, idx) => {
                    const isPlaced = dragTargetsState[item.id] === 'placed';

                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          audioService.playClick();
                          const updated = { ...dragTargetsState, [item.id]: 'placed' };
                          setDragTargetsState(updated);
                          if (
                            station5Data.items &&
                            Object.keys(updated).length === station5Data.items.length
                          ) {
                            audioService.playSuccess();
                            setActivityDone(true);
                          }
                        }}
                        className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center justify-between ${
                          isPlaced
                            ? 'bg-amber-100/80 border-amber-400 text-amber-950 font-semibold shadow-sm'
                            : 'bg-white border-slate-200 hover:border-amber-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="text-xs sm:text-sm">{item.text}</span>
                        </div>
                        <span className="text-xs font-bold">
                          {isPlaced ? '✓ Colocado' : '+ Colocar'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Activity Variant 4: Patience Guided Breathing */}
              {station5Data.type === 'patience_breath' && (
                <div className="text-center py-6 space-y-5">
                  <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-tr from-teal-300 via-emerald-200 to-sky-300 transition-all duration-1000 ${
                        breathPhase === 1 ? 'scale-125 opacity-90' : 'scale-90 opacity-60'
                      }`}
                    />
                    <div className="relative z-10 text-center px-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
                        {breathPhase === 0
                          ? 'Inhala...'
                          : breathPhase === 1
                          ? 'Sostén...'
                          : 'Exhala despacio...'}
                      </div>
                      <div className="text-xs text-slate-600 mt-1">Respira en paz</div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        audioService.playCalmChime();
                        setBreathPhase((prev) => (prev + 1) % 3);
                        setActivityDone(true);
                      }}
                      className="px-4 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 transition-colors"
                    >
                      Avanzar Ciclo de Respiración
                    </button>
                  </div>
                </div>
              )}

              {/* Completion Message Banner */}
              {activityDone && (
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-2 animate-in zoom-in-95 duration-150">
                  <div className="flex items-center gap-2 font-extrabold text-sm text-emerald-900">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>¡Excelente práctica! Has completado el desafío.</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">{station5Data.completionMessage}</p>
                  <div className="text-xs text-emerald-800 font-semibold pt-1">
                    Aprendizaje clave: {station5Data.skillTakeaway}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Station Navigation Bar */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
          <button
            type="button"
            disabled={currentStation === 1}
            onClick={handlePrevStation}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Estación Anterior</span>
          </button>

          {currentStation < 5 ? (
            <button
              type="button"
              onClick={handleNextStation}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-colors"
            >
              <span>Siguiente Estación</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinishMission}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md transition-all scale-105"
            >
              <Award className="w-4 h-4" />
              <span>¡Completar Misión y Recibir Insignia!</span>
            </button>
          )}
        </div>

        {/* Badge Unlocked Celebration Overlay */}
        {isCompleted && (
          <div className="absolute inset-0 z-30 bg-slate-900/95 flex items-center justify-center p-6 text-center text-white animate-in zoom-in-95 duration-200">
            <div className="max-w-md space-y-5">
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-200 text-slate-900 flex items-center justify-center shadow-2xl p-2 ring-4 ring-amber-400/30">
                <Award className="w-14 h-14 text-amber-900" />
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                  ¡Insignia Educativa Desbloqueada!
                </div>
                <h3 className="text-2xl font-black mt-1 text-white">{mission.badge.title}</h3>
                <div className="text-sm text-teal-200 font-semibold mt-0.5">
                  Habilidad: {mission.badge.skillName}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/10 p-4 rounded-2xl border border-white/10">
                {mission.badge.description}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    audioService.playClick();
                    onExit();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs shadow-lg transition-colors"
                >
                  Regresar al Mundo 3D
                </button>
                <button
                  type="button"
                  onClick={() => {
                    audioService.playClick();
                    setCurrentStation(1);
                    setIsCompleted(false);
                    setActivityDone(false);
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
                >
                  Repasar Misión
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
