export type GameMode = 'infantil' | 'juvenil' | 'adulto';

export type CharacterId = 'nico' | 'luna' | 'samuel' | 'sofia' | 'guia';

export type EmotionType = 'feliz' | 'curioso' | 'reflexivo' | 'preocupado' | 'entusiasmado' | 'calmado';

export interface Character {
  id: CharacterId;
  name: string;
  role: string;
  trait: string;
  description: string;
  color: string;
  accentColor: string;
  avatarUrl?: string;
  personality: string[];
}

export type ZoneId =
  | 'pequena_ciudad'
  | 'escuela'
  | 'parque'
  | 'jardin'
  | 'puente'
  | 'plaza'
  | 'aventura';

export interface GameZone {
  id: ZoneId;
  name: string;
  tagline: string;
  description: string;
  position3D: [number, number, number];
  color: string;
  iconName: string;
  primaryMissions: number[];
  charactersPresent: CharacterId[];
}

export interface DialogueLine {
  speaker: CharacterId | 'narrador';
  text: string;
  emotion?: EmotionType;
}

export interface EmpathyPerspective {
  characterId: CharacterId;
  emotion: EmotionType;
  feeling: string;
  perspective: string;
  need: string;
}

export interface MissionAlternative {
  id: string;
  title: string;
  description: string;
  consequence: string;
  educationalReflection: string;
  type: 'optima' | 'constructiva' | 'exploratoria';
  icon: string;
}

export type PracticeActivityType =
  | 'drag_order'
  | 'emotion_thermometer'
  | 'connect_pairs'
  | 'bridge_builder'
  | 'assertive_filter'
  | 'patience_breath';

export interface PracticeActivity {
  type: PracticeActivityType;
  title: string;
  instruction: string;
  items?: {
    id: string;
    text: string;
    correctOrder?: number;
    matchId?: string;
    category?: string;
  }[];
  targets?: {
    id: string;
    label: string;
  }[];
  breathSteps?: {
    action: string;
    seconds: number;
    tip: string;
  }[];
  completionMessage: string;
  skillTakeaway: string;
}

export interface MissionContent {
  station1_observe: {
    title: string;
    sceneDescription: string;
    dialogue: DialogueLine[];
    keyQuestion: string;
  };
  station2_understand: {
    title: string;
    introduction: string;
    perspectives: EmpathyPerspective[];
    reflectionPrompt: string;
  };
  station3_discover: {
    title: string;
    guidance: string;
    alternatives: MissionAlternative[];
  };
  station4_choose: {
    title: string;
    closingReflection: string;
  };
  station5_practice: PracticeActivity;
}

export interface MissionBadge {
  id: string;
  title: string;
  skillName: string;
  description: string;
  icon: string;
  color: string;
}

export interface Mission {
  id: number;
  title: string;
  subtitle: string;
  skillFocus: string;
  zoneId: ZoneId;
  primaryCharacters: CharacterId[];
  badge: MissionBadge;
  modes: Record<GameMode, MissionContent>;
}

export interface UserProgress {
  completedMissions: number[];
  unlockedZones: ZoneId[];
  earnedBadges: string[];
  reflections: {
    missionId: number;
    date: string;
    mode: GameMode;
    decisionTaken: string;
    keyLearning: string;
  }[];
  currentMode: GameMode;
  audioSettings: {
    soundFx: boolean;
    voiceNarration: boolean;
    speechRate: number;
    volume: number;
  };
  activeZoneId: ZoneId | null;
  activeMissionId: number | null;
  viewMode: '3d' | 'illustrated_map';
}

// --- MI REFLEXIÓN DIARIA ---

export type DailyEmotionId =
  | 'alegria'
  | 'calma'
  | 'curiosidad'
  | 'orgullo'
  | 'duda'
  | 'tristeza'
  | 'enojo'
  | 'cansancio';

export interface DailyReflectionEntry {
  id: string;
  dateISO: string; // YYYY-MM-DD
  createdAt: string;
  updatedAt: string;
  emotion: DailyEmotionId;
  learnedToday: string;
  extraNote?: string;
}

// --- MATEMÁTICAS INTELIGENTES ---

export type MathTopicId =
  | 'sumas'
  | 'restas'
  | 'multiplicaciones'
  | 'divisiones'
  | 'fracciones'
  | 'decimales'
  | 'geometria'
  | 'medidas'
  | 'problemas'
  | 'retos';

export type MathLevel = 1 | 2 | 3;

export type MathVisualDiagram =
  | {
      kind: 'fraction_bar';
      numerator: number;
      denominator: number;
      label?: string;
    }
  | {
      kind: 'geometry_shape';
      shape: 'square' | 'rectangle' | 'triangle' | 'circle';
      dimensions: string[];
      highlight?: 'perimeter' | 'area' | 'sides';
    }
  | {
      kind: 'ruler_measure';
      startCm: number;
      endCm: number;
      unit: string;
    }
  | {
      kind: 'number_groups';
      groups: number;
      perGroup: number;
      operation: 'add' | 'multiply' | 'divide';
    };

export interface MathExercise {
  id: string;
  topicId: MathTopicId;
  level: MathLevel;
  title: string;
  conceptExplanation: string;
  workedExample: {
    problem: string;
    steps: string[];
    result: string;
  };
  question: string;
  hint: string;
  answerType: 'number' | 'choice' | 'text';
  choices?: string[];
  correctAnswer: string;
  acceptedAnswers?: string[];
  unitLabel?: string;
  visualDiagram?: MathVisualDiagram;
  stepByStepCorrection: string[];
  positiveFeedback: string;
  isGenerated?: boolean;
}

export interface MathTopicMeta {
  id: MathTopicId;
  name: string;
  shortDescription: string;
  color: string;
  accentBg: string;
  iconName: string;
}

export interface MathTopicProgress {
  attempts: number;
  correct: number;
  unlockedLevel: MathLevel;
  completedIds: string[];
  lastPracticedAt?: string;
}

export type MathProgressState = Record<MathTopicId, MathTopicProgress>;

