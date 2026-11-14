import React, { useState, useEffect, useMemo } from 'react';
import { DailyEmotionId, DailyReflectionEntry } from '../../types/game';
import { audioService } from '../../services/audioService';
import dailyJournalImg from '../../assets/images/daily_reflection_journal_1794688256504.jpg';
import {
  BookHeart,
  Calendar,
  CheckCircle2,
  Edit3,
  Lock,
  Plus,
  Trash2,
  Volume2,
  X,
  RotateCcw
} from 'lucide-react';

interface DailyReflectionModalProps {
  entries: DailyReflectionEntry[];
  onSaveEntry: (entry: DailyReflectionEntry) => void;
  onDeleteEntry: (id: string) => void;
  onClose: () => void;
}

export const DAILY_EMOTIONS: {
  id: DailyEmotionId;
  label: string;
  description: string;
  bgClass: string;
  activeBorder: string;
  faceColor: string;
  accentColor: string;
}[] = [
  {
    id: 'alegria',
    label: 'Alegría',
    description: 'Me sentí contento o con entusiasmo',
    bgClass: 'bg-amber-50 hover:bg-amber-100/80',
    activeBorder: 'border-amber-500 ring-2 ring-amber-400/30 bg-amber-50',
    faceColor: '#fef3c7',
    accentColor: '#d97706'
  },
  {
    id: 'calma',
    label: 'Calma',
    description: 'Me sentí tranquilo y en paz',
    bgClass: 'bg-teal-50 hover:bg-teal-100/80',
    activeBorder: 'border-teal-500 ring-2 ring-teal-400/30 bg-teal-50',
    faceColor: '#ccfbf1',
    accentColor: '#0d9488'
  },
  {
    id: 'curiosidad',
    label: 'Curiosidad',
    description: 'Tuve ganas de descubrir y preguntar',
    bgClass: 'bg-sky-50 hover:bg-sky-100/80',
    activeBorder: 'border-sky-500 ring-2 ring-sky-400/30 bg-sky-50',
    faceColor: '#e0f2fe',
    accentColor: '#0284c7'
  },
  {
    id: 'orgullo',
    label: 'Orgullo sano',
    description: 'Logré esforzarme o ayudar a alguien',
    bgClass: 'bg-emerald-50 hover:bg-emerald-100/80',
    activeBorder: 'border-emerald-500 ring-2 ring-emerald-400/30 bg-emerald-50',
    faceColor: '#d1fae5',
    accentColor: '#059669'
  },
  {
    id: 'duda',
    label: 'Pensativo',
    description: 'Tuve dudas o algo me costó trabajo',
    bgClass: 'bg-violet-50 hover:bg-violet-100/80',
    activeBorder: 'border-violet-500 ring-2 ring-violet-400/30 bg-violet-50',
    faceColor: '#ede9fe',
    accentColor: '#7c3aed'
  },
  {
    id: 'tristeza',
    label: 'Tristeza',
    description: 'Sentí pena o necesité un abrazo',
    bgClass: 'bg-indigo-50 hover:bg-indigo-100/80',
    activeBorder: 'border-indigo-500 ring-2 ring-indigo-400/30 bg-indigo-50',
    faceColor: '#e0e7ff',
    accentColor: '#4f46e5'
  },
  {
    id: 'enojo',
    label: 'Frustración',
    description: 'Algo me molestó o me hizo enojar',
    bgClass: 'bg-rose-50 hover:bg-rose-100/80',
    activeBorder: 'border-rose-500 ring-2 ring-rose-400/30 bg-rose-50',
    faceColor: '#ffe4e6',
    accentColor: '#e11d48'
  },
  {
    id: 'cansancio',
    label: 'Cansancio',
    description: 'Me sentí con poca energía hoy',
    bgClass: 'bg-slate-100 hover:bg-slate-200/70',
    activeBorder: 'border-slate-500 ring-2 ring-slate-400/30 bg-slate-100',
    faceColor: '#f1f5f9',
    accentColor: '#475569'
  }
];

export const EmotionIllustration: React.FC<{ emotion: DailyEmotionId; size?: number }> = ({
  emotion,
  size = 44
}) => {
  const meta = DAILY_EMOTIONS.find((e) => e.id === emotion) || DAILY_EMOTIONS[0];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="24" cy="24" r="21" fill={meta.faceColor} stroke={meta.accentColor} strokeWidth="2.4" />
      {emotion === 'alegria' && (
        <>
          <circle cx="17" cy="19" r="2.3" fill={meta.accentColor} />
          <circle cx="31" cy="19" r="2.3" fill={meta.accentColor} />
          <path d="M15 27C17.5 32 30.5 32 33 27" stroke={meta.accentColor} strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="13" cy="24" r="2.2" fill="#fca5a5" opacity="0.65" />
          <circle cx="35" cy="24" r="2.2" fill="#fca5a5" opacity="0.65" />
        </>
      )}
      {emotion === 'calma' && (
        <>
          <path d="M14 20C15.5 18 18.5 18 20 20" stroke={meta.accentColor} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M28 20C29.5 18 32.5 18 34 20" stroke={meta.accentColor} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M17 28C20 30.5 28 30.5 31 28" stroke={meta.accentColor} strokeWidth="2.4" strokeLinecap="round" />
        </>
      )}
      {emotion === 'curiosidad' && (
        <>
          <circle cx="17" cy="19" r="2.8" fill={meta.accentColor} />
          <circle cx="31" cy="18" r="3.2" fill={meta.accentColor} />
          <path d="M28 13C30 11.5 33 11.5 34.5 13" stroke={meta.accentColor} strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="30" r="3" stroke={meta.accentColor} strokeWidth="2.3" />
        </>
      )}
      {emotion === 'orgullo' && (
        <>
          <path d="M14 19L17 17L20 19" stroke={meta.accentColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 19L31 17L34 19" stroke={meta.accentColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 27C18 32 30 32 33 27" stroke={meta.accentColor} strokeWidth="2.6" strokeLinecap="round" />
          <path d="M36 9L37.5 12L40.5 12.5L38.2 14.5L38.8 17.5L36 16L33.2 17.5L33.8 14.5L31.5 12.5L34.5 12L36 9Z" fill="#f59e0b" />
        </>
      )}
      {emotion === 'duda' && (
        <>
          <circle cx="17" cy="20" r="2.2" fill={meta.accentColor} />
          <circle cx="31" cy="19" r="2.2" fill={meta.accentColor} />
          <path d="M17 30C20 28.5 27 31 31 28.5" stroke={meta.accentColor} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M28 14H34" stroke={meta.accentColor} strokeWidth="2" strokeLinecap="round" />
        </>
      )}
      {emotion === 'tristeza' && (
        <>
          <circle cx="17" cy="20" r="2.2" fill={meta.accentColor} />
          <circle cx="31" cy="20" r="2.2" fill={meta.accentColor} />
          <path d="M16 31C19 27.5 29 27.5 32 31" stroke={meta.accentColor} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M33 24C33 25.8 31.8 27 30.8 27C29.8 27 29.5 25.5 31 23.5" fill="#60a5fa" />
        </>
      )}
      {emotion === 'enojo' && (
        <>
          <path d="M14 16L20 19" stroke={meta.accentColor} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M34 16L28 19" stroke={meta.accentColor} strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="17" cy="21" r="2.1" fill={meta.accentColor} />
          <circle cx="31" cy="21" r="2.1" fill={meta.accentColor} />
          <path d="M17 31C20 28 28 28 31 31" stroke={meta.accentColor} strokeWidth="2.4" strokeLinecap="round" />
        </>
      )}
      {emotion === 'cansancio' && (
        <>
          <path d="M14 21H20" stroke={meta.accentColor} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M28 21H34" stroke={meta.accentColor} strokeWidth="2.4" strokeLinecap="round" />
          <ellipse cx="24" cy="30" rx="4" ry="2.2" stroke={meta.accentColor} strokeWidth="2.2" />
        </>
      )}
    </svg>
  );
};

const DRAFT_STORAGE_KEY = 'jairrestaura_daily_reflection_draft';

const getTodayISO = (): string => {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const formatDisplayDate = (dateISO: string): string => {
  const today = getTodayISO();
  if (dateISO === today) return 'Hoy';
  const [y, m, d] = dateISO.split('-').map(Number);
  if (!y || !m || !d) return dateISO;
  const dateObj = new Date(y, m - 1, d);
  return dateObj.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

export const DailyReflectionModal: React.FC<DailyReflectionModalProps> = ({
  entries,
  onSaveEntry,
  onDeleteEntry,
  onClose
}) => {
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [dateISO, setDateISO] = useState<string>(getTodayISO());
  const [selectedEmotion, setSelectedEmotion] = useState<DailyEmotionId>('alegria');
  const [learnedToday, setLearnedToday] = useState<string>(() => {
    try {
      const draft = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (draft) {
        const parsed = JSON.parse(draft);
        return parsed.learnedToday || '';
      }
    } catch {
      // ignore
    }
    return '';
  });

  const [filterEmotion, setFilterEmotion] = useState<DailyEmotionId | 'todas'>('todas');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [savedNotice, setSavedNotice] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Auto-save local draft while writing (only when creating a new reflection)
  useEffect(() => {
    if (editingId) return;
    try {
      localStorage.setItem(
        DRAFT_STORAGE_KEY,
        JSON.stringify({ emotion: selectedEmotion, learnedToday, dateISO })
      );
    } catch {
      // ignore
    }
  }, [selectedEmotion, learnedToday, dateISO, editingId]);

  const handleResetForm = () => {
    setEditingId(null);
    setDateISO(getTodayISO());
    setSelectedEmotion('alegria');
    setLearnedToday('');
    setValidationError(null);
    try {
      localStorage.removeItem(DRAFT_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = learnedToday.trim();
    if (!cleaned) {
      setValidationError('Escribe al menos una frase breve sobre lo que aprendiste o viviste hoy.');
      return;
    }

    setValidationError(null);
    const nowIso = new Date().toISOString();
    const existing = editingId ? entries.find((item) => item.id === editingId) : undefined;

    const entry: DailyReflectionEntry = {
      id: editingId || `ref-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      dateISO,
      createdAt: existing?.createdAt || nowIso,
      updatedAt: nowIso,
      emotion: selectedEmotion,
      learnedToday: cleaned
    };

    audioService.playSuccess();
    onSaveEntry(entry);
    setSavedNotice(
      editingId
        ? 'Tu reflexión fue actualizada en este dispositivo.'
        : '¡Reflexión guardada con su fecha en tu diario local!'
    );
    setTimeout(() => setSavedNotice(null), 3500);
    handleResetForm();
  };

  const handleStartEdit = (entry: DailyReflectionEntry) => {
    audioService.playClick();
    setEditingId(entry.id);
    setDateISO(entry.dateISO);
    setSelectedEmotion(entry.emotion);
    setLearnedToday(entry.learnedToday);
    setValidationError(null);
    setConfirmDeleteId(null);
  };

  const groupedByDate = useMemo(() => {
    const filtered =
      filterEmotion === 'todas'
        ? entries
        : entries.filter((item) => item.emotion === filterEmotion);

    const sorted = [...filtered].sort((a, b) => {
      if (a.dateISO !== b.dateISO) return b.dateISO.localeCompare(a.dateISO);
      return b.updatedAt.localeCompare(a.updatedAt);
    });

    const groups: { dateISO: string; items: DailyReflectionEntry[] }[] = [];
    for (const item of sorted) {
      const last = groups[groups.length - 1];
      if (last && last.dateISO === item.dateISO) {
        last.items.push(item);
      } else {
        groups.push({ dateISO: item.dateISO, items: [item] });
      }
    }
    return groups;
  }, [entries, filterEmotion]);

  const QUICK_PROMPTS = [
    'Hoy aprendí a tener paciencia cuando...',
    'Me di cuenta de que escuchar ayuda a...',
    'Hoy practiqué un ejercicio de matemáticas sobre...',
    'Agradezco el apoyo que recibí de...'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 flex items-center justify-center p-2 sm:p-6">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header with Coherent Journal Artwork */}
        <div className="relative bg-gradient-to-r from-violet-800 via-teal-800 to-slate-900 text-white shrink-0 overflow-hidden">
          {!heroImgFailed && (
            <img
              src={dailyJournalImg}
              alt="Diario ilustrado de Mi Reflexión Diaria en el Jardín de la Calma"
              referrerPolicy="no-referrer"
              onError={() => setHeroImgFailed(true)}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          )}
          <div className="relative z-10 px-5 sm:px-7 py-5 flex items-center justify-between gap-4 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-amber-200 shrink-0">
                <BookHeart className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Mi Reflexión Diaria
                </h2>
                <p className="text-xs sm:text-sm text-teal-100">
                  Un espacio seguro y privado para reconocer cómo te sentiste y qué aprendiste hoy
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() =>
                  audioService.speak(
                    'Bienvenido a Mi Reflexión Diaria. Elige cómo te sentiste hoy con los dibujos de emociones y escribe algo que hayas aprendido. Todo se guarda únicamente en tu dispositivo.'
                  )
                }
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-bold text-white transition-colors"
                title="Escuchar instrucciones"
              >
                <Volume2 className="w-4 h-4" />
                <span>Escuchar guía</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  audioService.stopSpeaking();
                  onClose();
                }}
                aria-label="Cerrar Mi Reflexión Diaria"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Privacy Banner */}
        <div className="bg-emerald-50 border-b border-emerald-200 px-5 sm:px-7 py-2.5 flex items-center justify-between gap-3 text-xs text-emerald-950 shrink-0">
          <div className="flex items-center gap-2 font-medium">
            <Lock className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              <strong>Privacidad total:</strong> tus reflexiones se guardan solo en este dispositivo.
              No se envían a servidores externos ni se comparten con inteligencia artificial.
            </span>
          </div>
          <span className="hidden md:inline text-[11px] font-bold text-emerald-800 whitespace-nowrap tabular-nums">
            {entries.length} {entries.length === 1 ? 'reflexión guardada' : 'reflexiones guardadas'}
          </span>
        </div>

        {/* Main 2-Column Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50/50">
          {/* Left Column: Reflection Editor */}
          <form onSubmit={handleSubmit} className="lg:col-span-6 space-y-5 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                  {editingId ? 'Editar reflexión guardada' : 'Nueva reflexión de hoy'}
                </h3>
                <p className="text-xs text-slate-500">
                  Tómate un momento tranquilo para mirar tu día con amabilidad
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-teal-600 shrink-0" />
                <input
                  type="date"
                  value={dateISO}
                  max={getTodayISO()}
                  onChange={(e) => setDateISO(e.target.value || getTodayISO())}
                  aria-label="Fecha de la reflexión"
                  className="text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Question 1: ¿Cómo te sentiste hoy? */}
            <div className="space-y-2.5">
              <label className="block text-sm font-extrabold text-slate-900">
                1. ¿Cómo te sentiste hoy?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {DAILY_EMOTIONS.map((em) => {
                  const isSelected = selectedEmotion === em.id;
                  return (
                    <button
                      key={em.id}
                      type="button"
                      onClick={() => {
                        audioService.playClick();
                        setSelectedEmotion(em.id);
                      }}
                      className={`p-3 rounded-2xl border text-center flex flex-col items-center justify-center gap-1.5 min-h-[92px] transition-all ${
                        isSelected ? em.activeBorder : `border-slate-200 ${em.bgClass}`
                      }`}
                      aria-pressed={isSelected}
                    >
                      <EmotionIllustration emotion={em.id} size={40} />
                      <span className="text-xs font-bold text-slate-900 leading-tight">{em.label}</span>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-slate-500">
                Selección actual:{' '}
                <strong className="text-slate-800">
                  {DAILY_EMOTIONS.find((e) => e.id === selectedEmotion)?.label}
                </strong>{' '}
                — {DAILY_EMOTIONS.find((e) => e.id === selectedEmotion)?.description}
              </p>
            </div>

            {/* Question 2: ¿Qué aprendiste hoy? */}
            <div className="space-y-2">
              <label htmlFor="daily-learned-input" className="block text-sm font-extrabold text-slate-900">
                2. ¿Qué aprendiste hoy?
              </label>
              <textarea
                id="daily-learned-input"
                rows={4}
                value={learnedToday}
                onChange={(e) => {
                  setLearnedToday(e.target.value);
                  if (validationError) setValidationError(null);
                }}
                placeholder="Escribe lo que descubriste, algo que practicaste o un momento importante de tu día..."
                className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 leading-relaxed"
              />

              {/* Helpful Starter Prompts */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-semibold text-slate-500">
                  Ideas opcionales para comenzar a escribir:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => {
                        audioService.playClick();
                        setLearnedToday((prev) => (prev.trim() ? `${prev.trim()} ${prompt}` : prompt));
                      }}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-800 border border-slate-200 transition-colors text-left"
                    >
                      + {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {validationError && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900">
                {validationError}
              </div>
            )}

            {savedNotice && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{savedNotice}</span>
              </div>
            )}

            {/* Submit & Cancel Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
              {editingId ? (
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Cancelar edición</span>
                </button>
              ) : (
                <span className="text-[11px] text-slate-400">
                  Borrador protegido localmente mientras escribes
                </span>
              )}

              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm shadow-sm flex items-center gap-2 transition-colors ml-auto"
              >
                <Plus className="w-4 h-4" />
                <span>{editingId ? 'Guardar cambios' : 'Guardar reflexión'}</span>
              </button>
            </div>
          </form>

          {/* Right Column: Organized History by Date */}
          <div className="lg:col-span-6 space-y-4 flex flex-col">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Historial organizado por fechas
                  </h3>
                  <p className="text-xs text-slate-500">
                    Consulta, edita o elimina tus notas cuando lo necesites
                  </p>
                </div>
                <select
                  value={filterEmotion}
                  onChange={(e) => setFilterEmotion(e.target.value as DailyEmotionId | 'todas')}
                  aria-label="Filtrar reflexiones por emoción"
                  className="text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="todas">Todas las emociones ({entries.length})</option>
                  {DAILY_EMOTIONS.map((em) => (
                    <option key={em.id} value={em.id}>
                      {em.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Entries List */}
            <div className="space-y-4 flex-1 overflow-y-auto pr-1">
              {groupedByDate.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-teal-50 flex items-center justify-center">
                    <EmotionIllustration emotion="curiosidad" size={40} />
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900">
                    {entries.length === 0
                      ? 'Tu diario está listo para tu primera reflexión'
                      : 'No hay reflexiones con esa emoción todavía'}
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Elige una emoción en el panel izquierdo y escribe algo que hayas aprendido hoy.
                    Cada registro quedará ordenado por fecha automáticamente.
                  </p>
                </div>
              ) : (
                groupedByDate.map((group) => (
                  <div key={group.dateISO} className="space-y-2.5">
                    <div className="flex items-center gap-2 px-1">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-teal-800 capitalize">
                        {formatDisplayDate(group.dateISO)}
                      </span>
                      <span className="text-[11px] text-slate-400 tabular-nums">({group.dateISO})</span>
                      <div className="h-px bg-slate-200 flex-1" />
                    </div>

                    {group.items.map((entry) => {
                      const emotionMeta =
                        DAILY_EMOTIONS.find((e) => e.id === entry.emotion) || DAILY_EMOTIONS[0];
                      const isConfirmingDelete = confirmDeleteId === entry.id;

                      return (
                        <article
                          key={entry.id}
                          className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <EmotionIllustration emotion={entry.emotion} size={38} />
                              <div>
                                <div className="text-sm font-extrabold text-slate-900">
                                  {emotionMeta.label}
                                </div>
                                <div className="text-[11px] text-slate-400">
                                  Guardada a las{' '}
                                  {new Date(entry.updatedAt).toLocaleTimeString('es-ES', {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                  })}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              <button
                                type="button"
                                onClick={() => handleStartEdit(entry)}
                                className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-800 text-xs font-bold flex items-center gap-1 transition-colors"
                                title="Editar reflexión"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                                <span>Editar</span>
                              </button>

                              {!isConfirmingDelete ? (
                                <button
                                  type="button"
                                  onClick={() => setConfirmDeleteId(entry.id)}
                                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-700 text-xs font-bold flex items-center gap-1 transition-colors"
                                  title="Eliminar reflexión"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                  <span className="sr-only sm:not-sr-only">Eliminar</span>
                                </button>
                              ) : (
                                <div className="flex items-center gap-1">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      audioService.playClick();
                                      onDeleteEntry(entry.id);
                                      if (editingId === entry.id) handleResetForm();
                                      setConfirmDeleteId(null);
                                    }}
                                    className="px-2.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors"
                                  >
                                    Confirmar
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setConfirmDeleteId(null)}
                                    className="px-2 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors"
                                  >
                                    No
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>

                          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                            {entry.learnedToday}
                          </p>
                        </article>
                      );
                    })}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
