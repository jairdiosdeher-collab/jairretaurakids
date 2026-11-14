import React, { useState } from 'react';
import { GAME_ZONES, ALL_ZONE_IDS } from '../../data/zones';
import { CHARACTERS } from '../../data/characters';
import { MISSIONS } from '../../data/missions';
import { ZoneId } from '../../types/game';
import { audioService } from '../../services/audioService';
import heroWorldImg from '../../assets/images/hero_world_solutions_cover_1794499386266.jpg';
import mathStudioImg from '../../assets/images/math_smart_studio_1794688256069.jpg';
import dailyJournalImg from '../../assets/images/daily_reflection_journal_1794688256504.jpg';
import progressAtlasImg from '../../assets/images/educational_progress_atlas_1794688257252.jpg';
import {
  Trees,
  GraduationCap,
  Flower2,
  GitMerge,
  Home,
  Users,
  Compass,
  CheckCircle2,
  Play,
  Calculator,
  BookHeart,
  TrendingUp
} from 'lucide-react';

interface IllustratedMapProps {
  activeZoneId: ZoneId | null;
  onSelectZone: (zoneId: ZoneId) => void;
  onOpenMission: (missionId: number) => void;
  onOpenMathStudio?: () => void;
  onOpenDailyReflection?: () => void;
  onOpenProgressDashboard?: () => void;
  completedMissions: number[];
}

export const IllustratedMap: React.FC<IllustratedMapProps> = ({
  activeZoneId,
  onSelectZone,
  onOpenMission,
  onOpenMathStudio,
  onOpenDailyReflection,
  onOpenProgressDashboard,
  completedMissions
}) => {
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [failedCards, setFailedCards] = useState<Record<string, boolean>>({});

  const getZoneIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trees':
        return <Trees className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Flower2':
        return <Flower2 className="w-5 h-5" />;
      case 'GitMerge':
        return <GitMerge className="w-5 h-5" />;
      case 'Home':
        return <Home className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full h-full min-h-[500px] overflow-y-auto p-4 sm:p-8 pb-28 bg-gradient-to-b from-sky-50 via-emerald-50/40 to-amber-50/30">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-sm">
          {!heroImgFailed && (
            <div className="relative h-40 sm:h-52 w-full overflow-hidden">
              <img
                src={heroWorldImg}
                alt="Vista panorámica de El Mundo de las Soluciones"
                referrerPolicy="no-referrer"
                onError={() => setHeroImgFailed(true)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4 text-white">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-300">
                    Mapa Ilustrado de Navegación Ligera
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                    El Mundo de las Soluciones
                  </h2>
                </div>
                <div className="hidden sm:block bg-slate-900/85 border border-white/15 px-4 py-2 rounded-xl text-center shrink-0">
                  <div className="text-xl font-black text-teal-300 tabular-nums">
                    {completedMissions.length} <span className="text-xs text-slate-300 font-normal">/ 12</span>
                  </div>
                  <div className="text-[11px] text-slate-200 font-medium">Misiones</div>
                </div>
              </div>
            </div>
          )}
          <div className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-slate-600 max-w-2xl">
              Explora los 7 escenarios de convivencia, conoce a sus personajes y vive las 12 misiones
              educativas para aprender a vivir, comprender y construir juntos.
            </p>
            {heroImgFailed && (
              <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl shrink-0">
                <div className="text-center">
                  <div className="text-2xl font-black text-teal-600 tabular-nums">
                    {completedMissions.length} <span className="text-sm text-slate-400 font-normal">/ 12</span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Misiones Completadas</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Educational Modules Quick Launch */}
        {(onOpenMathStudio || onOpenDailyReflection || onOpenProgressDashboard) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {onOpenMathStudio && (
              <button
                type="button"
                onClick={() => {
                  audioService.playClick();
                  onOpenMathStudio();
                }}
                className="group text-left rounded-2xl bg-white border border-slate-200 hover:border-sky-400 shadow-xs hover:shadow-md overflow-hidden transition-all flex flex-col"
              >
                <div className="h-28 w-full overflow-hidden bg-gradient-to-br from-sky-100 to-teal-50 relative flex items-center justify-center">
                  {!failedCards.math ? (
                    <img
                      src={mathStudioImg}
                      alt="Matemáticas Inteligentes"
                      referrerPolicy="no-referrer"
                      onError={() => setFailedCards((p) => ({ ...p, math: true }))}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <Calculator className="w-10 h-10 text-sky-600" />
                  )}
                </div>
                <div className="p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-sky-700">
                    <Calculator className="w-4 h-4" />
                    <span>Matemáticas Inteligentes</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    10 temas con ejemplos resueltos, figuras visuales y explicación paso a paso.
                  </p>
                </div>
              </button>
            )}

            {onOpenDailyReflection && (
              <button
                type="button"
                onClick={() => {
                  audioService.playClick();
                  onOpenDailyReflection();
                }}
                className="group text-left rounded-2xl bg-white border border-slate-200 hover:border-violet-400 shadow-xs hover:shadow-md overflow-hidden transition-all flex flex-col"
              >
                <div className="h-28 w-full overflow-hidden bg-gradient-to-br from-violet-100 to-amber-50 relative flex items-center justify-center">
                  {!failedCards.reflection ? (
                    <img
                      src={dailyJournalImg}
                      alt="Mi Reflexión Diaria"
                      referrerPolicy="no-referrer"
                      onError={() => setFailedCards((p) => ({ ...p, reflection: true }))}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <BookHeart className="w-10 h-10 text-violet-600" />
                  )}
                </div>
                <div className="p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-violet-700">
                    <BookHeart className="w-4 h-4" />
                    <span>Mi Reflexión Diaria</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Registra cómo te sentiste y qué aprendiste hoy. Privado en tu dispositivo.
                  </p>
                </div>
              </button>
            )}

            {onOpenProgressDashboard && (
              <button
                type="button"
                onClick={() => {
                  audioService.playClick();
                  onOpenProgressDashboard();
                }}
                className="group text-left rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 shadow-xs hover:shadow-md overflow-hidden transition-all flex flex-col"
              >
                <div className="h-28 w-full overflow-hidden bg-gradient-to-br from-emerald-100 to-sky-50 relative flex items-center justify-center">
                  {!failedCards.progress ? (
                    <img
                      src={progressAtlasImg}
                      alt="Panel de Progreso Educativo"
                      referrerPolicy="no-referrer"
                      onError={() => setFailedCards((p) => ({ ...p, progress: true }))}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <TrendingUp className="w-10 h-10 text-emerald-600" />
                  )}
                </div>
                <div className="p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-700">
                    <TrendingUp className="w-4 h-4" />
                    <span>Panel de Progreso Educativo</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Visualiza tus misiones, avances matemáticos, insignias y temas sugeridos.
                  </p>
                </div>
              </button>
            )}
          </div>
        )}

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ALL_ZONE_IDS.map((zoneId) => {
            const zone = GAME_ZONES[zoneId];
            const zoneMissions = MISSIONS.filter((m) => m.zoneId === zoneId);
            const isSelected = activeZoneId === zoneId;
            const completedInZone = zoneMissions.filter((m) =>
              completedMissions.includes(m.id)
            ).length;

            return (
              <div
                key={zoneId}
                onClick={() => {
                  audioService.playClick();
                  onSelectZone(zoneId);
                }}
                className={`group cursor-pointer rounded-2xl border transition-all duration-200 overflow-hidden bg-white shadow-sm hover:shadow-md ${
                  isSelected
                    ? 'border-teal-500 ring-2 ring-teal-500/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Zone Card Header */}
                <div
                  className="p-5 border-b border-slate-100 flex items-start justify-between"
                  style={{ borderTop: `4px solid ${zone.color}` }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                      style={{ backgroundColor: zone.color }}
                    >
                      {getZoneIcon(zone.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {zone.name}
                      </h3>
                      <div className="text-xs text-slate-500">{zone.tagline}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                    {completedInZone}/{zoneMissions.length}
                  </span>
                </div>

                {/* Zone Description */}
                <div className="p-5 space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">{zone.description}</p>

                  {/* Characters residing in zone */}
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Personajes en esta zona
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {zone.charactersPresent.map((cId) => {
                        const char = CHARACTERS[cId];
                        return (
                          <span
                            key={cId}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 border border-slate-200 text-slate-700"
                          >
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: char.color }}
                            />
                            {char.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Missions list in zone */}
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Misiones Disponibles
                    </div>
                    <div className="space-y-2">
                      {zoneMissions.map((m) => {
                        const isDone = completedMissions.includes(m.id);
                        return (
                          <div
                            key={m.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              audioService.playClick();
                              onOpenMission(m.id);
                            }}
                            className={`p-3 rounded-xl border flex items-center justify-between text-left transition-colors ${
                              isDone
                                ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                                : 'bg-slate-50/70 border-slate-200 hover:bg-teal-50 hover:border-teal-300 text-slate-800'
                            }`}
                          >
                            <div className="min-w-0 pr-2">
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-teal-700">Misión {m.id}</span>
                                {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                              </div>
                              <div className="text-xs font-medium truncate mt-0.5">{m.title}</div>
                              <div className="text-[11px] text-slate-500 truncate">{m.skillFocus}</div>
                            </div>
                            <button
                              type="button"
                              className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                                isDone
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-teal-600 text-white hover:bg-teal-700'
                              }`}
                              title={isDone ? 'Volver a jugar misión' : 'Iniciar misión'}
                            >
                              <Play className="w-4 h-4 ml-0.5" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
