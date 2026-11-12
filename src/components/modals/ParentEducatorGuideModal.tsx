import React from 'react';
import { Shield, Heart, GraduationCap, Lock, CheckCircle2, X } from 'lucide-react';

interface ParentEducatorGuideModalProps {
  onClose: () => void;
}

export const ParentEducatorGuideModal: React.FC<ParentEducatorGuideModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white px-6 py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-700/60 flex items-center justify-center text-teal-200 shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">Guía para Padres, Madres y Educadores</h2>
              <div className="text-xs text-teal-200">
                Pedagogía del cuidado, mediación restaurativa y protección integral
              </div>
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-800">
          {/* Section 1: Manifiesto Pedagógico */}
          <div className="space-y-3">
            <h3 className="text-base font-extrabold text-teal-900 flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500" />
              1. Enfoque Formativo y Filosófico
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
              <strong>JAIRRESTAURA – El Mundo de las Soluciones</strong> es un entorno pedagógico
              interactivo creado para desarrollar habilidades socioemocionales esenciales para la vida.
              A través de 12 misiones fundamentadas en la empatía, la escucha activa y la resolución
              pacífica de conflictos, los participantes aprenden a mirar el mundo desde perspectivas
              múltiples.
            </p>
          </div>

          {/* Section 2: Decálogo de Protección Infantil y Ética */}
          <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-3">
            <h3 className="text-sm font-extrabold text-sky-950 flex items-center gap-2">
              <Shield className="w-5 h-5 text-sky-600" />
              2. Principios Innegociables de Protección Infantil
            </h3>
            <ul className="text-xs sm:text-sm space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Cero reconciliaciones forzadas:</strong> Jamás obligamos a un menor a abrazar,
                  disculpar o permanecer en un vínculo donde se haya vulnerado su integridad.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>No culpabilización infantil:</strong> Ningún niño o niña es responsable de la
                  violencia, tensiones o decisiones de los adultos a su alrededor.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Límites y consentimiento:</strong> Enseñamos que la palabra "NO" y "BASTA"
                  debe ser respetada de inmediato por amigos, familiares y educadores.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Búsqueda segura de ayuda:</strong> Fomentamos acudir siempre a redes de apoyo y
                  adultos confiables ante cualquier situación de incomodidad o riesgo.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 3: Privacidad y Gratuidad Absoluta */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
            <h3 className="text-sm font-extrabold text-emerald-950 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600" />
              3. Privacidad y Modelo 100% Gratuito
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="p-3 bg-white rounded-xl border border-emerald-100">
                <strong>Sin registro ni datos personales:</strong> No solicitamos correo, nombres
                reales, tarjetas ni contraseñas.
              </div>
              <div className="p-3 bg-white rounded-xl border border-emerald-100">
                <strong>Almacenamiento 100% local:</strong> El progreso se guarda en tu propio
                navegador (localStorage). Si borras la caché, puedes reiniciar sin compromisos.
              </div>
              <div className="p-3 bg-white rounded-xl border border-emerald-100">
                <strong>Sin publicidad comercial:</strong> Cero anuncios invasivos o contenido no
                educativo.
              </div>
              <div className="p-3 bg-white rounded-xl border border-emerald-100">
                <strong>Sin compras dentro de la aplicación:</strong> Todo el juego, sus 12 misiones y
                modos son completamente libres.
              </div>
            </div>
          </div>

          {/* Section 4: Cómo usarlo en el Aula y en el Hogar */}
          <div className="space-y-3">
            <h3 className="text-base font-extrabold text-teal-900">
              4. Orientaciones Prácticas para el Hogar y la Escuela
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <p>
                <strong>1. Conversar después de cada misión:</strong> Pregunta al niño o joven: <em>"¿Has vivido
                algo parecido en la escuela o en casa? ¿Cómo te sentiste?"</em>.
              </p>
              <p>
                <strong>2. Validar antes de aconsejar:</strong> Si el participante elige una alternativa
                reactiva, no lo reprendas. Explora con cariño: <em>"¿Qué crees que sintió el otro cuando
                reaccionaste así?"</em>.
              </p>
              <p>
                <strong>3. Trasladar al mundo real:</strong> Cuelguen en el refrigerador o en la pared del aula
                el <strong>Pacto de Convivencia</strong> y celebren los gestos de escucha activa observados en la
                semana.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-500 font-medium">
            JAIRRESTAURA · Convivencia, Paz y Habilidades para la Vida
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
