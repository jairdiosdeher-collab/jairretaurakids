import { Character, CharacterId } from '../types/game';

export const CHARACTERS: Record<CharacterId, Character> = {
  nico: {
    id: 'nico',
    name: 'Nico',
    role: 'El Explorador Curioso',
    trait: 'Curiosidad y valentía para aprender',
    description: 'Siempre listo para descubrir la verdad de las situaciones, observar detalles que otros pasan por alto y hacer preguntas con respeto.',
    color: '#0284c7', // Sky Blue
    accentColor: '#38bdf8',
    avatarUrl: '/src/assets/images/character_trio_nico_luna_samuel_1794499387200.jpg',
    personality: ['Observador', 'Inquieto positivamente', 'Valora la verdad', 'Aprende de los errores']
  },
  luna: {
    id: 'luna',
    name: 'Luna',
    role: 'La Creadora Reflexiva',
    trait: 'Creatividad, introspección y arte de sentir',
    description: 'Transforma las emociones complejas en dibujos, metáforas y soluciones originales. Ayuda a reconocer lo que guardamos en el corazón.',
    color: '#8b5cf6', // Violet
    accentColor: '#c084fc',
    avatarUrl: '/src/assets/images/character_trio_nico_luna_samuel_1794499387200.jpg',
    personality: ['Intuitiva', 'Poética', 'Sensible', 'Pensamiento lateral']
  },
  samuel: {
    id: 'samuel',
    name: 'Samuel',
    role: 'El Colaborador Solidario',
    trait: 'Trabajo en equipo y mediación justa',
    description: 'Le apasiona que nadie se quede fuera. Sabe que las mejores victorias son las que se alcanzan colaborando hombro a hombro.',
    color: '#10b981', // Emerald Green
    accentColor: '#34d399',
    avatarUrl: '/src/assets/images/character_trio_nico_luna_samuel_1794499387200.jpg',
    personality: ['Generoso', 'Práctico', 'Mediador', 'Protector de la equidad']
  },
  sofia: {
    id: 'sofia',
    name: 'Sofía',
    role: 'El Corazón de la Amistad',
    trait: 'Empatía profunda y escucha afectuosa',
    description: 'Sabe acoger a los demás sin juzgar. Especialista en tender puentes cuando las palabras se quiebran o hay malentendidos.',
    color: '#f59e0b', // Amber / Sun Yellow
    accentColor: '#fbbf24',
    avatarUrl: '/src/assets/images/character_trio_nico_luna_samuel_1794499387200.jpg',
    personality: ['Cálida', 'Paciente', 'Escucha activa', 'Conciliadora']
  },
  guia: {
    id: 'guia',
    name: 'El Guía',
    role: 'Acompañante Pedagógico',
    trait: 'Sabiduría tranquila, respeto y orientación afectuosa',
    description: 'Un adulto de confianza que no impone castigos ni juzga; abre espacios seguros donde cada persona encuentra sus propias respuestas constructivas.',
    color: '#0d9488', // Teal
    accentColor: '#2dd4bf',
    avatarUrl: '/src/assets/images/character_guia_mentor_1794499387818.jpg',
    personality: ['Sereno', 'Facilitador del diálogo', 'Sin prejuicios', 'Fomenta la autonomía']
  }
};
