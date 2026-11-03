// Banco de preguntas interactivas para encontrar el Main ideal
window.QUESTIONS = [
  {
    id: 1,
    title: "1. Mentalidad de Combate",
    question: "Suena la campana y arranca la ronda. ¿Cuál es tu primer instinto?",
    subtitle: "Define tu aproximación psicológica al juego.",
    options: [
      {
        id: "a",
        label: "¡A la carga sin frenos!",
        description: "Corro directo al rival para presionarlo y no dejarlo ni pestañear.",
        icon: "zap",
        weights: { rushdown: 4, allrounder: 1, fgc: 1 }
      },
      {
        id: "b",
        label: "Tomo distancia y analizo",
        description: "Lanzo proyectiles y obligo al rival a cometer errores mientras se acerca.",
        icon: "crosshair",
        weights: { zoner: 4, tricky: 2 }
      },
      {
        id: "c",
        label: "Mantengo mi espacio con precisión",
        description: "Calculo la distancia exacta de mi arma para castigar cualquier fallo.",
        icon: "shield",
        weights: { swordie: 4, allrounder: 2 }
      },
      {
        id: "d",
        label: "Paciencia... hasta soltar el bombazo",
        description: "Aguanto el daño que haga falta; solo necesito un descuido para destrozarlo.",
        icon: "flame",
        weights: { heavy: 4, fgc: 1 }
      }
    ]
  },
  {
    id: 2,
    title: "2. Velocidad y Movilidad",
    question: "¿Cómo te gusta que se sienta el control y movimiento de tu personaje?",
    subtitle: "La agilidad determina tu ritmo y margen de error.",
    options: [
      {
        id: "a",
        label: "Ultra veloz y escurridizo",
        description: "Quiero moverme como un rayo, saltar rápido y cambiar de dirección al instante.",
        icon: "wind",
        weights: { rushdown: 4, tricky: 1 }
      },
      {
        id: "b",
        label: "Equilibrado y predecible para mis manos",
        description: "Ni demasiado rápido que me pierda, ni una roca. Control suave y confiable.",
        icon: "scale",
        weights: { allrounder: 4, swordie: 2 }
      },
      {
        id: "c",
        label: "Pesado, firme y colosal",
        description: "No me importa ser lento si cada paso tiembla y resisto golpes como un castillo.",
        icon: "anchor",
        weights: { heavy: 4, fgc: 1 }
      },
      {
        id: "d",
        label: "Movimiento con trucos o herramientas",
        description: "Garfios, teletransportes, saltos con objetos o trampas en el camino.",
        icon: "sparkles",
        weights: { tricky: 4, zoner: 1 }
      }
    ]
  },
  {
    id: 3,
    title: "3. Tipo de Armamento Favorito",
    question: "¿Con qué tipo de ataques te sientes más cómodo visualmente y al tacto?",
    subtitle: "El estilo visual influye en tu diversión diaria.",
    options: [
      {
        id: "a",
        label: "Espadas, katanas o armas con buen filo",
        description: "Golpes limpios con gran alcance que mantienen a los oponentes a raya.",
        icon: "sword",
        weights: { swordie: 4, allrounder: 1 }
      },
      {
        id: "b",
        label: "Puñetazos, patadas y lucha libre",
        description: "Combate cuerpo a cuerpo puro, llaves devastadoras y sentir el impacto físico.",
        icon: "fist",
        weights: { heavy: 2, rushdown: 2, fgc: 3 }
      },
      {
        id: "c",
        label: "Láseres, bombas, magia y flechas",
        description: "Controlar el campo de batalla con fuego cruzado y artefactos.",
        icon: "wand",
        weights: { zoner: 4, tricky: 2 }
      },
      {
        id: "d",
        label: "Un poco de todo (arsenal mixto)",
        description: "Golpes directos fiables combinados con algún proyectil para molestar.",
        icon: "box",
        weights: { allrounder: 4 }
      }
    ]
  },
  {
    id: 4,
    title: "4. Curva de Dificultad y Combos",
    question: "¿Cuánto tiempo y memorización quieres dedicarle a practicar combos?",
    subtitle: "Seamos sinceros: ¿quieres jugar ya o entrenar horas en el laboratorio?",
    options: [
      {
        id: "a",
        label: "Sencillo y directo: quiero ganar ya",
        description: "Prefiero comandos intuitivos. No quiero tener que estudiar secuencias de 15 botones.",
        icon: "check-circle",
        weights: { allrounder: 3, heavy: 3, difficultyPref: -3 }
      },
      {
        id: "b",
        label: "Intermedio: combos cortos y consistentes",
        description: "Me gusta conectar 2 o 3 golpes seguidos (agarre -> aéreo) sin estresarme.",
        icon: "layers",
        weights: { swordie: 2, rushdown: 2, allrounder: 2, difficultyPref: 0 }
      },
      {
        id: "c",
        label: "Avanzado / FGC: combos técnicos demoledores",
        description: "Disfruto practicar inputs tipo Shoryuken, cuartos de luna y combos 0-a-muerte.",
        icon: "cpu",
        weights: { fgc: 4, tricky: 2, difficultyPref: 3 }
      },
      {
        id: "d",
        label: "Estratégico: prefiero 'engañar' con recursos",
        description: "Más que combos mecánicos, me gusta gestionar recursos (materiales, bombas, barras).",
        icon: "brain",
        weights: { tricky: 4, zoner: 2, difficultyPref: 2 }
      }
    ]
  },
  {
    id: 5,
    title: "5. Estilo de Remate (Cómo liquidas vidas)",
    question: "¿Qué sensación te da más satisfacción al eliminar a un rival?",
    subtitle: "El momento de la victoria define el personaje que recordarás con cariño.",
    options: [
      {
        id: "a",
        label: "Un meteorito o puñetazo colosal que lo estrelle",
        description: "Un solo impacto cargado que suene como un trueno y lo expulse al infinito.",
        icon: "flame",
        weights: { heavy: 4, swordie: 1 }
      },
      {
        id: "b",
        label: "Una ráfaga implacable en el aire",
        description: "Seguirlo fuera del escenario y meterle combos aéreos hasta que no pueda volver.",
        icon: "navigation",
        weights: { rushdown: 4, allrounder: 2 }
      },
      {
        id: "c",
        label: "Un disparo cargado o trampa calculada",
        description: "Verlo desesperado intentando subir y recibir un proyectil o bomba en la cara.",
        icon: "target",
        weights: { zoner: 4, tricky: 3 }
      },
      {
        id: "d",
        label: "Un contraataque perfecto o castigo limpio",
        description: "Esperar a que él intente matarme, adivinar su ataque y devolvérselo con creces.",
        icon: "shield-alert",
        weights: { swordie: 3, fgc: 3 }
      }
    ]
  },
  {
    id: 6,
    title: "6. Mecánicas Especiales y 'Gimmicks'",
    question: "¿Qué opinas sobre mecánicas únicas (barras de límite, modos furia, crafteo)?",
    subtitle: "Algunos personajes tienen subsistemas propios que cambian las reglas.",
    options: [
      {
        id: "a",
        label: "Sin mecánicas raras, prefiero lo tradicional",
        description: "Quiero que mi personaje funcione igual del 0% al 150% de daño sin sorpresas.",
        icon: "circle",
        weights: { allrounder: 4, swordie: 3, rushdown: 1 }
      },
      {
        id: "b",
        label: "Me encantan las mecánicas de 'remontada' (Comeback)",
        description: "Un modo furia, súper ataques que se activen cuando tengo poco porcentaje de vida.",
        icon: "award",
        weights: { fgc: 4, tricky: 3, heavy: 2 }
      },
      {
        id: "c",
        label: "Quiero inventar cosas raras (construir, trampas, minar)",
        description: "Me encanta romper las reglas habituales y obligar al rival a jugar a MI juego.",
        icon: "tool",
        weights: { tricky: 5, zoner: 2 }
      }
    ]
  },
  {
    id: 7,
    title: "7. Resistencia y Supervivencia",
    question: "Cuando cometes un error grave y te botan lejos de la arena...",
    subtitle: "¿Cómo te gustaría afrontar los momentos de peligro?",
    options: [
      {
        id: "a",
        label: "Quiero volver volando sin sudar",
        description: "Una recuperación generosa y segura con múltiples opciones de volver a la plataforma.",
        icon: "feather",
        weights: { allrounder: 3, zoner: 2, swordie: 2 }
      },
      {
        id: "b",
        label: "Resistir golpes y pesar una tonelada",
        description: "Aunque mi salto sea modesto, aguanto tanto porcentaje que casi nunca me sacan rápido.",
        icon: "shield-check",
        weights: { heavy: 4 }
      },
      {
        id: "c",
        label: "Vivo al filo de la navaja: todo o nada",
        description: "No me importa morir fácil si a cambio tengo la potencia y velocidad de un misil.",
        icon: "zap-off",
        weights: { rushdown: 3, fgc: 3 }
      }
    ]
  }
];
