import React from 'react';
import { GameMode } from '../../types/game';
import { audioService } from '../../services/audioService';
import { Sparkles, Users, Briefcase, CheckCircle2, X } from 'lucide-react';

interface ModeSelectorModalProps {
  currentMode: GameMode;
  onSelectMode: (mode: GameMode) => void;
  onClose: () => void;
}

export const ModeSelectorModal: React.FC<ModeSelectorModalProps> = ({
  currentMode,
  onSelectMode,
  onClose
}) => {
  const MODES: {
    id: GameMode;
    title: string;
    targetAge: string;
    description: string;
    icon: typeof Sparkles;
    color: string;
    bg: string;
  }[] = [
    {
      id: 'infantil',
      title: 'Modo Infantil',
      targetAge: '6 a 10 años',
      description:
        'Lenguaje sencillo y afectuoso, metáforas cotidianas (turnos en el parque, compartir juguetes, cuidado de amigos) y actividades visuales.',
      icon: Sparkles,
      color: 'text-amber-700',
      bg: 'bg-amber-50 border-amber-200'
    },
    {
      id: 'juvenil',
      title: 'Modo Juvenil',
      targetAge: '11 a 16 años',
      description:
        'Dilemas de identidad, lealtad y presión social, asertividad en grupos escolares y digitales, y toma de decisiones con madurez.',
      icon: Users,
      color: 'text-violet-700',
      bg: 'bg-violet-50 border-violet-200'
    },
    {
      id: 'adulto',
      title: 'Modo Adulto y Familiar',
      targetAge: '17+ años, Familias y Educadores',
      description:
        'Comunicación no violenta (CNV), resolución de conflictos vecinales y laborales, límites saludables, y pactos comunitarios restaurativos.',
      icon: Briefcase,
      color: 'text-teal-700',
      bg: 'bg-teal-50 border-teal-200'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 to-slate-900 text-white px-6 py-5 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-xl font-extrabold text-white">Nivel de Experiencia Educativa</h2>
            <div className="text-xs text-teal-200">
              Adapta el lenguaje, la profundidad y los desafíos a tu etapa de vida
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modes List */}
        <div className="p-6 space-y-4">
          {MODES.map((mode) => {
            const Icon = mode.icon;
            const isSelected = currentMode === mode.id;

            return (
              <div
                key={mode.id}
                onClick={() => {
                  audioService.playClick();
                  onSelectMode(mode.id);
                  onClose();
                }}
                className={`cursor-pointer p-5 rounded-2xl border transition-all ${
                  isSelected
                    ? 'border-teal-500 ring-2 ring-teal-500/20 bg-teal-50/40 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${mode.bg} ${mode.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-extrabold text-slate-900">{mode.title}</h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {mode.targetAge}
                        </span>
                      </div>
                      {isSelected && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-700">
                          <CheckCircle2 className="w-4 h-4" /> Activo
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {mode.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between text-xs text-slate-500">
          <span>El cambio de nivel actualiza las 12 misiones en tiempo real.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
