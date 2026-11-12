import { GameZone, ZoneId } from '../types/game';

export const GAME_ZONES: Record<ZoneId, GameZone> = {
  parque: {
    id: 'parque',
    name: 'El Parque de la Convivencia',
    tagline: 'Espacio de juegos, turnos y diálogo',
    description: 'Un parque alegre con áreas verdes, lago sereno, columpios y bancos donde los amigos juegan, dialogan y aprenden a escuchar con el corazón.',
    position3D: [0, 0, -4],
    color: '#10b981', // Emerald
    iconName: 'Trees',
    primaryMissions: [1, 9], // Escuchar, Paciencia
    charactersPresent: ['nico', 'sofia', 'guia']
  },
  escuela: {
    id: 'escuela',
    name: 'La Escuela del Futuro',
    tagline: 'Aulas abiertas y respeto a la diversidad',
    description: 'Un centro educativo ecológico con paneles solares, huerto escolar y biblioteca colaborativa, donde cada diferencia es una oportunidad de aprender.',
    position3D: [-12, 0, -10],
    color: '#0284c7', // Sky Blue
    iconName: 'GraduationCap',
    primaryMissions: [2, 6], // Compartir, Respetar diferencias
    charactersPresent: ['samuel', 'luna', 'guia']
  },
  jardin: {
    id: 'jardin',
    name: 'El Jardín de la Calma',
    tagline: 'Cuidado emocional y expresión auténtica',
    description: 'Un santuario de flores, aromáticas y fuentes de agua susurrante, diseñado para respirar hondo, reconocer lo que sentimos y cuidarnos mutuamente.',
    position3D: [12, 0, -12],
    color: '#8b5cf6', // Violet
    iconName: 'Flower2',
    primaryMissions: [4, 7], // Expresar sentimientos, Cuidar amistades
    charactersPresent: ['luna', 'sofia', 'guia']
  },
  puente: {
    id: 'puente',
    name: 'El Puente de la Convivencia',
    tagline: 'Construir acuerdos y unir voluntades',
    description: 'Un puente emblemático decorado con banderas de valores que cruza el río de la vida, uniendo a personas con puntos de vista distintos.',
    position3D: [4, 0, 4],
    color: '#f59e0b', // Amber
    iconName: 'GitMerge',
    primaryMissions: [3, 11], // Resolver desacuerdos, Construir acuerdos
    charactersPresent: ['samuel', 'nico', 'guia']
  },
  pequena_ciudad: {
    id: 'pequena_ciudad',
    name: 'La Ciudad y los Hogares',
    tagline: 'Límites saludables y respeto familiar',
    description: 'Calles apacibles con casas acogedoras donde las familias conviven, aprenden a decir "no" con respeto y protegen los límites personales.',
    position3D: [-10, 0, 8],
    color: '#ec4899', // Pink
    iconName: 'Home',
    primaryMissions: [5, 10], // Pedir ayuda, Límites personales
    charactersPresent: ['sofia', 'nico', 'guia']
  },
  plaza: {
    id: 'plaza',
    name: 'La Plaza Comunitaria',
    tagline: 'Acción solidaria y bienestar compartido',
    description: 'El corazón latente de la comunidad con su quiosco central, donde vecinos y jóvenes se unen para restaurar espacios y celebrar la ayuda mutua.',
    position3D: [10, 0, 10],
    color: '#0d9488', // Teal
    iconName: 'Users',
    primaryMissions: [12], // Ayudar a la comunidad
    charactersPresent: ['samuel', 'sofia', 'luna', 'guia']
  },
  aventura: {
    id: 'aventura',
    name: 'Zona de Aventuras y Descubrimientos',
    tagline: 'Cooperación en retos colectivos',
    description: 'Un bosque de senderos, torre vigía y puentes de cuerda donde los desafíos sólo pueden superarse sumando los talentos de todo el equipo.',
    position3D: [0, 0, 18],
    color: '#f97316', // Orange
    iconName: 'Compass',
    primaryMissions: [8], // Trabajar en equipo
    charactersPresent: ['nico', 'samuel', 'luna', 'guia']
  }
};

export const ALL_ZONE_IDS: ZoneId[] = [
  'parque',
  'escuela',
  'jardin',
  'puente',
  'pequena_ciudad',
  'plaza',
  'aventura'
];
