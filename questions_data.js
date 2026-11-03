// Banco de preguntas equilibradas con soporte para Modo Express (4) y Modo Torneo (8)
window.QUESTIONS = [
  {
    id: 1,
    title: "1. Mentalidad de Combate",
    question: "Suena la campana y arranca la ronda. ¿Cuál es tu primer instinto natural?",
    subtitle: "Define tu aproximación psicológica fundamental al juego.",
    isExpress: true,
    options: [
      {
        id: "a",
        label: "¡A la carga sin frenos!",
        description: "Corro directo al rival para presionarlo, asfixiarlo y no dejarlo ni pestañear.",
        weights: { rushdown: 6, allrounder: 0, fgc: 2 }
      },
      {
        id: "b",
        label: "Mantengo mi distancia y analizo",
        description: "Lanzo proyectiles y obligo al rival a desesperarse mientras busca acercarse.",
        weights: { zoner: 6, tricky: 2 }
      },
      {
        id: "c",
        label: "Espaciado y control con mi arma",
        description: "Calculo el alcance exacto de mi espada o lanza para castigar cualquier error.",
        weights: { swordie: 6, allrounder: 1 }
      },
      {
        id: "d",
        label: "Paciencia... hasta soltar el bombazo",
        description: "Aguanto el daño necesario; solo requiero un descuido para destrozarlo de 3 golpes.",
        weights: { heavy: 6, fgc: 2 }
      }
    ]
  },
  {
    id: 2,
    title: "2. Sensación de Movilidad y Control",
    question: "¿Cómo te gusta sentir la velocidad y el movimiento en tus manos?",
    subtitle: "La agilidad determina tu ritmo y margen de error.",
    isExpress: true,
    options: [
      {
        id: "a",
        label: "Ultra veloz, ágil y con caída rápida",
        description: "Quiero volar por el escenario, saltar rápido y cambiar de dirección en milisegundos.",
        weights: { rushdown: 5, tricky: 2, heavy: -3 }
      },
      {
        id: "b",
        label: "Flotante o acrobático en el aire",
        description: "Múltiples saltos aéreos, flotación o planear para dominar el cielo.",
        weights: { tricky: 4, allrounder: 2, swordie: 1 }
      },
      {
        id: "c",
        label: "Firme, equilibrado y con pies en el suelo",
        description: "Control suave, sin descontrolarme; buena tracción para reaccionar limpio.",
        weights: { allrounder: 5, swordie: 2, fgc: 2 }
      },
      {
        id: "d",
        label: "Pesado y colosal como una muralla",
        description: "No me importa ser lento si resisto el daño y cada pisada hace temblar la arena.",
        weights: { heavy: 6, rushdown: -4 }
      }
    ]
  },
  {
    id: 3,
    title: "3. Tipo de Ataque Favorito",
    question: "¿Con qué herramientas te diviertes más al golpear visualmente?",
    subtitle: "El estilo visual y la sensación de impacto importan mucho.",
    isExpress: false,
    options: [
      {
        id: "a",
        label: "Espadas, katanas o armas blancas de gran filo",
        description: "Cortes limpios con ventaja de rango que superan los puños enemigos.",
        weights: { swordie: 6, allrounder: 0 }
      },
      {
        id: "b",
        label: "Puñetazos, patadas y llaves de lucha libre",
        description: "Sentir el impacto cuerpo a cuerpo directo, crujir huesos y derribar.",
        weights: { heavy: 3, rushdown: 3, fgc: 5 }
      },
      {
        id: "c",
        label: "Magia elemental, láseres, bombas y flechas",
        description: "Fuego cruzado, trampas a distancia y efectos mágicos luminosos.",
        weights: { zoner: 6, tricky: 3 }
      },
      {
        id: "d",
        label: "Artefactos raros (bloques, frutas, campanas, objetos)",
        description: "Mecánicas únicas que desconciertan por completo al rival.",
        weights: { tricky: 6, zoner: 2 }
      }
    ]
  },
  {
    id: 4,
    title: "4. Dificultad y Filosofía de Combos",
    question: "¿Cuánto esfuerzo técnico quieres dedicar a la memoria muscular de combos?",
    subtitle: "¿Prefieres ganar con fundamentos simples o entrenar secuencias complejas?",
    isExpress: true,
    options: [
      {
        id: "a",
        label: "Simple y directo: sin complicaciones",
        description: "Botones sencillos. Quiero ganar con buen posicionamiento sin memorizar 10 pasos.",
        weights: { allrounder: 3, heavy: 4, swordie: 2, difficultyPref: -3 }
      },
      {
        id: "b",
        label: "Combos intuitivos de 2 o 3 toques",
        description: "Conectar un agarre con aéreo (Throw -> Up-Air) de forma fluida y consistente.",
        weights: { swordie: 3, rushdown: 3, allrounder: 3, difficultyPref: 0 }
      },
      {
        id: "c",
        label: "Técnico / FGC: entradas de precisión y combos largos",
        description: "Me apasiona practicar cuartos de luna, autocancelaciones y combos 0-a-muerte.",
        weights: { fgc: 6, tricky: 3, rushdown: 2, difficultyPref: 3 }
      },
      {
        id: "d",
        label: "Estratégico: gestión de recursos y engaños",
        description: "Minar, craftear, gestionar límites, medidores o hechizos en pantalla.",
        weights: { tricky: 6, zoner: 2, difficultyPref: 2 }
      }
    ]
  },
  {
    id: 5,
    title: "5. La Forma Más Satisfactoria de Eliminar al Rival",
    question: "¿Cuál de estos momentos te hace gritar de emoción al noquear?",
    subtitle: "El remate define el personaje que de verdad vas a disfrutar jugar.",
    isExpress: true,
    options: [
      {
        id: "a",
        label: "Un meteorito o puñetazo colosal contra el abismo",
        description: "Un impacto atronador que lo estrelle hacia abajo o lo expulse al infinito de 1 golpe.",
        weights: { heavy: 5, swordie: 1, fgc: 2 }
      },
      {
        id: "b",
        label: "Una persecución aérea implacable (Edgeguard)",
        description: "Saltar fuera de la plataforma y meterle 3 patadas en el aire hasta que no regrese.",
        weights: { rushdown: 5, tricky: 3 }
      },
      {
        id: "c",
        label: "Un proyectil sniper o una trampa calculada",
        description: "Verlo intentando volver desesperadamente y recibir una bomba o disparo en la cara.",
        weights: { zoner: 6, tricky: 3 }
      },
      {
        id: "d",
        label: "Un contraataque perfecto o castigo a su escudo",
        description: "Esperar a que intente atacarme, adivinar su intención y destrozarlo con un counter.",
        weights: { swordie: 4, fgc: 3, allrounder: 2 }
      }
    ]
  },
  {
    id: 6,
    title: "6. Mecánicas de 'Comeback' y Modos Especiales",
    question: "¿Qué opinas sobre personajes que se transforman o ganan poder al recibir daño?",
    subtitle: "Mecánicas como Arsène, modo GO!, Aura, Límite o Ala de Sefirot.",
    isExpress: false,
    options: [
      {
        id: "a",
        label: "¡Me encantan las remontadas épicas!",
        description: "Estar en desventaja y de pronto desatar una furia que dé vuelta a la partida.",
        weights: { fgc: 5, tricky: 4, allrounder: 1 }
      },
      {
        id: "b",
        label: "Prefiero consistencia total del 0% al 150%",
        description: "Que mi personaje siempre responda de la misma forma sin depender de medidores.",
        weights: { swordie: 4, allrounder: 4, rushdown: 2 }
      },
      {
        id: "c",
        label: "Quiero inventar cosas raras (construir, crafteo, menús)",
        description: "Mecánicas que rompen el molde tradicional de los juegos de pelea.",
        weights: { tricky: 6, zoner: 2 }
      }
    ]
  },
  {
    id: 7,
    title: "7. Recuperación y Seguridad Fuera del Escenario",
    question: "Cuando te lanzan fuera del escenario y el abismo está debajo...",
    subtitle: "¿Cómo te gustaría afrontar los momentos más críticos?",
    isExpress: false,
    options: [
      {
        id: "a",
        label: "Volver volando con tranquilidad y seguridad",
        description: "Garfios, teletransportes o recuperaciones invulnerables que no puedan interceptar.",
        weights: { allrounder: 3, zoner: 3, swordie: 2, tricky: 2 }
      },
      {
        id: "b",
        label: "Aguantar tanto peso que casi nunca me sacan",
        description: "Aunque mi salto de vuelta sea modesto, mi peso colosal me mantiene con vida hasta el 150%.",
        weights: { heavy: 6, rushdown: -2 }
      },
      {
        id: "c",
        label: "Al filo de la navaja: todo a la ofensiva",
        description: "No me importa tener una recuperación riesgosa si a cambio mi ataque es devastador.",
        weights: { rushdown: 4, fgc: 4, swordie: 2 }
      }
    ]
  },
  {
    id: 8,
    title: "8. Situaciones de Borde (Ledge Trapping)",
    question: "Tienes al rival colgado del borde de la plataforma. ¿Cuál es tu plan?",
    subtitle: "El juego de borde separa a los novatos de los expertos.",
    isExpress: false,
    options: [
      {
        id: "a",
        label: "Cubrir sus opciones con armas de largo alcance",
        description: "Atacar con espada o proyectiles justo cuando intente subir a la arena.",
        weights: { swordie: 5, zoner: 4 }
      },
      {
        id: "b",
        label: "Colocar una trampa o proyectil esperando",
        description: "Dejar una bomba, hidrante, peonza o bloque para que choque solo.",
        weights: { tricky: 6, zoner: 3 }
      },
      {
        id: "c",
        label: "Saltar fuera del escenario y arriesgarme a rematarlo",
        description: "Bajar al vacío con un aéreo letal para que no vuelva jamás.",
        weights: { rushdown: 6, heavy: 2 }
      },
      {
        id: "d",
        label: "Cargar un ataque Smash esperando que ruede",
        description: "Anticipar su movimiento y volarlo de un solo impacto demoledor.",
        weights: { heavy: 6, fgc: 2, allrounder: 2 }
      }
    ]
  }
];
