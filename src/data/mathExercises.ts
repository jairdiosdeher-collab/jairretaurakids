import {
  MathTopicId,
  MathTopicMeta,
  MathExercise,
  MathLevel,
  MathProgressState
} from '../types/game';

export const MATH_TOPICS: MathTopicMeta[] = [
  {
    id: 'sumas',
    name: 'Sumas',
    shortDescription: 'Reunir cantidades, contar hacia adelante y reagrupar decenas.',
    color: '#0d9488',
    accentBg: 'bg-teal-50 border-teal-200 text-teal-800',
    iconName: 'Plus'
  },
  {
    id: 'restas',
    name: 'Restas',
    shortDescription: 'Calcular diferencias, quitar elementos y completar metas.',
    color: '#0284c7',
    accentBg: 'bg-sky-50 border-sky-200 text-sky-800',
    iconName: 'Minus'
  },
  {
    id: 'multiplicaciones',
    name: 'Multiplicaciones',
    shortDescription: 'Sumas repetidas, grupos iguales y tablas razonadas.',
    color: '#7c3aed',
    accentBg: 'bg-violet-50 border-violet-200 text-violet-800',
    iconName: 'X'
  },
  {
    id: 'divisiones',
    name: 'Divisiones',
    shortDescription: 'Repartir en partes iguales y formar equipos justos.',
    color: '#d97706',
    accentBg: 'bg-amber-50 border-amber-200 text-amber-800',
    iconName: 'Divide'
  },
  {
    id: 'fracciones',
    name: 'Fracciones',
    shortDescription: 'Partes de un entero, mitades, tercios y suma visual.',
    color: '#e11d48',
    accentBg: 'bg-rose-50 border-rose-200 text-rose-800',
    iconName: 'PieChart'
  },
  {
    id: 'decimales',
    name: 'Decimales',
    shortDescription: 'Décimas, centésimas y cálculos cotidianos con punto decimal.',
    color: '#059669',
    accentBg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    iconName: 'Hash'
  },
  {
    id: 'geometria',
    name: 'Geometría',
    shortDescription: 'Figuras, lados, vértices, perímetros y áreas claras.',
    color: '#4f46e5',
    accentBg: 'bg-indigo-50 border-indigo-200 text-indigo-800',
    iconName: 'Shapes'
  },
  {
    id: 'medidas',
    name: 'Medidas',
    shortDescription: 'Longitud en centímetros y metros, tiempo, masa y capacidad.',
    color: '#ea580c',
    accentBg: 'bg-orange-50 border-orange-200 text-orange-800',
    iconName: 'Ruler'
  },
  {
    id: 'problemas',
    name: 'Problemas Razonados',
    shortDescription: 'Situaciones reales de la escuela, el parque y la comunidad.',
    color: '#0f766e',
    accentBg: 'bg-teal-50 border-teal-200 text-teal-900',
    iconName: 'BookOpen'
  },
  {
    id: 'retos',
    name: 'Retos Matemáticos',
    shortDescription: 'Secuencias lógicas, acertijos numéricos y pensamiento creativo.',
    color: '#9333ea',
    accentBg: 'bg-purple-50 border-purple-200 text-purple-800',
    iconName: 'Sparkles'
  }
];

export const INITIAL_MATH_PROGRESS: MathProgressState = {
  sumas: { attempts: 0, correct: 0, unlockedLevel: 1, completedIds: [] },
  restas: { attempts: 0, correct: 0, unlockedLevel: 1, completedIds: [] },
  multiplicaciones: { attempts: 0, correct: 0, unlockedLevel: 1, completedIds: [] },
  divisiones: { attempts: 0, correct: 0, unlockedLevel: 1, completedIds: [] },
  fracciones: { attempts: 0, correct: 0, unlockedLevel: 1, completedIds: [] },
  decimales: { attempts: 0, correct: 0, unlockedLevel: 1, completedIds: [] },
  geometria: { attempts: 0, correct: 0, unlockedLevel: 1, completedIds: [] },
  medidas: { attempts: 0, correct: 0, unlockedLevel: 1, completedIds: [] },
  problemas: { attempts: 0, correct: 0, unlockedLevel: 1, completedIds: [] },
  retos: { attempts: 0, correct: 0, unlockedLevel: 1, completedIds: [] }
};

export const CURATED_MATH_EXERCISES: MathExercise[] = [
  // ======================== 1. SUMAS ========================
  {
    id: 'sumas-1-a',
    topicId: 'sumas',
    level: 1,
    title: 'Juntar semillas en el Jardín',
    conceptExplanation:
      'Sumar significa reunir dos o más cantidades en un solo grupo total. Puedes partir del número mayor y contar hacia adelante.',
    workedExample: {
      problem: 'Nico plantó 8 semillas de girasol y Luna plantó 5 más. ¿Cuántas plantaron en total?',
      steps: [
        'Empieza en el número mayor: 8.',
        'Cuenta 5 pasos hacia adelante: 9, 10, 11, 12, 13.',
        'También puedes completar 10: 8 + 2 = 10, y luego sumar los 3 que faltan: 10 + 3 = 13.'
      ],
      result: '13 semillas'
    },
    question: 'En el Jardín de la Calma hay 9 flores rojas y 6 flores amarillas. ¿Cuántas flores hay en total?',
    hint: 'Completa primero una decena: a 9 le falta 1 para llegar a 10. ¿Cuánto queda de 6?',
    answerType: 'number',
    correctAnswer: '15',
    acceptedAnswers: ['15'],
    unitLabel: 'flores',
    visualDiagram: { kind: 'number_groups', groups: 2, perGroup: 6, operation: 'add' },
    stepByStepCorrection: [
      'Identifica las dos cantidades: 9 flores rojas y 6 flores amarillas.',
      'Toma 1 de las 6 flores y júntalo con las 9 para formar 10 (9 + 1 = 10).',
      'Como ya usaste 1 de 6, te quedan 5 flores por sumar.',
      'Suma 10 + 5 = 15 flores en total.'
    ],
    positiveFeedback: '¡Excelente estrategia! Completar la decena hace que sumar sea rápido y claro.'
  },
  {
    id: 'sumas-2-a',
    topicId: 'sumas',
    level: 2,
    title: 'Sumar decenas y unidades',
    conceptExplanation:
      'Para sumar números de dos cifras con facilidad, suma primero las decenas (los grupos de 10) y luego las unidades sueltas.',
    workedExample: {
      problem: '24 + 35 = ?',
      steps: [
        'Separa decenas y unidades: 24 es 20 + 4, y 35 es 30 + 5.',
        'Suma las decenas: 20 + 30 = 50.',
        'Suma las unidades: 4 + 5 = 9.',
        'Une ambos resultados: 50 + 9 = 59.'
      ],
      result: '59'
    },
    question: 'Samuel juntó 36 hojas recicladas y Sofía trajo 27 hojas más. ¿Cuántas hojas reunieron?',
    hint: 'Suma 30 + 20 = 50, y luego 6 + 7 = 13. Después une 50 + 13.',
    answerType: 'number',
    correctAnswer: '63',
    acceptedAnswers: ['63'],
    unitLabel: 'hojas',
    stepByStepCorrection: [
      'Descompón cada número en decenas y unidades: 36 = 30 + 6 y 27 = 20 + 7.',
      'Suma las decenas: 30 + 20 = 50.',
      'Suma las unidades: 6 + 7 = 13.',
      'Suma ambos totales: 50 + 13 = 63 hojas.'
    ],
    positiveFeedback: '¡Muy bien! Separar en decenas y unidades convierte las sumas grandes en pasos sencillos.'
  },
  {
    id: 'sumas-3-a',
    topicId: 'sumas',
    level: 3,
    title: 'Sumas de tres cifras en la Plaza',
    conceptExplanation:
      'Al sumar números de tres cifras alineamos centenas con centenas, decenas con decenas y unidades con unidades, reagrupando cuando una columna pasa de 9.',
    workedExample: {
      problem: '148 + 235 = ?',
      steps: [
        'Unidades: 8 + 5 = 13 (escribimos 3 y llevamos 1 decena).',
        'Decenas: 4 + 3 + 1 que llevábamos = 8.',
        'Centenas: 1 + 2 = 3.',
        'Total: 383.'
      ],
      result: '383'
    },
    question: 'Para la feria comunitaria se reunieron 165 libros el sábado y 148 libros el domingo. ¿Cuántos libros hay en total?',
    hint: 'Empieza por las unidades: 5 + 8 = 13 (llevas 1 decena). Luego decenas: 6 + 4 + 1.',
    answerType: 'number',
    correctAnswer: '313',
    acceptedAnswers: ['313'],
    unitLabel: 'libros',
    stepByStepCorrection: [
      'Unidades: 5 + 8 = 13. Deja el 3 en las unidades y lleva 1 decena.',
      'Decenas: 6 + 4 + 1 (que llevabas) = 11 decenas. Deja el 1 y lleva 1 centena.',
      'Centenas: 1 + 1 + 1 (que llevabas) = 3 centenas.',
      'El resultado final es 313 libros.'
    ],
    positiveFeedback: '¡Dominas la reagrupación con centenas! Paso a paso todo encaja con precisión.'
  },

  // ======================== 2. RESTAS ========================
  {
    id: 'restas-1-a',
    topicId: 'restas',
    level: 1,
    title: '¿Cuántos quedan en el Parque?',
    conceptExplanation:
      'Restar nos ayuda a saber cuánto queda cuando quitamos una parte, o cuánto falta para llegar desde un número menor hasta uno mayor.',
    workedExample: {
      problem: 'Había 14 palomas en la fuente y 5 volaron hacia los árboles. ¿Cuántas quedaron?',
      steps: [
        'Parte de 14.',
        'Quita primero 4 para llegar a 10: 14 - 4 = 10.',
        'Como tenías que quitar 5, solo falta quitar 1 más: 10 - 1 = 9.'
      ],
      result: '9 palomas'
    },
    question: 'En la mesa de juegos había 17 fichas y guardamos 8 en la caja. ¿Cuántas fichas quedaron afuera?',
    hint: 'Baja primero hasta 10: 17 - 7 = 10. ¿Cuántas más te falta quitar para completar 8?',
    answerType: 'number',
    correctAnswer: '9',
    acceptedAnswers: ['9'],
    unitLabel: 'fichas',
    stepByStepCorrection: [
      'Partimos de 17 fichas y necesitamos quitar 8.',
      'Primero quita 7 para llegar cómodo a 10: 17 - 7 = 10.',
      'Como 8 = 7 + 1, aún falta quitar 1 ficha más: 10 - 1 = 9.',
      'Quedan 9 fichas afuera.'
    ],
    positiveFeedback: '¡Estupendo! Usar el 10 como puente hace que restar sea mucho más seguro.'
  },
  {
    id: 'restas-2-a',
    topicId: 'restas',
    level: 2,
    title: 'Diferencia entre dos cantidades',
    conceptExplanation:
      'Cuando comparamos dos números, la resta encuentra la distancia entre ambos. También puedes contar hacia arriba desde el menor al mayor.',
    workedExample: {
      problem: 'Luna quiere reunir 60 tapitas y ya tiene 38. ¿Cuántas le faltan?',
      steps: [
        'De 38 a 40 faltan 2.',
        'De 40 a 60 faltan 20.',
        'Suma ambos saltos: 2 + 20 = 22.'
      ],
      result: '22 tapitas'
    },
    question: 'La meta del huerto escolar es plantar 75 árboles. Ya plantaron 48. ¿Cuántos árboles faltan por plantar?',
    hint: 'Cuenta por saltos: de 48 a 50 hay 2, y de 50 a 75 hay 25.',
    answerType: 'number',
    correctAnswer: '27',
    acceptedAnswers: ['27'],
    unitLabel: 'árboles',
    stepByStepCorrection: [
      'Queremos calcular 75 - 48.',
      'Método de saltos: de 48 a 50 faltan 2.',
      'De 50 a 75 faltan 25.',
      'Suma los saltos: 2 + 25 = 27 árboles por plantar.'
    ],
    positiveFeedback: '¡Genial! Pensar la resta como saltos hacia adelante evita confusiones al pedir prestado.'
  },
  {
    id: 'restas-3-a',
    topicId: 'restas',
    level: 3,
    title: 'Resta con reagrupación en centenas',
    conceptExplanation:
      'Si en una columna el dígito de arriba es menor que el de abajo, transformamos 1 decena en 10 unidades (o 1 centena en 10 decenas) sin cambiar el valor total.',
    workedExample: {
      problem: '204 - 137 = ?',
      steps: [
        'Unidades: a 4 no le puedo quitar 7. Como las decenas tienen 0, tomamos 1 centena de las 2 centenas (quedan 1 centena y 10 decenas).',
        'Pasamos 1 decena a las unidades: quedan 9 decenas y 14 unidades.',
        'Unidades: 14 - 7 = 7. Decenas: 9 - 3 = 6. Centenas: 1 - 1 = 0.',
        'Resultado: 67.'
      ],
      result: '67'
    },
    question: 'El tanque de agua de la Escuela tiene 320 litros y se usaron 145 litros para regar el huerto. ¿Cuántos litros quedaron?',
    hint: 'También puedes sumar desde 145 hasta 320: +5 llega a 150, +50 llega a 200, +120 llega a 320.',
    answerType: 'number',
    correctAnswer: '175',
    acceptedAnswers: ['175'],
    unitLabel: 'litros',
    stepByStepCorrection: [
      'Calculamos 320 - 145.',
      'Por columnas: 0 unidades pide 1 decena -> 10 - 5 = 5 unidades.',
      'Quedó 1 decena; pide 1 centena -> 11 - 4 = 7 decenas.',
      'Quedaron 2 centenas -> 2 - 1 = 1 centena. Total: 175 litros.'
    ],
    positiveFeedback: '¡Brillante trabajo! Comprobaste la resta paso a paso sin perder ningún número.'
  },

  // ======================== 3. MULTIPLICACIONES ========================
  {
    id: 'multiplicaciones-1-a',
    topicId: 'multiplicaciones',
    level: 1,
    title: 'Grupos iguales',
    conceptExplanation:
      'Multiplicar es una forma rápida de sumar grupos que tienen exactamente la misma cantidad de elementos.',
    workedExample: {
      problem: 'Hay 3 mesas y en cada mesa hay 4 lápices. ¿Cuántos lápices hay?',
      steps: [
        'Representamos 3 grupos de 4: 4 + 4 + 4.',
        'Sumamos: 4 + 4 = 8, y 8 + 4 = 12.',
        'En multiplicación se escribe: 3 × 4 = 12.'
      ],
      result: '12 lápices'
    },
    question: 'En la Escuela del Futuro hay 4 bancas y en cada banca se sientan 5 estudiantes. ¿Cuántos estudiantes caben en total?',
    hint: 'Cuenta 4 veces el número 5: 5 + 5 + 5 + 5.',
    answerType: 'number',
    correctAnswer: '20',
    acceptedAnswers: ['20'],
    unitLabel: 'estudiantes',
    visualDiagram: { kind: 'number_groups', groups: 4, perGroup: 5, operation: 'multiply' },
    stepByStepCorrection: [
      'Tenemos 4 grupos (bancas) con 5 elementos (estudiantes) cada uno.',
      'Escribimos la multiplicación: 4 × 5.',
      'Sumamos de 5 en 5 cuatro veces: 5, 10, 15, 20.',
      'El total es 20 estudiantes.'
    ],
    positiveFeedback: '¡Exacto! 4 grupos de 5 forman 20. Ya entiendes el corazón de la multiplicación.'
  },
  {
    id: 'multiplicaciones-2-a',
    topicId: 'multiplicaciones',
    level: 2,
    title: 'Propiedad distributiva amigable',
    conceptExplanation:
      'Si una tabla parece difícil (como multiplicar por 7 u 8), puedes partir el número en dos partes fáciles (por ejemplo 5 + 2) y sumar los resultados.',
    workedExample: {
      problem: '6 × 7 = ?',
      steps: [
        'Parte el 7 en 5 + 2.',
        'Calcula 6 × 5 = 30.',
        'Calcula 6 × 2 = 12.',
        'Suma ambos resultados: 30 + 12 = 42.'
      ],
      result: '42'
    },
    question: 'Sofía armó 8 cajas con 7 tarjetas de amistad en cada una. ¿Cuántas tarjetas preparó en total?',
    hint: 'Prueba partir el 7 en (5 + 2): primero 8 × 5 = 40, luego 8 × 2 = 16.',
    answerType: 'number',
    correctAnswer: '56',
    acceptedAnswers: ['56'],
    unitLabel: 'tarjetas',
    stepByStepCorrection: [
      'Necesitamos calcular 8 × 7.',
      'Descompón 7 como 5 + 2.',
      '8 × 5 = 40 y 8 × 2 = 16.',
      'Suma 40 + 16 = 56 tarjetas en total.'
    ],
    positiveFeedback: '¡Súper estrategia! Dividir en multiplicaciones fáciles funciona para cualquier número.'
  },
  {
    id: 'multiplicaciones-3-a',
    topicId: 'multiplicaciones',
    level: 3,
    title: 'Multiplicación de dos cifras por una',
    conceptExplanation:
      'Para multiplicar un número de dos cifras, multiplica las decenas primero, luego las unidades y finalmente suma ambos resultados.',
    workedExample: {
      problem: '23 × 4 = ?',
      steps: [
        '23 es igual a 20 + 3.',
        'Multiplica decenas: 20 × 4 = 80.',
        'Multiplica unidades: 3 × 4 = 12.',
        'Suma: 80 + 12 = 92.'
      ],
      result: '92'
    },
    question: 'Para la excursión de Aventuras prepararon 24 mochilas con 6 botellas reutilizables en cada caja de equipo... Espera: hay 6 equipos y cada equipo lleva 24 brújulas de papel y mapas. ¿Cuántos elementos suman 24 × 6?',
    hint: 'Separa 24 en 20 + 4. Multiplica 20 × 6 = 120 y 4 × 6 = 24.',
    answerType: 'number',
    correctAnswer: '144',
    acceptedAnswers: ['144'],
    stepByStepCorrection: [
      'Descomponemos 24 en 20 + 4.',
      '20 × 6 = 120.',
      '4 × 6 = 24.',
      'Sumamos ambos productos: 120 + 24 = 144.'
    ],
    positiveFeedback: '¡Excelente cálculo mental y estructurado! 24 × 6 = 144.'
  },

  // ======================== 4. DIVISIONES ========================
  {
    id: 'divisiones-1-a',
    topicId: 'divisiones',
    level: 1,
    title: 'Repartir en partes iguales',
    conceptExplanation:
      'Dividir es repartir una cantidad en grupos iguales para que todos reciban exactamente lo mismo. También es preguntarse qué número multiplicado da el total.',
    workedExample: {
      problem: 'Repartimos 12 manzanas entre 3 amigos por igual. ¿Cuántas recibe cada uno?',
      steps: [
        'Piensa: 3 × ¿qué número? = 12.',
        'Probamos: 3 × 4 = 12.',
        'Por tanto, 12 ÷ 3 = 4 manzanas para cada amigo.'
      ],
      result: '4 manzanas'
    },
    question: 'El Guía tiene 18 pinceles para repartir en partes iguales entre 3 mesas de arte. ¿Cuántos pinceles van a cada mesa?',
    hint: 'Pregúntate: ¿3 veces qué número da 18?',
    answerType: 'number',
    correctAnswer: '6',
    acceptedAnswers: ['6'],
    unitLabel: 'pinceles',
    visualDiagram: { kind: 'number_groups', groups: 3, perGroup: 6, operation: 'divide' },
    stepByStepCorrection: [
      'Queremos repartir 18 pinceles entre 3 grupos iguales (18 ÷ 3).',
      'Buscamos en la tabla del 3: 3 × 5 = 15, 3 × 6 = 18.',
      'Cada mesa recibe 6 pinceles.'
    ],
    positiveFeedback: '¡Muy bien! Relacionar la división con la multiplicación te da súper precisión.'
  },
  {
    id: 'divisiones-2-a',
    topicId: 'divisiones',
    level: 2,
    title: 'División con cociente de dos cifras',
    conceptExplanation:
      'Cuando dividimos números más grandes, podemos repartir primero las decenas y después lo que queda de unidades.',
    workedExample: {
      problem: '64 ÷ 2 = ?',
      steps: [
        'Repartimos las decenas: 60 ÷ 2 = 30.',
        'Repartimos las unidades: 4 ÷ 2 = 2.',
        'Sumamos: 30 + 2 = 32.'
      ],
      result: '32'
    },
    question: 'Hay 84 semillas para repartir en partes iguales en 4 macetas comunitarias. ¿Cuántas semillas van en cada maceta?',
    hint: 'Divide por partes: 80 ÷ 4 = 20, y 4 ÷ 4 = 1.',
    answerType: 'number',
    correctAnswer: '21',
    acceptedAnswers: ['21'],
    unitLabel: 'semillas',
    stepByStepCorrection: [
      'Descomponemos 84 en 80 + 4.',
      'Dividimos las decenas: 80 ÷ 4 = 20.',
      'Dividimos las unidades: 4 ÷ 4 = 1.',
      'Sumamos ambos resultados: 20 + 1 = 21 semillas por maceta.'
    ],
    positiveFeedback: '¡Fantástico! Descomponer el dividendo simplifica muchísimo la división.'
  },
  {
    id: 'divisiones-3-a',
    topicId: 'divisiones',
    level: 3,
    title: 'Divisiones con resto interpretado',
    conceptExplanation:
      'A veces un reparto no es exacto y sobra un resto. En la vida real debemos pensar qué significa ese resto.',
    workedExample: {
      problem: 'Tenemos 29 libros y caben 5 en cada caja. ¿Cuántas cajas COMPLETAS se llenan y cuántos libros quedan sueltos?',
      steps: [
        'Buscamos el múltiplo de 5 más cercano sin pasarse de 29: 5 × 5 = 25.',
        'Restamos para hallar el resto: 29 - 25 = 4 libros sueltos.',
        'Se llenan 5 cajas completas y sobran 4.'
      ],
      result: '5 cajas completas (sobran 4)'
    },
    question: 'En el campamento viajan 38 estudiantes en carpas de 6 personas. ¿Cuántas carpas se necesitan como MÍNIMO para que nadie quede fuera?',
    hint: '6 × 6 = 36 personas. Como son 38, sobran 2 estudiantes que también necesitan carpa.',
    answerType: 'number',
    correctAnswer: '7',
    acceptedAnswers: ['7'],
    unitLabel: 'carpas',
    stepByStepCorrection: [
      'Dividimos 38 ÷ 6: 6 × 6 = 36, y sobran 2 estudiantes.',
      'Esos 2 estudiantes también necesitan dormir bajo techo.',
      'Por eso sumamos 1 carpa más a las 6 completas: 6 + 1 = 7 carpas.'
    ],
    positiveFeedback: '¡Pensamiento crítico de nivel maestro! Supiste interpretar el resto para no dejar a nadie fuera.'
  },

  // ======================== 5. FRACCIONES ========================
  {
    id: 'fracciones-1-a',
    topicId: 'fracciones',
    level: 1,
    title: 'Identificar partes de un todo',
    conceptExplanation:
      'Una fracción tiene dos números: el denominador (abajo) indica en cuántas partes iguales se dividió el entero, y el numerador (arriba) cuántas partes tomamos.',
    workedExample: {
      problem: 'Un pastel se partió en 4 rebanadas iguales y comimos 1. ¿Qué fracción representa lo que comimos?',
      steps: [
        'Partes totales iguales (denominador): 4.',
        'Partes tomadas (numerador): 1.',
        'La fracción es 1/4.'
      ],
      result: '1/4'
    },
    question: 'Observa la barra dividida en 4 partes iguales con 3 partes coloreadas. ¿Qué fracción representa la parte coloreada?',
    hint: 'Cuenta las partes pintadas (arriba) y el total de partes de la barra (abajo).',
    answerType: 'choice',
    choices: ['1/4', '3/4', '4/3', '2/4'],
    correctAnswer: '3/4',
    acceptedAnswers: ['3/4'],
    visualDiagram: { kind: 'fraction_bar', numerator: 3, denominator: 4, label: '3 partes pintadas de 4' },
    stepByStepCorrection: [
      'El denominador (número de abajo) es el total de partes iguales: 4.',
      'El numerador (número de arriba) es la cantidad de partes coloreadas: 3.',
      'Por lo tanto, la fracción correcta es 3/4.'
    ],
    positiveFeedback: '¡Correcto! 3/4 significa tres partes de cuatro iguales.'
  },
  {
    id: 'fracciones-2-a',
    topicId: 'fracciones',
    level: 2,
    title: 'Suma de fracciones con igual denominador',
    conceptExplanation:
      'Cuando dos fracciones tienen el mismo denominador (el mismo tamaño de parte), solo sumamos los numeradores y conservamos el denominador.',
    workedExample: {
      problem: '1/5 + 2/5 = ?',
      steps: [
        'Ambas fracciones están divididas en quintos (5 partes).',
        'Sumamos los numeradores: 1 + 2 = 3.',
        'Mantenemos el denominador 5: resultado 3/5.'
      ],
      result: '3/5'
    },
    question: 'Luna pintó 2/6 de un mural en la mañana y Samuel pintó 3/6 en la tarde. ¿Qué fracción del mural pintaron juntos?',
    hint: 'Suma 2 + 3 arriba y mantén el 6 abajo porque ambos trozos son sextos.',
    answerType: 'choice',
    choices: ['5/12', '5/6', '6/6', '1/6'],
    correctAnswer: '5/6',
    acceptedAnswers: ['5/6'],
    visualDiagram: { kind: 'fraction_bar', numerator: 5, denominator: 6, label: '2/6 + 3/6' },
    stepByStepCorrection: [
      'Las piezas tienen el mismo tamaño (sextos).',
      'No se suman los denominadores; el 6 permanece igual.',
      'Sumamos los numeradores: 2 + 3 = 5.',
      'Pintaron 5/6 del mural.'
    ],
    positiveFeedback: '¡Exacto! Recordaste que el denominador indica el tamaño de las partes y no se suma.'
  },
  {
    id: 'fracciones-3-a',
    topicId: 'fracciones',
    level: 3,
    title: 'Fracciones equivalentes y mitad',
    conceptExplanation:
      'Dos fracciones pueden verse con números diferentes pero representar exactamente la misma cantidad (por ejemplo, 1/2 = 2/4 = 3/6 = 4/8).',
    workedExample: {
      problem: '¿Cuántos octavos equivalen a 1/2?',
      steps: [
        'La mitad de 8 partes es 4.',
        'Si multiplicas arriba y abajo de 1/2 por 4, obtienes (1×4)/(2×4) = 4/8.'
      ],
      result: '4/8'
    },
    question: '¿Qué fracción de abajo representa exactamente la misma cantidad que 2/3?',
    hint: 'Multiplica tanto el numerador (2) como el denominador (3) por el mismo número (por ejemplo por 2).',
    answerType: 'choice',
    choices: ['4/6', '3/4', '2/6', '4/5'],
    correctAnswer: '4/6',
    acceptedAnswers: ['4/6'],
    visualDiagram: { kind: 'fraction_bar', numerator: 4, denominator: 6, label: 'Equivalente a 2/3' },
    stepByStepCorrection: [
      'Para hallar una fracción equivalente multiplicamos numerador y denominador por el mismo número.',
      'Multiplicamos 2/3 por 2 arriba y abajo: 2 × 2 = 4 y 3 × 2 = 6.',
      'Así obtenemos 4/6, que ocupa exactamente el mismo espacio que 2/3.'
    ],
    positiveFeedback: '¡Magnífico! Entiendes perfectamente las fracciones equivalentes.'
  },

  // ======================== 6. DECIMALES ========================
  {
    id: 'decimales-1-a',
    topicId: 'decimales',
    level: 1,
    title: 'Décimas en la vida cotidiana',
    conceptExplanation:
      'Un número decimal tiene una parte entera a la izquierda del punto y una parte menor que 1 a la derecha. La primera cifra después del punto son las décimas.',
    workedExample: {
      problem: '0.4 + 0.5 = ?',
      steps: [
        '0.4 son 4 décimas y 0.5 son 5 décimas.',
        '4 décimas + 5 décimas = 9 décimas.',
        'Escribimos 0.9.'
      ],
      result: '0.9'
    },
    question: 'Nico caminó 1.2 km en la mañana y 1.5 km en la tarde. ¿Cuántos kilómetros caminó en total?',
    hint: 'Suma enteros con enteros (1 + 1) y décimas con décimas (0.2 + 0.5).',
    answerType: 'number',
    correctAnswer: '2.7',
    acceptedAnswers: ['2.7', '2,7'],
    unitLabel: 'km',
    stepByStepCorrection: [
      'Alinea los puntos decimales: 1.2 + 1.5.',
      'Suma las décimas: 2 + 5 = 7 décimas (.7).',
      'Suma los enteros: 1 + 1 = 2.',
      'El resultado es 2.7 km.'
    ],
    positiveFeedback: '¡Excelente! Alinear el punto decimal mantiene todo ordenado.'
  },
  {
    id: 'decimales-2-a',
    topicId: 'decimales',
    level: 2,
    title: 'Restar decimales completando el entero',
    conceptExplanation:
      'Un entero completo equivale a 1.0 (10 décimas) o 1.00 (100 centésimas). Esto nos ayuda a restar decimales con facilidad.',
    workedExample: {
      problem: '1.0 - 0.35 = ?',
      steps: [
        'Piensa 1.00 como 100 centésimas.',
        '100 centésimas menos 35 centésimas = 65 centésimas.',
        'Resultado: 0.65.'
      ],
      result: '0.65'
    },
    question: 'Una botella tenía 2.5 litros de agua y usamos 0.8 litros para el jardín. ¿Cuántos litros quedaron?',
    hint: 'Piensa 2.5 como 25 décimas y réstale 8 décimas.',
    answerType: 'number',
    correctAnswer: '1.7',
    acceptedAnswers: ['1.7', '1,7'],
    unitLabel: 'litros',
    stepByStepCorrection: [
      'Escribimos 2.5 - 0.8.',
      'Como a 5 décimas no le podemos quitar 8 décimas, convertimos 1 entero en 10 décimas.',
      'Nos queda 1 entero y 15 décimas: 15 - 8 = 7 décimas.',
      'Queda 1.7 litros.'
    ],
    positiveFeedback: '¡Muy bien! Transformar un entero en 10 décimas resolvió la resta limpiamente.'
  },
  {
    id: 'decimales-3-a',
    topicId: 'decimales',
    level: 3,
    title: 'Multiplicar un decimal por un entero',
    conceptExplanation:
      'Para multiplicar un decimal por un entero, puedes multiplicar sin el punto primero y luego colocar tantas cifras decimales como tenía el número original.',
    workedExample: {
      problem: '1.25 × 3 = ?',
      steps: [
        'Multiplica 125 × 3 = 375.',
        'Como 1.25 tiene 2 cifras después del punto, coloca el punto dejando 2 cifras: 3.75.'
      ],
      result: '3.75'
    },
    question: 'Cada metro de cinta decorativa para el Puente cuesta 1.5 monedas escolares. ¿Cuánto cuestan 4 metros?',
    hint: 'Multiplica 1 × 4 = 4, y luego 0.5 × 4 = 2. Suma ambos.',
    answerType: 'number',
    correctAnswer: '6',
    acceptedAnswers: ['6', '6.0', '6,0'],
    unitLabel: 'monedas',
    stepByStepCorrection: [
      'Calculamos 1.5 × 4.',
      'Por partes: 1 × 4 = 4 y 0.5 (la mitad) × 4 = 2.',
      'Sumamos 4 + 2 = 6 monedas escolares.'
    ],
    positiveFeedback: '¡Genial! Usar mitades (0.5) hace que estos cálculos sean instantáneos.'
  },

  // ======================== 7. GEOMETRÍA ========================
  {
    id: 'geometria-1-a',
    topicId: 'geometria',
    level: 1,
    title: 'Perímetro de un cuadrado',
    conceptExplanation:
      'El perímetro es la medida de todo el contorno (borde) de una figura. Se calcula sumando la longitud de todos sus lados.',
    workedExample: {
      problem: 'Un jardín cuadrado mide 4 m en cada lado. ¿Cuál es su perímetro?',
      steps: [
        'Un cuadrado tiene 4 lados iguales.',
        'Sumamos los 4 lados: 4 + 4 + 4 + 4 = 16 m (o 4 × 4 = 16 m).'
      ],
      result: '16 m'
    },
    question: 'Queremos poner una cerca alrededor de una parcela cuadrada que mide 6 metros por lado. ¿Cuántos metros de cerca necesitamos (perímetro)?',
    hint: 'Un cuadrado tiene 4 lados iguales de 6 metros cada uno.',
    answerType: 'number',
    correctAnswer: '24',
    acceptedAnswers: ['24'],
    unitLabel: 'm',
    visualDiagram: { kind: 'geometry_shape', shape: 'square', dimensions: ['6 m', '6 m'], highlight: 'perimeter' },
    stepByStepCorrection: [
      'El perímetro es la suma de los 4 lados exteriores.',
      'Como cada lado mide 6 m: 6 + 6 + 6 + 6 = 24 m.',
      'También puedes multiplicar: 4 × 6 = 24 metros.'
    ],
    positiveFeedback: '¡Perfecto! Medir el borde te permite planear construcciones reales.'
  },
  {
    id: 'geometria-2-a',
    topicId: 'geometria',
    level: 2,
    title: 'Área de un rectángulo',
    conceptExplanation:
      'El área mide la superficie interior de una figura. En un rectángulo, se calcula multiplicando la base (largo) por la altura (ancho).',
    workedExample: {
      problem: 'Un tapete rectangular mide 5 m de largo y 3 m de ancho. ¿Cuál es su área?',
      steps: [
        'Usamos la fórmula: Área = base × altura.',
        'Área = 5 × 3 = 15 metros cuadrados.'
      ],
      result: '15 m²'
    },
    question: 'La pizarra del aula mide 7 metros de base y 4 metros de altura. ¿Cuál es su área en metros cuadrados?',
    hint: 'Multiplica la base (7) por la altura (4).',
    answerType: 'number',
    correctAnswer: '28',
    acceptedAnswers: ['28'],
    unitLabel: 'm²',
    visualDiagram: { kind: 'geometry_shape', shape: 'rectangle', dimensions: ['7 m', '4 m'], highlight: 'area' },
    stepByStepCorrection: [
      'El área cubre el interior del rectángulo.',
      'Multiplicamos base × altura: 7 × 4.',
      '7 × 4 = 28 m².'
    ],
    positiveFeedback: '¡Excelente! Distingues claramente entre perímetro (borde) y área (interior).'
  },
  {
    id: 'geometria-3-a',
    topicId: 'geometria',
    level: 3,
    title: 'Área de un triángulo',
    conceptExplanation:
      'Todo triángulo es exactamente la mitad de un rectángulo o paralelogramo con la misma base y altura. Por eso su área es (base × altura) ÷ 2.',
    workedExample: {
      problem: 'Un banderín triangular mide 6 cm de base y 4 cm de altura. ¿Cuál es su área?',
      steps: [
        'Primero multiplicamos base × altura: 6 × 4 = 24.',
        'Dividimos entre 2 porque el triángulo es la mitad: 24 ÷ 2 = 12 cm².'
      ],
      result: '12 cm²'
    },
    question: 'Una vela triangular para un barquito de papel mide 8 cm de base y 5 cm de altura. ¿Cuál es su área?',
    hint: 'Calcula (8 × 5) y luego divide el resultado entre 2.',
    answerType: 'number',
    correctAnswer: '20',
    acceptedAnswers: ['20'],
    unitLabel: 'cm²',
    visualDiagram: { kind: 'geometry_shape', shape: 'triangle', dimensions: ['Base 8 cm', 'Alt 5 cm'], highlight: 'area' },
    stepByStepCorrection: [
      'Aplicamos la fórmula del triángulo: (base × altura) ÷ 2.',
      'Multiplicamos: 8 × 5 = 40.',
      'Dividimos entre 2: 40 ÷ 2 = 20 cm².'
    ],
    positiveFeedback: '¡Brillante! Recordar que el triángulo es la mitad del rectángulo evita olvidar dividir entre 2.'
  },

  // ======================== 8. MEDIDAS ========================
  {
    id: 'medidas-1-a',
    topicId: 'medidas',
    level: 1,
    title: 'Medir con la regla',
    conceptExplanation:
      'Para medir la longitud de un objeto con una regla, observamos dónde empieza y dónde termina, y restamos ambas marcas (o contamos los centímetros entre ellas).',
    workedExample: {
      problem: 'Un lápiz empieza en 2 cm y termina en 9 cm. ¿Cuánto mide?',
      steps: [
        'Restamos la marca final menos la inicial: 9 - 2 = 7.',
        'El lápiz mide 7 cm.'
      ],
      result: '7 cm'
    },
    question: 'Observa la regla: la ramita empieza en 3 cm y termina en 11 cm. ¿Cuántos centímetros mide la ramita?',
    hint: 'Cuenta cuántos saltos hay de 3 a 11 (o calcula 11 - 3).',
    answerType: 'number',
    correctAnswer: '8',
    acceptedAnswers: ['8'],
    unitLabel: 'cm',
    visualDiagram: { kind: 'ruler_measure', startCm: 3, endCm: 11, unit: 'cm' },
    stepByStepCorrection: [
      'El objeto no empezó en el 0, sino en la marca de 3 cm.',
      'La punta termina en la marca de 11 cm.',
      'Restamos 11 - 3 = 8 cm de longitud.'
    ],
    positiveFeedback: '¡Atención de explorador! No te dejaste engañar porque la regla no empezó en 0.'
  },
  {
    id: 'medidas-2-a',
    topicId: 'medidas',
    level: 2,
    title: 'Horas y minutos',
    conceptExplanation:
      'Una hora tiene 60 minutos. Para sumar tiempo, cuando los minutos llegan a 60 se convierten en 1 hora nueva.',
    workedExample: {
      problem: 'La lectura comenzó a las 4:40 y duró 30 minutos. ¿A qué hora terminó?',
      steps: [
        'De 4:40 a las 5:00 pasan 20 minutos.',
        'Como duró 30 minutos, quedan 10 minutos más después de las 5:00.',
        'Terminó a las 5:10.'
      ],
      result: '5:10'
    },
    question: 'El taller de convivencia empezó a las 3:45 y duró 35 minutos. ¿A qué hora terminó?',
    hint: 'De 3:45 a las 4:00 hay 15 minutos. ¿Cuántos minutos quedan de los 35?',
    answerType: 'choice',
    choices: ['4:10', '4:20', '4:15', '3:80'],
    correctAnswer: '4:20',
    acceptedAnswers: ['4:20'],
    stepByStepCorrection: [
      'A las 3:45 le faltan 15 minutos para llegar a las 4:00 en punto.',
      'Restamos esos 15 minutos de los 35 totales: 35 - 15 = 20 minutos restantes.',
      'Avanzamos 20 minutos desde las 4:00: terminó a las 4:20.'
    ],
    positiveFeedback: '¡Muy bien! Pasar por la hora en punto (las 4:00) hace el cálculo del tiempo facilísimo.'
  },
  {
    id: 'medidas-3-a',
    topicId: 'medidas',
    level: 3,
    title: 'Equivalencias entre metros y centímetros',
    conceptExplanation:
      '1 metro equivale exactamente a 100 centímetros. Para comparar medidas distintas conviene pasarlas a la misma unidad.',
    workedExample: {
      problem: '¿Cuántos centímetros son 2 metros y 45 centímetros?',
      steps: [
        '2 metros = 2 × 100 = 200 cm.',
        'Sumamos los 45 cm adicionales: 200 + 45 = 245 cm.'
      ],
      result: '245 cm'
    },
    question: 'Un puente de madera mide 3 metros y 25 centímetros de largo. ¿Cuántos centímetros mide en total?',
    hint: 'Cada metro son 100 cm. Multiplica 3 × 100 y suma 25.',
    answerType: 'number',
    correctAnswer: '325',
    acceptedAnswers: ['325'],
    unitLabel: 'cm',
    stepByStepCorrection: [
      'Convertimos los 3 metros a centímetros: 3 × 100 = 300 cm.',
      'Sumamos los 25 centímetros extras: 300 + 25 = 325 cm.'
    ],
    positiveFeedback: '¡Exacto! Convertir unidades te permite medir y comparar con total seguridad.'
  },

  // ======================== 9. PROBLEMAS RAZONADOS ========================
  {
    id: 'problemas-1-a',
    topicId: 'problemas',
    level: 1,
    title: 'Organizar la merienda compartida',
    conceptExplanation:
      'Para resolver un problema razonado: 1) Lee despacio qué datos tienes, 2) Decide qué operación ayuda, 3) Calcula y revisa si la respuesta tiene sentido.',
    workedExample: {
      problem: 'En una bolsa hay 10 naranjas y en otra 8. Si repartimos 6 en el recreo, ¿cuántas quedan?',
      steps: [
        'Paso 1 (Juntar): 10 + 8 = 18 naranjas en total.',
        'Paso 2 (Repartir/Quitar): 18 - 6 = 12 naranjas quedan.'
      ],
      result: '12 naranjas'
    },
    question: 'Samuel tenía 14 cromos, su hermana le regaló 8 más y luego compartió 5 con Nico. ¿Cuántos cromos tiene Samuel ahora?',
    hint: 'Primero suma lo que recibió (14 + 8) y luego resta lo que compartió (- 5).',
    answerType: 'number',
    correctAnswer: '17',
    acceptedAnswers: ['17'],
    unitLabel: 'cromos',
    stepByStepCorrection: [
      'Paso 1: Samuel empieza con 14 cromos y recibe 8: 14 + 8 = 22 cromos.',
      'Paso 2: Comparte 5 cromos con Nico: 22 - 5 = 17 cromos.',
      'Ahora Samuel tiene 17 cromos.'
    ],
    positiveFeedback: '¡Gran razonamiento en dos pasos! Primero juntaste y luego restaste en orden.'
  },
  {
    id: 'problemas-2-a',
    topicId: 'problemas',
    level: 2,
    title: 'Compra solidaria en la Plaza',
    conceptExplanation:
      'En problemas de dos operaciones, primero calculamos el costo de varios artículos iguales (multiplicación) y luego calculamos el cambio o el total (resta o suma).',
    workedExample: {
      problem: 'Compré 3 cuadernos a 12 monedas cada uno y pagué con 50 monedas. ¿Cuánto me devolvieron?',
      steps: [
        'Costo de los 3 cuadernos: 3 × 12 = 36 monedas.',
        'Cambio: 50 - 36 = 14 monedas.'
      ],
      result: '14 monedas'
    },
    question: 'Para adornar el parque compraron 4 paquetes de 15 banderines cada uno, y ya habían hecho 18 banderines a mano. ¿Cuántos banderines tienen en total?',
    hint: 'Multiplica primero 4 × 15 para saber cuántos vienen en los paquetes, y suma los 18 hechos a mano.',
    answerType: 'number',
    correctAnswer: '78',
    acceptedAnswers: ['78'],
    unitLabel: 'banderines',
    stepByStepCorrection: [
      'Paso 1: Calculamos los banderines comprados: 4 × 15 = 60 banderines.',
      'Paso 2: Sumamos los 18 hechos a mano: 60 + 18 = 78 banderines en total.'
    ],
    positiveFeedback: '¡Excelente lectura y resolución! Separar el problema en dos etapas lo hizo claro.'
  },
  {
    id: 'problemas-3-a',
    topicId: 'problemas',
    level: 3,
    title: 'Planear el huerto comunitario',
    conceptExplanation:
      'Cuando un problema combina reparto y diferencia, organiza los datos paso a paso antes de operar.',
    workedExample: {
      problem: 'De 96 plantines, la cuarta parte (÷ 4) es de tomate y el resto es de lechuga. ¿Cuántos son de lechuga?',
      steps: [
        'Plantines de tomate: 96 ÷ 4 = 24.',
        'Resto de lechuga: 96 - 24 = 72.'
      ],
      result: '72 de lechuga'
    },
    question: 'Un grupo recolectó 120 botellas reciclables. La mitad se llevó al punto verde escolar y del resto se usaron 15 para macetas. ¿Cuántas botellas quedan aún disponibles?',
    hint: 'Primero calcula la mitad de 120 (120 ÷ 2 = 60). Luego a esas 60 réstale 15.',
    answerType: 'number',
    correctAnswer: '45',
    acceptedAnswers: ['45'],
    unitLabel: 'botellas',
    stepByStepCorrection: [
      'Paso 1: Calculamos la mitad de 120: 120 ÷ 2 = 60 botellas llevadas (quedan 60).',
      'Paso 2: De esas 60 botellas restantes se usaron 15 para macetas: 60 - 15 = 45.',
      'Quedan 45 botellas disponibles.'
    ],
    positiveFeedback: '¡Resolución impecable! Seguiste cada dato del enunciado con exactitud.'
  },

  // ======================== 10. RETOS MATEMÁTICOS ========================
  {
    id: 'retos-1-a',
    topicId: 'retos',
    level: 1,
    title: 'El patrón del sendero',
    conceptExplanation:
      'En una secuencia numérica, observa cuánto aumenta o disminuye de un número al siguiente para descubrir la regla secreta.',
    workedExample: {
      problem: '¿Qué número sigue en: 3, 6, 9, 12, ___?',
      steps: [
        'De 3 a 6 suma +3.',
        'De 6 a 9 suma +3 y de 9 a 12 suma +3.',
        'El siguiente es 12 + 3 = 15.'
      ],
      result: '15'
    },
    question: 'Descubre la regla del camino de piedras y escribe el número que falta: 4, 8, 12, 16, ___',
    hint: 'Fíjate en cuánto aumenta cada piedra respecto a la anterior.',
    answerType: 'number',
    correctAnswer: '20',
    acceptedAnswers: ['20'],
    stepByStepCorrection: [
      'Calculamos la diferencia entre números seguidos: 8 - 4 = 4, 12 - 8 = 4, 16 - 12 = 4.',
      'La regla es sumar +4 en cada paso.',
      'Por tanto: 16 + 4 = 20.'
    ],
    positiveFeedback: '¡Ojo de detective! Descubriste el patrón +4 al instante.'
  },
  {
    id: 'retos-2-a',
    topicId: 'retos',
    level: 2,
    title: 'La balanza equilibrada',
    conceptExplanation:
      'En un acertijo de equilibrio (ecuación sencilla), ambos lados valen exactamente lo mismo. Si buscas un número misterioso, resta lo que ya conoces del total.',
    workedExample: {
      problem: '□ + □ + 4 = 14 (ambos cuadros valen igual). ¿Cuánto vale cada □?',
      steps: [
        'Quitamos 4 de ambos lados: □ + □ = 14 - 4 = 10.',
        'Dos números iguales que sumen 10: 10 ÷ 2 = 5.'
      ],
      result: '5'
    },
    question: 'Acertijo de la balanza: Si 3 bolsas iguales de semillas más 5 kg pesan en total 26 kg, ¿cuántos kg pesa cada bolsa?',
    hint: 'Primero quita los 5 kg extras de 26 kg (26 - 5 = 21). Luego reparte 21 entre las 3 bolsas.',
    answerType: 'number',
    correctAnswer: '7',
    acceptedAnswers: ['7'],
    unitLabel: 'kg',
    stepByStepCorrection: [
      '3 bolsas + 5 kg = 26 kg.',
      'Restamos los 5 kg sueltos: 26 - 5 = 21 kg entre las 3 bolsas.',
      'Dividimos entre 3 bolsas iguales: 21 ÷ 3 = 7 kg cada bolsa.'
    ],
    positiveFeedback: '¡Asombroso! Acabas de resolver tu primera ecuación equilibrada con razonamiento lógico.'
  },
  {
    id: 'retos-3-a',
    topicId: 'retos',
    level: 3,
    title: 'Patrón creciente de Fibonacci adaptado',
    conceptExplanation:
      'Algunos patrones no suman siempre lo mismo, sino que crecen siguiendo una relación entre los dos términos anteriores o aumentando el salto.',
    workedExample: {
      problem: '2, 4, 7, 11, 16, ___',
      steps: [
        'Observa los saltos: +2, +3, +4, +5.',
        'El siguiente salto debe ser +6.',
        '16 + 6 = 22.'
      ],
      result: '22'
    },
    question: 'Reto de la Torre Vigía: ¿Qué número continúa esta secuencia? 1, 2, 4, 7, 11, 16, ___',
    hint: 'Mira cuánto sumas cada vez: +1, +2, +3, +4, +5... ¿Cuánto toca sumar ahora?',
    answerType: 'number',
    correctAnswer: '22',
    acceptedAnswers: ['22'],
    stepByStepCorrection: [
      'Analizamos cada salto: 1(+1)→2, 2(+2)→4, 4(+3)→7, 7(+4)→11, 11(+5)→16.',
      'Cada salto aumenta en 1 respecto al anterior.',
      'Ahora toca sumar +6: 16 + 6 = 22.'
    ],
    positiveFeedback: '¡Mente brillante! Analizaste cómo cambiaba la diferencia en cada paso.'
  }
];

export function getExercisesForTopic(topicId: MathTopicId, level?: MathLevel): MathExercise[] {
  return CURATED_MATH_EXERCISES.filter(
    (ex) => ex.topicId === topicId && (level ? ex.level === level : true)
  );
}

/**
 * Offline procedural math exercise generator with full worked example & step-by-step correction.
 * Guarantees 100% offline unlimited practice without any external API.
 */
export function generateExtraMathExercise(topicId: MathTopicId, level: MathLevel): MathExercise {
  const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
  const uid = `gen-${topicId}-${level}-${Date.now()}-${rand(10, 99)}`;

  if (topicId === 'sumas') {
    const a = level === 1 ? rand(4, 15) : level === 2 ? rand(22, 68) : rand(120, 450);
    const b = level === 1 ? rand(3, 14) : level === 2 ? rand(15, 49) : rand(115, 380);
    const ans = a + b;
    return {
      id: uid,
      topicId,
      level,
      title: 'Práctica dinámica de Suma',
      conceptExplanation: 'Suma separando en decenas/centenas y unidades para mantener el orden.',
      workedExample: {
        problem: '15 + 14 = ?',
        steps: ['10 + 10 = 20', '5 + 4 = 9', '20 + 9 = 29'],
        result: '29'
      },
      question: `Calcula el total de ${a} + ${b}:`,
      hint: `Separa ${a} y ${b} en decenas/centenas y unidades, luego suma por partes.`,
      answerType: 'number',
      correctAnswer: String(ans),
      acceptedAnswers: [String(ans)],
      stepByStepCorrection: [
        `Descomponemos las unidades: (${a % 10}) + (${b % 10}) = ${(a % 10) + (b % 10)}.`,
        `Sumamos el resto de decenas/centenas: ${a - (a % 10)} + ${b - (b % 10)} = ${a - (a % 10) + (b - (b % 10))}.`,
        `Unimos ambos resultados: ${a} + ${b} = ${ans}.`
      ],
      positiveFeedback: `¡Muy bien! ${a} + ${b} = ${ans}. ¡Sigues fortaleciendo tu cálculo!`,
      isGenerated: true
    };
  }

  if (topicId === 'restas') {
    const b = level === 1 ? rand(3, 9) : level === 2 ? rand(14, 39) : rand(115, 290);
    const diff = level === 1 ? rand(4, 12) : level === 2 ? rand(15, 45) : rand(85, 240);
    const a = b + diff;
    return {
      id: uid,
      topicId,
      level,
      title: 'Práctica dinámica de Resta',
      conceptExplanation: 'Puedes encontrar la diferencia dando saltos desde el número menor hasta el mayor.',
      workedExample: {
        problem: '32 - 18 = ?',
        steps: ['De 18 a 20 faltan 2', 'De 20 a 32 faltan 12', '2 + 12 = 14'],
        result: '14'
      },
      question: `Si tienes ${a} y usas ${b}, ¿cuánto queda? (${a} - ${b})`,
      hint: `Cuenta cuánto le falta a ${b} para alcanzar ${a}.`,
      answerType: 'number',
      correctAnswer: String(diff),
      acceptedAnswers: [String(diff)],
      stepByStepCorrection: [
        `Partimos de ${a} y quitamos ${b}.`,
        `Comprobación inversa: ${b} + ${diff} = ${a}.`,
        `Por lo tanto, ${a} - ${b} = ${diff}.`
      ],
      positiveFeedback: `¡Exacto! ${a} - ${b} = ${diff}.`,
      isGenerated: true
    };
  }

  if (topicId === 'multiplicaciones') {
    const a = level === 1 ? rand(2, 5) : level === 2 ? rand(6, 9) : rand(12, 26);
    const b = level === 1 ? rand(2, 6) : level === 2 ? rand(4, 9) : rand(3, 8);
    const ans = a * b;
    return {
      id: uid,
      topicId,
      level,
      title: 'Práctica dinámica de Multiplicación',
      conceptExplanation: 'Multiplicar es formar grupos iguales. Si un factor es grande, pártelo en decenas y unidades.',
      workedExample: {
        problem: '14 × 3 = ?',
        steps: ['10 × 3 = 30', '4 × 3 = 12', '30 + 12 = 42'],
        result: '42'
      },
      question: `Calcula el producto de ${a} × ${b}:`,
      hint: a >= 10 ? `Separa ${a} en ${Math.floor(a / 10) * 10} + ${a % 10} y multiplica cada parte por ${b}.` : `Suma ${a} veces el número ${b}.`,
      answerType: 'number',
      correctAnswer: String(ans),
      acceptedAnswers: [String(ans)],
      visualDiagram: a <= 6 && b <= 8 ? { kind: 'number_groups', groups: a, perGroup: b, operation: 'multiply' } : undefined,
      stepByStepCorrection: [
        `Necesitamos ${a} grupos de ${b}.`,
        a >= 10
          ? `Separamos: (${Math.floor(a / 10) * 10} × ${b}) + (${a % 10} × ${b}) = ${Math.floor(a / 10) * 10 * b} + ${(a % 10) * b} = ${ans}.`
          : `Sumando ${a} veces ${b} obtenemos ${ans}.`
      ],
      positiveFeedback: `¡Estupendo! ${a} × ${b} = ${ans}.`,
      isGenerated: true
    };
  }

  if (topicId === 'divisiones') {
    const divisor = level === 1 ? rand(2, 5) : level === 2 ? rand(3, 8) : rand(4, 9);
    const quotient = level === 1 ? rand(2, 6) : level === 2 ? rand(7, 15) : rand(12, 28);
    const dividend = divisor * quotient;
    return {
      id: uid,
      topicId,
      level,
      title: 'Práctica dinámica de División',
      conceptExplanation: 'Dividir es buscar qué número multiplicado por el divisor da el total exacto.',
      workedExample: {
        problem: '36 ÷ 4 = ?',
        steps: ['Pensamos: 4 × ? = 36', '4 × 9 = 36', 'Respuesta: 9'],
        result: '9'
      },
      question: `Reparte ${dividend} en ${divisor} grupos iguales (${dividend} ÷ ${divisor}):`,
      hint: `Busca qué número multiplicado por ${divisor} es igual a ${dividend}.`,
      answerType: 'number',
      correctAnswer: String(quotient),
      acceptedAnswers: [String(quotient)],
      stepByStepCorrection: [
        `Queremos resolver ${dividend} ÷ ${divisor}.`,
        `Comprobamos multiplicando: ${divisor} × ${quotient} = ${dividend}.`,
        `Por lo tanto, caben ${quotient} en cada grupo.`
      ],
      positiveFeedback: `¡Excelente! ${dividend} ÷ ${divisor} = ${quotient}.`,
      isGenerated: true
    };
  }

  if (topicId === 'fracciones') {
    const denom = level === 1 ? rand(3, 5) : level === 2 ? rand(5, 8) : rand(6, 10);
    const num1 = rand(1, Math.max(1, denom - 2));
    const num2 = rand(1, Math.max(1, denom - num1));
    const sumNum = num1 + num2;
    const ans = `${sumNum}/${denom}`;
    return {
      id: uid,
      topicId,
      level,
      title: 'Práctica dinámica de Fracciones',
      conceptExplanation: 'Con el mismo denominador, solo sumamos los numeradores y mantenemos el denominador.',
      workedExample: {
        problem: '1/4 + 2/4 = ?',
        steps: ['1 + 2 = 3', 'Conservamos el 4: 3/4'],
        result: '3/4'
      },
      question: `Calcula la suma visual: ${num1}/${denom} + ${num2}/${denom}`,
      hint: `Suma ${num1} + ${num2} arriba y conserva el ${denom} abajo.`,
      answerType: 'choice',
      choices: [
        ans,
        `${sumNum}/${denom * 2}`,
        `${Math.max(1, sumNum - 1)}/${denom}`,
        `${num1 + 1}/${denom + 1}`
      ].filter((v, i, arr) => arr.indexOf(v) === i),
      correctAnswer: ans,
      acceptedAnswers: [ans],
      visualDiagram: { kind: 'fraction_bar', numerator: sumNum, denominator: denom, label: `${num1}/${denom} + ${num2}/${denom}` },
      stepByStepCorrection: [
        `Ambas fracciones tienen denominador ${denom}.`,
        `Sumamos los numeradores: ${num1} + ${num2} = ${sumNum}.`,
        `Resultado: ${ans}.`
      ],
      positiveFeedback: `¡Muy bien! ${num1}/${denom} + ${num2}/${denom} = ${ans}.`,
      isGenerated: true
    };
  }

  if (topicId === 'decimales') {
    const d1 = level === 1 ? rand(2, 9) / 10 : rand(11, 49) / 10;
    const d2 = level === 1 ? rand(1, 8) / 10 : rand(11, 39) / 10;
    const ans = Number((d1 + d2).toFixed(1));
    return {
      id: uid,
      topicId,
      level,
      title: 'Práctica dinámica de Decimales',
      conceptExplanation: 'Alinea los puntos decimales y suma décimas con décimas y enteros con enteros.',
      workedExample: {
        problem: '1.3 + 2.4 = ?',
        steps: ['0.3 + 0.4 = 0.7', '1 + 2 = 3', 'Total: 3.7'],
        result: '3.7'
      },
      question: `Suma estos decimales: ${d1.toFixed(1)} + ${d2.toFixed(1)}`,
      hint: 'Suma primero las cifras después del punto y luego los números enteros.',
      answerType: 'number',
      correctAnswer: String(ans),
      acceptedAnswers: [String(ans), String(ans).replace('.', ',')],
      stepByStepCorrection: [
        `Alineamos ${d1.toFixed(1)} + ${d2.toFixed(1)}.`,
        `Sumando décimas y enteros obtenemos ${ans}.`
      ],
      positiveFeedback: `¡Perfecto! ${d1.toFixed(1)} + ${d2.toFixed(1)} = ${ans}.`,
      isGenerated: true
    };
  }

  if (topicId === 'geometria') {
    const base = rand(3, level === 1 ? 7 : 12);
    const height = rand(2, level === 1 ? 6 : 9);
    const isPerimeter = level === 1;
    const ans = isPerimeter ? 2 * (base + height) : base * height;
    return {
      id: uid,
      topicId,
      level,
      title: isPerimeter ? 'Perímetro dinámico' : 'Área dinámica',
      conceptExplanation: isPerimeter
        ? 'El perímetro de un rectángulo suma sus 4 lados: (2 × base) + (2 × altura).'
        : 'El área de un rectángulo multiplica su base por su altura.',
      workedExample: isPerimeter
        ? { problem: 'Rectángulo de 4 × 3', steps: ['4 + 3 + 4 + 3 = 14'], result: '14' }
        : { problem: 'Rectángulo de 4 × 3', steps: ['4 × 3 = 12'], result: '12' },
      question: isPerimeter
        ? `Calcula el perímetro de un rectángulo de ${base} m de base y ${height} m de altura:`
        : `Calcula el área de un rectángulo de ${base} m de base y ${height} m de altura:`,
      hint: isPerimeter ? `Suma ${base} + ${height} + ${base} + ${height}.` : `Multiplica ${base} × ${height}.`,
      answerType: 'number',
      correctAnswer: String(ans),
      acceptedAnswers: [String(ans)],
      unitLabel: isPerimeter ? 'm' : 'm²',
      visualDiagram: {
        kind: 'geometry_shape',
        shape: 'rectangle',
        dimensions: [`${base} m`, `${height} m`],
        highlight: isPerimeter ? 'perimeter' : 'area'
      },
      stepByStepCorrection: isPerimeter
        ? [`Sumamos los 4 lados del rectángulo: ${base} + ${height} + ${base} + ${height} = ${ans} m.`]
        : [`Multiplicamos base × altura: ${base} × ${height} = ${ans} m².`],
      positiveFeedback: `¡Excelente trabajo geométrico! La respuesta correcta es ${ans} ${isPerimeter ? 'm' : 'm²'}.`,
      isGenerated: true
    };
  }

  if (topicId === 'medidas') {
    const startCm = level === 1 ? 0 : rand(1, 5);
    const length = rand(4, level === 3 ? 11 : 8);
    const endCm = startCm + length;
    return {
      id: uid,
      topicId,
      level,
      title: 'Medición con regla graduada',
      conceptExplanation: 'Resta la marca donde empieza el objeto de la marca donde termina.',
      workedExample: {
        problem: 'De 2 cm a 8 cm',
        steps: ['8 - 2 = 6 cm'],
        result: '6 cm'
      },
      question: `La barra empieza en ${startCm} cm y termina en ${endCm} cm. ¿Cuántos centímetros mide?`,
      hint: `Calcula ${endCm} - ${startCm}.`,
      answerType: 'number',
      correctAnswer: String(length),
      acceptedAnswers: [String(length)],
      unitLabel: 'cm',
      visualDiagram: { kind: 'ruler_measure', startCm, endCm, unit: 'cm' },
      stepByStepCorrection: [`Restamos la posición final menos la inicial: ${endCm} - ${startCm} = ${length} cm.`],
      positiveFeedback: `¡Medición exacta! Mide ${length} cm.`,
      isGenerated: true
    };
  }

  // Fallback for problemas / retos: dynamic logical sequence or word problem
  if (topicId === 'problemas') {
    const cajas = rand(2, level + 3);
    const porCaja = rand(4, level * 4 + 4);
    const extra = rand(3, 12);
    const total = cajas * porCaja + extra;
    return {
      id: uid,
      topicId,
      level,
      title: 'Problema cotidiano de la comunidad',
      conceptExplanation: 'Lee los dos pasos: primero multiplica grupos iguales y luego suma los sueltos.',
      workedExample: {
        problem: '2 cajas de 5 lápices y 3 sueltos',
        steps: ['2 × 5 = 10', '10 + 3 = 13'],
        result: '13'
      },
      question: `Luna preparó ${cajas} canastas con ${porCaja} frutas en cada una, y además guardó ${extra} frutas aparte. ¿Cuántas frutas hay en total?`,
      hint: `Multiplica ${cajas} × ${porCaja} y luego suma ${extra}.`,
      answerType: 'number',
      correctAnswer: String(total),
      acceptedAnswers: [String(total)],
      unitLabel: 'frutas',
      stepByStepCorrection: [
        `Paso 1: En las canastas hay ${cajas} × ${porCaja} = ${cajas * porCaja} frutas.`,
        `Paso 2: Sumamos las ${extra} frutas aparte: ${cajas * porCaja} + ${extra} = ${total}.`
      ],
      positiveFeedback: `¡Muy bien resuelto! ${total} frutas listas para compartir.`,
      isGenerated: true
    };
  }

  // retos
  const start = rand(2, 9);
  const step = rand(3, level * 3 + 2);
  const seq = [start, start + step, start + step * 2, start + step * 3];
  const nextVal = start + step * 4;
  return {
    id: uid,
    topicId,
    level,
    title: 'Secuencia lógica del puente',
    conceptExplanation: 'Descubre cuánto suma cada salto y aplícalo al último número.',
    workedExample: {
      problem: '2, 5, 8, 11, ___',
      steps: ['Cada vez suma +3', '11 + 3 = 14'],
      result: '14'
    },
    question: `¿Qué número sigue en la serie? ${seq.join(', ')}, ___`,
    hint: `Resta el primer número al segundo (${seq[1]} - ${seq[0]}) para descubrir el salto.`,
    answerType: 'number',
    correctAnswer: String(nextVal),
    acceptedAnswers: [String(nextVal)],
    stepByStepCorrection: [
      `La diferencia entre cada número es +${step}.`,
      `Sumamos ${seq[3]} + ${step} = ${nextVal}.`
    ],
    positiveFeedback: `¡Brillante! Descubriste la regla (+${step}) y completaste la serie con ${nextVal}.`,
    isGenerated: true
  };
}
