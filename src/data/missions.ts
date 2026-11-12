import { Mission } from '../types/game';

export const MISSIONS: Mission[] = [
  // ==========================================
  // MISIÓN 1: Aprender a escuchar
  // ==========================================
  {
    id: 1,
    title: 'Aprender a Escuchar',
    subtitle: 'El arte de prestar atención con los ojos, la mente y el corazón',
    skillFocus: 'Escucha Activa y Presencia Afectuosa',
    zoneId: 'parque',
    primaryCharacters: ['nico', 'sofia', 'guia'],
    badge: {
      id: 'badge_escucha',
      title: 'Oído Atento y Corazón Abierto',
      skillName: 'Escucha Activa',
      description: 'Aprendiste a escuchar sin interrumpir, validando lo que el otro siente antes de responder.',
      icon: 'Ear',
      color: '#0284c7'
    },
    modes: {
      infantil: {
        station1_observe: {
          title: 'El misterio de las palabras que vuelan en el parque',
          sceneDescription: 'Nico está tan emocionado con su nuevo juego de aviones que no deja hablar a Sofía, quien intenta contarle que se raspó la rodilla jugando.',
          dialogue: [
            { speaker: 'nico', text: '¡Mira mi avión, Sofía! Vuela más alto que los árboles, ¡mira qué rápido va!', emotion: 'entusiasmado' },
            { speaker: 'sofia', text: 'Nico... espera un momento, es que me caí y me duele un poco...', emotion: 'preocupado' },
            { speaker: 'nico', text: '¡Y luego podemos lanzarlo desde el tobogán! ¿Viste la pirueta que hizo?', emotion: 'entusiasmado' },
            { speaker: 'guia', text: 'Notemos algo especial: a veces nuestro entusiasmo hace tanto ruido que no nos deja ver que un amigo necesita ser escuchado.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué Sofía se siente triste aunque Nico esté jugando alegremente?'
        },
        station2_understand: {
          title: '¿Qué siente cada uno por dentro?',
          introduction: 'Cuando miramos las emociones de los demás con empatía, descubrimos cosas que no se ven a simple vista.',
          perspectives: [
            {
              characterId: 'sofia',
              emotion: 'preocupado',
              feeling: 'Desatendida y sola con su dolor',
              perspective: 'Siento que lo que me pasa no le importa a Nico porque no me mira a la cara ni me deja terminar de hablar.',
              need: 'Necesito que mi amigo guarde el juguete un minuto y me pregunte cómo estoy.'
            },
            {
              characterId: 'nico',
              emotion: 'curioso',
              feeling: 'Entusiasmado pero distraído',
              perspective: 'No me di cuenta de su dolor, creí que jugar juntos la haría sonreír.',
              need: 'Aprender a hacer una pausa y mirar a los ojos a mis amigos cuando me hablan.'
            }
          ],
          reflectionPrompt: 'Escuchar no es sólo oír sonidos: es regalarle nuestro tiempo y mirada a la persona que nos habla.'
        },
        station3_discover: {
          title: 'Tres caminos para responder',
          guidance: 'Descubre qué ocurre según la forma en que Nico decida actuar ahora:',
          alternatives: [
            {
              id: 'a1_interrumpir',
              title: 'Seguir hablando de su avión',
              description: 'Nico ignora la queja de Sofía y corre hacia el columpio para seguir jugando solo.',
              consequence: 'Sofía se queda sentada triste en el banco y la amistad se siente fría y distante.',
              educationalReflection: 'Cuando sólo hablamos de nosotros, los amigos se sienten invisibles.',
              type: 'exploratoria',
              icon: 'VolumeX'
            },
            {
              id: 'a1_parar_mirar',
              title: 'Pausar el juego, mirar a los ojos y preguntar',
              description: 'Nico baja el avión, se arrodilla junto a Sofía y le dice: "Perdóname Sofi, ¿te lastimaste? Cuéntame qué pasó".',
              consequence: 'Sofía siente alivio, le muestra su raspadura y entre ambos van con El Guía a curarla.',
              educationalReflection: '¡Excelente! Detenerse y mirar a los ojos demuestra cariño y verdadera amistad.',
              type: 'optima',
              icon: 'HeartHandshake'
            },
            {
              id: 'a1_decirle_no_llores',
              title: 'Decirle "no llores que no es nada"',
              description: 'Nico le dice rápido que no es para tanto y que siga jugando.',
              consequence: 'Sofía se siente incomprendida porque para ella sí duele y siente que minimizan su dolor.',
              educationalReflection: 'Decir "no es nada" sin escuchar invalida lo que la otra persona está sintiendo.',
              type: 'constructiva',
              icon: 'ShieldAlert'
            }
          ]
        },
        station4_choose: {
          title: 'La Elección del Sabio',
          closingReflection: 'Cuando eliges pausar lo que estás haciendo para escuchar de verdad, te conviertes en un amigo de oro. Las palabras de consuelo sanan más rápido que una venda.'
        },
        station5_practice: {
          type: 'drag_order',
          title: 'Los 4 Pasos de la Escucha de Oro',
          instruction: 'Ordena los pasos que demuestran que estás escuchando con atención afectuosa:',
          items: [
            { id: 'step_1', text: '1. Poner en pausa lo que estoy haciendo y guardar distracciones.', correctOrder: 1 },
            { id: 'step_2', text: '2. Mirar a los ojos con amabilidad y rostro tranquilo.', correctOrder: 2 },
            { id: 'step_3', text: '3. Esperar que termine de hablar sin interrumpir a la mitad.', correctOrder: 3 },
            { id: 'step_4', text: '4. Preguntar con cariño: "¿Cómo te sientes con eso?".', correctOrder: 4 }
          ],
          completionMessage: '¡Completaste los pasos de la Escucha de Oro! Ahora sabes cómo estar presente para quienes te importan.',
          skillTakeaway: 'Escuchar con atención es el regalo más generoso que podemos darle a otra persona.'
        }
      },
      juvenil: {
        station1_observe: {
          title: 'Escuchar más allá del ruido superficial',
          sceneDescription: 'En una charla entre amigos en el parque, Sofía intenta compartir una preocupación sobre la presión escolar y las expectativas de su familia, pero Nico consulta repetidamente su teléfono y cambia el tema hacia planes del fin de semana.',
          dialogue: [
            { speaker: 'sofia', text: 'Siento que en casa nadie nota lo agotada que estoy con los exámenes y los entrenamientos... me siento muy abrumada.', emotion: 'preocupado' },
            { speaker: 'nico', text: 'Sí, total... oye, pero viste el video que subieron ayer del torneo? Está viralísimo.', emotion: 'curioso' },
            { speaker: 'sofia', text: 'Ah... sí, lo vi. Pero te estaba contando algo importante para mí...', emotion: 'reflexivo' },
            { speaker: 'guia', text: 'La presencia digital y la urgencia de responder notificaciones muchas veces nos roba la capacidad de conectar con el dolor o la necesidad real de nuestros amigos.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo afecta a un vínculo cuando alguien habla mientras la otra persona está pendiente de otra pantalla?'
        },
        station2_understand: {
          title: 'Mapeo de necesidades afectivas',
          introduction: 'En la juventud, sentirse escuchado sin ser juzgado o desestimado es clave para la salud mental y la pertenencia.',
          perspectives: [
            {
              characterId: 'sofia',
              emotion: 'preocupado',
              feeling: 'Vulnerabilidad rechazada',
              perspective: 'Me costó mucho abrirme y contar lo que me pesa. Si mi amigo no me pone atención, siento que mis problemas no valen nada.',
              need: 'Validación emocional y un espacio confidencial donde desahogarse.'
            },
            {
              characterId: 'nico',
              emotion: 'reflexivo',
              feeling: 'Incomodidad ante temas difíciles',
              perspective: 'A veces cuando alguien me cuenta algo triste no sé qué decir, y por inercia miro el celular o cambio el tema para no sentirme incómodo.',
              need: 'Comprender que no necesita resolver el problema del otro, sino sólo acompañar en silencio compasivo.'
            }
          ],
          reflectionPrompt: 'Acompañar a un amigo no exige tener la solución mágica, sino la valentía de estar presentes con respeto.'
        },
        station3_discover: {
          title: 'Estrategias de escucha activa',
          guidance: 'Analiza estas tres formas de responder a una confidencia personal:',
          alternatives: [
            {
              id: 'a1_comprometer_atencion',
              title: 'Guardar el dispositivo y practicar escucha empática',
              description: 'Nico guarda su teléfono en el bolsillo, respira y le dice: "Perdón Sofi, me distraje. Es serio lo que dices, cuéntame más, estoy aquí para ti".',
              consequence: 'Sofía se siente respetada y segura, profundizando una amistad auténtica y duradera.',
              educationalReflection: 'La escucha activa fortalece la confianza y brinda un refugio seguro ante la ansiedad.',
              type: 'optima',
              icon: 'HeartHandshake'
            },
            {
              id: 'a1_dar_consejo_rapido',
              title: 'Dar un consejo apresurado y cortar la conversación',
              description: 'Nico le dice: "Pues fácil, organízate mejor con una agenda y no te estreses tanto".',
              consequence: 'Sofía siente que simplifican su experiencia emocional y cierra su diálogo.',
              educationalReflection: 'Aconsejar antes de comprender suele sentirse como una forma rápida de quitarse el problema de encima.',
              type: 'constructiva',
              icon: 'MessageSquare'
            },
            {
              id: 'a1_comparar_problema',
              title: 'Competir por quién tiene más estrés',
              description: 'Nico responde: "Uff, tú te quejas pero mi semana fue mil veces peor, no imaginas lo que me pasó".',
              consequence: 'La conversación se transforma en una competencia y se anula la empatía mutua.',
              educationalReflection: 'Minimizar el relato ajeno comparándolo con el propio destruye la escucha.',
              type: 'exploratoria',
              icon: 'AlertCircle'
            }
          ]
        },
        station4_choose: {
          title: 'Decisión de Madurez Emocional',
          closingReflection: 'Aprender a escuchar sin defensas ni distracciones es la habilidad de liderazgo y convivencia más valorada en la vida adulta.'
        },
        station5_practice: {
          type: 'connect_pairs',
          title: 'Diferenciar entre "Oír superficialmente" y "Escuchar con empatía"',
          instruction: 'Conecta cada frase reactiva con su contraparte de escucha empática constructiva:',
          items: [
            { id: 'pair_1a', text: 'Frase reactiva: "No es para tanto, te ahogas en un vaso de agua."', matchId: 'm1' },
            { id: 'pair_1b', text: 'Escucha empática: "Veo que esto te está costando mucho esfuerzo; gracias por contármelo."', matchId: 'm1' },
            { id: 'pair_2a', text: 'Frase reactiva: "Yo que tú simplemente lo olvidaría y ya."', matchId: 'm2' },
            { id: 'pair_2b', text: 'Escucha empática: "¿Qué sientes que necesitas en este momento para estar más tranquila?"', matchId: 'm2' }
          ],
          completionMessage: '¡Excelente conexión! Has identificado las respuestas que nutren la confianza en lugar de cerrarla.',
          skillTakeaway: 'Validar las emociones antes de proponer consejos es la base del apoyo mutuo.'
        }
      },
      adulto: {
        station1_observe: {
          title: 'Escucha asertiva en el ámbito familiar y comunitario',
          sceneDescription: 'En una reunión comunitaria sobre las obras del parque, dos vecinos debaten acaloradamente. Uno defiende mantener áreas deportivas mientras la otra vecina propone un jardín botánico para personas mayores y niños. En lugar de escuchar las necesidades de fondo, cada uno se atrinchera en sus argumentos interrumpiendo al otro.',
          dialogue: [
            { speaker: 'samuel', text: '¡Si quitamos la cancha los chicos no tendrán dónde hacer deporte y caerán en el ocio!', emotion: 'preocupado' },
            { speaker: 'luna', text: '¡Pero ustedes no piensan en los adultos mayores que necesitan un espacio verde tranquilo sin balones volando!', emotion: 'preocupado' },
            { speaker: 'guia', text: 'Observen la trampa del debate reactivo: cuando nos preparamos para rebatir antes de que el otro termine, dejamos de escuchar las necesidades legítimas detrás de cada postura.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo podemos transitar de una confrontación de posiciones a un diálogo de necesidades compartidas?'
        },
        station2_understand: {
          title: 'Desglosando posiciones vs. necesidades',
          introduction: 'La mediación restaurativa enseña que toda postura intransigente oculta una necesidad humana razonable que busca ser atendida.',
          perspectives: [
            {
              characterId: 'samuel',
              emotion: 'preocupado',
              feeling: 'Temor a la exclusión juvenil',
              perspective: 'Defiende la cancha porque valora el deporte, la salud física y la convivencia sana de los jóvenes del barrio.',
              need: 'Espacios seguros de recreación activa para la juventud.'
            },
            {
              characterId: 'luna',
              emotion: 'reflexivo',
              feeling: 'Preocupación por la seguridad y la calma',
              perspective: 'Defiende el área verde porque cuida a sus abuelos y desea sombra, descanso y contacto con la naturaleza.',
              need: 'Accesibilidad, tranquilidad y seguridad intergeneracional.'
            }
          ],
          reflectionPrompt: '¿Es posible diseñar una solución que integre el deporte juvenil y el sosiego de los mayores?'
        },
        station3_discover: {
          title: 'Tres modelos de gestión del diálogo',
          guidance: 'Evalúa los resultados de cada intervención comunicativa:',
          alternatives: [
            {
              id: 'a1_parafraseo_restaurativo',
              title: 'Parafraseo y síntesis de necesidades recíprocas',
              description: 'El facilitador dice: "Escucho que Samuel quiere asegurar el deporte juvenil y Luna busca proteger la tranquilidad de los mayores. Ambos buscan el bienestar de nuestra comunidad. ¿Cómo distribuimos el espacio para ambos?"',
              consequence: 'La tensión baja de inmediato, los vecinos se sienten reconocidos y comienzan a dibujar un plano mixto integrador.',
              educationalReflection: 'Parafrasear sin emitir juicio legitima a las partes y abre la puerta al pensamiento de soluciones integradoras.',
              type: 'optima',
              icon: 'Scale'
            },
            {
              id: 'a1_votacion_mayoritaria',
              title: 'Forzar una votación rápida por mayoría',
              description: 'El comité decide votar sin más diálogo y que gane la mayoría numérica.',
              consequence: 'El grupo perdedor queda resentido, desvinculado de la comunidad y con sensación de injusticia.',
              educationalReflection: 'Las decisiones impuestas por mayoría sin diálogo dejan fracturas comunitarias.',
              type: 'constructiva',
              icon: 'Users'
            },
            {
              id: 'a1_cancelar_proyecto',
              title: 'Suspender el proyecto por falta de consenso',
              description: 'Se cancela la remodelación ante el conflicto.',
              consequence: 'El parque sigue deteriorado y nadie obtiene ningún beneficio.',
              educationalReflection: 'Evadir el conflicto no lo resuelve; posterga las mejoras necesarias.',
              type: 'exploratoria',
              icon: 'XCircle'
            }
          ]
        },
        station4_choose: {
          title: 'Habilidad de Liderazgo Comunitario',
          closingReflection: 'La escucha no es pasividad; es una intervención activa de pacificación que desarma la hostilidad y permite construir acuerdos perdurables.'
        },
        station5_practice: {
          type: 'assertive_filter',
          title: 'El Filtro de la Comunicación Restaurativa',
          instruction: 'Identifica la formulación que aplica escucha activa y reformulación apreciativa:',
          items: [
            { id: 'f1', text: '"Usted está completamente equivocado y su idea arruinará el vecindario."', category: 'reactiva' },
            { id: 'f2', text: '"Entiendo su inquietud por la seguridad; permítame compartirle cómo podemos garantizarla juntos."', category: 'asertiva' },
            { id: 'f3', text: '"Si no votan por mi propuesta, no cuenten con mi apoyo para nada más."', category: 'reactiva' },
            { id: 'f4', text: '"Valoro su punto de vista; exploremos una alternativa donde nadie quede perjudicado."', category: 'asertiva' }
          ],
          targets: [
            { id: 'asertiva', label: 'Comunicación Restaurativa y Asertiva' },
            { id: 'reactiva', label: 'Comunicación Reactiva y Polarizante' }
          ],
          completionMessage: '¡Filtro completado! Has ejercitado el discernimiento clave para mediar desacuerdos en cualquier entorno profesional o familiar.',
          skillTakeaway: 'Reformular el conflicto desde las necesidades comunes transforma a adversarios en colaboradores.'
        }
      }
    }
  },

  // ==========================================
  // MISIÓN 2: Compartir con los demás
  // ==========================================
  {
    id: 2,
    title: 'Compartir con los Demás',
    subtitle: 'La alegría de multiplicar lo bueno cuando sabemos brindar espacio y recursos',
    skillFocus: 'Generosidad, Equidad y Cohesión',
    zoneId: 'escuela',
    primaryCharacters: ['samuel', 'luna', 'guia'],
    badge: {
      id: 'badge_compartir',
      title: 'Espíritu de Generosidad',
      skillName: 'Compartir y Cooperar',
      description: 'Descubriste que compartir no es perder, sino enriquecer la experiencia colectiva.',
      icon: 'Share2',
      color: '#10b981'
    },
    modes: {
      infantil: {
        station1_observe: {
          title: 'Los colores mágicos del taller de arte',
          sceneDescription: 'En la mesa de dibujo de la escuela, Luna trajo un estuche con lápices de colores brillantes especiales. Samuel quiere pintar el sol de su cuadro pero Luna abraza la caja con fuerza y le dice que son suyos.',
          dialogue: [
            { speaker: 'samuel', text: 'Luna, ¿me prestas el amarillo solo un ratito para terminar los rayos de mi sol?', emotion: 'curioso' },
            { speaker: 'luna', text: '¡No, me los regaló mi tía y no quiero que se gasten ni que se rompa la punta!', emotion: 'preocupado' },
            { speaker: 'samuel', text: 'Pero si no los compartes mi dibujo quedará incompleto... prometo cuidarlos mucho.', emotion: 'preocupado' },
            { speaker: 'guia', text: 'Es natural querer cuidar nuestras cosas valiosas, pero también es hermoso descubrir qué pasa cuando confiamos y compartimos.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo puede Luna cuidar sus lápices y a la vez ser una buena compañera con Samuel?'
        },
        station2_understand: {
          title: 'Dos corazones en la misma mesa',
          introduction: 'Compartir despierta a veces miedo a perder lo propio, pero también genera alegría compartida.',
          perspectives: [
            {
              characterId: 'luna',
              emotion: 'preocupado',
              feeling: 'Miedo a que se dañen sus pertenencias',
              perspective: 'Amo este regalo y temo que si lo presto se pierda o se rompa.',
              need: 'Sentir seguridad de que sus cosas serán cuidadas con delicadeza.'
            },
            {
              characterId: 'samuel',
              emotion: 'preocupado',
              feeling: 'Tristeza por sentirse excluido',
              perspective: 'Solo quería un toque de color para terminar mi obra y compartir con mi amiga.',
              need: 'Poder participar y sentirse bienvenido en la mesa de arte.'
            }
          ],
          reflectionPrompt: 'Cuidar nuestras cosas y cuidar a nuestros amigos pueden ir de la mano si ponemos reglas cariñosas.'
        },
        station3_discover: {
          title: 'Tres maneras de resolver el momento del arte',
          guidance: 'Observa qué sucede con cada decisión:',
          alternatives: [
            {
              id: 'a2_compartir_con_cuidado',
              title: 'Prestar el color acordando cuidarlo con suavidad',
              description: 'Luna le entrega el color amarillo a Samuel diciendo: "Claro Samuel, úsalo con cariño y me lo devuelves cuando termines el sol".',
              consequence: 'Samuel dibuja un sol resplandeciente, le devuelve el lápiz impecable y le dibuja una estrella de agradecimiento.',
              educationalReflection: '¡Maravilloso! Acordar el cuidado mutuo permite compartir sin temor.',
              type: 'optima',
              icon: 'Sparkles'
            },
            {
              id: 'a2_guardar_todo',
              title: 'Guardar los colores en la mochila y no pintar nadie',
              description: 'Luna se molesta y guarda todo para que nadie toque sus materiales.',
              consequence: 'La mesa queda en silencio aburrido y los dos amigos se sienten frustrados.',
              educationalReflection: 'Aislarse para no compartir apaga la diversión de todos.',
              type: 'exploratoria',
              icon: 'Lock'
            },
            {
              id: 'a2_quitar_a_la_fuerza',
              title: 'Que Samuel intente arrebatarle el lápiz',
              description: 'Samuel pierde la paciencia y trata de agarrar el color.',
              consequence: 'El lápiz cae al suelo, se quiebra la punta y ambos se enojan.',
              educationalReflection: 'La fuerza y la exigencia nunca son el camino; el respeto a los límites del otro siempre es primero.',
              type: 'constructiva',
              icon: 'AlertTriangle'
            }
          ]
        },
        station4_choose: {
          title: 'El Cuadro Compartido',
          closingReflection: 'Cuando compartes con generosidad y cuidado recíproco, no se gasta nada: ¡se multiplica la felicidad y la amistad!'
        },
        station5_practice: {
          type: 'drag_order',
          title: 'El Ritual del Préstamo Respetuoso',
          instruction: 'Ordena la secuencia correcta para pedir prestado y compartir con éxito:',
          items: [
            { id: 'p1', text: '1. Pedir con educación y amabilidad ("¿Por favor me prestas...?").', correctOrder: 1 },
            { id: 'p2', text: '2. Escuchar la respuesta del dueño sin exigir ni forzar.', correctOrder: 2 },
            { id: 'p3', text: '3. Usar el objeto con extremo cuidado y delicadeza.', correctOrder: 3 },
            { id: 'p4', text: '4. Devolverlo en mano a tiempo diciendo con alegría: "¡Muchas gracias!".', correctOrder: 4 }
          ],
          completionMessage: '¡Excelente orden! Cumplir con este ritual hace que las personas siempre confíen en prestarte sus cosas.',
          skillTakeaway: 'La generosidad florece donde hay confianza y cuidado responsable.'
        }
      },
      juvenil: {
        station1_observe: {
          title: 'El proyecto grupal y la distribución de recursos',
          sceneDescription: 'En la biblioteca de la escuela, el equipo de robótica tiene una sola tableta de programación. Samuel se adueña del dispositivo todo el recreo para probar su código, sin permitir que Luna y Nico ingresen sus propuestas.',
          dialogue: [
            { speaker: 'luna', text: 'Samuel, llevamos media hora esperando para programar la ruta del sensor. Quedamos en turnarnos cada quince minutos.', emotion: 'preocupado' },
            { speaker: 'samuel', text: 'Es que si lo suelto ahora voy a perder el hilo de mi algoritmo. Déjenme terminar mi parte primero.', emotion: 'entusiasmado' },
            { speaker: 'nico', text: 'Pero el proyecto es de los tres; si no participamos todos, no será una entrega justa ni aprenderemos.', emotion: 'reflexivo' },
            { speaker: 'guia', text: 'El éxito individual no compensa la exclusión de los compañeros. Los mejores logros nacen de la equidad en el acceso a las herramientas.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo balancear la concentración personal con el compromiso con el equipo?'
        },
        station2_understand: {
          title: 'Comprendiendo el bien común',
          introduction: 'Compartir en proyectos colaborativos va más allá de objetos físicos: involucra compartir tiempo, voz y protagonismo.',
          perspectives: [
            {
              characterId: 'samuel',
              emotion: 'entusiasmado',
              feeling: 'Obsesión por la perfección técnica',
              perspective: 'Siente que haciéndolo él avanzará más rápido y asegurará una mejor calificación para todos.',
              need: 'Aprender a confiar en las capacidades de sus pares y delegar.'
            },
            {
              characterId: 'luna',
              emotion: 'preocupado',
              feeling: 'Subestimada e invisibilizada',
              perspective: 'Quiere aportar su creatividad y aprender programación, no ser una simple espectadora.',
              need: 'Tiempo equitativo de práctica y valoración de su contribución.'
            }
          ],
          reflectionPrompt: 'Un equipo donde uno solo hace todo no es un equipo: es una persona sobrecargada y dos personas excluidas.'
        },
        station3_discover: {
          title: 'Modelos de trabajo colaborativo',
          guidance: 'Compara estas alternativas de gestión grupal:',
          alternatives: [
            {
              id: 'a2_turnos_pares',
              title: 'Programación en parejas con roles rotativos',
              description: 'Samuel adopta la técnica de programación en pareja: uno conduce el teclado 15 minutos mientras los otros revisan la lógica y luego rotan.',
              consequence: 'El código queda libre de errores, los tres aprenden y el robot funciona a la perfección.',
              educationalReflection: 'Rotar roles potencia el aprendizaje mutuo y elimina la competencia tóxica.',
              type: 'optima',
              icon: 'RefreshCw'
            },
            {
              id: 'a2_hacerlo_solo',
              title: 'Que Samuel haga todo el trabajo y sólo ponga sus nombres',
              description: 'Los demás se cansan de insistir y se van a jugar.',
              consequence: 'Samuel queda exhausto, con resentimiento, y sus amigos no aprenden nada para la evaluación.',
              educationalReflection: 'Asumir todo el trabajo por no compartir responsabilidades daña los vínculos.',
              type: 'constructiva',
              icon: 'UserCheck'
            },
            {
              id: 'a2_discutir_y_dividirse',
              title: 'Renunciar al equipo y pedir trabajar por separado',
              description: 'Se dividen en proyectos individuales duplicando el trabajo con menos materiales.',
              consequence: 'Ninguno logra terminar a tiempo por falta de componentes.',
              educationalReflection: 'Romper la alianza perjudica las metas comunes.',
              type: 'exploratoria',
              icon: 'Split'
            }
          ]
        },
        station4_choose: {
          title: 'Liderazgo Compartido',
          closingReflection: 'Compartir oportunidades de protagonismo es la marca de un verdadero líder.'
        },
        station5_practice: {
          type: 'emotion_thermometer',
          title: 'El Termómetro de la Equidad Grupal',
          instruction: 'Evalúa situaciones de trabajo grupal y clasifícalas según su nivel de equidad:',
          items: [
            { id: 'eq1', text: '"Uno diseña, el otro programa y el tercero documenta, revisando todo juntos."', category: 'alta' },
            { id: 'eq2', text: '"El más rápido se queda con la computadora todo el tiempo porque va más adelantado."', category: 'baja' },
            { id: 'eq3', text: '"Hacemos pausas programadas para que todos opinen antes de guardar cambios."', category: 'alta' }
          ],
          targets: [
            { id: 'alta', label: 'Alta Equidad y Cooperación' },
            { id: 'baja', label: 'Iniquidad y Monopolio' }
          ],
          completionMessage: '¡Identificaste con precisión las dinámicas saludables de trabajo colectivo!',
          skillTakeaway: 'Distribuir oportunidades democratiza el conocimiento y fortalece el equipo.'
        }
      },
      adulto: {
        station1_observe: {
          title: 'Distribución de cargas y recursos en el hogar y comunidad',
          sceneDescription: 'En un espacio comunitario de co-working barrial o en la cocina del hogar, una persona utiliza permanentemente la mejor mesa de luz y el único proyector para sus conferencias personales, sin registrar que otros vecinos requieren el espacio para dar clases de apoyo escolar a niños.',
          dialogue: [
            { speaker: 'sofia', text: 'Vecino, llevamos días necesitando la mesa grande para las asesorías de los niños del barrio.', emotion: 'preocupado' },
            { speaker: 'samuel', text: 'Yo pago mi cuota igual que todos y mi trabajo remoto requiere silencio y espacio constante.', emotion: 'reflexivo' },
            { speaker: 'guia', text: 'En la convivencia adulta, los bienes comunes exigen pactos de corresponsabilidad que trasciendan el derecho individual estricto.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo articular derechos individuales con el bienestar solidario de la comunidad?'
        },
        station2_understand: {
          title: 'El principio de solidaridad comunitaria',
          introduction: 'Compartir espacios públicos y recursos compartidos requiere acuerdos basados en justicia distributiva.',
          perspectives: [
            {
              characterId: 'samuel',
              emotion: 'preocupado',
              feeling: 'Presión laboral y necesidad de estabilidad',
              perspective: 'Siente que si cede su espacio afectará sus ingresos y seguridad profesional.',
              need: 'Garantía de horarios protegidos para sus responsabilidades.'
            },
            {
              characterId: 'sofia',
              emotion: 'reflexivo',
              feeling: 'Urgencia social por la educación infantil',
              perspective: 'Ve a niños con dificultades que no tienen un lugar iluminado donde estudiar en sus casas.',
              need: 'Acceso a un entorno pedagógico digno y seguro.'
            }
          ],
          reflectionPrompt: 'La verdadera ciudadanía no consiste en maximizar el beneficio propio a expensas de los demás, sino en optimizar el bienestar colectivo.'
        },
        station3_discover: {
          title: 'Modelos de gobernanza compartida',
          guidance: 'Examina las soluciones de gestión de recursos comunitarios:',
          alternatives: [
            {
              id: 'a2_agenda_compartida_franjas',
              title: 'Franjas horarias comunitarias y acuerdos solidarios',
              description: 'Se establece un cronograma público con franjas para trabajo concentrado por las mañanas y uso educativo/social por las tardes.',
              consequence: 'Ambas necesidades se cumplen plenamente sin fricciones ni exclusión.',
              educationalReflection: 'Planificar el uso de los bienes compartidos genera convivencia armónica.',
              type: 'optima',
              icon: 'Calendar'
            },
            {
              id: 'a2_privatizar_espacio',
              title: 'Subastar el espacio al que pueda pagar más',
              description: 'Se decide cobrar más a quien use la mesa grande.',
              consequence: 'Los programas sociales quedan fuera y se profundiza la desigualdad en el barrio.',
              educationalReflection: 'Mercantilizar los bienes comunitarios destruye el tejido social.',
              type: 'constructiva',
              icon: 'DollarSign'
            },
            {
              id: 'a2_litigio_constante',
              title: 'Mantener la disputa informal y que gane quien llegue primero',
              description: 'Sin reglas, cada día inicia con discusiones y malestar.',
              consequence: 'El ambiente se vuelve tóxico y los vecinos se distancian.',
              educationalReflection: 'La falta de acuerdos claros premia la agresividad sobre la equidad.',
              type: 'exploratoria',
              icon: 'Flame'
            }
          ]
        },
        station4_choose: {
          title: 'Ética del Bien Común',
          closingReflection: 'Compartir recursos en la sociedad adulta es el fundamento de comunidades pacíficas y resilientes.'
        },
        station5_practice: {
          type: 'assertive_filter',
          title: 'Pacto de Convivencia Solidaria',
          instruction: 'Clasifica las cláusulas de convivencia como "Generadoras de Comunidad" o "Excluyentes":',
          items: [
            { id: 'c1', text: '"Los recursos comunes tienen prioridad pedagógica y social en horarios convenidos."', category: 'comunidad' },
            { id: 'c2', text: '"El primero que llega tiene derecho a bloquear el espacio todo el día sin importar a quién perjudique."', category: 'excluyente' },
            { id: 'c3', text: '"Limpiar, ordenar y cuidar los materiales es responsabilidad compartida de cada usuario."', category: 'comunidad' }
          ],
          targets: [
            { id: 'comunidad', label: 'Generadoras de Comunidad y Equidad' },
            { id: 'excluyente', label: 'Individualistas y Excluyentes' }
          ],
          completionMessage: '¡Excelente discernimiento cívico! Diseñaste una estructura de corresponsabilidad sólida.',
          skillTakeaway: 'La equidad en el acceso a los bienes comunes previene los conflictos vecinales.'
        }
      }
    }
  },

  // ==========================================
  // MISIÓN 3: Resolver desacuerdos
  // ==========================================
  {
    id: 3,
    title: 'Resolver Desacuerdos',
    subtitle: 'Transformar el conflicto en una oportunidad para encontrar soluciones justas',
    skillFocus: 'Negociación Pacífica y Pensamiento Ganar-Ganar',
    zoneId: 'puente',
    primaryCharacters: ['samuel', 'nico', 'guia'],
    badge: {
      id: 'badge_desacuerdos',
      title: 'Mediador de Paz',
      skillName: 'Resolución de Conflictos',
      description: 'Aprendiste a buscar el punto de encuentro donde ambas partes son escuchadas.',
      icon: 'GitMerge',
      color: '#f59e0b'
    },
    modes: {
      infantil: {
        station1_observe: {
          title: 'El puente que une dos orillas',
          sceneDescription: 'En el Puente de la Convivencia, Samuel y Nico quieren jugar con la misma pelota en el patio, pero Samuel quiere jugar fútbol y Nico quiere jugar baloncesto. Empiezan a jalonear el balón diciendo "¡yo la vi primero!".',
          dialogue: [
            { speaker: 'nico', text: '¡Yo la agarré primero del estante! Me toca a mí elegir el juego.', emotion: 'preocupado' },
            { speaker: 'samuel', text: '¡Pero ayer jugamos a lo que tú querías! Hoy toca fútbol, ¡suéltala!', emotion: 'preocupado' },
            { speaker: 'guia', text: 'Miren cómo la pelota está atrapada en el medio. Cuando dos amigos jalan hacia lados opuestos, nadie termina jugando.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Qué pasará si siguen tirando de la pelota con fuerza?'
        },
        station2_understand: {
          title: 'Mirando lo que cada uno desea',
          introduction: 'Tener gustos diferentes no significa ser enemigos. Significa que podemos inventar algo nuevo.',
          perspectives: [
            {
              characterId: 'nico',
              emotion: 'preocupado',
              feeling: 'Frustración por no poder encestar',
              perspective: 'Llevaba todo el recreo esperando practicar sus tiros a la canasta.',
              need: 'Jugar y divertirse lanzando el balón.'
            },
            {
              characterId: 'samuel',
              emotion: 'preocupado',
              feeling: 'Sensación de injusticia',
              perspective: 'Siente que Nico siempre elige primero y quiere que también se tomen en cuenta sus gustos.',
              need: 'Sentir que hay reciprocidad y turnos parejos.'
            }
          ],
          reflectionPrompt: '¿Es posible crear un juego donde ambos usen la pelota sin pelear?'
        },
        station3_discover: {
          title: 'Tres caminos para el puente',
          guidance: 'Descubre las consecuencias de cada actitud:',
          alternatives: [
            {
              id: 'a3_inventar_juego_mixto',
              title: 'Inventar un juego combinado o dividir el tiempo en mitades',
              description: 'Nico propone: "Juguemos 15 minutos fútbol y los otros 15 minutos lanzamos a la canasta, ¡o inventemos el fútbol-básquetbol!".',
              consequence: 'Ambos se ríen inventando reglas nuevas, juegan juntos todo el recreo y terminan más amigos que antes.',
              educationalReflection: '¡Extraordinario! Buscar que ambos ganen convierte un pleito en una fiesta de creatividad.',
              type: 'optima',
              icon: 'Smile'
            },
            {
              id: 'a3_irse_enojados',
              title: 'Soltar la pelota y sentarse de espaldas con los brazos cruzados',
              description: 'Cada uno se va a una esquina del patio sin hablarse.',
              consequence: 'El recreo se acaba sin que nadie haya jugado y se van a clase con mal humor.',
              educationalReflection: 'El resentimiento te roba el tiempo de jugar y ser feliz.',
              type: 'exploratoria',
              icon: 'Meh'
            },
            {
              id: 'a3_llamar_arbitro_castigo',
              title: 'Gritarle al profesor para que castigue al otro',
              description: 'Corren a acusarse mutuamente con El Guía diciendo que el otro es malo.',
              consequence: 'El Guía guarda el balón porque nadie está listo para compartir.',
              educationalReflection: 'Acusar para perjudicar al compañero no resuelve el deseo de jugar.',
              type: 'constructiva',
              icon: 'AlertCircle'
            }
          ]
        },
        station4_choose: {
          title: 'El Puente de la Reconciliación',
          closingReflection: 'Ceder un poco de cada lado no es perder: es construir un puente donde cabemos los dos.'
        },
        station5_practice: {
          type: 'bridge_builder',
          title: 'Construyendo el Puente del Acuerdo',
          instruction: 'Coloca los 3 tablones de madera del puente que resuelven desacuerdos pacíficamente:',
          items: [
            { id: 't1', text: 'Tablón 1: Respirar hondo y soltar el enojo físico.' },
            { id: 't2', text: 'Tablón 2: Decir con voz tranquila lo que cada uno necesita.' },
            { id: 't3', text: 'Tablón 3: Proponer una idea donde ambos ganen algo lindo.' }
          ],
          completionMessage: '¡El puente está cruzado y firme! Ahora los amigos pueden abrazarse y seguir jugando.',
          skillTakeaway: 'En los acuerdos sinceros, la meta no es vencer al otro, sino caminar juntos.'
        }
      },
      juvenil: {
        station1_observe: {
          title: 'Desacuerdo en la banda musical del colegio',
          sceneDescription: 'Samuel y Nico forman parte del grupo musical juvenil. Nico quiere ensayar un tema de rock alternativo para el festival escolar, mientras que Samuel insiste en una balada acústica. Ninguno cede y la discusión sube de tono hasta el punto de amenazar con cancelar la presentación.',
          dialogue: [
            { speaker: 'samuel', text: 'Tu canción es demasiado ruidosa para el acto escolar. No vamos a sonar bien.', emotion: 'preocupado' },
            { speaker: 'nico', text: '¡Y tu balada aburrirá a todo el auditorio! Siempre quieres que hagamos lo más seguro y sin energía.', emotion: 'preocupado' },
            { speaker: 'guia', text: 'Observen cómo la discusión dejó de ser sobre la música y pasó a descalificar el gusto del compañero. Ese es el momento donde el conflicto se vuelve tóxico.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué cuando discutimos solemos atacar a la persona en vez del tema?'
        },
        station2_understand: {
          title: 'Separar el problema de la persona',
          introduction: 'La negociación basada en principios enseña que la firmeza con el problema no debe transformarse en dureza con el ser humano.',
          perspectives: [
            {
              characterId: 'samuel',
              emotion: 'preocupado',
              feeling: 'Miedo al ridículo o a una mala presentación',
              perspective: 'Siente que una balada es técnicamente más limpia y protege la imagen de la banda.',
              need: 'Seguridad en la ejecución musical y aprobación del público.'
            },
            {
              characterId: 'nico',
              emotion: 'reflexivo',
              feeling: 'Deseo de autenticidad e innovación',
              perspective: 'Quiere que la banda emocione al público con fuerza y dinamismo.',
              need: 'Expresión libre de su energía creativa y entusiasmo.'
            }
          ],
          reflectionPrompt: '¿Cómo conjugar la armonía técnica con la energía vibrante?'
        },
        station3_discover: {
          title: 'Matriz de negociación colaborativa',
          guidance: 'Evalúa estas tres salidas estratégicas:',
          alternatives: [
            {
              id: 'a3_medley_fusión',
              title: 'Crear un Popurrí / Medley de fusión que empiece acústico y culmine en rock',
              description: 'Deciden comenzar con la sensibilidad de la balada acústica y hacer una transición energética al rock.',
              consequence: 'El arreglo musical resulta innovador, el público los ovaciona y ambos se sienten coautores orgullosos.',
              educationalReflection: 'La integración de contrarios da origen a obras maestras que ninguno hubiera hecho en soledad.',
              type: 'optima',
              icon: 'Music'
            },
            {
              id: 'a3_romper_la_banda',
              title: 'Disolver el grupo y renunciar al festival',
              description: 'Por orgullo, cancelan la inscripción y no tocan.',
              consequence: 'Meses de ensayos desperdiciados y una amistad de años lastimada.',
              educationalReflection: 'El orgullo herido es el peor consejero en un desacuerdo.',
              type: 'exploratoria',
              icon: 'Trash2'
            },
            {
              id: 'a3_imposicion_autoritaria',
              title: 'Que uno obligue al otro amenazando con salirse',
              description: 'Se toca solo la canción de uno, y el otro toca desmotivado y a desgano.',
              consequence: 'La presentación se siente sin alma y la relación queda fracturada.',
              educationalReflection: 'Ganar por coacción es sembrar resentimiento.',
              type: 'constructiva',
              icon: 'AlertOctagon'
            }
          ]
        },
        station4_choose: {
          title: 'Convergencia de Talentos',
          closingReflection: 'Los mejores equipos no son los que nunca tienen desacuerdos, sino los que saben convertirlos en sinfonías creativas.'
        },
        station5_practice: {
          type: 'assertive_filter',
          title: 'De Ataques Personales a Peticiones Asertivas',
          instruction: 'Clasifica los enunciados según ayuden a resolver el desacuerdo o alimenten el fuego del conflicto:',
          items: [
            { id: 'd1', text: '"Siempre quieres imponer tus caprichos y no sabes nada de música."', category: 'fuego' },
            { id: 'd2', text: '"Me gustaría que probáramos una versión donde los dos estilos se complementen."', category: 'acuerdo' },
            { id: 'd3', text: '"Entiendo tu punto sobre el volumen; regulemos la intensidad sin perder dinamismo."', category: 'acuerdo' },
            { id: 'd4', text: '"Si no hacemos lo mío, mejor búscate a otro guitarrista."', category: 'fuego' }
          ],
          targets: [
            { id: 'acuerdo', label: 'Construye Acuerdos Asertivos' },
            { id: 'fuego', label: 'Alimenta el Ataque Personal' }
          ],
          completionMessage: '¡Excelente filtro de comunicación! Tienes la madera para ser un gran mediador juvenil.',
          skillTakeaway: 'Ataca el problema con ingenio, trata a la persona con respeto.'
        }
      },
      adulto: {
        station1_observe: {
          title: 'Gestión de conflictos en la familia y el trabajo',
          sceneDescription: 'En un equipo de trabajo o en la organización doméstica familiar, surge un desacuerdo crítico sobre cómo administrar los fondos para una remodelación comunitaria. Dos posturas antagónicas se enfrentan: una quiere prioridad estética inmediata y otra exige renovación de tuberías invisibles de agua potable.',
          dialogue: [
            { speaker: 'samuel', text: 'Las personas necesitan ver resultados que alegren el vecindario ya; si todo se va a tubos que nadie ve, la gente no pagará las cuotas.', emotion: 'preocupado' },
            { speaker: 'nico', text: '¡Eso es irresponsable! De nada sirve una fachada bonita si los cimientos y el agua fallan el próximo mes.', emotion: 'preocupado' },
            { speaker: 'guia', text: 'Este es el clásico dilema entre lo urgente visible y lo esencial estructural. La madurez directiva consiste en no elegir entre ellos, sino en trazar un plan por etapas.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo alinear visiones a corto y largo plazo sin polarizar a la organización?'
        },
        station2_understand: {
          title: 'Análisis de intereses y mapa de riesgos',
          introduction: 'Todo conflicto complejo requiere pasar del debate retórico al análisis objetivo de hechos y factibilidad técnica.',
          perspectives: [
            {
              characterId: 'samuel',
              emotion: 'reflexivo',
              feeling: 'Ansiedad por la moral colectiva',
              perspective: 'Sabe que la comunidad necesita estímulos visuales tangibles para no desanimarse en las contribuciones.',
              need: 'Victorias tempranas y visibilidad de logros.'
            },
            {
              characterId: 'nico',
              emotion: 'preocupado',
              feeling: 'Rigor técnico y prevención de catástrofes',
              perspective: 'Sabe que una rotura de tubería destruiría cualquier pintura nueva en pocas semanas.',
              need: 'Sostenibilidad y seguridad a largo plazo.'
            }
          ],
          reflectionPrompt: '¿Cómo estructurar un plan por fases que atienda la seguridad estructural mientras entrega mejoras visibles?'
        },
        station3_discover: {
          title: 'Metodologías de consenso técnico',
          guidance: 'Compara los tres enfoques de resolución:',
          alternatives: [
            {
              id: 'a3_plan_etapas_equilibrado',
              title: 'Plan Integral por Fases (Fase 1: Tuberías críticas + Iluminación visible)',
              description: 'Se prioriza la tubería principal pero se reserva un 20% del presupuesto para renovar la iluminación y pintura del acceso.',
              consequence: 'La comunidad ve mejoras inmediatas y a la vez asegura la durabilidad técnica sin fugas.',
              educationalReflection: 'La integración por fases satisface la necesidad de certidumbre estructural y satisfacción visible.',
              type: 'optima',
              icon: 'Layers'
            },
            {
              id: 'a3_polarizacion_asamblea',
              title: 'Someter a un debate acalorado de asamblea con micrófono abierto',
              description: 'Se deja que los bandos se enfrenten en una asamblea sin moderación profesional.',
              consequence: 'Gritos, descalificaciones personales y ruptura de la convivencia entre familias.',
              educationalReflection: 'Exponer un conflicto técnico a pasiones desreguladas solo agranda la grieta.',
              type: 'constructiva',
              icon: 'Megaphone'
            },
            {
              id: 'a3_dilatar_indefinidamente',
              title: 'No tomar ninguna decisión y congelar los fondos',
              description: 'Por no discutir, se archiva el proyecto.',
              consequence: 'La inflación deprecia el dinero y la tubería colapsa provocando inundaciones.',
              educationalReflection: 'La inacción es la peor de las decisiones.',
              type: 'exploratoria',
              icon: 'Clock'
            }
          ]
        },
        station4_choose: {
          title: 'Resolución Sistémica',
          closingReflection: 'En la vida adulta, la sabiduría consiste en orquestar lo urgente y lo importante con transparencia pedagógica.'
        },
        station5_practice: {
          type: 'drag_order',
          title: 'Protocolo de Mediación Restaurativa en 4 Pasos',
          instruction: 'Ordena las fases de una mediación formal constructiva:',
          items: [
            { id: 'm_step_1', text: '1. Encuadre: Definir reglas de respeto, confidencialidad y escucha sin interrupciones.', correctOrder: 1 },
            { id: 'm_step_2', text: '2. Relato de partes: Cada uno expone sus hechos e impactos emocionales.', correctOrder: 2 },
            { id: 'm_step_3', text: '3. Lluvia de ideas: Generar opciones sin juzgarlas de inmediato.', correctOrder: 3 },
            { id: 'm_step_4', text: '4. Acuerdo escrito y medible con responsabilidades y fechas de revisión.', correctOrder: 4 }
          ],
          completionMessage: '¡Protocolo completado! Cuentas con una herramienta profesional de resolución de controversias.',
          skillTakeaway: 'Los acuerdos claros y medibles protegen a las personas del desgaste emocional.'
        }
      }
    }
  },

  // ==========================================
  // MISIÓN 4: Expresar lo que siento
  // ==========================================
  {
    id: 4,
    title: 'Expresar lo que Siento',
    subtitle: 'Darle voz a las emociones con serenidad, sin reprimir ni herir',
    skillFocus: 'Autoconocimiento Emocional y Asertividad',
    zoneId: 'jardin',
    primaryCharacters: ['luna', 'sofia', 'guia'],
    badge: {
      id: 'badge_expresar',
      title: 'Corazón Transparente',
      skillName: 'Expresión Emocional',
      description: 'Aprendiste a identificar lo que sientes en tu cuerpo y nombrarlo con sinceridad y calma.',
      icon: 'Smile',
      color: '#8b5cf6'
    },
    modes: {
      infantil: {
        station1_observe: {
          title: 'El nudo en la garganta y las flores del jardín',
          sceneDescription: 'En el Jardín de la Calma, Luna está sentada sola bajo un sauce llorón con la mirada en el suelo. Sofía se acerca y le pregunta qué le pasa, pero Luna se cruza de brazos y dice en voz baja: "¡No me pasa nada, déjame en paz!".',
          dialogue: [
            { speaker: 'sofia', text: 'Luna, te vi triste cuando no te eligieron para la obra de teatro. ¿Quieres que hablemos?', emotion: 'preocupado' },
            { speaker: 'luna', text: '¡Que no me pasa nada! ¡No quiero hablar con nadie!', emotion: 'preocupado' },
            { speaker: 'guia', text: 'Cuando decimos "no me pasa nada" sintiendo un volcán por dentro, el volcán no se apaga: se queda quemando nuestro corazoncito.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué a veces nos cuesta tanto decir que estamos tristes o enojados?'
        },
        station2_understand: {
          title: 'El mapa de lo que siente el cuerpo',
          introduction: 'Las emociones no son malas ni buenas; son mensajeras que nos avisan cómo estamos por dentro.',
          perspectives: [
            {
              characterId: 'luna',
              emotion: 'preocupado',
              feeling: 'Tristeza y vergüenza acumuladas',
              perspective: 'Siente un nudo en la garganta y ganas de llorar, pero teme que si llora se burlen de ella.',
              need: 'Un abrazo suave y la seguridad de que llorar y sentirse triste está bien.'
            },
            {
              characterId: 'sofia',
              emotion: 'reflexivo',
              feeling: 'Cariño y paciencia afectuosa',
              perspective: 'No quiere presionar a su amiga, pero no quiere dejarla sola en su dolor.',
              need: 'Saber cómo acompañar sin invadir su espacio.'
            }
          ],
          reflectionPrompt: 'Llorar no es debilidad: es la forma en que el corazón se lava cuando hay mucha tristeza.'
        },
        station3_discover: {
          title: 'Tres caminos para sacar el nudo del pecho',
          guidance: 'Mira qué pasa con cada elección que Luna puede tomar:',
          alternatives: [
            {
              id: 'a4_nombrar_emocion',
              title: 'Respirar y decir: "Estoy triste y frustrada porque quería actuar"',
              description: 'Luna respira hondo, mira a Sofía y le cuenta con sinceridad lo que sintió al no ser elegida.',
              consequence: 'Sofía la escucha con amor, la abraza y el nudo en la garganta empieza a derretirse.',
              educationalReflection: '¡Hermoso! Ponerle nombre a la emoción es el primer paso para sentir alivio.',
              type: 'optima',
              icon: 'Heart'
            },
            {
              id: 'a4_guardar_y_enojarse',
              title: 'Guardar todo adentro hasta explotar con furia después',
              description: 'Luna se traga la tristeza y al rato le grita a su hermano sin motivo.',
              consequence: 'Daña a quienes la aman y se siente aún más culpable y sola.',
              educationalReflection: 'Las emociones guardadas a la fuerza salen disfrazadas de enojo destructivo.',
              type: 'exploratoria',
              icon: 'Flame'
            },
            {
              id: 'a4_fingir_risa',
              title: 'Ponerse una máscara falsa de que todo está genial',
              description: 'Sonríe falsamente y finge que no le importa el teatro.',
              consequence: 'Por dentro se siente vacía y sus amigos no saben cómo ayudarla.',
              educationalReflection: 'Fingir te desconecta de tu propia verdad.',
              type: 'constructiva',
              icon: 'Meh'
            }
          ]
        },
        station4_choose: {
          title: 'La Flor de la Verdad',
          closingReflection: 'Cuando eres sincero con lo que sientes, abres la puerta para que el cariño de los demás te abrace.'
        },
        station5_practice: {
          type: 'patience_breath',
          title: 'La Respiración de la Rosa y la Vela',
          instruction: 'Realiza 3 ciclos de respiración consciente guiada para serenar las emociones antes de hablar:',
          breathSteps: [
            { action: 'Inhala suavemente como oliendo una rosa fresca...', seconds: 4, tip: 'Llena tu pancita de aire fresco.' },
            { action: 'Sostén el aire con serenidad en tu corazón...', seconds: 3, tip: 'Siente cómo tu cuerpo se tranquiliza.' },
            { action: 'Exhala despacito como soplando una vela sin apagarla...', seconds: 5, tip: 'Suelta la tensión con calma.' }
          ],
          completionMessage: '¡Tu cuerpo ha encontrado calma! Ahora estás listo para expresar tus sentimientos con palabras claras y suaves.',
          skillTakeaway: 'Calmar el cuerpo abre el camino para que las palabras salgan con amor y claridad.'
        }
      },
      juvenil: {
        station1_observe: {
          title: 'La máscara de la indiferencia social',
          sceneDescription: 'Luna fue excluida de un grupo de mensajería donde sus compañeros organizaron una salida. Aunque siente un profundo dolor y rechazo, actúa en la escuela con sarcasmo e indiferencia fingida diciendo que "no le importan las personas falsas".',
          dialogue: [
            { speaker: 'sofia', text: 'Luna, sé que te dolió lo del grupo. No tienes que fingir que te da igual frente a mí.', emotion: 'preocupado' },
            { speaker: 'luna', text: '¿Doler? Para nada, me da exactamente igual. Mejor sola que mal acompañada.', emotion: 'reflexivo' },
            { speaker: 'guia', text: 'El cinismo y la armadura de indiferencia son mecanismos de defensa para proteger un corazón vulnerable. Pero esa armadura termina asfixiando a quien la viste.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué preferimos parecer fríos antes que admitir que fuimos heridos?'
        },
        station2_understand: {
          title: 'Desmontando la armadura defensiva',
          introduction: 'La vulnerabilidad no es debilidad; es la mayor prueba de coraje y el único puente hacia la verdadera intimidad.',
          perspectives: [
            {
              characterId: 'luna',
              emotion: 'preocupado',
              feeling: 'Dolor por exclusión y temor al rechazo',
              perspective: 'Siente que si admite que le dolió, les dará "poder" a quienes la excluyeron.',
              need: 'Reconocer su valor propio sin depender de la aprobación de un grupo.'
            },
            {
              characterId: 'sofia',
              emotion: 'reflexivo',
              feeling: 'Lealtad y empatía',
              perspective: 'Quiere que Luna sepa que su valía es inmensa y que tiene amigos verdaderos que la estiman.',
              need: 'Brindarle un espacio donde pueda llorar o desahogarse sin ser juzgada.'
            }
          ],
          reflectionPrompt: 'Admitir el dolor no te hace inferior: te hace humano y te permite sanar.'
        },
        station3_discover: {
          title: 'Caminos ante la herida relacional',
          guidance: 'Analiza qué produce cada elección de afrontamiento:',
          alternatives: [
            {
              id: 'a4_asertividad_vulnerable',
              title: 'Hablar con quien lideró la exclusión desde la primera persona',
              description: 'Luna decide decirle a la organizadora: "Me sentí excluida cuando no me avisaron. Si hay algo que resolver entre nosotras, prefiero que me lo digas de frente".',
              consequence: 'La otra persona se sorprende por su madurez, pide disculpas y aclara que fue un error de coordinación.',
              educationalReflection: 'Hablar desde el "yo sentí" en vez de atacar desarma las defensas del otro.',
              type: 'optima',
              icon: 'MessageCircle'
            },
            {
              id: 'a4_venganza_redes',
              title: 'Publicar indirectas ofensivas en redes sociales',
              description: 'Publica mensajes venenosos sin decir nombres para que todos sospechen.',
              consequence: 'Se genera un drama colectivo donde todos toman partido y la hostilidad crece.',
              educationalReflection: 'Las indirectas públicas degradan la dignidad propia y no resuelven nada.',
              type: 'exploratoria',
              icon: 'Share2'
            },
            {
              id: 'a4_aislamiento_total',
              title: 'Cortar relación con todos sus amigos por desconfianza',
              description: 'Se encierra en su cuarto y no vuelve a salir con nadie.',
              consequence: 'Pierde también a las amistades que sí la querían y se llena de amargura.',
              educationalReflection: 'Generalizar que "todos son malos" te roba la posibilidad de vivir vínculos sanos.',
              type: 'constructiva',
              icon: 'UserX'
            }
          ]
        },
        station4_choose: {
          title: 'La Valentía de ser Auténtico',
          closingReflection: 'Quien tiene el valor de expresar su sentir con claridad y sin agresión conquista la libertad interior.'
        },
        station5_practice: {
          type: 'emotion_thermometer',
          title: 'El Termómetro de la Asertividad Emocional',
          instruction: 'Clasifica las formas de comunicar lo que se siente según su nivel de madurez emocional:',
          items: [
            { id: 'as1', text: '"Me sentí incómodo con ese comentario y preferiría que no lo repitas frente a los demás."', category: 'alta' },
            { id: 'as2', text: '"¡Ustedes son todos una basura y me dan asco!"', category: 'baja' },
            { id: 'as3', text: '"No me pasa nada (mientras tiro las puertas y no contesto el saludo)."', category: 'baja' },
            { id: 'as4', text: '"Aprecio que me escuches: en este momento me siento triste y necesito un tiempo a solas."', category: 'alta' }
          ],
          targets: [
            { id: 'alta', label: 'Asertividad y Valentía Emocional' },
            { id: 'baja', label: 'Pasivo-Agresivo o Reactivo Destructivo' }
          ],
          completionMessage: '¡Excelente calibración! Sabes reconocer el tono exacto de la comunicación saludable.',
          skillTakeaway: 'Decir lo que sentimos con serenidad es el lenguaje de las personas libres y maduras.'
        }
      },
      adulto: {
        station1_observe: {
          title: 'Inteligencia emocional en la vida adulta y familiar',
          sceneDescription: 'Tras una agotadora jornada de trabajo, Luna llega a casa con sobrecarga laboral. Al ver los platos sucios en el fregadero, levanta la voz y le reprocha a su pareja con dureza: "¡Aquí a nadie le importa nada, soy la única que hace todo en esta casa!".',
          dialogue: [
            { speaker: 'luna', text: '¡Estoy harta! ¡Parece que vivo con extraños que solo ensucian!', emotion: 'preocupado' },
            { speaker: 'sofia', text: '¿Por qué me gritas así? Acabo de llegar de recoger a los niños y estaba a punto de lavar.', emotion: 'preocupado' },
            { speaker: 'guia', text: 'Notemos la trampa del agotamiento: cuando acumulamos estrés sin expresarlo a tiempo en su fuente, lo descargamos como metralla sobre quienes más amamos.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo transformar el reproche destructivo en una petición afectuosa de ayuda?'
        },
        station2_understand: {
          title: 'La anatomía de la sobrecarga no dicha',
          introduction: 'El resentimiento en los vínculos adultos casi siempre es el resultado de necesidades no expresadas a tiempo.',
          perspectives: [
            {
              characterId: 'luna',
              emotion: 'preocupado',
              feeling: 'Agotamiento crónico y desamparo',
              perspective: 'Siente que sostiene sola demasiadas cargas invisibles y que nadie la cuida.',
              need: 'Descanso, reconocimiento y cooperación equitativa sin tener que rogar por ella.'
            },
            {
              characterId: 'sofia',
              emotion: 'reflexivo',
              feeling: 'Injusticia ante el ataque',
              perspective: 'Siente que su propio esfuerzo no es visto y se pone a la defensiva por el tono acusador.',
              need: 'Respeto en la forma de comunicarse y aprecio mutuo.'
            }
          ],
          reflectionPrompt: 'Cuando acusamos con generalizaciones como "siempre" o "nunca", cerramos el oído de quien nos escucha.'
        },
        station3_discover: {
          title: 'Caminos de comunicación no violenta (CNV)',
          guidance: 'Examina los modelos de interacción en momentos de tensión:',
          alternatives: [
            {
              id: 'a4_comunicacion_no_violenta',
              title: 'Aplicar los 4 pasos de la CNV (Hecho + Sentimiento + Necesidad + Petición)',
              description: 'Luna respira, se sienta y dice: "Tuve un día demoledor en el trabajo y me siento exhausta y desbordada. Necesito descansar media hora. ¿Podrías apoyarme lavando los platos hoy?"',
              consequence: 'La pareja empatiza de inmediato con su cansancio, le sirve un vaso de agua y asume la tarea con afecto.',
              educationalReflection: 'Pedir con vulnerabilidad y sin exigencia despierta la generosidad natural del otro.',
              type: 'optima',
              icon: 'HeartHandshake'
            },
            {
              id: 'a4_ley_del_hielo',
              title: 'Aplicar la "ley del hielo" y dejar de hablar por días',
              description: 'Se encierra en silencio con cara de desprecio esperando que el otro adivine.',
              consequence: 'El hogar se vuelve una nevera emocional que lastima a todos, incluidos los niños.',
              educationalReflection: 'El silencio punitivo es una forma pasiva de violencia emocional.',
              type: 'exploratoria',
              icon: 'CloudRain'
            },
            {
              id: 'a4_seguir_escalando',
              title: 'Sacar una lista de agravios del pasado',
              description: 'Recordar errores de hace tres años para justificar la furia actual.',
              consequence: 'La conversación degenera en una batalla interminable de reproches cruzados.',
              educationalReflection: 'Traer el pasado a colación aniquila la posibilidad de resolver el presente.',
              type: 'constructiva',
              icon: 'History'
            }
          ]
        },
        station4_choose: {
          title: 'Maestría en Vínculos Afectivos',
          closingReflection: 'Cuidar el tono y hablar desde la necesidad propia es el mayor acto de amor en la convivencia cotidiana.'
        },
        station5_practice: {
          type: 'assertive_filter',
          title: 'Fórmula de la Petición Asertiva',
          instruction: 'Convierte quejas reactivas en peticiones asertivas usando la fórmula CNV:',
          items: [
            { id: 'cnv1', text: '"¡Nunca tienes tiempo para mí, te importa más tu celular!"', category: 'reactiva' },
            { id: 'cnv2', text: '"Echo de menos conversar contigo a solas; ¿cenamos juntos esta noche sin pantallas?"', category: 'asertiva' },
            { id: 'cnv3', text: '"¡Es el colmo que tenga que recordarte todo como si fueras un niño!"', category: 'reactiva' },
            { id: 'cnv4', text: '"Me siento sobrecargada con las compras; ¿podrías encargarte tú de la lista este sábado?"', category: 'asertiva' }
          ],
          targets: [
            { id: 'asertiva', label: 'Petición Asertiva Constructiva (CNV)' },
            { id: 'reactiva', label: 'Reproche Reactivo que Provoca Cierre' }
          ],
          completionMessage: '¡Has dominado el arte de la petición asertiva! Una herramienta que salva familias y equipos.',
          skillTakeaway: 'Reemplazar el reproche por la petición clara es el pilar de la paz familiar.'
        }
      }
    }
  },

  // ==========================================
  // MISIÓN 5: Aprender a pedir ayuda
  // ==========================================
  {
    id: 5,
    title: 'Aprender a Pedir Ayuda',
    subtitle: 'Reconocer que no tenemos que cargar todo solos es un acto de sabiduría',
    skillFocus: 'Humildad, Autocuidado y Redes de Apoyo',
    zoneId: 'pequena_ciudad',
    primaryCharacters: ['sofia', 'nico', 'guia'],
    badge: {
      id: 'badge_ayuda',
      title: 'Mano Extendida',
      skillName: 'Pedir y Recibir Ayuda',
      description: 'Superaste el miedo al orgullo y aprendiste a acudir a personas de confianza.',
      icon: 'HandHelping',
      color: '#ec4899'
    },
    modes: {
      infantil: {
        station1_observe: {
          title: 'La cometa atrapada en el gran roble',
          sceneDescription: 'En la calle de la ciudad, Nico estaba volando su cometa favorita cuando el viento la enredó en una rama altísima. Trata de trepar por la corteza resbalosa tambaleándose peligrosamente, negándose a avisar a un adulto.',
          dialogue: [
            { speaker: 'sofia', text: '¡Nico, bájate de ahí! La rama se está doblando y te vas a caer.', emotion: 'preocupado' },
            { speaker: 'nico', text: '¡No! ¡Yo puedo solo! Si le digo al Guía va a pensar que soy un bebé que no sabe cuidar su cometa.', emotion: 'preocupado' },
            { speaker: 'guia', text: 'Pedir ayuda ante un peligro no te hace pequeño ni débil; te hace un explorador inteligente que cuida su vida.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué Nico prefiere ponerse en riesgo antes que pedir auxilio?'
        },
        station2_understand: {
          title: 'El temor a parecer débil',
          introduction: 'Muchos niños y niñas creen que pedir auxilio es signo de vergüenza. La verdad es todo lo contrario.',
          perspectives: [
            {
              characterId: 'nico',
              emotion: 'preocupado',
              feeling: 'Orgullo herido y miedo a la desaprobación',
              perspective: 'Quiere demostrar que es independiente y capaz de solucionar todo solo.',
              need: 'Comprender que los adultos protectores están ahí para cuidarlo con amor, no para juzgarlo.'
            },
            {
              characterId: 'sofia',
              emotion: 'preocupado',
              feeling: 'Angustia por la seguridad de su amigo',
              perspective: 'Sabe que una fractura por una cometa sería una tragedia evitable.',
              need: 'Que Nico acepte su compañía y busquen una escalera y ayuda segura.'
            }
          ],
          reflectionPrompt: '¿Qué vale más: una cometa o la seguridad de un amigo?'
        },
        station3_discover: {
          title: 'Tres caminos ante un obstáculo peligroso',
          guidance: 'Descubre el desenlace de cada elección:',
          alternatives: [
            {
              id: 'a5_pedir_ayuda_adulto',
              title: 'Bajar con cuidado y pedir ayuda a un adulto de confianza',
              description: 'Nico baja del árbol, respira y le dice a El Guía: "¿Me ayudas a alcanzar mi cometa con la pértiga?".',
              consequence: 'El Guía trae la pértiga con una sonrisa, rescatan la cometa intacta y aprenden cómo desenredarla juntos.',
              educationalReflection: '¡Excelente! Pedir ayuda a tiempo convierte un peligro en un momento de aprendizaje compartido.',
              type: 'optima',
              icon: 'ShieldCheck'
            },
            {
              id: 'a5_insistir_solo_caer',
              title: 'Seguir trepando por orgullo hasta que la rama se parta',
              description: 'Nico sube más alto ignorando las advertencias.',
              consequence: 'La rama cruje, cae sobre un arbusto espinoso y se lastima el brazo.',
              educationalReflection: 'El orgullo temerario pone en riesgo tu bienestar.',
              type: 'exploratoria',
              icon: 'AlertTriangle'
            },
            {
              id: 'a5_rendirse_y_patear',
              title: 'Patear el árbol con furia y romper la cometa con piedras',
              description: 'Lanza piedras para romper la cometa por rabia.',
              consequence: 'La cometa queda destrozada y Nico se queda triste sin su juguete.',
              educationalReflection: 'La ira no rescata lo que perdiste; la paciencia y el auxilio sí.',
              type: 'constructiva',
              icon: 'XCircle'
            }
          ]
        },
        station4_choose: {
          title: 'La Sabiduría de Acudir a los Demás',
          closingReflection: 'Los exploradores más valientes del mundo siempre viajan con un equipo. Nadie escala una montaña solo.'
        },
        station5_practice: {
          type: 'drag_order',
          title: 'El Semáforo de Cuándo Pedir Ayuda',
          instruction: 'Ordena las acciones ante una situación que te supera:',
          items: [
            { id: 'ay1', text: '1. Parar un momento y evaluar si hay peligro para mi cuerpo o mente.', correctOrder: 1 },
            { id: 'ay2', text: '2. Respirar y reconocer: "Esto supera mis fuerzas ahora mismo".', correctOrder: 2 },
            { id: 'ay3', text: '3. Identificar a un adulto o amigo de confianza cercano.', correctOrder: 3 },
            { id: 'ay4', text: '4. Explicar con sencillez y claridad qué necesitas.', correctOrder: 4 }
          ],
          completionMessage: '¡Conocimiento protector grabado! Ya sabes cómo activar tu red de apoyo.',
          skillTakeaway: 'Extender la mano para pedir ayuda es el primer paso de todo gran crecimiento.'
        }
      },
      juvenil: {
        station1_observe: {
          title: 'Cargar en silencio con el abrumamiento académico y personal',
          sceneDescription: 'Nico está colapsando con las materias escolares y una situación difícil en su hogar. En vez de hablar con un orientador, docente o con sus amigos, se aísla, deja de comer en los recreos y finge que "todo está bajo control" para no preocupar a nadie.',
          dialogue: [
            { speaker: 'sofia', text: 'Nico, llevas días pálido y apenas hablas. Tuve la sensación de que necesitas ayuda con los trabajos y con lo que te está pasando.', emotion: 'preocupado' },
            { speaker: 'nico', text: 'No necesito caridad de nadie. Yo puedo resolver mis propios problemas. No se metan.', emotion: 'preocupado' },
            { speaker: 'guia', text: 'Creer que la madurez consiste en sufrir en silencio es uno de los mitos más peligrosos de la juventud. Los seres humanos somos seres interdependientes.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué asociamos pedir apoyo psicológico o académico con fracaso personal?'
        },
        station2_understand: {
          title: 'Derribando el mito del aislamiento autosuficiente',
          introduction: 'Nadie tiene por qué cargar con todo el peso del mundo sobre sus hombros.',
          perspectives: [
            {
              characterId: 'nico',
              emotion: 'preocupado',
              feeling: 'Agotamiento extremo y soledad',
              perspective: 'Teme ser juzgado como "incapaz" o defraudar las expectativas de su familia.',
              need: 'Validación de que está bien no estar bien y un espacio confidencial de acompañamiento.'
            },
            {
              characterId: 'sofia',
              emotion: 'reflexivo',
              feeling: 'Compasión y compromiso fraterno',
              perspective: 'Sabe que si Nico se abre a un orientador o a un grupo de estudio, la carga se aligerará de inmediato.',
              need: 'Acompañarlo sin sofocarlo hacia la ayuda profesional o institucional.'
            }
          ],
          reflectionPrompt: 'Pedir ayuda no es rendirse: es negarse a ser derrotado por el silencio.'
        },
        station3_discover: {
          title: 'Estrategias de rescate y autocuidado',
          guidance: 'Compara las tres vías de afrontamiento:',
          alternatives: [
            {
              id: 'a5_acudir_orientacion',
              title: 'Acercarse al departamento de orientación o a un mentor de confianza',
              description: 'Nico se atreve a tocar la puerta de El Guía y decirle: "Estoy desbordado y no sé por dónde empezar; necesito ayuda".',
              consequence: 'El Guía le ayuda a estructurar un plan gradual de estudio, avisa con discreción a los docentes y Nico siente que vuelve a respirar.',
              educationalReflection: 'Pedir orientación salva semestres y restaura la paz mental.',
              type: 'optima',
              icon: 'LifeBuoy'
            },
            {
              id: 'a5_colapsar_en_silencio',
              title: 'Seguir sin dormir hasta enfermar físicamente',
              description: 'Continúa acumulando estrés sin pedir apoyo.',
              consequence: 'Termina en urgencias médicas por una crisis de ansiedad y reprueba las evaluaciones.',
              educationalReflection: 'Ignorar los límites del cuerpo termina forzando una pausa traumática.',
              type: 'exploratoria',
              icon: 'Activity'
            },
            {
              id: 'a5_conductas_escape',
              title: 'Buscar escapes nocivos para adormecer el estrés',
              description: 'Pasa noches enteras en videojuegos o conductas riesgosas para no pensar.',
              consequence: 'El problema real empeora y se añaden nuevas adicciones.',
              educationalReflection: 'Evadir el problema mediante escapes destructivos agrava la crisis.',
              type: 'constructiva',
              icon: 'ZapOff'
            }
          ]
        },
        station4_choose: {
          title: 'Valentía Integral',
          closingReflection: 'El ser humano más fuerte no es el que levanta más peso en soledad, sino el que sabe tender la mano para construir comunidad.'
        },
        station5_practice: {
          type: 'emotion_thermometer',
          title: 'Mapeo de tu Red de Apoyo Seguro',
          instruction: 'Clasifica los recursos de apoyo según su nivel de confiabilidad para situaciones críticas:',
          items: [
            { id: 'r1', text: 'Docente orientador, psicólogo escolar o consejero familiar capacitado.', category: 'alta' },
            { id: 'r2', text: 'Un foro de internet anónimo donde desconocidos dan consejos no verificados.', category: 'baja' },
            { id: 'r3', text: 'Un familiar afectuoso o amigo sincero que sabe guardar confidencialidad.', category: 'alta' },
            { id: 'r4', text: 'Grupos que te incitan a ocultar problemas y escapar mediante riesgos.', category: 'baja' }
          ],
          targets: [
            { id: 'alta', label: 'Red Segura y Confiable' },
            { id: 'baja', label: 'Entorno Riesgoso o Poco Fiable' }
          ],
          completionMessage: '¡Red de seguridad trazada! Conocer a quién acudir salva vidas.',
          skillTakeaway: 'Rodearte de aliados sanos es tu mayor blindaje ante las tormentas.'
        }
      },
      adulto: {
        station1_observe: {
          title: 'Delegar y solicitar auxilio en la gestión de la vida y el cuidado',
          sceneDescription: 'En una familia o equipo comunitario, una persona asume el cuidado de un familiar enfermo, las labores domésticas y un trabajo exigente. Aunque sus niveles de cortisol y agotamiento están al límite, se niega a pedir que otros familiares o compañeros asuman turnos, afirmando que "nadie lo hará con el mismo cariño que ella".',
          dialogue: [
            { speaker: 'sofia', text: 'Hermana, te estás enfermando de tanto cansancio. Permítenos cuidarlo dos días a la semana a nosotros.', emotion: 'preocupado' },
            { speaker: 'luna', text: 'No, él se inquieta si no estoy yo. Yo me las arreglo.', emotion: 'preocupado' },
            { speaker: 'guia', text: 'El síndrome del cuidador quemado no es muestra de amor, sino de un perfeccionismo que pone en riesgo tanto al que cuida como al que es cuidado.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué a los adultos nos cuesta tanto delegar responsabilidades esenciales?'
        },
        station2_understand: {
          title: 'El cuidado del cuidador (Autocompasión y límites)',
          introduction: 'Para poder dar agua limpia a los demás, la propia fuente no puede secarse ni contaminarse.',
          perspectives: [
            {
              characterId: 'luna',
              emotion: 'preocupado',
              feeling: 'Culpa inconsciente si descansa',
              perspective: 'Cree erróneamente que descansar o delegar equivale a abandonar su deber moral.',
              need: 'Permiso interno para ser vulnerable y recibir cuidado solidario.'
            },
            {
              characterId: 'sofia',
              emotion: 'reflexivo',
              feeling: 'Preocupación filial y deseo de compartir la carga',
              perspective: 'Sabe que la responsabilidad familiar debe ser compartida equitativamente entre todos los adultos.',
              need: 'Establecer un sistema de turnos transparente y coordinado.'
            }
          ],
          reflectionPrompt: 'Cuidar de uno mismo es el primer requisito ético para poder cuidar con paciencia a otro.'
        },
        station3_discover: {
          title: 'Modelos de corresponsabilidad y soporte',
          guidance: 'Evalúa estas tres decisiones de gestión del cuidado:',
          alternatives: [
            {
              id: 'a5_red_turnos_corresponsable',
              title: 'Diseñar un cronograma de turnos compartido y aceptar ayuda profesional',
              description: 'Se reúne a la familia extendida y se distribuyen los días de cuidado de forma equitativa, dejando fines de semana libres para el descanso.',
              consequence: 'El familiar recibe atención con mejor ánimo y la cuidadora recupera su salud y alegría.',
              educationalReflection: 'La corresponsabilidad familiar dignifica el cuidado y fortalece los lazos.',
              type: 'optima',
              icon: 'CalendarCheck'
            },
            {
              id: 'a5_martirio_silencioso',
              title: 'Seguir hasta el colapso hospitalario',
              description: 'Mantiene la sobrecarga absoluta sin pedir ayuda a nadie.',
              consequence: 'Sufre una crisis cardiovascular que desestabiliza a toda la familia.',
              educationalReflection: 'El martirio no es virtud; es falta de límites protectores.',
              type: 'exploratoria',
              icon: 'HeartCrack'
            },
            {
              id: 'a5_culpar_con_amargura',
              title: 'No pedir ayuda pero reprochar con indirectas constantes',
              description: 'No pide directamente apoyo pero suspira con amargura delante de todos.',
              consequence: 'Llena la casa de resentimiento y nadie sabe exactamente cómo actuar.',
              educationalReflection: 'Esperar que los demás lean la mente solo genera malentendidos.',
              type: 'constructiva',
              icon: 'AlertCircle'
            }
          ]
        },
        station4_choose: {
          title: 'Cultura de Cuidado Mutuo',
          closingReflection: 'Pedir ayuda en la adultez es un acto de generosidad que permite a los demás ejercer su propia capacidad de cuidar.'
        },
        station5_practice: {
          type: 'assertive_filter',
          title: 'El Decálogo de la Petición Limpia de Ayuda',
          instruction: 'Distingue entre peticiones limpias y manipulaciones basadas en culpa:',
          items: [
            { id: 'p_ay1', text: '"Necesito descansar este sábado; ¿te comprometes a cubrir el turno de la tarde de 2 a 6 pm?"', category: 'limpia' },
            { id: 'p_ay2', text: '"Claro, váyanse todos a divertirse mientras yo me pudro aquí sola como siempre."', category: 'culpa' },
            { id: 'p_ay3', text: '"Reconozco que no alcanzo con este informe; ¿podrías revisar los números de la sección B?"', category: 'limpia' },
            { id: 'p_ay4', text: '"Si de verdad me quisieras sabrías exactamente lo que necesito sin que yo te lo diga."', category: 'culpa' }
          ],
          targets: [
            { id: 'limpia', label: 'Petición Limpia, Concreta y Digna' },
            { id: 'culpa', label: 'Manipulación Emocional Culpógena' }
          ],
          completionMessage: '¡Maestría en comunicación madura! Tus relaciones ganarán transparencia y paz.',
          skillTakeaway: 'Pedir con claridad sin manipular es la clave de las relaciones adultas sólidas.'
        }
      }
    }
  },

  // ==========================================
  // MISIÓN 6: Respetar las diferencias
  // ==========================================
  {
    id: 6,
    title: 'Respetar las Diferencias',
    subtitle: 'La diversidad de orígenes, ritmos y talentos enriquece nuestro mundo',
    skillFocus: 'Inclusión, No Discriminación y Curiosidad Respetuosa',
    zoneId: 'escuela',
    primaryCharacters: ['samuel', 'luna', 'guia'],
    badge: {
      id: 'badge_diferencias',
      title: 'Mosaico de Colores',
      skillName: 'Respeto a la Diversidad',
      description: 'Comprendiste que ser diferentes nos hace únicos y complementarios.',
      icon: 'Palette',
      color: '#0284c7'
    },
    modes: {
      infantil: {
        station1_observe: {
          title: 'El almuerzo de diferentes partes del mundo',
          sceneDescription: 'En el comedor escolar, ha llegado un nuevo compañero de otra región con un almuerzo tradicional que tiene un aroma especiado diferente y colores llamativos. Algunos compañeros señalan su fiambrera y se ríen diciendo que "huele raro".',
          dialogue: [
            { speaker: 'samuel', text: '¡Miren lo que come! ¡Esa comida tiene un color verde extraño y huele muy raro!', emotion: 'curioso' },
            { speaker: 'luna', text: 'Samuel, no hables así... lo estás haciendo sentir avergonzado y se está apartando a una mesa vacía.', emotion: 'preocupado' },
            { speaker: 'guia', text: 'Lo que para ti es nuevo o desconocido, para otra familia es una tradición hecha con amor. Las diferencias no son para burlarse, sino para aprender.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo te sentirías si viajases a otro país y se burlaran de tu comida favorita?'
        },
        station2_understand: {
          title: 'Ponerse en los zapatos del recién llegado',
          introduction: 'Sentirse extranjero o diferente da miedo cuando los demás señalan en vez de acoger.',
          perspectives: [
            {
              characterId: 'luna',
              emotion: 'reflexivo',
              feeling: 'Empatía y hospitalidad',
              perspective: 'Siente que una escuela acogedora debe invitar a sentarse a la mesa a todos.',
              need: 'Fomentar la curiosidad respetuosa por las recetas y costumbres ajenas.'
            },
            {
              characterId: 'samuel',
              emotion: 'preocupado',
              feeling: 'Reacción ingenua ante lo desconocido',
              perspective: 'No lo hizo con maldad, pero no pensó en el impacto hiriente de sus palabras.',
              need: 'Aprender que las palabras tienen peso y que la burla aleja a las personas.'
            }
          ],
          reflectionPrompt: 'La curiosidad con amabilidad abre puertas; la burla levanta muros.'
        },
        station3_discover: {
          title: 'Tres reacciones frente a lo desconocido',
          guidance: 'Descubre qué ocurre según lo que decidan hacer:',
          alternatives: [
            {
              id: 'a6_acercarse_y_probar',
              title: 'Acercarse con respeto y preguntar: "¿Qué es ese platillo? ¡Se ve interesante!"',
              description: 'Samuel y Luna se sientan con él, le preguntan sobre los ingredientes de su comida y comparten historias familiares.',
              consequence: 'El nuevo compañero sonríe feliz, les convida una probadita deliciosa y nace una amistad entrañable.',
              educationalReflection: '¡Extraordinario! Celebrar la diversidad convierte un salón de clases en una fiesta multicultural.',
              type: 'optima',
              icon: 'HeartHandshake'
            },
            {
              id: 'a6_seguir_burlas',
              title: 'Seguir riéndose e inventar apodos sobre su comida',
              description: 'Continúan haciendo bromas y señalándolo.',
              consequence: 'El compañero llora en el recreo y ya no quiere regresar a la escuela.',
              educationalReflection: 'La burla es una forma de acoso que hiere profundamente.',
              type: 'exploratoria',
              icon: 'ThumbsDown'
            },
            {
              id: 'a6_ignorar_totalmente',
              title: 'No burlarse pero dejarlo completamente solo en una esquina',
              description: 'Nadie le habla ni se le acerca.',
              consequence: 'No hay agresión directa, pero la indiferencia duele igual de fuerte.',
              educationalReflection: 'La inclusión requiere una bienvenida activa, no simple indiferencia.',
              type: 'constructiva',
              icon: 'UserMinus'
            }
          ]
        },
        station4_choose: {
          title: 'El Banquete de la Amistad',
          closingReflection: 'Cada cultura, cada acento y cada tradición es una flor distinta en el jardín de la humanidad.'
        },
        station5_practice: {
          type: 'connect_pairs',
          title: 'Mosaico de Curiosidad y Respeto',
          instruction: 'Conecta cada actitud de prejuicio con la actitud de inclusión que la transforma:',
          items: [
            { id: 'prej_1', text: 'Prejuicio: "Esa costumbre me parece rara y no me gusta."', matchId: 'm_res_1' },
            { id: 'resp_1', text: 'Inclusión: "No la conocía; cuéntame qué significa para tu familia."', matchId: 'm_res_1' },
            { id: 'prej_2', text: 'Prejuicio: "Habla con un acento gracioso, riámonos."', matchId: 'm_res_2' },
            { id: 'resp_2', text: 'Inclusión: "Qué riqueza tener diferentes maneras de hablar y expresarnos."', matchId: 'm_res_2' }
          ],
          completionMessage: '¡Conexiones de empatía logradas! Ahora eres un embajador de la hospitalidad y el respeto.',
          skillTakeaway: 'Lo que nos hace diferentes nos hace aprender; lo que nos une nos hace hermanos.'
        }
      },
      juvenil: {
        station1_observe: {
          title: 'Diversidad de talentos, ritmos de aprendizaje y apariencias',
          sceneDescription: 'En la clase de educación física y en los trabajos de ciencias, hay un estudiante con un ritmo motor más pausado debido a una condición física. Durante la formación de equipos para un torneo, nadie lo elige y queda al final visiblemente incómodo.',
          dialogue: [
            { speaker: 'samuel', text: 'Queremos ganar el trofeo este año; si elegimos a Mateo vamos a perder velocidad.', emotion: 'preocupado' },
            { speaker: 'luna', text: 'Samuel, ganar un trofeo escolar dejando a un compañero humillado no es ninguna victoria real.', emotion: 'reflexivo' },
            { speaker: 'guia', text: 'El valor de una comunidad se mide por cómo integra a todos sus miembros, adaptando los juegos para que el talento de cada uno brille.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Qué vale más: una copa de plástico o la dignidad de un compañero de vida?'
        },
        station2_understand: {
          title: 'El dolor invisible de la marginación',
          introduction: 'La discriminación no siempre es explícita; la exclusión silenciosa y la indiferencia selectiva causan graves secuelas emocionales.',
          perspectives: [
            {
              characterId: 'samuel',
              emotion: 'preocupado',
              feeling: 'Competitividad mal enfocada',
              perspective: 'Está obsesionado con el rendimiento y ve a los demás como herramientas para ganar puntos.',
              need: 'Reenfocar el deporte como escuela de valores, salud y compañerismo.'
            },
            {
              characterId: 'luna',
              emotion: 'reflexivo',
              feeling: 'Sentido de justicia e inclusión',
              perspective: 'Sabe que Mateo tiene una visión táctica extraordinaria y que adaptando el rol puede ser el estratega clave.',
              need: 'Generar adaptaciones razonables para que todos jueguen con equidad.'
            }
          ],
          reflectionPrompt: 'Adaptar las reglas para que todos jueguen es la verdadera maestría del juego limpio.'
        },
        station3_discover: {
          title: 'Modelos de inclusión activa',
          guidance: 'Analiza el impacto social de cada decisión:',
          alternatives: [
            {
              id: 'a6_integracion_estrategica',
              title: 'Invitar a Mateo como estratega y armador central del equipo',
              description: 'Samuel le da la bienvenida, adapta la táctica para aprovechar su excelente precisión de pase y juegan como un verdadero colectivo.',
              consequence: 'El equipo juega con una cohesión admirable, Mateo se siente valorado y todos aprenden el verdadero sentido del deporte.',
              educationalReflection: 'La inclusión saca a relucir talentos que el prejuicio ignora.',
              type: 'optima',
              icon: 'Award'
            },
            {
              id: 'a6_dejarlo_banca_siempre',
              title: 'Aceptarlo en la lista pero dejarlo sentado en la banca sin jugar',
              description: 'Lo inscriben por obligación pero nunca entra a la cancha.',
              consequence: 'Mateo se siente una carga decorativa y su autoestima se resiente.',
              educationalReflection: 'La inclusión no es tolerancia pasiva; es participación activa.',
              type: 'constructiva',
              icon: 'Clock'
            },
            {
              id: 'a6_excluir_abiertamente',
              title: 'Decirle directamente que forme un equipo con otros "lentos"',
              description: 'Segregar a los compañeros por condición física.',
              consequence: 'Se crea un ambiente de acoso escolar que envenena la convivencia del colegio.',
              educationalReflection: 'La segregación es el germen de la discriminación social.',
              type: 'exploratoria',
              icon: 'Slash'
            }
          ]
        },
        station4_choose: {
          title: 'La Victoria del Juego Limpio',
          closingReflection: 'El verdadero campeón no es el que pisa a otros para subir al podio, sino el que ayuda a todos a cruzar la meta juntos.'
        },
        station5_practice: {
          type: 'emotion_thermometer',
          title: 'Evaluación de Entornos Inclusivos',
          instruction: 'Clasifica las prácticas escolares según construyan inclusión o refuercen barreras:',
          items: [
            { id: 'i1', text: '"Diseñar actividades donde se califique el esfuerzo colectivo y la cooperación solidaria."', category: 'alta' },
            { id: 'i2', text: '"Armar filas separadas entre los alumnos populares y los demás."', category: 'baja' },
            { id: 'i3', text: '"Asegurar rampas, materiales accesibles y apoyo mutuo sin condescendencia."', category: 'alta' }
          ],
          targets: [
            { id: 'alta', label: 'Práctica Inclusiva y Equitativa' },
            { id: 'baja', label: 'Práctica Excluyente o Discriminatoria' }
          ],
          completionMessage: '¡Criterio ético consolidado! Eres un defensor activo de la equidad y los derechos humanos.',
          skillTakeaway: 'Una sociedad justa no deja a nadie atrás por sus particularidades.'
        }
      },
      adulto: {
        station1_observe: {
          title: 'Diversidad en el ámbito laboral, vecinal y generacional',
          sceneDescription: 'En un comité vecinal o empresa comunitaria, surge un debate entre miembros mayores con décadas de experiencia tradicional y jóvenes recién incorporados con propuestas tecnológicas y ambientales. Ambos grupos desestiman al otro: los mayores llaman a los jóvenes "ingenuos sin disciplina" y los jóvenes tachan a los mayores de "anticuados obsoletos".',
          dialogue: [
            { speaker: 'samuel', text: 'Estos muchachos quieren cambiar todo con aplicaciones y pantallas sin conocer la historia del barrio.', emotion: 'preocupado' },
            { speaker: 'luna', text: '¡Y ustedes se niegan a innovar por puro apego al pasado, frenando el desarrollo!', emotion: 'preocupado' },
            { speaker: 'guia', text: 'El conflicto intergeneracional se resuelve cuando comprendemos que la memoria de los mayores aporta raíces y la energía de los jóvenes aporta alas. Ambas son indispensables.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo transformar la brecha generacional en una alianza de aprendizaje mutuo?'
        },
        station2_understand: {
          title: 'Sinergia intergeneracional y respeto a la experiencia diversa',
          introduction: 'Ni la edad por sí sola otorga la razón absoluta, ni la novedad tecnológica garantiza sabiduría ética.',
          perspectives: [
            {
              characterId: 'samuel',
              emotion: 'reflexivo',
              feeling: 'Temor a la irrelevancia y pérdida de legado',
              perspective: 'Siente que las nuevas generaciones no valoran el sudor y los sacrificios históricos que construyeron las bases actuales.',
              need: 'Reconocimiento y respeto a su trayectoria y sabiduría práctica.'
            },
            {
              characterId: 'luna',
              emotion: 'preocupado',
              feeling: 'Frustración ante la rigidez y la burocracia',
              perspective: 'Siente que sus aportes ecológicos y tecnológicos son descartados por desconfianza injustificada.',
              need: 'Espacio para proponer y liderar transformaciones pertinentes.'
            }
          ],
          reflectionPrompt: 'Las organizaciones más longevas y sanas son las que logran mentoreo cruzado: jóvenes enseñan tecnología y veteranos enseñan resiliencia.'
        },
        station3_discover: {
          title: 'Caminos de gobernanza diversa',
          guidance: 'Evalúa estos tres modelos de articulación comunitaria:',
          alternatives: [
            {
              id: 'a6_mentoria_cruzada',
              title: 'Consejos mixtos con mentoría cruzada y co-diseño de proyectos',
              description: 'Se crean parejas de trabajo (un adulto mayor con un joven) para cada iniciativa comunitaria.',
              consequence: 'Los proyectos se enriquecen con solidez histórica y agilidad moderna, con un clima vecinal de profundo afecto.',
              educationalReflection: 'La diversidad de edades y miradas es el activo más valioso de cualquier comunidad.',
              type: 'optima',
              icon: 'Users'
            },
            {
              id: 'a6_segregacion_comites',
              title: 'Dividir a los grupos y dar presupuestos separados para no interactuar',
              description: 'Crean una junta de jóvenes y una de veteranos que no se comunican.',
              consequence: 'Se duplican gastos, compiten entre sí y la comunidad se fragmenta.',
              educationalReflection: 'La segregación genera ineficiencia y hostilidad silenciosa.',
              type: 'constructiva',
              icon: 'Split'
            },
            {
              id: 'a6_renuncia_masiva',
              title: 'Que uno de los grupos se retire en protesta',
              description: 'Los jóvenes deciden no volver a participar en la comunidad.',
              consequence: 'La comunidad envejece sin relevo generacional y pierde vitalidad.',
              educationalReflection: 'Perder a cualquier generación empobrece el futuro común.',
              type: 'exploratoria',
              icon: 'UserX'
            }
          ]
        },
        station4_choose: {
          title: 'El Tejido Intergeneracional',
          closingReflection: 'Honrar a los que vinieron antes y abrir camino a los que vienen después es el ciclo vital de la civilización.'
        },
        station5_practice: {
          type: 'assertive_filter',
          title: 'Desactivando Sesgos Inconscientes',
          instruction: 'Identifica las expresiones que combaten el edadismo (discriminación por edad) y promueven sinergia:',
          items: [
            { id: 'b1', text: '"Por su edad seguro no entiende nada de estas herramientas modernas."', category: 'sesgo' },
            { id: 'b2', text: '"Combinemos tu experiencia en gestión comunitaria con nuestras propuestas de automatización."', category: 'sinergia' },
            { id: 'b3', text: '"Los jóvenes de hoy en día no tienen ningún compromiso con nada."', category: 'sesgo' },
            { id: 'b4', text: '"Agradecemos su legado histórico; construyamos sobre esa base las mejoras necesarias."', category: 'sinergia' }
          ],
          targets: [
            { id: 'sinergia', label: 'Pensamiento Inclusivo y Sinergia' },
            { id: 'sesgo', label: 'Sesgo Prejuicioso o Edadismo' }
          ],
          completionMessage: '¡Filtro de sesgos superado con distinción! Estás preparado para liderar equipos diversos.',
          skillTakeaway: 'La sabiduría reside en integrar todas las voces con equidad y aprecio.'
        }
      }
    }
  },

  // ==========================================
  // MISIÓN 7: Cuidar las amistades
  // ==========================================
  {
    id: 7,
    title: 'Cuidar las Amistades',
    subtitle: 'Cultivar el afecto con lealtad, perdón sincero y tiempo de calidad',
    skillFocus: 'Fidelidad, Reparación de Vínculos y Confianza',
    zoneId: 'jardin',
    primaryCharacters: ['nico', 'sofia', 'guia'],
    badge: {
      id: 'badge_amistad',
      title: 'Lazo Dorado',
      skillName: 'Cuidado de Amistades',
      description: 'Aprendiste a regar la amistad como una planta viva y a reparar malentendidos.',
      icon: 'Heart',
      color: '#ec4899'
    },
    modes: {
      infantil: {
        station1_observe: {
          title: 'La promesa rota y el jardín de las flores',
          sceneDescription: 'Nico le había prometido a Sofía ayudarle a plantar los girasoles en el Jardín de la Calma a la salida de clases. Pero cuando llegó la hora, otros compañeros lo invitaron a ver un videojuego nuevo y Nico se fue sin avisarle a Sofía, dejándola sola con las macetas.',
          dialogue: [
            { speaker: 'sofia', text: 'Esperé una hora con la pala y la tierra lista... creí que éramos mejores amigos.', emotion: 'preocupado' },
            { speaker: 'nico', text: '¡Ay Sofi, no te enojes! Es que era el juego nuevo, no pude evitarlo... no es para tanto.', emotion: 'reflexivo' },
            { speaker: 'guia', text: 'Una promesa es como un hilo dorado invisible: cuando no cumplimos nuestra palabra sin avisar, el hilo se tensa y puede romperse.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué duele tanto cuando un amigo no cumple lo que prometió?'
        },
        station2_understand: {
          title: 'El valor de la palabra dada',
          introduction: 'La confianza se construye con mil detalles pequeños y se desgasta con promesas olvidadas.',
          perspectives: [
            {
              characterId: 'sofia',
              emotion: 'preocupado',
              feeling: 'Decepción y tristeza',
              perspective: 'Siente que para Nico un videojuego cualquiera vale más que el tiempo que planearon juntos.',
              need: 'Saber que su amistad es una prioridad y recibir una disculpa honesta.'
            },
            {
              characterId: 'nico',
              emotion: 'preocupado',
              feeling: 'Vergüenza defensiva',
              perspective: 'Sabe que actuó mal pero se siente avergonzado y por eso minimiza lo sucedido.',
              need: 'Aprender a reconocer el error con humildad sin poner excusas.'
            }
          ],
          reflectionPrompt: 'Pedir perdón con sinceridad no te quita valor; demuestra la grandeza de tu corazón.'
        },
        station3_discover: {
          title: 'Tres formas de responder ante un error propio',
          guidance: 'Observa qué sucede con la amistad en cada camino:',
          alternatives: [
            {
              id: 'a7_disculpa_reparacion',
              title: 'Pedir disculpas de corazón y reparar el compromiso',
              description: 'Nico la mira a los ojos, deja sus excusas y dice: "Tienes razón Sofi, te fallé y debí avisarte. Perdóname. ¿Puedo plantar los girasoles contigo ahora mismo?".',
              consequence: 'Sofía siente su sinceridad, acepta su abrazo y juntos siembran las semillas con alegría renovada.',
              educationalReflection: '¡Excelente! La disculpa sincera acompañada de una acción reparadora restaura la confianza.',
              type: 'optima',
              icon: 'HeartHandshake'
            },
            {
              id: 'a7_burlarse_exagerada',
              title: 'Decirle que es una exagerada y no volver a hablarle',
              description: 'Nico se pone soberbio y la deja sola enojado.',
              consequence: 'Pierde a su mejor amiga y se queda con una sensación amarga en el pecho.',
              educationalReflection: 'El orgullo destruye los tesoros más valiosos de la infancia.',
              type: 'exploratoria',
              icon: 'X'
            },
            {
              id: 'a7_comprar_regalo_sin_hablar',
              title: 'Comprarle un dulce sin pedir perdón ni mirarla',
              description: 'Le deja un caramelo en la mesa sin decir nada.',
              consequence: 'Sofía siente que quiere comprar su silencio sin hablar del daño.',
              educationalReflection: 'Los objetos materiales no reemplazan el diálogo sincero del corazón.',
              type: 'constructiva',
              icon: 'Gift'
            }
          ]
        },
        station4_choose: {
          title: 'La Reparación del Hilo Dorado',
          closingReflection: 'Cuidar una amistad es como regar una flor: requiere tiempo, paciencia, lealtad y saber pedir perdón cuando nos equivocamos.'
        },
        station5_practice: {
          type: 'drag_order',
          title: 'Los 4 Pasos de la Reparación Sincera',
          instruction: 'Ordena la receta del perdón auténtico:',
          items: [
            { id: 'rep1', text: '1. Reconocer el hecho concreto sin buscar excusas ("No cumplí con lo acordado").', correctOrder: 1 },
            { id: 'rep2', text: '2. Validar el dolor del amigo ("Comprendo que te sentiste triste y sola").', correctOrder: 2 },
            { id: 'rep3', text: '3. Decir con humildad: "¿Me perdonas?".', correctOrder: 3 },
            { id: 'rep4', text: '4. Ofrecer una acción concreta para reparar el lazo.', correctOrder: 4 }
          ],
          completionMessage: '¡Completaste el sendero de la reconciliación! Sabes cómo cuidar a tus amigos para toda la vida.',
          skillTakeaway: 'Los amigos verdaderos no son perfectos; son los que saben perdonar y reconstruir.'
        }
      },
      juvenil: {
        station1_observe: {
          title: 'Lealtad versus presión social en el grupo',
          sceneDescription: 'En un círculo de amigos, empiezan a circular rumores sobre Sofía respecto a su vida personal. Cuando otros compañeros se burlan de ella en una mesa, Nico se queda en silencio y se ríe tímidamente para no quedar mal con los demás, a pesar de saber que todo es mentira.',
          dialogue: [
            { speaker: 'sofia', text: 'Nico, estabas ahí cuando empezaron a inventar cosas de mí... y no dijiste nada. Te reíste con ellos.', emotion: 'preocupado' },
            { speaker: 'nico', text: 'Sofi, ¿qué querías que hiciera? Si los contradecía se me iban a tirar encima a mí también.', emotion: 'preocupado' },
            { speaker: 'guia', text: 'El silencio cómplice duele más que el ataque del enemigo. La verdadera lealtad se demuestra cuando es difícil sostenerla.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué cuesta tanto defender a un amigo cuando la multitud opina lo contrario?'
        },
        station2_understand: {
          title: 'La valentía moral en los vínculos',
          introduction: 'La pertenencia a un grupo nunca debe costar traicionar a quien te ha brindado su confianza.',
          perspectives: [
            {
              characterId: 'sofia',
              emotion: 'preocupado',
              feeling: 'Traición y desamparo',
              perspective: 'Siente que la amistad de Nico solo existe cuando están a solas, pero desaparece en público.',
              need: 'Saber que cuenta con amigos que la defienden tanto en su presencia como en su ausencia.'
            },
            {
              characterId: 'nico',
              emotion: 'preocupado',
              feeling: 'Cobardía y culpa',
              perspective: 'Tuvo miedo al ostracismo social pero sabe que actuó en contra de sus propios principios.',
              need: 'Cultivar la valentía moral para poner límites a la maledicencia.'
            }
          ],
          reflectionPrompt: 'Quien habla mal de otros contigo, hablará mal de ti con otros.'
        },
        station3_discover: {
          title: 'Decisiones de lealtad e integridad',
          guidance: 'Evalúa estas tres posturas morales:',
          alternatives: [
            {
              id: 'a7_frenar_el_rumor',
              title: 'Asumir el error, disculparse y desmentir públicamente el rumor',
              description: 'Nico se disculpa con Sofía y al día siguiente en la mesa dice con firmeza: "Eso que dijeron de Sofía no es verdad y como su amigo no voy a permitir que sigan difamándola".',
              consequence: 'Los murmuradores se callan por respeto a su firmeza y la amistad con Sofía se vuelve indestructible.',
              educationalReflection: 'Ponerle un alto al chisme requiere coraje cívico y salva la dignidad de las personas.',
              type: 'optima',
              icon: 'Shield'
            },
            {
              id: 'a7_culpar_a_sofia',
              title: 'Decirle a Sofía que ella misma se busca los rumores por cómo actúa',
              description: 'Justifica su falta de lealtad culpando a la víctima.',
              consequence: 'Destruye la relación por completo y se convierte en cómplice del acoso.',
              educationalReflection: 'Culpar a quien sufre para tapar la cobardía propia es devastador.',
              type: 'exploratoria',
              icon: 'AlertCircle'
            },
            {
              id: 'a7_alejarse_sin_decir_nada',
              title: 'Apartarse de Sofía para evitar problemas sociales',
              description: 'Elige la conveniencia social sobre la amistad.',
              consequence: 'Se queda con amistades superficiales que lo abandonarán al primer problema.',
              educationalReflection: 'La conveniencia superficial jamás llena el corazón.',
              type: 'constructiva',
              icon: 'UserX'
            }
          ]
        },
        station4_choose: {
          title: 'Integridad y Fidelidad',
          closingReflection: 'Defender a tus amigos cuando no están presentes es la prueba máxima de la nobleza humana.'
        },
        station5_practice: {
          type: 'assertive_filter',
          title: 'El Filtro de la Lealtad Fraterna',
          instruction: 'Clasifica las acciones según protejan la amistad o alimenten la traición:',
          items: [
            { id: 'l1', text: '"Frenar un rumor diciendo: \'Ella es mi amiga y no permito que inventen cosas en su ausencia\'."', category: 'lealtad' },
            { id: 'l2', text: '"Reenviar una captura de pantalla privada de tu amigo a otros para tener tema de charla."', category: 'traicion' },
            { id: 'l3', text: '"Decirle a tu amigo en privado y con amor cuando crees que está cometiendo un error grave."', category: 'lealtad' },
            { id: 'l4', text: '"Dejar de saludar a un amigo de toda la vida porque no le agrada al grupo popular."', category: 'traicion' }
          ],
          targets: [
            { id: 'lealtad', label: 'Lealtad y Cuidado Auténtico' },
            { id: 'traicion', label: 'Deslealtad y Traición por Conveniencia' }
          ],
          completionMessage: '¡Criterio de oro! Sabes reconocer y ofrecer una amistad inquebrantable.',
          skillTakeaway: 'La lealtad no es ciega ante los errores, pero es incondicional en el afecto.'
        }
      },
      adulto: {
        station1_observe: {
          title: 'Mantenimiento de vínculos duraderos en medio de las obligaciones',
          sceneDescription: 'Dos amigos de la juventud viven en la misma ciudad pero llevan más de dos años sin verse, cancelando encuentros a último momento por compromisos laborales y domésticos. Cuando uno de ellos atraviesa una crisis familiar grave, el otro duda si llamar por temor a ser inoportuno o por vergüenza de haber estado ausente tanto tiempo.',
          dialogue: [
            { speaker: 'nico', text: 'Hace tanto que no hablamos que me da pena llamarlo ahora que sé que falleció su familiar... ¿no pensará que soy un hipócrita?', emotion: 'preocupado' },
            { speaker: 'guia', text: 'Nunca es tarde para tender la mano del afecto. El orgullo y la vergüenza por el tiempo perdido no deben robarle a un amigo el consuelo de tu abrazo.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo cultivar amistades profundas cuando la vida adulta consume la mayor parte del tiempo?'
        },
        station2_understand: {
          title: 'La amistad adulta como refugio de salud mental',
          introduction: 'Los estudios longitudinales demuestran que la calidad de los vínculos de amistad es el mayor predictor de longevidad y bienestar en la madurez.',
          perspectives: [
            {
              characterId: 'nico',
              emotion: 'reflexivo',
              feeling: 'Remordimiento y timidez afectiva',
              perspective: 'Siente culpa por haberse distanciado absorbido por la rutina.',
              need: 'Superar la barrera de la incomodidad y presentarse incondicionalmente.'
            },
            {
              characterId: 'sofia',
              emotion: 'preocupado',
              feeling: 'Soledad en el duelo',
              perspective: 'Apreciaría infinitamente un mensaje breve o una llamada sincera sin reproches ni justificaciones.',
              need: 'Saberse recordado y querido por sus afectos esenciales.'
            }
          ],
          reflectionPrompt: 'Un mensaje honesto de dos líneas: "Estoy pensando en ti y aquí estoy para lo que sea", puede iluminar el día más oscuro de alguien.'
        },
        station3_discover: {
          title: 'Estrategias de preservación de redes de apoyo',
          guidance: 'Analiza los tres caminos ante el distanciamiento vincular:',
          alternatives: [
            {
              id: 'a7_presencia_incondicional',
              title: 'Llamar o presentarse con calidez y sin exigir explicaciones',
              description: 'Nico le envía un mensaje sincero, le lleva un café caliente y le dice: "Aquí estoy, sin apuros. Cuando quieras hablar o guardar silencio juntos, cuentas conmigo".',
              consequence: 'El amigo se siente profundamente reconfortado y el lazo de fraternidad revive con más fuerza que nunca.',
              educationalReflection: 'La presencia discreta y afectuosa es la cumbre de la madurez amical.',
              type: 'optima',
              icon: 'HeartHandshake'
            },
            {
              id: 'a7_dejar_morir_vinculo',
              title: 'No llamar por incomodidad y esperar que el otro contacte',
              description: 'Deja pasar los meses por timidez.',
              consequence: 'El vínculo se enfría hasta perderse para siempre en el olvido.',
              educationalReflection: 'Las amistades no mueren por conflictos grandes; mueren por silencios prolongados.',
              type: 'exploratoria',
              icon: 'Clock'
            },
            {
              id: 'a7_reproches_tiempo',
              title: 'Contactar reclamando: "¿Por qué nunca me escribes tú primero?"',
              description: 'Llama exigiendo atención en medio de la crisis ajena.',
              consequence: 'Agrega carga emocional y aleja definitivamente al compañero.',
              educationalReflection: 'Exigir reciprocidad en momentos de duelo ajeno es falta de empatía.',
              type: 'constructiva',
              icon: 'AlertTriangle'
            }
          ]
        },
        station4_choose: {
          title: 'Fidelidad en el Tiempo',
          closingReflection: 'Cuidar a los amigos de toda la vida es proteger el archivo vivo de nuestra propia historia y humanidad.'
        },
        station5_practice: {
          type: 'drag_order',
          title: 'El Ritual de Reactivación de Vínculos Afectivos',
          instruction: 'Ordena la secuencia para reconectar sanamente con una amistad distanciada:',
          items: [
            { id: 'v1', text: '1. Desactivar el orgullo y no contabilizar quién escribió la última vez.', correctOrder: 1 },
            { id: 'v2', text: '2. Enviar un mensaje breve, afectuoso y sin reproches ("Me acordé de ti y quería saber cómo estás").', correctOrder: 2 },
            { id: 'v3', text: '3. Respetar el tiempo de respuesta del otro sin presionar.', correctOrder: 3 },
            { id: 'v4', text: '4. Agendar un encuentro sencillo para conversar con atención plena.', correctOrder: 4 }
          ],
          completionMessage: '¡Ruta de reconexión completada! Da hoy mismo ese paso hacia un amigo entrañable.',
          skillTakeaway: 'La amistad verdadera trasciende el tiempo y el espacio cuando hay lealtad en el corazón.'
        }
      }
    }
  },

  // ==========================================
  // MISIÓN 8: Trabajar en equipo
  // ==========================================
  {
    id: 8,
    title: 'Trabajar en Equipo',
    subtitle: 'Coordinar esfuerzos, celebrar talentos diversos y alcanzar metas comunes',
    skillFocus: 'Cooperación, Sinergia y Responsabilidad Compartida',
    zoneId: 'aventura',
    primaryCharacters: ['nico', 'samuel', 'luna', 'guia'],
    badge: {
      id: 'badge_equipo',
      title: 'Fuerza Colectiva',
      skillName: 'Trabajo en Equipo',
      description: 'Aprendiste que juntos llegamos más lejos sumando las habilidades de cada uno.',
      icon: 'Users',
      color: '#f97316'
    },
    modes: {
      infantil: {
        station1_observe: {
          title: 'El gran refugio de madera en la zona de aventuras',
          sceneDescription: 'En la Zona de Aventuras, Nico, Samuel y Luna quieren construir un refugio de ramas y lona para proteger a los pajaritos de la lluvia. Cada uno quiere hacer lo suyo sin coordinarse: Nico junta palos gigantes que no caben, Samuel clava estacas sin medir y Luna pinta la tela sin que haya estructura en pie.',
          dialogue: [
            { speaker: 'nico', text: '¡Yo traje las ramas más pesadas, yo mando!', emotion: 'entusiasmado' },
            { speaker: 'samuel', text: '¡No, yo tengo las cuerdas y sé hacer nudos marineros, el jefe soy yo!', emotion: 'preocupado' },
            { speaker: 'luna', text: '¡Miren mi bandera pintada! Pero si la pongo encima de esas ramas torcidas todo se va a caer...', emotion: 'reflexivo' },
            { speaker: 'guia', text: 'Cuando todos quieren mandar y nadie quiere coordinar, la casita se derrumba antes de empezar. Un equipo es una mano donde cada dedo ayuda a sostener.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué la casita se cae si todos tienen muchas ganas de ayudar?'
        },
        station2_understand: {
          title: 'Cada pieza en su lugar',
          introduction: 'El trabajo en equipo no necesita jefes mandones, sino coordinadores generosos que organicen las tareas según los talentos.',
          perspectives: [
            {
              characterId: 'samuel',
              emotion: 'entusiasmado',
              feeling: 'Deseo de orden y estructura',
              perspective: 'Sabe asegurar bases y cuerdas con precisión.',
              need: 'Poner su destreza al servicio del refugio con paciencia.'
            },
            {
              characterId: 'nico',
              emotion: 'curioso',
              feeling: 'Energía y fuerza para recolectar',
              perspective: 'Es veloz encontrando ramas firmes.',
              need: 'Aceptar que las ramas deben tener la medida adecuada y trabajar con los planos de Luna.'
            },
            {
              characterId: 'luna',
              emotion: 'reflexivo',
              feeling: 'Visión creativa y diseño',
              perspective: 'Sabe cómo cubrir las filtraciones de viento con la lona.',
              need: 'Explicar su idea con dibujos para que los demás la entiendan.'
            }
          ],
          reflectionPrompt: 'Juntarse es un comienzo; mantenerse juntos es un progreso; trabajar juntos es el éxito.'
        },
        station3_discover: {
          title: 'Tres maneras de construir el refugio',
          guidance: 'Compara qué sucede con cada forma de organizarse:',
          alternatives: [
            {
              id: 'a8_repartir_roles_plan',
              title: 'Hacer una pausa, sentarse en ronda y repartir roles según habilidades',
              description: 'Luna dibuja el plano en la tierra, Samuel guía la fijación de las vigas maestras y Nico transporta los postes de la medida exacta.',
              consequence: 'El refugio queda sólido, hermoso, resiste la lluvia y todos celebran cantando adentro.',
              educationalReflection: '¡Maravilloso! Planificar y cooperar transforma el esfuerzo en alegría y seguridad.',
              type: 'optima',
              icon: 'ShieldCheck'
            },
            {
              id: 'a8_competir_por_terminar_primero',
              title: 'Competir a ver quién levanta su propia carpa más rápido',
              description: 'Cada uno hace una chocita precaria por separado.',
              consequence: 'Llega una ráfaga de viento y tumba las tres chocitas frágiles.',
              educationalReflection: 'La competencia interna debilita a todos frente a las tormentas.',
              type: 'exploratoria',
              icon: 'Wind'
            },
            {
              id: 'a8_dejar_que_uno_haga_todo',
              title: 'Que Samuel haga todo mientras los demás miran aburridos',
              description: 'Nico y Luna se echan en el pasto a esperar.',
              consequence: 'Samuel se agota, el refugio queda a medio hacer y se pierde el espíritu de aventura.',
              educationalReflection: 'El trabajo en equipo exige el compromiso activo de cada integrante.',
              type: 'constructiva',
              icon: 'UserX'
            }
          ]
        },
        station4_choose: {
          title: 'El Refugio de Todos',
          closingReflection: 'Ninguno de nosotros es tan bueno como todos nosotros juntos.'
        },
        station5_practice: {
          type: 'drag_order',
          title: 'La Cadena del Trabajo Colaborativo',
          instruction: 'Ordena los 4 eslabones para que un equipo triunfe felizmente:',
          items: [
            { id: 'eq_s1', text: '1. Meta común: Tener claro qué queremos lograr juntos.', correctOrder: 1 },
            { id: 'eq_s2', text: '2. Reparto de tareas: Asignar responsabilidades según los dones de cada uno.', correctOrder: 2 },
            { id: 'eq_s3', text: '3. Comunicación constante: Avisar avances, dificultades y pedir apoyo.', correctOrder: 3 },
            { id: 'eq_s4', text: '4. Celebración compartida: Reconocer el mérito de cada compañero al finalizar.', correctOrder: 4 }
          ],
          completionMessage: '¡Eslabones unidos a la perfección! Eres un miembro de equipo ejemplar.',
          skillTakeaway: 'Sumar fortalezas y restar egoísmo es la ecuación del éxito colectivo.'
        }
      },
      juvenil: {
        station1_observe: {
          title: 'El desafío del campamento juvenil de orientación',
          sceneDescription: 'En la Zona de Aventuras, un grupo juvenil debe encontrar un punto geográfico con brújula y mapa topográfico antes del anochecer. Samuel corre adelante sin esperar a los demás, Nico se distrae sacando fotografías y Luna no logra leer el mapa porque Samuel se llevó la brújula en el bolsillo.',
          dialogue: [
            { speaker: 'luna', text: '¡Samuel, espera! Nos estás dejando atrás y no tenemos la brújula para verificar el sendero.', emotion: 'preocupado' },
            { speaker: 'samuel', text: '¡Si no nos apuramos el otro equipo llegará primero al campamento base!', emotion: 'entusiasmado' },
            { speaker: 'nico', text: 'Oigan... creo que tomamos la bifurcación equivocada; este sendero termina en un despeñadero.', emotion: 'preocupado' },
            { speaker: 'guia', text: 'Avanzar rápido hacia el lugar equivocado es la peor manera de perder tiempo. Un equipo se mueve al ritmo de su integrante más vulnerable.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué la prisa individual de uno puede extraviar al colectivo?'
        },
        station2_understand: {
          title: 'Cohesión bajo presión',
          introduction: 'En los retos de campo y en los proyectos exigentes, la sincronía y la comunicación son más cruciales que la velocidad bruta.',
          perspectives: [
            {
              characterId: 'samuel',
              emotion: 'entusiasmado',
              feeling: 'Ansiedad de victoria y sobreexigencia',
              perspective: 'Cree que ganar la carrera es la única medida del éxito.',
              need: 'Comprender que llegar primero pero divididos es una derrota moral y táctica.'
            },
            {
              characterId: 'luna',
              emotion: 'reflexivo',
              feeling: 'Necesidad de rigor y orientación segura',
              perspective: 'Posee la capacidad analítica para descifrar las curvas de nivel del mapa.',
              need: 'Que el equipo haga un alto y verifiquen las coordenadas juntos.'
            },
            {
              characterId: 'nico',
              emotion: 'curioso',
              feeling: 'Atención a las señales del terreno',
              perspective: 'Notó los cambios de vegetación y el peligro antes que los demás.',
              need: 'Ser escuchado con seriedad por Samuel.'
            }
          ],
          reflectionPrompt: 'Un equipo no gana cuando el primero cruza la cinta: gana cuando todos cruzan sanos y salvos.'
        },
        station3_discover: {
          title: 'Modelos de liderazgo distribuido',
          guidance: 'Examina qué sucede con cada estilo de toma de decisiones:',
          alternatives: [
            {
              id: 'a8_parada_estrategica',
              title: 'Hacer un alto, triangular mapa y brújula y avanzar juntos en formación segura',
              description: 'Samuel frena, entrega la brújula a Luna, Nico marca los puntos de referencia visual y avanzan coordinados paso a paso.',
              consequence: 'Encuentran el sendero correcto, evitan el riesgo y llegan al campamento base con la moral en alto.',
              educationalReflection: 'El liderazgo distribuido permite que el talento idóneo lidere en el momento oportuno.',
              type: 'optima',
              icon: 'Compass'
            },
            {
              id: 'a8_seguir_a_ciegas',
              title: 'Seguir corriendo adelante con terquedad sin revisar el mapa',
              description: 'Samuel insiste en que su instinto no falla y sigue.',
              consequence: 'Se quedan atrapados en la oscuridad y deben esperar rescate.',
              educationalReflection: 'La arrogancia en la toma de decisiones colectivas genera desastres.',
              type: 'exploratoria',
              icon: 'AlertTriangle'
            },
            {
              id: 'a8_culparse_en_el_camino',
              title: 'Detenerse a discutir y acusarse por la pérdida de tiempo',
              description: 'Empiezan a recriminarse quién tuvo la culpa.',
              consequence: 'Se divide el grupo en dos bandos debilitados emocionalmente.',
              educationalReflection: 'Buscar culpables en medio de la crisis solo empeora la situación.',
              type: 'constructiva',
              icon: 'Flame'
            }
          ]
        },
        station4_choose: {
          title: 'Sinergia en Acción',
          closingReflection: 'El verdadero liderazgo no consiste en brillar solo, sino en iluminar el camino para que todos brillen.'
        },
        station5_practice: {
          type: 'emotion_thermometer',
          title: 'El Termómetro del Trabajo en Equipo Juvenil',
          instruction: 'Clasifica los comportamientos grupales según promuevan sinergia o provoquen disfunción:',
          items: [
            { id: 'tm1', text: '"Animar al compañero que está rezagado y adaptar el paso colectivo para no dejarlo atrás."', category: 'alta' },
            { id: 'tm2', text: '"Apropiarse de los aciertos del proyecto y culpar a los demás por los errores."', category: 'baja' },
            { id: 'tm3', text: '"Celebrar una sesión de retroalimentación donde todos expresen mejoras con respeto."', category: 'alta' }
          ],
          targets: [
            { id: 'alta', label: 'Sinergia y Madurez Colectiva' },
            { id: 'baja', label: 'Egoísmo y Disfunción Grupal' }
          ],
          completionMessage: '¡Criterio de equipo de alto rendimiento validado! Sabes liderar y cooperar.',
          skillTakeaway: 'La confianza mutua es el combustible de los grandes logros humanos.'
        }
      },
      adulto: {
        station1_observe: {
          title: 'Gestión de equipos multidisciplinarios y liderazgo servicial',
          sceneDescription: 'En un comité organizador de la comunidad o empresa social, se debe ejecutar un proyecto de restauración urbana con plazos estrictos. Los líderes de finanzas, diseño y logística trabajan en silos cerrados, ocultándose información y compitiendo por la aprobación del directorio en lugar de colaborar abiertamente.',
          dialogue: [
            { speaker: 'samuel', text: 'Si comparto los reportes de costos antes de tiempo, diseño me cambiará las especificaciones y me descuadrará el balance.', emotion: 'preocupado' },
            { speaker: 'luna', text: '¡Y nosotros no podemos diseñar sin saber el presupuesto real! Trabajar así a ciegas es imposible.', emotion: 'preocupado' },
            { speaker: 'guia', text: 'Los silos organizacionales son el cementerio de la innovación. Donde no hay transparencia radical, la desconfianza consume el 50% de la energía del equipo.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo desmontar las islas corporativas y construir una cultura de transparencia?'
        },
        station2_understand: {
          title: 'Seguridad psicológica y metas compartidas',
          introduction: 'La investigación de Google (Proyecto Aristóteles) demostró que el factor #1 de los equipos exitosos no es el coeficiente intelectual, sino la seguridad psicológica.',
          perspectives: [
            {
              characterId: 'samuel',
              emotion: 'reflexivo',
              feeling: 'Temor a la vulnerabilidad profesional',
              perspective: 'Siente que ocultar datos lo protege de críticas si los costos suben.',
              need: 'Un entorno donde los problemas se traten como desafíos comunes y no como faltas punitivas.'
            },
            {
              characterId: 'luna',
              emotion: 'preocupado',
              feeling: 'Frustración por la falta de fluidez',
              perspective: 'Desea una integración temprana para evitar retrabajos.',
              need: 'Canales abiertos de comunicación y co-creación continua.'
            }
          ],
          reflectionPrompt: 'En un equipo de alto nivel, nadie pierde tiempo ocultando errores: se exponen de inmediato para resolverlos juntos.'
        },
        station3_discover: {
          title: 'Metodologías ágiles y cultura colaborativa',
          guidance: 'Evalúa estas tres estrategias de gestión de equipos:',
          alternatives: [
            {
              id: 'a8_tablero_abierto_agil',
              title: 'Implementar tablero compartido con ceremonias cortas de alineación diaria (Stand-ups)',
              description: 'Se transparentan costos, avances y bloqueos en un espacio visible para todos los departamentos.',
              consequence: 'Se eliminan los silos, los cuellos de botella se detectan en horas y el proyecto se entrega con excelencia.',
              educationalReflection: 'La visibilidad compartida genera alineación automática y reduce la política interna.',
              type: 'optima',
              icon: 'Trello'
            },
            {
              id: 'a8_mando_autoritario',
              title: 'Designar a un supervisor autoritario que centralice toda la información',
              description: 'Se prohíbe el contacto directo entre áreas sin autorización previa.',
              consequence: 'Se burocratizan las decisiones y el personal más creativo renuncia.',
              educationalReflection: 'El control asfixiante ahoga la iniciativa y la motivación intrínseca.',
              type: 'constructiva',
              icon: 'ShieldAlert'
            },
            {
              id: 'a8_externalizar_todo',
              title: 'Subcontratar la coordinación a terceros ajenos a la comunidad',
              description: 'Se desentienden del problema y pagan a una consultora externa.',
              consequence: 'El proyecto pierde el arraigo comunitario y los costos se multiplican.',
              educationalReflection: 'No se puede tercerizar la cultura de colaboración interna.',
              type: 'exploratoria',
              icon: 'ExternalLink'
            }
          ]
        },
        station4_choose: {
          title: 'Liderazgo Servicial',
          closingReflection: 'El rol del líder moderno no es tener todas las respuestas, sino crear el entorno seguro donde el equipo las encuentre juntas.'
        },
        station5_practice: {
          type: 'assertive_filter',
          title: 'Seguridad Psicológica en el Trabajo',
          instruction: 'Clasifica las intervenciones directivas según generen seguridad psicológica o cultura del miedo:',
          items: [
            { id: 'sp1', text: '"Gracias por señalar ese error a tiempo; analicemos qué falló en el proceso para que no se repita."', category: 'seguridad' },
            { id: 'sp2', text: '"Aquí no quiero excusas: el que cometa un fallo se va a la calle inmediatamente."', category: 'miedo' },
            { id: 'sp3', text: '"No tengo la respuesta exacta para este problema; ¿qué opciones ven ustedes desde sus áreas?"', category: 'seguridad' },
            { id: 'sp4', text: '"Usted limite a hacer lo que le mandan y no cuestione las directrices de los jefes."', category: 'miedo' }
          ],
          targets: [
            { id: 'seguridad', label: 'Fomenta Seguridad Psicológica e Innovación' },
            { id: 'miedo', label: 'Cultura de Miedo, Silos y Ocultamiento' }
          ],
          completionMessage: '¡Diagnóstico directivo de excelencia! Tienes las herramientas para liderar comunidades prósperas.',
          skillTakeaway: 'La vulnerabilidad del líder inspira la lealtad y el compromiso del equipo.'
        }
      }
    }
  },

  // ==========================================
  // MISIÓN 9: Aprender a tener paciencia
  // ==========================================
  {
    id: 9,
    title: 'Aprender a Tener Paciencia',
    subtitle: 'Esperar los turnos, respetar los ritmos naturales y cultivar la serenidad interior',
    skillFocus: 'Autorregulación, Tolerancia a la Frustración y Tiempo Natural',
    zoneId: 'parque',
    primaryCharacters: ['nico', 'sofia', 'guia'],
    badge: {
      id: 'badge_paciencia',
      title: 'Semilla de la Calma',
      skillName: 'Paciencia y Serenidad',
      description: 'Descubriste que las cosas más valiosas de la vida necesitan tiempo para madurar.',
      icon: 'Clock',
      color: '#10b981'
    },
    modes: {
      infantil: {
        station1_observe: {
          title: 'La fila del gran tobogán arcoíris',
          sceneDescription: 'En el Parque de la Convivencia, acaban de inaugurar un tobogán gigante con forma de arcoíris. Hay una fila de niños esperando su turno ordenadamente. Nico no quiere esperar, se mete empujando a los más pequeños y grita: "¡Apúrense que es mi turno ya!".',
          dialogue: [
            { speaker: 'sofia', text: 'Nico, todos estamos esperando bajo el sol. Empujar no hace que el tobogán baje más rápido; hace que alguien se lastime.', emotion: 'preocupado' },
            { speaker: 'nico', text: '¡Pero es que esperar me da desesperación! ¡Quiero tirarme ya mismo!', emotion: 'preocupado' },
            { speaker: 'guia', text: 'La paciencia no es aburrirse: es la fuerza secreta de saber esperar con alegría sabiendo que el momento de disfrutar llegará.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Qué sientes en tu cuerpo cuando tienes que esperar en una fila larga?'
        },
        station2_understand: {
          title: 'El monstruo de la impaciencia',
          introduction: 'La impaciencia se siente como cosquillitas inquietas en los pies y fuego en el pecho.',
          perspectives: [
            {
              characterId: 'nico',
              emotion: 'preocupado',
              feeling: 'Ansiedad e hiperactividad',
              perspective: 'Siente que esperar es una pérdida de tiempo y que los demás van "demasiado lento".',
              need: 'Aprender juegos mentales y técnicas de respiración para calmar su inquietud mientras espera.'
            },
            {
              characterId: 'sofia',
              emotion: 'calmado',
              feeling: 'Tranquilidad y juego compartido',
              perspective: 'Aprovecha la fila para cantar rimas, mirar las formas de las nubes y conversar con los amigos.',
              need: 'Invitar a Nico a jugar mientras esperan juntos.'
            }
          ],
          reflectionPrompt: 'Cuando sabes divertirte mientras esperas, ¡la fila pasa en un abrir y cerrar de ojos!'
        },
        station3_discover: {
          title: 'Tres maneras de vivir la espera',
          guidance: 'Mira qué pasa con cada elección:',
          alternatives: [
            {
              id: 'a9_juegos_espera_calma',
              title: 'Jugar al "veo veo" o contar nubes con los compañeros de fila',
              description: 'Nico acepta el consejo de Sofía y empiezan a buscar formas de animales en el cielo mientras avanzan paso a paso.',
              consequence: 'El tiempo vuela entre risas, llega su turno con una sonrisa gigante y se desliza con felicidad plena.',
              educationalReflection: '¡Extraordinario! Llenar la espera de creatividad transforma la impaciencia en diversión.',
              type: 'optima',
              icon: 'Sun'
            },
            {
              id: 'a9_empujar_y_pataleta',
              title: 'Seguir empujando y hacer una rabieta si no lo dejan pasar',
              description: 'Patea la escalera del tobogán.',
              consequence: 'El encargado del parque le pide salir de la fila para calmarse y pierde la oportunidad de subir.',
              educationalReflection: 'La impaciencia agresiva te hace perder exactamente lo que querías conseguir.',
              type: 'exploratoria',
              icon: 'Frown'
            },
            {
              id: 'a9_irse_frustrado',
              title: 'Irse enojado diciendo que el parque es tonto',
              description: 'Se va con los brazos cruzados sin probar el juego.',
              consequence: 'Se queda aburrido todo el recreo lamentándose por no haber esperado 3 minutos.',
              educationalReflection: 'Rendirse ante la primera espera te priva de las mejores experiencias.',
              type: 'constructiva',
              icon: 'UserX'
            }
          ]
        },
        station4_choose: {
          title: 'El Arte de Esperar Sonriendo',
          closingReflection: 'Quien sabe tener paciencia es dueño de su propia paz. Todo lo bueno tiene su tiempo de madurar.'
        },
        station5_practice: {
          type: 'patience_breath',
          title: 'El Juego de la Semilla Paciente',
          instruction: 'Practica 3 respiraciones profundas mientras visualizas cómo una semillita crece bajo la tierra:',
          breathSteps: [
            { action: 'Inhala lento: la semillita absorbe el agua fresca bajo tierra...', seconds: 4, tip: 'Calma tu cuerpo.' },
            { action: 'Sostén el aire: la semilla duerme con paciencia esperando el sol...', seconds: 3, tip: 'No hay apuro.' },
            { action: 'Exhala suave: ¡un brotecito verde asoma con alegría hacia la luz!', seconds: 5, tip: 'Siente la satisfacción de la espera.' }
          ],
          completionMessage: '¡Has cultivado la paciencia del roble! Sabes esperar con calma y serenidad.',
          skillTakeaway: 'Las frutas más dulces son las que maduran despacio en el árbol.'
        }
      },
      juvenil: {
        station1_observe: {
          title: 'La cultura de la gratificación instantánea en redes y metas',
          sceneDescription: 'Nico empezó a aprender guitarra y programación hace dos semanas. Al ver que sus dedos le duelen y que su aplicación tiene errores de código que no resuelve de inmediato, tira la libreta al suelo y dice con rabia: "¡Esto es una porquería, no sirvo para esto!". Prefiere pasarse 4 horas haciendo scroll infinito en videos cortos donde todo dura 15 segundos.',
          dialogue: [
            { speaker: 'nico', text: '¡Llevo quince días y sigo sonando horrible! Mis amigos en internet tocan solos de rock facilísimo.', emotion: 'preocupado' },
            { speaker: 'sofia', text: 'Nico, esos músicos llevan cinco años practicando todos los días sin que nadie los filme. El video muestra el segundo final, no los años de tropiezos.', emotion: 'reflexivo' },
            { speaker: 'guia', text: 'La trampa del mundo digital es hacernos creer que la maestría se descarga con un clic. Todo talento real exige tolerar la incomodidad de ser principiante.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo afecta a nuestra mente acostumbrarnos a recompensas inmediatas de dopamina rápida?'
        },
        station2_understand: {
          title: 'La curva del aprendizaje y el valor del tropiezo',
          introduction: 'Ningún ser humano nació sabiendo caminar, hablar o tocar un instrumento. La frustración es la señal biológica de que el cerebro está creando nuevas conexiones.',
          perspectives: [
            {
              characterId: 'nico',
              emotion: 'preocupado',
              feeling: 'Frustración y miedo a la mediocridad',
              perspective: 'Compara su inicio imperfecto con el producto terminado de otros.',
              need: 'Comprender que equivocarse no es fracasar: es el único camino hacia el dominio.'
            },
            {
              characterId: 'sofia',
              emotion: 'calmado',
              feeling: 'Perseverancia y realismo compasivo',
              perspective: 'Sabe que celebrar pequeños avances diarios de 1% construye montañas.',
              need: 'Ayudar a Nico a llevar un diario de micro-victorias.'
            }
          ],
          reflectionPrompt: 'No juzgues cada día por la cosecha que recoges, sino por las semillas que plantas con constancia.'
        },
        station3_discover: {
          title: 'Modelos de perseverancia vs. abandono precoz',
          guidance: 'Compara las tres actitudes ante una habilidad difícil:',
          alternatives: [
            {
              id: 'a9_practica_deliberada_constante',
              title: 'Adoptar la práctica deliberada de 20 minutos diarios aceptando los errores',
              description: 'Nico se compromete a tocar sólo 20 minutos al día, descansando cuando le duelan los dedos y registrando cada avance.',
              consequence: 'Al mes toca su primera canción completa con orgullo indecible y su cerebro desarrolla disciplina férrea.',
              educationalReflection: 'La constancia humilde supera con creces al talento impaciente.',
              type: 'optima',
              icon: 'TrendingUp'
            },
            {
              id: 'a9_abandonar_para_siempre',
              title: 'Vender la guitarra y convencerse de que "no tiene talento"',
              description: 'Abandona a la primera dificultad y busca otra cosa que le dé éxito fácil.',
              consequence: 'Repite el mismo patrón en el deporte, el estudio y las relaciones, sintiéndose insatisfecho.',
              educationalReflection: 'Quien huye de la dificultad nunca descubre su verdadero potencial.',
              type: 'exploratoria',
              icon: 'XCircle'
            },
            {
              id: 'a9_obsesion_sin_descanso',
              title: 'Pasar 8 horas seguidas hasta lastimarse los tendones',
              description: 'Practica compulsivamente sin pausas.',
              consequence: 'Sufre una tendinitis dolorosa que lo obliga a parar meses enteros.',
              educationalReflection: 'La impaciencia vestida de obsesión daña la salud y quema la motivación.',
              type: 'constructiva',
              icon: 'AlertOctagon'
            }
          ]
        },
        station4_choose: {
          title: 'El Poder del Hábito Silencioso',
          closingReflection: 'Los árboles más frondosos tardaron décadas en hundir sus raíces en la tierra profunda. Tu futuro se construye hoy con calma.'
        },
        station5_practice: {
          type: 'emotion_thermometer',
          title: 'El Termómetro de la Tolerancia a la Frustración',
          instruction: 'Clasifica los pensamientos según refuercen la paciencia activa o la desesperación inmediatista:',
          items: [
            { id: 'tf1', text: '"Este acorde no me sale hoy, pero si lo repito 10 veces mañana saldrá con más fluidez."', category: 'alta' },
            { id: 'tf2', text: '"Si no aprendo esto en una semana es porque soy un incompetente y no sirvo."', category: 'baja' },
            { id: 'tf3', text: '"Hacer una pausa para tomar agua y despejar la mente me ayudará a ver el error en el código."', category: 'alta' }
          ],
          targets: [
            { id: 'alta', label: 'Mentalidad de Crecimiento y Paciencia' },
            { id: 'baja', label: 'Mentalidad Fija e Impaciencia Destructiva' }
          ],
          completionMessage: '¡Mentalidad de crecimiento fortalecida! Estás blindado contra la trampa de la prisa.',
          skillTakeaway: 'La maestría no es cuestión de magia, sino de amorosa paciencia en el proceso.'
        }
      },
      adulto: {
        station1_observe: {
          title: 'Procesos de cambio humano, duelo y maduración institucional',
          sceneDescription: 'En una comunidad o familia que atraviesa un proceso de cambio profundo o la recuperación tras una crisis económica o afectiva, un líder o familiar exige resultados y reconciliación inmediata: "¡Ya pasaron dos meses, esto ya debería estar resuelto y todos felices!". La presión apresurada genera recaídas y ansiedad en todos los miembros.',
          dialogue: [
            { speaker: 'nico', text: '¡No podemos seguir esperando a que cada uno se sienta listo! La vida sigue y hay que dar vuelta la página de una vez.', emotion: 'preocupado' },
            { speaker: 'sofia', text: 'Nico, las heridas emocionales y la reconstrucción de la confianza no tienen un cronómetro de fábrica. Si forzamos la cicatrización, sangrará por dentro.', emotion: 'reflexivo' },
            { speaker: 'guia', text: 'Aprender a tener paciencia en la vida adulta es comprender el tiempo de los procesos orgánicos. No se puede acelerar el parto de un niño jalando de él.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué la impaciencia directiva o parental suele sabotear los procesos terapéuticos y pedagógicos?'
        },
        station2_understand: {
          title: 'El respeto a la temporalidad del alma',
          introduction: 'El perdón sincero, la adquisición de nuevos hábitos y la maduración de acuerdos exigen tiempo y cuidado continuado.',
          perspectives: [
            {
              characterId: 'nico',
              emotion: 'preocupado',
              feeling: 'Ansiedad por el control e incomodidad ante la incertidumbre',
              perspective: 'Siente que si el proceso no se cierra rápido, el riesgo de caos es inminente.',
              need: 'Aprender a sostener la tensión de lo no resuelto con serenidad.'
            },
            {
              characterId: 'sofia',
              emotion: 'calmado',
              feeling: 'Sabiduría procesal y compasión',
              perspective: 'Comprende que forzar acuerdos cosméticos antes de que las partes sanen genera cinismo.',
              need: 'Generar hitos pequeños de acompañamiento sin apresurar el desenlace final.'
            }
          ],
          reflectionPrompt: 'La paciencia no es resignación inerte; es la confianza activa en que el trabajo constante dará su fruto a su debido tiempo.'
        },
        station3_discover: {
          title: 'Enfoques de acompañamiento en procesos complejos',
          guidance: 'Analiza los tres caminos ante un proceso que toma tiempo:',
          alternatives: [
            {
              id: 'a9_acompanamiento_sostenido',
              title: 'Definir micro-objetivos mensuales respetando los ritmos de cada parte',
              description: 'Se valida que el dolor aún existe pero se celebran avances semanales concretos con presencia y afecto continuo.',
              consequence: 'La confianza se restaura de raíz sobre bases sólidas e inquebrantables.',
              educationalReflection: 'El respeto al tiempo del otro es la máxima expresión de amor y liderazgo maduro.',
              type: 'optima',
              icon: 'Calendar'
            },
            {
              id: 'a9_decretar_reconciliacion_falsa',
              title: 'Exigir abrazos forzados y prohibir hablar del conflicto',
              description: 'Se decreta que "aquí no ha pasado nada" para mantener las apariencias.',
              consequence: 'El resentimiento se pudre bajo la alfombra y estalla años después con mayor violencia.',
              educationalReflection: 'La reconciliación decretada por la fuerza es una farsa peligrosa.',
              type: 'constructiva',
              icon: 'ShieldAlert'
            },
            {
              id: 'a9_abandonar_al_primer_tropiezo',
              title: 'Declarar que "la gente nunca cambia" y romper la relación al primer retroceso',
              description: 'Se abandona el acompañamiento ante una recaída normal del proceso.',
              consequence: 'Se confirma la creencia desesperanzadora de que el cambio es imposible.',
              educationalReflection: 'Los procesos humanos avanzan en espiral: dos pasos adelante y uno atrás.',
              type: 'exploratoria',
              icon: 'RotateCcw'
            }
          ]
        },
        station4_choose: {
          title: 'La Madurez de los Tiempos',
          closingReflection: 'Quien tiene paciencia para sembrar, regar y esperar el invierno sin desesperar, saborea la primavera con bendición.'
        },
        station5_practice: {
          type: 'assertive_filter',
          title: 'Paciencia Activa versus Pasividad Resignada',
          instruction: 'Distingue entre la paciencia sabia y la negligencia pasiva:',
          items: [
            { id: 'p_ac1', text: '"Hacer seguimiento semanal con amor sin presionar por respuestas apresuradas."', category: 'sabia' },
            { id: 'p_ac2', text: '"No hacer nada y esperar que mágicamente los problemas se solucionen solos con los años."', category: 'negligente' },
            { id: 'p_ac3', text: '"Establecer límites claros mientras acompaño el ritmo de recuperación de mi familiar."', category: 'sabia' },
            { id: 'p_ac4', text: '"Tolerar abusos o faltas de respeto diciendo que hay que ser pacientes con todo."', category: 'negligente' }
          ],
          targets: [
            { id: 'sabia', label: 'Paciencia Sabia y Activa' },
            { id: 'negligente', label: 'Negligencia o Permisividad Dañina' }
          ],
          completionMessage: '¡Discernimiento de alta sabiduría! Comprendes la diferencia entre paciencia y complicidad.',
          skillTakeaway: 'La paciencia protege los tiempos del alma sin tolerar la injusticia.'
        }
      }
    }
  },

  // ==========================================
  // MISIÓN 10: Reconocer los límites personales
  // ==========================================
  {
    id: 10,
    title: 'Reconocer los Límites Personales',
    subtitle: 'Aprender a decir "no" con respeto, proteger el espacio propio y cuidar la integridad',
    skillFocus: 'Autocuidado, Asertividad de Protección y Consentimiento',
    zoneId: 'pequena_ciudad',
    primaryCharacters: ['sofia', 'nico', 'guia'],
    badge: {
      id: 'badge_limites',
      title: 'Escudo del Respeto',
      skillName: 'Límites Personales',
      description: 'Aprendiste a poner fronteras saludables para proteger tu dignidad y respetar las de los demás.',
      icon: 'Shield',
      color: '#ec4899'
    },
    modes: {
      infantil: {
        station1_observe: {
          title: 'El juego de las cosquillas que ya no es divertido',
          sceneDescription: 'En la plaza, Nico empieza a hacerle cosquillas a Sofía. Al principio se ríen, pero luego Sofía empieza a perder el aire, le duele la panza y pide con voz agitada: "¡Nico, basta, ya no quiero más!". Nico se ríe y sigue diciendo: "¡Pero si te estás riendo, agárrate!".',
          dialogue: [
            { speaker: 'sofia', text: '¡Nico, por favor para! ¡Te estoy diciendo que basta y me duele!', emotion: 'preocupado' },
            { speaker: 'nico', text: '¡Ay, qué aburrida te pusiste de repente! ¡Es solo un juego!', emotion: 'entusiasmado' },
            { speaker: 'guia', text: 'Atención a esta regla de oro: cuando una persona dice "basta", el juego se detiene al segundo. Reírse por reflejo no significa dar permiso.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué la palabra "BASTA" tiene tanto poder en cualquier juego?'
        },
        station2_understand: {
          title: 'Mi cuerpo es mi territorio sagrado',
          introduction: 'Nadie tiene derecho a tocar nuestro cuerpo, empujarnos o jugar con nosotros si no queremos, aunque sea un amigo.',
          perspectives: [
            {
              characterId: 'sofia',
              emotion: 'preocupado',
              feeling: 'Invasión y pérdida de control',
              perspective: 'Siente que su voz no fue respetada y que su amigo no escucha su dolor.',
              need: 'Que Nico se detenga de inmediato y respete su espacio personal.'
            },
            {
              characterId: 'nico',
              emotion: 'curioso',
              feeling: 'Confusión entre risa refleja y diversión real',
              perspective: 'Creía que mientras hubiera risas todo estaba permitido.',
              need: 'Aprender que las cosquillas producen risa involuntaria, pero pueden causar dolor y angustia.'
            }
          ],
          reflectionPrompt: 'Un verdadero amigo cuida tu cuerpo y se detiene en el instante exacto en que pides parar.'
        },
        station3_discover: {
          title: 'Tres reacciones frente a un límite no respetado',
          guidance: 'Descubre qué ocurre según lo que hagan ahora:',
          alternatives: [
            {
              id: 'a10_parar_pedir_perdon',
              title: 'Parar inmediatamente, dar un paso atrás y decir: "Perdón Sofi, no me di cuenta"',
              description: 'Nico suelta las manos, se aleja un metro y le da espacio para respirar con tranquilidad.',
              consequence: 'Sofía recupera el aire, se siente respetada y la confianza entre ambos sigue a salvo.',
              educationalReflection: '¡Extraordinario! Frenar al instante cuando te dicen "basta" es el mayor acto de respeto en un juego.',
              type: 'optima',
              icon: 'ShieldCheck'
            },
            {
              id: 'a10_burlarse_por_aburrida',
              title: 'Seguir burlándose diciendo que es una quejumbrosa',
              description: 'Continúa ignorando su límite verbal.',
              consequence: 'Sofía llora, se aparta con miedo y ya no quiere volver a jugar con Nico.',
              educationalReflection: 'Insistir cuando alguien pide parar destruye la seguridad del vínculo.',
              type: 'exploratoria',
              icon: 'AlertTriangle'
            },
            {
              id: 'a10_sofia_golpea_desesperada',
              title: 'Que Sofía tire una patada para poder liberarse',
              description: 'Al no ser escuchada, Sofía se defiende físicamente con desesperación.',
              consequence: 'Ambos terminan lastimados por no haber frenado a tiempo con la palabra.',
              educationalReflection: 'Escuchar el "basta" a tiempo evita accidentes y agresiones mayores.',
              type: 'constructiva',
              icon: 'Zap'
            }
          ]
        },
        station4_choose: {
          title: 'La Burbuja del Respeto',
          closingReflection: 'Tu cuerpo es tu tesoro. Tienes derecho a decir "NO" siempre que algo te incomode, y todos debemos respetar ese escudo.'
        },
        station5_practice: {
          type: 'assertive_filter',
          title: 'El Semáforo del Consentimiento y el Espacio Personal',
          instruction: 'Clasifica las situaciones según respeten los límites o los vulneren:',
          items: [
            { id: 'lim1', text: '"Preguntar con amabilidad: \'¿Te puedo dar un abrazo?\' y aceptar si dicen que no."', category: 'respeto' },
            { id: 'lim2', text: '"Quitarle la gorra a un compañero y pasársela a otros mientras él pide que se la devuelvan."', category: 'invasion' },
            { id: 'lim3', text: '"Detener de inmediato cualquier broma física en cuanto la otra persona pide parar."', category: 'respeto' },
            { id: 'lim4', text: '"Obligar a alguien a abrazar a un familiar o conocido cuando el niño no se siente cómodo."', category: 'invasion' }
          ],
          targets: [
            { id: 'respeto', label: 'Respeta Límites y Espacio Personal' },
            { id: 'invasion', label: 'Vulnera Límites o Fuerza el Consentimiento' }
          ],
          completionMessage: '¡Criterio protector superado con éxito! Sabes cuidar de ti y de los demás.',
          skillTakeaway: 'Decir NO con respeto es un derecho fundamental que todos debemos honrar.'
        }
      },
      juvenil: {
        station1_observe: {
          title: 'Presión de grupo para realizar retos peligrosos o compartir intimidad',
          sceneDescription: 'En una reunión juvenil en la plaza, un grupo reta a Nico a subir a la barandilla resbalosa del puente para grabar un video "extremo" y subirlo a redes. Nico siente miedo en el estómago y sabe que es peligroso, pero los demás empiezan a cantar: "¡Gallina, el que no salte es un cobarde!".',
          dialogue: [
            { speaker: 'samuel', text: '¡Vamos Nico! No seas aburrido, todos lo hicimos. ¡Solo son dos metros sobre las rocas!', emotion: 'entusiasmado' },
            { speaker: 'nico', text: 'Es que... las piedras están mojadas y no me parece buena idea...', emotion: 'preocupado' },
            { speaker: 'guia', text: 'La verdadera valentía no consiste en hacer una tontería para que otros aplaudan. La valentía suprema consiste en sostener tu "NO" frente a la multitud.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué confundimos temeridad insensata con coraje real?'
        },
        station2_understand: {
          title: 'La psicología de la presión grupal',
          introduction: 'En la juventud, el miedo a ser excluido o tildado de "cobarde" lleva a cometer actos de alto riesgo que dañan la vida o la integridad.',
          perspectives: [
            {
              characterId: 'nico',
              emotion: 'preocupado',
              feeling: 'Conflicto entre supervivencia e instinto de pertenencia',
              perspective: 'Sabe que el riesgo es real pero le aterra ser blanco de burlas en la escuela.',
              need: 'La fuerza interna para poner su seguridad por encima del aplauso pasajero.'
            },
            {
              characterId: 'sofia',
              emotion: 'reflexivo',
              feeling: 'Preocupación solidaria',
              perspective: 'Sabe que los que incitan al peligro no pagarán el costo si Nico termina en un hospital.',
              need: 'Ponerse del lado de Nico y desarticular la burla grupal.'
            }
          ],
          reflectionPrompt: 'Quien te exige arriesgar tu vida o tu dignidad para ser su amigo, no es tu amigo.'
        },
        station3_discover: {
          title: 'Decisiones ante la presión colectiva',
          guidance: 'Evalúa qué produce cada respuesta:',
          alternatives: [
            {
              id: 'a10_no_firme_asertivo',
              title: 'Mirar de frente y decir con calma: "No lo voy a hacer. No necesito romperme un hueso para demostrar nada"',
              description: 'Nico se cruza de brazos con serenidad y sonríe con seguridad.',
              consequence: 'La presión se desinfla, otros compañeros que tenían miedo se sienten aliviados y Nico gana un respeto genuino.',
              educationalReflection: 'Un "NO" firme y tranquilo desarma la manipulación de grupo.',
              type: 'optima',
              icon: 'ShieldCheck'
            },
            {
              id: 'a10_ceder_por_miedo',
              title: 'Ceder a la presión y subirse a la barandilla mojada',
              description: 'Sube temblando para que no se burlen.',
              consequence: 'Resbala, cae sobre las piedras y sufre fracturas múltiples.',
              educationalReflection: 'El costo de complacer a la masa siempre lo paga tu propio cuerpo.',
              type: 'exploratoria',
              icon: 'AlertOctagon'
            },
            {
              id: 'a10_insultar_agresivo',
              title: 'Empezar a gritar e insultar a los amigos con violencia',
              description: 'Reacciona con agresividad física.',
              consequence: 'Se genera una pelea campal que termina en sanciones para todos.',
              educationalReflection: 'La asertividad no necesita gritos; la firmeza tranquila tiene más peso.',
              type: 'constructiva',
              icon: 'Flame'
            }
          ]
        },
        station4_choose: {
          title: 'La Autonomía Indestructible',
          closingReflection: 'Quien es dueño de su propio "NO" es dueño de su destino y de su libertad.'
        },
        station5_practice: {
          type: 'assertive_filter',
          title: 'Respuestas Asertivas ante la Presión de Grupo',
          instruction: 'Identifica las frases que protegen tus límites con firmeza y elegancia:',
          items: [
            { id: 'rp1', text: '"No va conmigo. Hagan lo que quieran, pero yo no participo de eso."', category: 'firme' },
            { id: 'rp2', text: '"Bueno, solo esta vez para que no digan que soy mala onda..."', category: 'sumiso' },
            { id: 'rp3', text: '"Valoro mi cuerpo y mi tranquilidad; no necesito esa adrenalina barata."', category: 'firme' },
            { id: 'rp4', text: '"Si no lo hago me van a odiar todos, mejor lo hago aunque me asuste."', category: 'sumiso' }
          ],
          targets: [
            { id: 'firme', label: 'Límite Firme, Asertivo y Seguro' },
            { id: 'sumiso', label: 'Sumisión Peligrosa a la Presión Ajena' }
          ],
          completionMessage: '¡Escudo de integridad activado! Posees el criterio maduro para cuidarte en cualquier situación.',
          skillTakeaway: 'Tus límites definen quién eres y te protegen del abismo.'
        }
      },
      adulto: {
        station1_observe: {
          title: 'Límites laborales, familiares y prevención del abuso relacional',
          sceneDescription: 'En un entorno laboral o familiar, una persona recibe constantes solicitudes fuera de horario (fines de semana, altas horas de la noche) y exigencias económicas desproporcionadas por parte de familiares que abusan de su generosidad. Por miedo a ser tildada de "egoísta" o "mala persona", dice siempre que sí, sufriendo insomnio y crisis de ansiedad.',
          dialogue: [
            { speaker: 'sofia', text: 'Ya es la tercera vez este mes que me piden dinero que nunca devuelven, y en el trabajo me exigen responder correos un domingo a las 11 pm...', emotion: 'preocupado' },
            { speaker: 'guia', text: 'Quien no sabe decir "NO" con claridad, convierte su "SÍ" en una condena. Poner límites no es egoísmo: es la única condición de posibilidad para seguir dando con salud.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué la culpa no resuelta nos vuelve vulnerables a dinámicas de abuso o explotación?'
        },
        station2_understand: {
          title: 'La culpa tóxica vs. la responsabilidad ética',
          introduction: 'Confundir el autosacrificio desmedido con la bondad es la causa de miles de cuadros de burnout y relaciones codependientes.',
          perspectives: [
            {
              characterId: 'sofia',
              emotion: 'preocupado',
              feeling: 'Agotamiento y miedo a la desaprobación',
              perspective: 'Siente que si pone límites, los demás dejarán de quererla o la considerarán mala.',
              need: 'Comprender que los límites sanos enseñan a los demás cómo tratarnos con dignidad.'
            },
            {
              characterId: 'guia',
              emotion: 'calmado',
              feeling: 'Firmeza pedagógica y protección',
              perspective: 'Sabe que decir "sí" a otros a costa de destruir la propia salud es una irresponsabilidad consigo misma.',
              need: 'Entrenar el músculo del "no" compasivo y profesional.'
            }
          ],
          reflectionPrompt: 'Un "NO" a las demandas abusivas de los demás es un "SÍ" a tu salud, a tu familia y a tu paz mental.'
        },
        station3_discover: {
          title: 'Estrategias de establecimiento de fronteras éticas',
          guidance: 'Evalúa estas tres posturas ante la sobreexigencia externa:',
          alternatives: [
            {
              id: 'a10_limite_profesional_afectivo',
              title: 'Comunicar límites claros con amabilidad y firmeza innegociable',
              description: 'Sofía establece un mensaje automático fuera de horario y le dice a su familiar: "Te quiero mucho, pero en este momento no puedo prestar dinero. Cuenta conmigo para buscar opciones de empleo o apoyo técnico".',
              consequence: 'La ansiedad disminuye radicalmente, los límites se respetan y las relaciones recuperan un balance sano.',
              educationalReflection: 'Poner límites con serenidad desarma el chantaje emocional.',
              type: 'optima',
              icon: 'Shield'
            },
            {
              id: 'a10_seguir_cediendo_colapso',
              title: 'Seguir diciendo que sí hasta el endeudamiento y la quiebra mental',
              description: 'Continúa complaciendo a todos por miedo al rechazo.',
              consequence: 'Pierde sus ahorros, sufre depresión clínica y los demandantes buscan a otra persona que explotar.',
              educationalReflection: 'Complacer a personas sin límites nunca llena su apetito insaciable.',
              type: 'exploratoria',
              icon: 'TrendingDown'
            },
            {
              id: 'a10_estallar_en_ira',
              title: 'Aguantar meses en silencio y luego romper relaciones a los gritos',
              description: 'Explota con rabia acumulada insultando a todos.',
              consequence: 'Queda como la culpable del conflicto y no se construyen acuerdos sostenibles.',
              educationalReflection: 'Poner límites tarde y con furia desdibuja la legitimidad de tu derecho.',
              type: 'constructiva',
              icon: 'Flame'
            }
          ]
        },
        station4_choose: {
          title: 'Soberanía Personal y Paz',
          closingReflection: 'Cuidar tus límites es el mayor favor que le puedes hacer a tus relaciones: solo quien se respeta a sí mismo puede amar limpiamente.'
        },
        station5_practice: {
          type: 'assertive_filter',
          title: 'Fórmulas para Decir "NO" sin Culpa',
          instruction: 'Clasifica las respuestas según expresen límites asertivos o justificaciones sumisas:',
          items: [
            { id: 'no1', text: '"Agradezco que hayas pensado en mí, pero en esta ocasión no me es posible asumir ese compromiso."', category: 'asertivo' },
            { id: 'no2', text: '"Perdón, perdón, es que soy lo peor, si quieres lo intento aunque me desmaye del cansancio..."', category: 'sumiso' },
            { id: 'no3', text: '"Mi horario de atención laboral concluye a las 6 pm; con gusto revisaré tu solicitud mañana a primera hora."', category: 'asertivo' },
            { id: 'no4', text: '"Inventar una mentira complicada para no decir simplemente que no quiero ir."', category: 'sumiso' }
          ],
          targets: [
            { id: 'asertivo', label: 'Límite Asertivo, Claro y Profesional' },
            { id: 'sumiso', label: 'Respuesta Sumisa, Culpógena o Evasiva' }
          ],
          completionMessage: '¡Maestría en asertividad protectora! Tienes las llaves de tu paz cotidiana.',
          skillTakeaway: 'Decir no con serenidad es el cimiento de la salud mental y la dignidad adulta.'
        }
      }
    }
  },

  // ==========================================
  // MISIÓN 11: Construir acuerdos
  // ==========================================
  {
    id: 11,
    title: 'Construir Acuerdos',
    subtitle: 'Diseñar compromisos claros, equilibrados y sostenibles que beneficien a todas las partes',
    skillFocus: 'Pactos de Convivencia, Mediación y Regla de Oro',
    zoneId: 'puente',
    primaryCharacters: ['samuel', 'nico', 'guia'],
    badge: {
      id: 'badge_acuerdos',
      title: 'Pacto de Paz',
      skillName: 'Construcción de Acuerdos',
      description: 'Aprendiste a plasmar soluciones negociadas en compromisos claros y compartidos.',
      icon: 'FileCheck',
      color: '#f59e0b'
    },
    modes: {
      infantil: {
        station1_observe: {
          title: 'El reglamento del recreo en el Puente de la Convivencia',
          sceneDescription: 'En la mesa de juegos del puente, Samuel y Nico quieren jugar con el futbolín de mesa todos los días. Pero cada vez que uno anota un gol, inventan reglas en el momento: "¡Ese gol no vale porque rebotó dos veces!", "¡Ahora vale por tres puntos!". Al final siempre terminan discutiendo porque las reglas no están claras desde el inicio.',
          dialogue: [
            { speaker: 'nico', text: '¡Esa regla de no hacer molinetes no existía antes! ¡La estás inventando porque vas perdiendo!', emotion: 'preocupado' },
            { speaker: 'samuel', text: '¡Claro que existía, en mi casa siempre jugamos así! ¡Si no te gusta no juegues!', emotion: 'preocupado' },
            { speaker: 'guia', text: '¿Saben por qué las ciudades tienen leyes y los juegos tienen reglas? Porque cuando los acuerdos se escriben antes de empezar, nadie puede inventar ventajas con trampa.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué es indispensable escribir las reglas del juego antes de lanzar la pelota?'
        },
        station2_understand: {
          title: 'El valor de la regla de oro compartida',
          introduction: 'Un acuerdo de verdad no es lo que a uno solo se le antoja: es lo que ambos aceptan libremente con la mano en el corazón.',
          perspectives: [
            {
              characterId: 'nico',
              emotion: 'preocupado',
              feeling: 'Frustración ante la incertidumbre',
              perspective: 'Siente que Samuel cambia las condiciones a su favor para no perder.',
              need: 'Claridad total y reglas visibles para todos.'
            },
            {
              characterId: 'samuel',
              emotion: 'reflexivo',
              feeling: 'Deseo de orden y juego limpio',
              perspective: 'Quiere que el juego sea divertido pero tiene costumbres distintas en mente.',
              need: 'Sentarse a acordar un reglamento único antes de sacar de centro.'
            }
          ],
          reflectionPrompt: 'Trata a las reglas del juego como tratas a un amigo: con lealtad y respeto.'
        },
        station3_discover: {
          title: 'Tres caminos para pactar el juego',
          guidance: 'Descubre qué ocurre según cómo definan las reglas:',
          alternatives: [
            {
              id: 'a11_cartel_reglas_acordadas',
              title: 'Escribir juntos en una cartulina las 4 reglas del futbolín y firmarla',
              description: 'Nico y Samuel redactan las reglas juntos, las pegan al lado de la mesa y se dan un apretón de manos.',
              consequence: 'Los partidos son emocionantes, cuando hay una duda miran el cartel y juegan en paz todo el año.',
              educationalReflection: '¡Excelente! Los acuerdos visibles y consensuados previenen el 100% de las discusiones infantiles.',
              type: 'optima',
              icon: 'FileText'
            },
            {
              id: 'a11_jugar_sin_reglas',
              title: 'Seguir jugando improvisando reglas en cada jugada',
              description: 'Continúan cambiando las normas según quién vaya ganando.',
              consequence: 'Terminan peleando en cada gol y el recreo se arruina todos los días.',
              educationalReflection: 'Jugar sin reglas claras es una invitación segura al conflicto.',
              type: 'exploratoria',
              icon: 'HelpCircle'
            },
            {
              id: 'a11_imponer_reglamento_profesor',
              title: 'Que un profesor imponga un castigo si alguien protesta',
              description: 'Juegan con miedo al castigo.',
              consequence: 'La diversión desaparece porque sienten que juegan bajo vigilancia policial.',
              educationalReflection: 'El autocontrol y el acuerdo propio valen más que el miedo a la sanción externa.',
              type: 'constructiva',
              icon: 'Lock'
            }
          ]
        },
        station4_choose: {
          title: 'El Pacto de Honor',
          closingReflection: 'Cumplir lo pactado es el secreto de los grandes amigos y de las grandes comunidades.'
        },
        station5_practice: {
          type: 'bridge_builder',
          title: 'Redactando el Gran Pacto de Convivencia',
          instruction: 'Coloca en el pergamino los 4 acuerdos esenciales para convivir con alegría:',
          items: [
            { id: 'ac1', text: 'Acuerdo 1: Hablar con tono suave y escuchar el turno del compañero.' },
            { id: 'ac2', text: 'Acuerdo 2: Cuidar los juguetes y materiales compartidos como si fueran propios.' },
            { id: 'ac3', text: 'Acuerdo 3: Si surge una duda, revisar las reglas acordadas sin gritar.' },
            { id: 'ac4', text: 'Acuerdo 4: Celebrar con humildad cuando ganamos y felicitar con nobleza al rival.' }
          ],
          completionMessage: '¡El Gran Pacto está sellado con honor! Ahora el juego es justo para todos.',
          skillTakeaway: 'Construir acuerdos claros transforma el caos en armonía duradera.'
        }
      },
      juvenil: {
        station1_observe: {
          title: 'El pacto de convivencia en el aula y en grupos digitales',
          sceneDescription: 'En un aula de secundaria o grupo de WhatsApp escolar, surgen constantes quejas por stickers ofensivos, memes descalificadores y mensajes a altas horas de la noche que interrumpen el descanso. El grupo se ha vuelto un campo de batalla donde nadie se siente cómodo.',
          dialogue: [
            { speaker: 'luna', text: 'Ya es insoportable: entras al grupo a buscar la tarea y hay cien mensajes de burlas y memes pesados.', emotion: 'preocupado' },
            { speaker: 'samuel', text: '¡Es solo humor! El que se ofenda que se salga del grupo y ya.', emotion: 'entusiasmado' },
            { speaker: 'guia', text: 'El humor que denigra a alguien no es humor: es hostigamiento digital. Los espacios compartidos necesitan un código de conducta co-creado por todos.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Por qué la libertad de expresión termina donde empieza la dignidad del compañero?'
        },
        station2_understand: {
          title: 'Diseño participativo de normas digitales y presenciales',
          introduction: 'Las normas impuestas desde arriba suelen generar rebeldía; las normas construidas participativamente generan autorregulación.',
          perspectives: [
            {
              characterId: 'luna',
              emotion: 'reflexivo',
              feeling: 'Deseo de un entorno seguro y útil',
              perspective: 'Quiere que el espacio virtual sirva para apoyarse con las tareas y comunicarse con respeto.',
              need: 'Fronteras claras contra el ciberacoso y horarios de descanso.'
            },
            {
              characterId: 'samuel',
              emotion: 'curioso',
              feeling: 'Miedo al aburrimiento y la censura',
              perspective: 'Teme que el grupo se vuelva aburrido o puramente burocrático.',
              need: 'Comprender que puede haber canales separados para humor sano sin invadir el canal de trabajo escolar.'
            }
          ],
          reflectionPrompt: 'Un acuerdo inteligente no prohíbe la diversión: le da su lugar adecuado para que nadie salga lastimado.'
        },
        station3_discover: {
          title: 'Modelos de gobernanza digital juvenil',
          guidance: 'Evalúa las tres opciones de pacto comunitario:',
          alternatives: [
            {
              id: 'a11_pacto_doble_canal',
              title: 'Crear un decálogo de convivencia y separar canales (Canal Tareas + Canal Charlas/Humor)',
              description: 'Se consensúan 5 reglas de respeto (cero memes sobre compañeros, horario límite 9 pm) y se divide la conversación.',
              consequence: 'El ciberacoso desaparece, las tareas se coordinan con éxito y el grupo vuelve a ser un lugar cálido para todos.',
              educationalReflection: 'Estructurar los canales y acordar límites protege la convivencia digital.',
              type: 'optima',
              icon: 'MessageSquare'
            },
            {
              id: 'a11_cerrar_el_grupo',
              title: 'Cerrar el grupo y prohibir toda comunicación entre compañeros',
              description: 'La dirección escolar cancela todo espacio virtual.',
              consequence: 'Los estudiantes abren grupos clandestinos sin moderación donde el acoso se multiplica en la sombra.',
              educationalReflection: 'La censura total solo traslada el problema a la clandestinidad.',
              type: 'exploratoria',
              icon: 'Lock'
            },
            {
              id: 'a11_dejar_hacer_todo',
              title: 'Dejar que el más agresivo domine el grupo sin reglas',
              description: 'Nadie interviene por no parecer "aguafiestas".',
              consequence: 'Varios compañeros abandonan el colegio con cuadros de depresión.',
              educationalReflection: 'La indiferencia frente al acoso digital tiene consecuencias graves.',
              type: 'constructiva',
              icon: 'AlertTriangle'
            }
          ]
        },
        station4_choose: {
          title: 'Cultura de Ciudadanía Digital',
          closingReflection: 'Los espacios digitales son tan reales como las calles de nuestra ciudad. Construir acuerdos en ellos es construir democracia.'
        },
        station5_practice: {
          type: 'assertive_filter',
          title: 'El Decálogo de Oro de la Convivencia Escolar',
          instruction: 'Clasifica las cláusulas del acuerdo según sean viables y protectoras o arbitrarias:',
          items: [
            { id: 'dc1', text: '"Queda prohibido compartir imágenes o stickers de compañeros sin su consentimiento explícito."', category: 'viable' },
            { id: 'dc2', text: '"El que cometa un error tipográfico será expulsado del grupo permanentemente."', category: 'arbitraria' },
            { id: 'dc3', text: '"Los debates sobre tareas deben basarse en argumentos sin descalificaciones personales."', category: 'viable' },
            { id: 'dc4', text: '"Está prohibido hablar de cualquier tema divertido en todo momento."', category: 'arbitraria' }
          ],
          targets: [
            { id: 'viable', label: 'Acuerdo Protector, Democrático y Viable' },
            { id: 'arbitraria', label: 'Norma Arbitraria, Desmedida o Asfixiante' }
          ],
          completionMessage: '¡Decálogo impecable! Tienes madera de legislador ético y mediador cívico.',
          skillTakeaway: 'Las buenas reglas liberan a las personas del abuso y permiten florecer en libertad.'
        }
      },
      adulto: {
        station1_observe: {
          title: 'Construcción de acuerdos restaurativos y convenios colectivos',
          sceneDescription: 'En un condominio o comunidad vecinal, surge un conflicto histórico entre propietarios de mascotas y vecinos sin animales por el uso de las áreas verdes y el ruido de ladridos. Las quejas se acumulan en denuncias legales costosas que no resuelven la convivencia diaria.',
          dialogue: [
            { speaker: 'samuel', text: '¡Llevamos gastados miles en abogados y multas y los perros siguen corriendo sin correa sobre las plantas!', emotion: 'preocupado' },
            { speaker: 'luna', text: '¡Y ustedes amenazan con veneno y gritan a cualquiera que pasee a su mascota! Así es imposible convivir.', emotion: 'preocupado' },
            { speaker: 'guia', text: 'La vía punitiva y judicial suele enriquecer a terceros mientras perpetúa el odio vecinal. La mediación restaurativa permite construir un pacto vivo donde todos ganan.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo sustituir el litigio destructivo por un acuerdo de corresponsabilidad cívica?'
        },
        station2_understand: {
          title: 'El enfoque restaurativo en la comunidad',
          introduction: 'La justicia restaurativa no busca castigar el pasado, sino reparar el daño y comprometer a las partes hacia el futuro.',
          perspectives: [
            {
              characterId: 'samuel',
              emotion: 'preocupado',
              feeling: 'Vulnerabilidad higiénica y necesidad de descanso',
              perspective: 'Necesita áreas limpias para sus hijos y silencio nocturno.',
              need: 'Reglas de correa obligatoria, recolección estricta y zonas delimitadas.'
            },
            {
              characterId: 'luna',
              emotion: 'reflexivo',
              feeling: 'Amor por los animales y necesidad de recreación',
              perspective: 'Desea que sus mascotas tengan un espacio seguro donde correr sin generar quejas.',
              need: 'Un parque canino delimitado (pipicán) con cercado y horarios acordados.'
            }
          ],
          reflectionPrompt: 'Cuando pasamos de la queja a la propuesta de infraestructura compartida, el conflicto se desvanece.'
        },
        station3_discover: {
          title: 'Pactos vecinales de triple impacto',
          guidance: 'Compara las tres vías de resolución:',
          alternatives: [
            {
              id: 'a11_pacto_parque_mixto',
              title: 'Crear un parque canino cercado con comisiones vecinales de limpieza y horarios de silencio',
              description: 'Se destina una zona no utilizada para el área canina, los dueños de mascotas se comprometen al mantenimiento y se fijan horarios de correa estricta en el resto del parque.',
              consequence: 'Se terminan los juicios, el parque florece y la comunidad celebra festivales conjuntos de convivencia.',
              educationalReflection: 'La solución espacial y normativa integradora resuelve el problema de fondo.',
              type: 'optima',
              icon: 'CheckCircle'
            },
            {
              id: 'a11_prohibicion_total',
              title: 'Prohibir terminantemente cualquier animal en todo el vecindario',
              description: 'Se vota la expulsión de mascotas.',
              consequence: 'Se generan amparos judiciales, división vecinal irreconciliable y desacato masivo.',
              educationalReflection: 'Las prohibiciones que no atienden la realidad social son inaplicables.',
              type: 'constructiva',
              icon: 'Ban'
            },
            {
              id: 'a11_anarquia_vecinal',
              title: 'Dejar que cada quien haga lo que quiera sin sanciones ni acuerdos',
              description: 'Se renuncia a toda regulación comunitaria.',
              consequence: 'Las áreas verdes se destruyen y las agresiones físicas aumentan.',
              educationalReflection: 'La anarquía premia al más incivilizado a costa del bienestar general.',
              type: 'exploratoria',
              icon: 'AlertOctagon'
            }
          ]
        },
        station4_choose: {
          title: 'Ciudadanía Restaurativa',
          closingReflection: 'Construir acuerdos duraderos es el arte más elevado de la vida en sociedad.'
        },
        station5_practice: {
          type: 'drag_order',
          title: 'El Ciclo del Acuerdo Restaurativo Formal',
          instruction: 'Ordena las 4 fases de redacción y seguimiento de un pacto comunitario:',
          items: [
            { id: 'ar1', text: '1. Diagnóstico participativo: Mapear necesidades reales de cada sector sin descalificaciones.', correctOrder: 1 },
            { id: 'ar2', text: '2. Mesa de co-diseño: Redactar compromisos recíprocos con plazos y responsables concretos.', correctOrder: 2 },
            { id: 'ar3', text: '3. Firma pública y difusión transparente en todos los canales de la comunidad.', correctOrder: 3 },
            { id: 'ar4', text: '4. Comité mixto de seguimiento para evaluar el cumplimiento y ajustar detalles cada 3 meses.', correctOrder: 4 }
          ],
          completionMessage: '¡Ciclo de mediación completado! Posees herramientas de nivel internacional para articular la paz cívica.',
          skillTakeaway: 'Un acuerdo con seguimiento continuo es la mayor garantía de armonía social.'
        }
      }
    }
  },

  // ==========================================
  // MISIÓN 12: Ayudar a la comunidad
  // ==========================================
  {
    id: 12,
    title: 'Ayudar a la Comunidad',
    subtitle: 'El gran festival de restauración: transformar nuestro entorno con generosidad activa',
    skillFocus: 'Servicio Comunitario, Solidaridad Cívica y Legado Colectivo',
    zoneId: 'plaza',
    primaryCharacters: ['samuel', 'sofia', 'luna', 'guia'],
    badge: {
      id: 'badge_comunidad',
      title: 'Restaurador de Mundos',
      skillName: 'Servicio Comunitario',
      description: 'Descubriste que la mayor felicidad radica en dejar tu comunidad mejor de lo que la encontraste.',
      icon: 'Sparkles',
      color: '#0d9488'
    },
    modes: {
      infantil: {
        station1_observe: {
          title: 'La Plaza Comunitaria necesita manos alegres',
          sceneDescription: 'En la Plaza Comunitaria, una tormenta de viento derribó ramas, ensució los senderos y despintó los banquitos de madera donde los abuelitos se sientan a tomar sol. Los niños miran la plaza triste y se preguntan quién vendrá a arreglarla.',
          dialogue: [
            { speaker: 'sofia', text: 'Miren la plaza... el quiosco está lleno de hojas secas y los columpios están torcidos. ¡Nadie puede jugar así!', emotion: 'preocupado' },
            { speaker: 'samuel', text: '¿Y por qué no esperamos a que venga un camión de limpieza municipal a hacer todo?', emotion: 'reflexivo' },
            { speaker: 'luna', text: '¡Porque esta plaza es nuestra! Si esperamos a otros se quedará rota semanas. ¡Nosotros podemos empezar hoy!', emotion: 'entusiasmado' },
            { speaker: 'guia', text: 'Hermosa lección: una comunidad no se construye esperando que otros hagan el trabajo, sino cuando cada vecino pone una pizca de amor y sus dos manitas para embellecer lo que es de todos.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Qué sientes cuando ves un espacio público limpio y cuidado por ti mismo?'
        },
        station2_understand: {
          title: 'La alegría del voluntariado infantil',
          introduction: 'Ayudar a tu barrio no es una tarea aburrida; es una fiesta de música, pintura y satisfacción compartida.',
          perspectives: [
            {
              characterId: 'sofia',
              emotion: 'entusiasmado',
              feeling: 'Espíritu de servicio y hospitalidad',
              perspective: 'Sabe que pintar los bancos alegrará a los adultos mayores de la cuadra.',
              need: 'Organizar botes de pintura con pinceles suaves y delantales para todos.'
            },
            {
              characterId: 'samuel',
              emotion: 'curioso',
              feeling: 'Entusiasmo por la fuerza y el movimiento',
              perspective: 'Quiere levantar las ramas caídas y armar compost para el huerto.',
              need: 'Coordinar con Nico una carretilla para llevar las hojas secas.'
            },
            {
              characterId: 'luna',
              emotion: 'feliz',
              feeling: 'Creatividad puesta al servicio del pueblo',
              perspective: 'Desea pintar un mural con flores y palabras de bienvenida en la pared del fondo.',
              need: 'Invitar a todos a poner su huellita de pintura en el árbol de la amistad.'
            }
          ],
          reflectionPrompt: 'Quien cuida su plaza aprende a cuidar el planeta entero.'
        },
        station3_discover: {
          title: 'Tres maneras de relacionarnos con nuestro vecindario',
          guidance: 'Descubre qué produce cada actitud ante el barrio:',
          alternatives: [
            {
              id: 'a12_festival_restauracion',
              title: 'Organizar "El Gran Día de la Restauración Comunitaria" con música y merienda',
              description: 'Invitan a vecinos de todas las edades: unos barren, otros pintan, otros traen limonada fresca y plantas para sembrar.',
              consequence: 'La plaza renace resplandeciente, los abuelitos sonríen emocionados y el barrio celebra unido hasta el atardecer.',
              educationalReflection: '¡Extraordinario! La solidaridad activa despierta el alma y la belleza de cualquier comunidad.',
              type: 'optima',
              icon: 'Sparkles'
            },
            {
              id: 'a12_pasar_de_largo',
              title: 'Pasar de largo y decir: "Ese no es mi problema, yo no ensucié"',
              description: 'Mirar hacia otro lado y quedarse en casa.',
              consequence: 'La plaza se deteriora más cada día, se rompe el juego y nadie tiene dónde pasear.',
              educationalReflection: 'La indiferencia deja que el mundo se caiga a pedazos.',
              type: 'exploratoria',
              icon: 'UserX'
            },
            {
              id: 'a12_ensuciar_mas',
              title: 'Tirar envoltorios de golosinas porque "ya está sucio de todas formas"',
              description: 'Añadir más basura al desorden.',
              consequence: 'Llegan plagas, el parque huele feo y se convierte en un lugar peligroso.',
              educationalReflection: 'El descuido alimenta más descuido; la limpieza inspira respeto.',
              type: 'constructiva',
              icon: 'Trash2'
            }
          ]
        },
        station4_choose: {
          title: 'El Brillo de JairRestaura',
          closingReflection: 'Cuando sirves a los demás sin esperar recompensas, tu luz interior ilumina el mundo entero. ¡Eres un auténtico Restaurador de Soluciones!'
        },
        station5_practice: {
          type: 'bridge_builder',
          title: 'El Mosaico del Festival Comunitario',
          instruction: 'Coloca en el quiosco de la plaza los 4 pilares de la acción comunitaria transformadora:',
          items: [
            { id: 'com1', text: 'Pilar 1: Observar qué necesita nuestro barrio con ojos de amor y empatía.' },
            { id: 'com2', text: 'Pilar 2: Conectar con vecinos y amigos sumando fuerzas y talentos diversos.' },
            { id: 'com3', text: 'Pilar 3: Pasar a la acción concreta: limpiar, pintar, sembrar y reparar con alegría.' },
            { id: 'com4', text: 'Pilar 4: Cuidar y proteger el espacio con acuerdos de corresponsabilidad permanente.' }
          ],
          completionMessage: '¡El quiosco brilla y el Festival ha sido un éxito rotundo! Has culminado tu formación en El Mundo de las Soluciones.',
          skillTakeaway: 'Servir a la comunidad es la forma más bella de trascender y sembrar esperanza.'
        }
      },
      juvenil: {
        station1_observe: {
          title: 'Liderazgo juvenil para la regeneración social y ambiental',
          sceneDescription: 'En la Plaza Comunitaria, un grupo de jóvenes descubre que el centro comunitario tiene su biblioteca barrial abandonada, con libros rotos, humedad y computadoras en desuso. Muchos adultos dicen con resignación que "a los jóvenes ya no les interesa leer", mientras los jóvenes sienten que la biblioteca está anticuada y no ofrece talleres reales de tecnología, arte o debate.',
          dialogue: [
            { speaker: 'luna', text: 'Dicen que no nos interesa la cultura, pero miren este espacio: oscuro, con goteras y cerrado todo el fin de semana.', emotion: 'reflexivo' },
            { speaker: 'samuel', text: 'Nosotros sabemos reparar computadoras, instalar software libre y pintar murales increíbles. ¿Por qué no transformamos esto en un Centro Creativo Comunitario?', emotion: 'entusiasmado' },
            { speaker: 'sofia', text: 'Podemos dar clases de computación básica a los adultos mayores y talleres de dibujo para los niños.', emotion: 'entusiasmado' },
            { speaker: 'guia', text: 'Ese es el verdadero poder de la juventud: no esperar permisos para hacer el bien, sino presentar propuestas constructivas que enamoren a la comunidad.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo puede la juventud liderar la revitalización de espacios públicos abandonados?'
        },
        station2_understand: {
          title: 'El paso de la queja pasiva a la acción cívica propositiva',
          introduction: 'Quejarse de lo que no funciona es fácil; diseñar una solución sostenible y poner las manos en la obra requiere madurez y liderazgo.',
          perspectives: [
            {
              characterId: 'samuel',
              emotion: 'entusiasmado',
              feeling: 'Energía de transformación técnica',
              perspective: 'Sabe cómo recuperar equipos informáticos y organizar la logística.',
              need: 'Canalizar su entusiasmo en un plan de acción por fases con metas semanales.'
            },
            {
              characterId: 'luna',
              emotion: 'reflexivo',
              feeling: 'Sensibilidad estética y pedagógica',
              perspective: 'Quiere que el espacio invite a la lectura, el pensamiento crítico y la calma.',
              need: 'Diseñar la identidad visual y la curaduría de libros y talleres.'
            },
            {
              characterId: 'sofia',
              emotion: 'feliz',
              feeling: 'Articulación comunitaria e intergeneracional',
              perspective: 'Sabe cómo conectar con las familias del barrio para que asistan y participen.',
              need: 'Crear la red de voluntarios barriales.'
            }
          ],
          reflectionPrompt: 'Un joven que transforma su barrio es una fuerza imparable de esperanza.'
        },
        station3_discover: {
          title: 'Modelos de intervención comunitaria',
          guidance: 'Analiza qué produce cada enfoque de participación ciudadana:',
          alternatives: [
            {
              id: 'a12_proyecto_centro_creativo',
              title: 'Presentar un proyecto formal al comité vecinal y liderar jornadas de voluntariado',
              description: 'Los jóvenes presentan un plano, limpian la biblioteca, reciclan computadoras, pintan un mural y lanzan el club de lectura intergeneracional.',
              consequence: 'El espacio se convierte en el lugar más concurrido y querido del barrio, ganando premios de innovación social juvenil.',
              educationalReflection: 'El liderazgo juvenil propositivo derriba prejuicios y regenera el tejido comunitario.',
              type: 'optima',
              icon: 'Award'
            },
            {
              id: 'a12_hacer_grafiti_destructivo',
              title: 'Grafitear con enojo las paredes culpando al gobierno',
              description: 'Vandalizar el espacio para manifestar su descontento.',
              consequence: 'El lugar queda clausurado por la policía y se refuerza el prejuicio contra los jóvenes.',
              educationalReflection: 'La destrucción nunca construye derechos; solo añade dolor y degradación.',
              type: 'exploratoria',
              icon: 'AlertOctagon'
            },
            {
              id: 'a12_apatia_redes',
              title: 'Hacer memes quejándose de la biblioteca y no hacer nada real',
              description: 'Burlarse en redes desde la comodidad del sofá.',
              consequence: 'El espacio termina privatizado y vendido a una empresa privada.',
              educationalReflection: 'El cinismo en redes es la forma más estéril de cobardía social.',
              type: 'constructiva',
              icon: 'ThumbsDown'
            }
          ]
        },
        station4_choose: {
          title: 'El Legado de la Nueva Generación',
          closingReflection: 'Quien tiene la capacidad de transformar su entorno local tiene en sus manos las semillas para construir un mundo justo y en paz.'
        },
        station5_practice: {
          type: 'emotion_thermometer',
          title: 'El Termómetro del Compromiso Cívico Juvenil',
          instruction: 'Clasifica las iniciativas según representen impacto transformador o activismo superficial:',
          items: [
            { id: 'civ1', text: '"Impartir talleres gratuitos de alfabetización digital y apoyo escolar semana a semana."', category: 'alta' },
            { id: 'civ2', text: '"Poner un hashtag de protesta en internet y no asistir a ninguna reunión comunitaria."', category: 'baja' },
            { id: 'civ3', text: '"Crear un huerto ecológico barrial con compostaje vecinal para abastecer comedores sociales."', category: 'alta' }
          ],
          targets: [
            { id: 'alta', label: 'Impacto Real, Sostenible y Comunitario' },
            { id: 'baja', label: 'Activismo Superficial o de Postureo' }
          ],
          completionMessage: '¡Graduado como Líder de Restauración Social! Tu compromiso es luz para tu generación.',
          skillTakeaway: 'El verdadero cambio empieza en tu propia cuadra con acciones que tocan vidas.'
        }
      },
      adulto: {
        station1_observe: {
          title: 'Ciudadanía activa, filantropía ética y sostenibilidad colectiva',
          sceneDescription: 'En la Plaza Comunitaria, un proyecto de inversión inmobiliaria pretende demoler el último parque histórico del barrio para construir un estacionamiento comercial privado. Los vecinos se encuentran desorganizados, divididos entre el desaliento ("no se puede luchar contra el dinero") y la hostilidad violenta.',
          dialogue: [
            { speaker: 'samuel', text: 'Esto ya está firmado en las oficinas centrales; no hay nada que hacer, los poderosos siempre ganan.', emotion: 'preocupado' },
            { speaker: 'luna', text: '¡No podemos rendirnos! Si nos organizamos legalmente, presentamos un proyecto de parque ecológico protegido y movilizamos a la comunidad, la ley nos respalda.', emotion: 'entusiasmado' },
            { speaker: 'guia', text: 'La democracia no es un espectáculo que se mira por televisión: es un ejercicio cotidiano de corresponsabilidad y defensa legítima de los bienes comunes.', emotion: 'calmado' }
          ],
          keyQuestion: '¿Cómo articular la defensa del interés público mediante la legalidad, la técnica y la movilización pacífica?'
        },
        station2_understand: {
          title: 'La protección de los bienes comunes y el legado intergeneracional',
          introduction: 'Defender los espacios verdes y la dignidad comunitaria es una obligación moral hacia nuestros hijos y nietos.',
          perspectives: [
            {
              characterId: 'luna',
              emotion: 'reflexivo',
              feeling: 'Compromiso ético y rigor técnico',
              perspective: 'Sabe que el arbolado urbano reduce la temperatura, purifica el aire y es el único pulmón de la zona.',
              need: 'Articular un expediente técnico ambiental con urbanistas y abogados de la comunidad.'
            },
            {
              characterId: 'samuel',
              emotion: 'preocupado',
              feeling: 'Cinismo derivado de frustraciones históricas',
              perspective: 'Ha visto proyectos comunitarios fracasar por falta de persistencia.',
              need: 'Ver una estrategia jurídica y ciudadana rigurosa que le devuelva la fe en la acción colectiva.'
            }
          ],
          reflectionPrompt: 'La apatía ciudadana es el cheque en blanco que permite el deterioro del bien común.'
        },
        station3_discover: {
          title: 'Vías de incidencia ciudadana pacífica',
          guidance: 'Evalúa estas tres estrategias de acción cívica:',
          alternatives: [
            {
              id: 'a12_accion_legal_propositiva',
              title: 'Articular recurso legal ambiental, propuesta técnica de parque botánico y cabildo abierto',
              description: 'Los vecinos presentan un amparo fundamentado en el derecho a un ambiente sano, recolectan firmas certificadas y presentan un modelo de parque autosustentable.',
              consequence: 'El tribunal declara el parque como Patrimonio Ecológico Comunitario y el municipio financia su remodelación.',
              educationalReflection: 'La conjunción de legalidad, rigor técnico y movilización pacífica es invencible.',
              type: 'optima',
              icon: 'Scale'
            },
            {
              id: 'a12_violencia_callejera',
              title: 'Quemar maquinaria y agredir a los trabajadores de la obra',
              description: 'Optan por la vía violenta y el vandalismo.',
              consequence: 'Llegan fuerzas de seguridad, hay detenidos, la opinión pública los rechaza y el parque se destruye igual.',
              educationalReflection: 'La violencia deslegitima las causas justas y criminaliza a las comunidades.',
              type: 'exploratoria',
              icon: 'Flame'
            },
            {
              id: 'a12_conformismo_resignado',
              title: 'Aceptar el estacionamiento y no decir nada',
              description: 'Se rinden sin ejercer sus derechos cívicos.',
              consequence: 'El barrio pierde su vegetación, sube la contaminación y la calidad de vida decae.',
              educationalReflection: 'El conformismo es la renuncia a la condición de ciudadano.',
              type: 'constructiva',
              icon: 'XCircle'
            }
          ]
        },
        station4_choose: {
          title: 'El Legado de JairRestaura',
          closingReflection: 'Aprender a vivir, comprender y construir juntos es el camino supremo de la paz. ¡Has completado todas las misiones de El Mundo de las Soluciones!'
        },
        station5_practice: {
          type: 'drag_order',
          title: 'Estrategia de Incidencia Cívica Ciudadana',
          instruction: 'Ordena los 4 pasos para proteger y transformar los bienes comunes en el Estado de Derecho:',
          items: [
            { id: 'ic1', text: '1. Diagnóstico jurídico y ambiental: Estudiar leyes, ordenanzas y normativas de protección.', correctOrder: 1 },
            { id: 'ic2', text: '2. Asamblea ciudadana informada: Socializar datos técnicos y consensuar la estrategia.', correctOrder: 2 },
            { id: 'ic3', text: '3. Acción institucional pacífica: Radicar recursos de amparo, peticiones formales y cabildos.', correctOrder: 3 },
            { id: 'ic4', text: '4. Co-gestión y custodia ciudadana permanente del espacio ganado para las futuras generaciones.', correctOrder: 4 }
          ],
          completionMessage: '¡Maestría Cívica y Ética culminada con honor! Eres un baluarte para tu comunidad y para el mundo.',
          skillTakeaway: 'Construir juntos con justicia y amor es el verdadero destino humano.'
        }
      }
    }
  }
];

export function getMissionById(id: number): Mission | undefined {
  return MISSIONS.find((m) => m.id === id);
}

export function getMissionsByZone(zoneId: string): Mission[] {
  return MISSIONS.filter((m) => m.zoneId === zoneId);
}
