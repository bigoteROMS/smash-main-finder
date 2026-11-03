// Roster Completo de Super Smash Bros Ultimate con Guías de Combate (86 Luchadores)
window.CHARACTERS = [
  {
    "id": "mario",
    "name": "Mario",
    "title": "El Ícono Versátil",
    "series": "Super Mario",
    "archetype": "All-Rounder",
    "archetypeLabel": "Equilibrado / Todoterreno",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/mario/main.png",
    "accentColor": "#ef4444",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 68,
      "power": 70,
      "range": 52,
      "combos": 82,
      "recovery": 75
    },
    "scores": {
      "allrounder": 10,
      "rushdown": 7,
      "swordie": 2,
      "zoner": 5,
      "heavy": 4,
      "tricky": 5,
      "fgc": 3,
      "difficultyPref": 1
    },
    "description": "El personaje por excelencia para aprender el juego. Tiene herramientas para toda situación: proyectil (Bola de Fuego), reflector (Capa) y combos de agarres intuitivos.",
    "pros": [
      "Equilibrio total, excelente en el juego aéreo",
      "La Capa refleja proyectiles y voltea ataques enemigos",
      "Agarre hacia abajo abre combos sencillos de daño"
    ],
    "cons": [
      "Rango cuerpo a cuerpo corto",
      "Le cuesta noquear en porcentajes bajos sin una lectura limpia"
    ],
    "beginnerTip": "Usa tu Bola de Fuego para acercarte de forma segura y busca el agarre hacia abajo (Down Throw).",
    "killMoves": [
      "Forward Air (Meteorito)",
      "Up Smash",
      "Back Air"
    ],
    "oosMove": "Up-B (Super Jump Punch) o Up Smash",
    "recoveryTip": "Recuperación balanceada: salta en el momento justo y dirígete al borde.",
    "strongAgainst": [
      "Estilo flexible adaptable contra cualquier rival"
    ],
    "vulnerableTo": [
      "Especialistas extremos que dominan un área específica"
    ]
  },
  {
    "id": "donkey_kong",
    "name": "Donkey Kong",
    "title": "El Rey de la Selva",
    "series": "Donkey Kong",
    "archetype": "Heavyweight",
    "archetypeLabel": "Grappler / Forzudo Implacable",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/donkey_kong/main.png",
    "accentColor": "#92400e",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 66,
      "power": 96,
      "range": 78,
      "combos": 55,
      "recovery": 55
    },
    "scores": {
      "heavy": 10,
      "rushdown": 4,
      "allrounder": 5,
      "swordie": 2,
      "zoner": 1,
      "tricky": 4,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "4 golpes meteorito distintos, gran velocidad de carrera para ser un gigante y el Cargo Throw para llevarte al oponente a donde quieras.",
    "pros": [
      "El Cargo Throw te da control absoluto sobre el destino del rival",
      "Brazos colosales que ganan intercambios",
      "Resiste daño masivo antes de ser expulsado"
    ],
    "cons": [
      "Blanco gigante para recibir combos eternos",
      "Recuperación vertical muy pobre ante intercepciones"
    ],
    "beginnerTip": "Lleva al rival en la espalda (Cargo Forward Throw) hacia el borde del escenario para ponerlo en jaque.",
    "killMoves": [
      "Giant Punch (B cargado)",
      "Cargo Throw hacia abismo",
      "Forward Air (Meteorito)"
    ],
    "oosMove": "Up-B giratorio terrestre",
    "recoveryTip": "Guarda tu salto doble y usa movimientos con súper armadura cerca del borde.",
    "strongAgainst": [
      "Luchadores ligeros que mueren a porcentajes tempranos"
    ],
    "vulnerableTo": [
      "Personajes ultra rápidos con combos largos y zoners"
    ]
  },
  {
    "id": "link",
    "name": "Link",
    "title": "El Héroe de Hyrule",
    "series": "The Legend of Zelda",
    "archetype": "Zoner",
    "archetypeLabel": "Zoner / Maestro de Herramientas",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/link/main.png",
    "accentColor": "#0284c7",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 54,
      "power": 86,
      "range": 90,
      "combos": 65,
      "recovery": 72
    },
    "scores": {
      "zoner": 9,
      "swordie": 7,
      "heavy": 5,
      "tricky": 7,
      "allrounder": 5,
      "rushdown": 2,
      "fgc": 2,
      "difficultyPref": 2
    },
    "description": "Combina la Espada Maestra con bumerán, flechas y la bomba remota. Excelente para controlar distancias y crear trampas explosivas.",
    "pros": [
      "Cobertura completa a corta, media y larga distancia",
      "Bomba remota que se detona cuando tú decidas",
      "Ataques Smash y aéreos con gran potencia de noqueo"
    ],
    "cons": [
      "Movilidad en tierra algo lenta",
      "Requiere coordinar la colocación de objetos para no golpearte a ti mismo"
    ],
    "beginnerTip": "Lanza el bumerán apuntando hacia arriba: al regresar puede descolocar al rival justo cuando intente atacarte.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "samus",
    "name": "Samus",
    "title": "La Cazadora Galáctica",
    "series": "Metroid",
    "archetype": "Zoner",
    "archetypeLabel": "Zoner / Asedio Espacial",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/samus/main.png",
    "accentColor": "#eab308",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 55,
      "power": 84,
      "range": 96,
      "combos": 60,
      "recovery": 85
    },
    "scores": {
      "zoner": 10,
      "heavy": 6,
      "allrounder": 5,
      "swordie": 3,
      "rushdown": 2,
      "tricky": 5,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "La reina de los proyectiles pesados. Su disparo cargado genera un terror psicológico instantáneo y sus bombas controlan el escenario.",
    "pros": [
      "Disparo de energía devastador a plena carga",
      "Excelente peso que le permite aguantar mucho daño",
      "Bombas en el aire que alteran su caída"
    ],
    "cons": [
      "Juego cuerpo a cuerpo más rígido",
      "Su agarre con rayo es lento de castigar si fallas"
    ],
    "beginnerTip": "Carga tu disparo siempre que el rival esté lejos; tener la esfera cargada te da ventaja psicológica total.",
    "killMoves": [
      "Charge Shot completo",
      "Forward Air en borde",
      "Back Air"
    ],
    "oosMove": "Up-B (Screw Attack con invulnerabilidad)",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "dark_samus",
    "name": "Samus Oscura",
    "title": "La Amenaza del Phazon",
    "series": "Metroid",
    "archetype": "Zoner",
    "archetypeLabel": "Zoner / Flotabilidad y Phazon",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/dark_samus/main.png",
    "accentColor": "#3b82f6",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 55,
      "power": 84,
      "range": 96,
      "combos": 60,
      "recovery": 85
    },
    "scores": {
      "zoner": 10,
      "heavy": 6,
      "allrounder": 5,
      "swordie": 3,
      "rushdown": 2,
      "tricky": 5,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "Versión eco de Samus con animaciones más fluidas y flotantes. Comparte su tremenda artillería con partículas de Phazon oscuro.",
    "pros": [
      "Mismo disparo demoledor y control de escenario",
      "Animaciones de salto y esquiva muy suaves",
      "Excelente durabilidad en combate"
    ],
    "cons": [
      "Agarre largo y castigable si no aciertas",
      "Velocidad de movimiento en tierra moderada"
    ],
    "beginnerTip": "Lanza misiles teledirigidos para forzar al oponente a saltar directo a tu disparo cargado.",
    "killMoves": [
      "Charge Shot completo",
      "Forward Air en borde",
      "Back Air"
    ],
    "oosMove": "Up-B (Screw Attack con invulnerabilidad)",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "yoshi",
    "name": "Yoshi",
    "title": "El Dinosaurio Saltador",
    "series": "Yoshi",
    "archetype": "All-Rounder",
    "archetypeLabel": "Acrobático / Armadura Aérea",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/yoshi/main.png",
    "accentColor": "#22c55e",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 78,
      "power": 80,
      "range": 58,
      "combos": 85,
      "recovery": 90
    },
    "scores": {
      "allrounder": 8,
      "rushdown": 7,
      "heavy": 5,
      "tricky": 6,
      "swordie": 1,
      "zoner": 4,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "Su segundo salto tiene súper armadura que absorbe golpes fuertes. Pone huevos explosivos y encierra rivales para combos gratis.",
    "pros": [
      "Superarmadura en su salto doble que resiste ataques",
      "Excelente movilidad aérea (la más rápida del juego)",
      "El escudo de huevo no se encoge al recibir daño"
    ],
    "cons": [
      "No tiene recuperación con Up-B tradicional",
      "Agarre algo lento"
    ],
    "beginnerTip": "Aprovecha su Neutral Air (Nair) para salir de los combos enemigos en pleno vuelo.",
    "killMoves": [
      "Back Air",
      "Up Smash fuera de escudo",
      "Forward Smash"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Recuperación balanceada: salta en el momento justo y dirígete al borde.",
    "strongAgainst": [
      "Estilo flexible adaptable contra cualquier rival"
    ],
    "vulnerableTo": [
      "Especialistas extremos que dominan un área específica"
    ]
  },
  {
    "id": "kirby",
    "name": "Kirby",
    "title": "La Bola Rosa Voraz",
    "series": "Kirby",
    "archetype": "All-Rounder",
    "archetypeLabel": "Copia / Multi-Saltos Aéreos",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/kirby/main.png",
    "accentColor": "#f472b6",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 50,
      "power": 72,
      "range": 48,
      "combos": 80,
      "recovery": 88
    },
    "scores": {
      "allrounder": 8,
      "tricky": 7,
      "rushdown": 5,
      "swordie": 2,
      "zoner": 3,
      "heavy": 2,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "5 saltos en el aire, combos de patadas fáciles y la habilidad de absorber al rival para robarle su movimiento especial.",
    "pros": [
      "Casi imposible de caerse por falta de saltos",
      "Roba las mejores habilidades del oponente",
      "Up-Tilt y Forward-Air comboean con enorme facilidad"
    ],
    "cons": [
      "Muy ligero: vuela con facilidad ante ataques fuertes",
      "Velocidad en tierra bastante baja"
    ],
    "beginnerTip": "Inhala al enemigo y cópialo; o escúpelo fuera del escenario para arruinarle el regreso.",
    "killMoves": [
      "Back Air",
      "Up Smash fuera de escudo",
      "Forward Smash"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Recuperación balanceada: salta en el momento justo y dirígete al borde.",
    "strongAgainst": [
      "Estilo flexible adaptable contra cualquier rival"
    ],
    "vulnerableTo": [
      "Especialistas extremos que dominan un área específica"
    ]
  },
  {
    "id": "fox",
    "name": "Fox McCloud",
    "title": "El Líder de Star Fox",
    "series": "Star Fox",
    "archetype": "Rushdown",
    "archetypeLabel": "Rushdown / Velocidad Pura",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/fox/main.png",
    "accentColor": "#f59e0b",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 97,
      "power": 75,
      "range": 48,
      "combos": 94,
      "recovery": 65
    },
    "scores": {
      "rushdown": 10,
      "allrounder": 6,
      "swordie": 1,
      "zoner": 3,
      "heavy": 1,
      "tricky": 5,
      "fgc": 6,
      "difficultyPref": 2
    },
    "description": "Velocidad relámpago, caída rápida y presión imparable. Ideal para jugadores agresivos con reflejos agudos.",
    "pros": [
      "Velocidad de carrera asombrosa que descoloca rivales",
      "Blaster que acumula daño gratis a distancia",
      "El Reflector devuelve proyectiles al instante"
    ],
    "cons": [
      "Muy liviano, un descuido te manda fuera de pantalla",
      "Recuperación lineal fácil de interceptar"
    ],
    "beginnerTip": "Conecta Dash Attack seguido de Up-Air para castigar aterrizajes.",
    "killMoves": [
      "Dash Attack -> Up-Air",
      "Forward Smash",
      "Back Air fuera de plataforma"
    ],
    "oosMove": "Neutral Air o Up-Smash directo",
    "recoveryTip": "Varía entre recuperarte alto o directo al borde para no ser predecible.",
    "strongAgainst": [
      "Zoners que necesitan tiempo y espacio para colocar proyectiles"
    ],
    "vulnerableTo": [
      "Espadachines con muros de golpes desarticulados"
    ]
  },
  {
    "id": "pikachu",
    "name": "Pikachu",
    "title": "El Ratón Eléctrico",
    "series": "Pokémon",
    "archetype": "Rushdown",
    "archetypeLabel": "Presión / Recuperación Infinita",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/pikachu/main.png",
    "accentColor": "#eab308",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 92,
      "power": 74,
      "range": 55,
      "combos": 96,
      "recovery": 95
    },
    "scores": {
      "rushdown": 10,
      "tricky": 8,
      "allrounder": 7,
      "zoner": 5,
      "swordie": 1,
      "heavy": 1,
      "fgc": 4,
      "difficultyPref": 3
    },
    "description": "Considerado uno de los mejores personajes del juego. Pequeño, rapidísimo, proyectil eléctrico que baja por las paredes y recuperación Quick Attack indetenible.",
    "pros": [
      "Caja de impacto diminuta difícil de golpear",
      "Quick Attack le permite viajar por todo el escenario",
      "Combos infinitos con Forward-Air y Back-Air"
    ],
    "cons": [
      "Ligero y técnico: exige precisión con los ángulos de Quick Attack",
      "Requiere buena ejecución para noquear"
    ],
    "beginnerTip": "Usa Thunder Jolt (proyectil eléctrico) mientras corres hacia el rival para atraparlo en su escudo.",
    "killMoves": [
      "Dash Attack -> Up-Air",
      "Forward Smash",
      "Back Air fuera de plataforma"
    ],
    "oosMove": "Neutral Air o Up-Smash directo",
    "recoveryTip": "Varía entre recuperarte alto o directo al borde para no ser predecible.",
    "strongAgainst": [
      "Zoners que necesitan tiempo y espacio para colocar proyectiles"
    ],
    "vulnerableTo": [
      "Espadachines con muros de golpes desarticulados"
    ]
  },
  {
    "id": "luigi",
    "name": "Luigi",
    "title": "El Fontanero de los Combos 0%",
    "series": "Super Mario",
    "archetype": "Grappler",
    "archetypeLabel": "Grappler / Combos Letales",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/luigi/main.png",
    "accentColor": "#16a34a",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 58,
      "power": 85,
      "range": 52,
      "combos": 98,
      "recovery": 62
    },
    "scores": {
      "heavy": 7,
      "allrounder": 6,
      "rushdown": 6,
      "tricky": 7,
      "swordie": 1,
      "zoner": 3,
      "fgc": 5,
      "difficultyPref": 2
    },
    "description": "Famoso por su infame combo '0 to Death' con agarre. Posee el misil verde con probabilidad de estallido y un uppercut incendiario.",
    "pros": [
      "Su agarre con la aspiradora Poltergust tiene alcance y combos mortales",
      "Up-B 'Super Jump Punch' mata en porcentajes medios si contacta dulce",
      "Gran presión en el cuerpo a cuerpo"
    ],
    "cons": [
      "Tracción resbaladiza y movilidad aérea lenta",
      "Recuperación vulnerable si le quitan el salto"
    ],
    "beginnerTip": "Aprende el agarre hacia abajo: a porcentajes bajos puedes encadenar Down Throw -> Down Air -> Nair -> Up-B.",
    "killMoves": [
      "Forward Smash cargado",
      "Side-B (Comando de Agarre)",
      "Down Air (Meteorito)"
    ],
    "oosMove": "Up-B con súper armadura o Neutral Air",
    "recoveryTip": "Guarda tu salto doble y usa movimientos con súper armadura cerca del borde.",
    "strongAgainst": [
      "Luchadores ligeros que mueren a porcentajes tempranos"
    ],
    "vulnerableTo": [
      "Personajes ultra rápidos con combos largos y zoners"
    ]
  },
  {
    "id": "ness",
    "name": "Ness",
    "title": "El Chico Psíquico",
    "series": "EarthBound",
    "archetype": "Tricky",
    "archetypeLabel": "Zoner / Psíquico Disruptivo",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/ness/main.png",
    "accentColor": "#e11d48",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 60,
      "power": 87,
      "range": 82,
      "combos": 84,
      "recovery": 60
    },
    "scores": {
      "tricky": 8,
      "zoner": 7,
      "allrounder": 6,
      "rushdown": 5,
      "heavy": 4,
      "swordie": 2,
      "fgc": 3,
      "difficultyPref": 2
    },
    "description": "Famoso por atrapar con llamas (PK Fire), bate de béisbol con reflector y el Back Throw más potente de todo el juego.",
    "pros": [
      "PK Fire paraliza al rival y te regala tiempo para atacar",
      "Back Throw elimina oponentes a partir del 100%",
      "Psi Magnet absorbe proyectiles de energía para curarse"
    ],
    "cons": [
      "La recuperación con PK Thunder requiere puntería a ti mismo",
      "Rango corto sin magia"
    ],
    "beginnerTip": "Si conectas un PK Fire, corre y agarra al oponente hacia atrás si estás cerca del abismo.",
    "killMoves": [
      "Back Throw (mata a partir de 100%)",
      "PK Flash",
      "Bate de béisbol (F-Smash)"
    ],
    "oosMove": "Neutral Air o Down-B (absorción)",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "captain_falcon",
    "name": "Captain Falcon",
    "title": "El Piloto del F-Zero",
    "series": "F-Zero",
    "archetype": "Rushdown",
    "archetypeLabel": "Rushdown / Espectacularidad y Potencia",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/captain_falcon/main.png",
    "accentColor": "#6366f1",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 95,
      "power": 88,
      "range": 58,
      "combos": 86,
      "recovery": 62
    },
    "scores": {
      "rushdown": 9,
      "heavy": 5,
      "allrounder": 5,
      "swordie": 2,
      "zoner": 1,
      "tricky": 4,
      "fgc": 4,
      "difficultyPref": 2
    },
    "description": "Adrenalina pura, carreras a toda velocidad y la icónica Rodilla de la Justicia. Cada golpe conectado se siente glorioso.",
    "pros": [
      "Segunda velocidad en tierra del juego",
      "Forward-Air con sweetspot liquida en porcentajes bajísimos",
      "Dominio asombroso de persecuciones aéreas"
    ],
    "cons": [
      "Sin proyectiles defensivos",
      "Up-B lineal fácil de castigar"
    ],
    "beginnerTip": "Usa Down Throw seguido de Neutral Air (Nair) para combos consistentes.",
    "killMoves": [
      "Knee of Justice (Fair con sweetspot)",
      "Falcon Punch",
      "Up Smash"
    ],
    "oosMove": "Up-B (Falcon Dive)",
    "recoveryTip": "Varía entre recuperarte alto o directo al borde para no ser predecible.",
    "strongAgainst": [
      "Zoners que necesitan tiempo y espacio para colocar proyectiles"
    ],
    "vulnerableTo": [
      "Espadachines con muros de golpes desarticulados"
    ]
  },
  {
    "id": "jigglypuff",
    "name": "Jigglypuff",
    "title": "El Globo Cantante",
    "series": "Pokémon",
    "archetype": "Tricky",
    "archetypeLabel": "Juego Aéreo / El Golpe Rest",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/jigglypuff/main.png",
    "accentColor": "#f472b6",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 42,
      "power": 88,
      "range": 45,
      "combos": 82,
      "recovery": 98
    },
    "scores": {
      "tricky": 9,
      "rushdown": 5,
      "allrounder": 4,
      "swordie": 1,
      "zoner": 2,
      "heavy": 1,
      "fgc": 2,
      "difficultyPref": 2
    },
    "description": "La reina del aire: flota como pluma con 5 saltos. Puede dormir rivales con Sing y eliminarlos de un golpe en el centro con Rest (Descanso).",
    "pros": [
      "Capacidad de empujar al rival al abismo con Forward Air infinitos (Wall of Pain)",
      "Rest es uno de los ataques más demoledores del juego",
      "Control aéreo milimétrico"
    ],
    "cons": [
      "El personaje más ligero del juego: muere si le rompen el escudo al instante",
      "Cuerpo a cuerpo en tierra muy débil"
    ],
    "beginnerTip": "Salta persiguiendo al rival fuera del escenario con Forward-Air hasta que no pueda regresar a la arena.",
    "killMoves": [
      "Trampa explosiva / Objeto especial",
      "Ataque Smash potenciado",
      "Down Smash en borde"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "peach",
    "name": "Peach",
    "title": "La Princesa de Champiñón",
    "series": "Super Mario",
    "archetype": "Tricky",
    "archetypeLabel": "Flotación / Combos Técnicos",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/peach/main.png",
    "accentColor": "#ec4899",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 65,
      "power": 82,
      "range": 60,
      "combos": 96,
      "recovery": 88
    },
    "scores": {
      "tricky": 10,
      "rushdown": 7,
      "allrounder": 6,
      "zoner": 5,
      "swordie": 2,
      "heavy": 2,
      "fgc": 6,
      "difficultyPref": 3
    },
    "description": "Puede flotar a cualquier altura del suelo para golpear con ataques aéreos a ras de piso. Arranca nabos con efectos aleatorios devastadores.",
    "pros": [
      "Mecánica de flotación exclusiva que domina el neutral",
      "Los nabos (especialmente el Stitch-face) causan daño brutal",
      "Combos de gran daño si dominas la flotación baja"
    ],
    "cons": [
      "Requiere práctica exhaustiva de dedos para flotar al ras",
      "Velocidad de caminata estándar"
    ],
    "beginnerTip": "Mantén abajo al saltar para flotar a milímetros del piso y golpear con Fair sin despeinarte.",
    "killMoves": [
      "Trampa explosiva / Objeto especial",
      "Ataque Smash potenciado",
      "Down Smash en borde"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "daisy",
    "name": "Daisy",
    "title": "La Princesa Enérgica",
    "series": "Super Mario",
    "archetype": "Tricky",
    "archetypeLabel": "Flotación / Presión Floral",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/daisy/main.png",
    "accentColor": "#f97316",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 65,
      "power": 82,
      "range": 60,
      "combos": 96,
      "recovery": 88
    },
    "scores": {
      "tricky": 10,
      "rushdown": 7,
      "allrounder": 6,
      "zoner": 5,
      "swordie": 2,
      "heavy": 2,
      "fgc": 6,
      "difficultyPref": 3
    },
    "description": "Luchadora eco de Peach con la misma capacidad de flotación y nabos, pero con personalidad y animaciones florales llenas de energía.",
    "pros": [
      "Flotación a cualquier altura para atacar seguro",
      "Juego de presión en bordes excelente",
      "Gran recuperación"
    ],
    "cons": [
      "Dificultad técnica alta para sacarle el 100%",
      "Ligera ante golpes Smash"
    ],
    "beginnerTip": "Arranca nabos siempre que el oponente vuele lejos para mantener la presión.",
    "killMoves": [
      "Trampa explosiva / Objeto especial",
      "Ataque Smash potenciado",
      "Down Smash en borde"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "bowser",
    "name": "Bowser",
    "title": "El Rey de los Koopas",
    "series": "Super Mario",
    "archetype": "Heavyweight",
    "archetypeLabel": "Tanque Pesado / Demoledor",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/bowser/main.png",
    "accentColor": "#f97316",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 62,
      "power": 98,
      "range": 72,
      "combos": 45,
      "recovery": 60
    },
    "scores": {
      "heavy": 10,
      "allrounder": 6,
      "rushdown": 4,
      "swordie": 2,
      "zoner": 2,
      "tricky": 3,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "El personaje más pesado de Smash y sorprendentemente rápido. Mata en 3 golpes y resiste daño por encima del 150%.",
    "pros": [
      "Tough Guy: no se inmuta con golpes débiles",
      "El placaje volador (Side-B) ignora escudos",
      "Fuego continuo que quema porcentajes rápido"
    ],
    "cons": [
      "Enorme tamaño: objetivo fácil para combos largos",
      "Sufre ante personajes que acampan de lejos"
    ],
    "beginnerTip": "Usa Side-B cuando tu oponente se esconda detrás de su escudo; ¡no se puede bloquear!",
    "killMoves": [
      "Flying Slam (Side-B)",
      "Forward Smash brutal",
      "Bowser Bomb (Down-B)"
    ],
    "oosMove": "Up-B giratorio (Whirling Fortress) en el suelo",
    "recoveryTip": "Guarda tu salto doble y usa movimientos con súper armadura cerca del borde.",
    "strongAgainst": [
      "Luchadores ligeros que mueren a porcentajes tempranos"
    ],
    "vulnerableTo": [
      "Personajes ultra rápidos con combos largos y zoners"
    ]
  },
  {
    "id": "ice_climbers",
    "name": "Ice Climbers",
    "title": "Popo y Nana",
    "series": "Ice Climber",
    "archetype": "Tricky",
    "archetypeLabel": "Dúo / Presión Coordinada",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/ice_climbers/main.png",
    "accentColor": "#38bdf8",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 64,
      "power": 85,
      "range": 54,
      "combos": 94,
      "recovery": 62
    },
    "scores": {
      "tricky": 10,
      "allrounder": 5,
      "heavy": 4,
      "rushdown": 5,
      "swordie": 2,
      "zoner": 4,
      "fgc": 5,
      "difficultyPref": 3
    },
    "description": "Controlas a dos personajes al mismo tiempo. Cuando están juntos, su potencia y capacidad de combo se duplica.",
    "pros": [
      "Doble golpe en casi todos los movimientos",
      "Técnicas de desincronización (desync) para combos letales",
      "Martillo giratorio con excelente recuperación"
    ],
    "cons": [
      "Si Nana es derrotada, Popo queda muy débil y sin recuperación",
      "Física de hielo resbaladiza"
    ],
    "beginnerTip": "Mantén a Nana a salvo: su presencia te da el doble de opciones ofensivas.",
    "killMoves": [
      "Trampa explosiva / Objeto especial",
      "Ataque Smash potenciado",
      "Down Smash en borde"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "sheik",
    "name": "Sheik",
    "title": "La Sombra Sheikah",
    "series": "The Legend of Zelda",
    "archetype": "Rushdown",
    "archetypeLabel": "Rushdown / Velocidad y Agujas",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/sheik/main.png",
    "accentColor": "#a855f7",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 98,
      "power": 55,
      "range": 52,
      "combos": 98,
      "recovery": 80
    },
    "scores": {
      "rushdown": 10,
      "tricky": 7,
      "allrounder": 6,
      "swordie": 2,
      "zoner": 4,
      "heavy": 1,
      "fgc": 6,
      "difficultyPref": 3
    },
    "description": "Una de las luchadoras más rápidas del juego. Sus cadenas de combos son casi infinitas y su movilidad aérea es impecable.",
    "pros": [
      "Velocidad de fotogramas y fluidez insuperables",
      "Agujas rápidas para interrumpir al enemigo",
      "Recuperación con desaparición invulnerable"
    ],
    "cons": [
      "Muy poco poder de noqueo: debe buscar remates específicos en porcentajes altos",
      "Extremadamente ligera"
    ],
    "beginnerTip": "Usa Forward-Tilt para comenzar combos rápidos en el aire.",
    "killMoves": [
      "Dash Attack -> Up-Air",
      "Forward Smash",
      "Back Air fuera de plataforma"
    ],
    "oosMove": "Neutral Air o Up-Smash directo",
    "recoveryTip": "Varía entre recuperarte alto o directo al borde para no ser predecible.",
    "strongAgainst": [
      "Zoners que necesitan tiempo y espacio para colocar proyectiles"
    ],
    "vulnerableTo": [
      "Espadachines con muros de golpes desarticulados"
    ]
  },
  {
    "id": "zelda",
    "name": "Zelda",
    "title": "La Sabia de Hyrule",
    "series": "The Legend of Zelda",
    "archetype": "Zoner",
    "archetypeLabel": "Zoner / Magia y Armadura Din",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/zelda/main.png",
    "accentColor": "#ec4899",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 45,
      "power": 92,
      "range": 90,
      "combos": 60,
      "recovery": 86
    },
    "scores": {
      "zoner": 9,
      "tricky": 8,
      "heavy": 4,
      "allrounder": 5,
      "swordie": 2,
      "rushdown": 1,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "Magia pura. Invoca un Caballero Fantasma como escudo y ariete, teletransporte con impacto fulminante (Farore's Wind) y patadas relámpago.",
    "pros": [
      "El Caballero Fantasma crea una muralla impenetrable",
      "Nayru's Love refleja proyectiles e invulnera",
      "Patadas aéreas con potencia de matar al instante"
    ],
    "cons": [
      "Movimiento muy lento en tierra",
      "Cuerpo frágil ante asedios agresivos"
    ],
    "beginnerTip": "Carga el Fantasma (Down-B) desde lejos para controlar el paso del oponente.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "dr_mario",
    "name": "Dr. Mario",
    "title": "El Médico Contundente",
    "series": "Super Mario",
    "archetype": "All-Rounder",
    "archetypeLabel": "Brawler / Fuerza Pesada",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/dr_mario/main.png",
    "accentColor": "#f87171",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 52,
      "power": 88,
      "range": 50,
      "combos": 72,
      "recovery": 45
    },
    "scores": {
      "allrounder": 7,
      "heavy": 7,
      "rushdown": 4,
      "swordie": 1,
      "zoner": 4,
      "tricky": 3,
      "fgc": 3,
      "difficultyPref": 1
    },
    "description": "Mario con bata y bisturí: más lento, pero sus píldoras botan alto y sus puños pegan con una contundencia brutal.",
    "pros": [
      "Golpes Smash mucho más letales que Mario",
      "El tornado (Down-B) golpea fuerte y ayuda a levantarse",
      "Píldoras con trayectoria incómoda para el rival"
    ],
    "cons": [
      "Recuperación vertical pésima",
      "Velocidad de carrera lenta"
    ],
    "beginnerTip": "Aprovecha el Up-B fuera de escudo: sale en fotograma 3 y liquida rivales en el borde.",
    "killMoves": [
      "Back Air",
      "Up Smash fuera de escudo",
      "Forward Smash"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Recuperación balanceada: salta en el momento justo y dirígete al borde.",
    "strongAgainst": [
      "Estilo flexible adaptable contra cualquier rival"
    ],
    "vulnerableTo": [
      "Especialistas extremos que dominan un área específica"
    ]
  },
  {
    "id": "pichu",
    "name": "Pichu",
    "title": "El Bebé Chispeante",
    "series": "Pokémon",
    "archetype": "Rushdown",
    "archetypeLabel": "Glass Cannon / Velocidad Minúscula",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/pichu/main.png",
    "accentColor": "#fde047",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 94,
      "power": 82,
      "range": 48,
      "combos": 92,
      "recovery": 90
    },
    "scores": {
      "rushdown": 9,
      "tricky": 8,
      "allrounder": 6,
      "zoner": 4,
      "swordie": 1,
      "heavy": 1,
      "fgc": 3,
      "difficultyPref": 2
    },
    "description": "Más pequeño, rápido y potente que Pikachu, pero sus propios ataques eléctricos le hacen daño a sí mismo.",
    "pros": [
      "Tamaño ultra compacto muy difícil de golpear",
      "Potencia de impacto superior a Pikachu",
      "Gran juego de recuperación"
    ],
    "cons": [
      "El personaje más fácil de noquear si recibe un golpe fuerte",
      "Se autolesiona al atacar"
    ],
    "beginnerTip": "Usa ataques sin electricidad como Forward-Tilt y agarres para no acumularte daño innecesario.",
    "killMoves": [
      "Dash Attack -> Up-Air",
      "Forward Smash",
      "Back Air fuera de plataforma"
    ],
    "oosMove": "Neutral Air o Up-Smash directo",
    "recoveryTip": "Varía entre recuperarte alto o directo al borde para no ser predecible.",
    "strongAgainst": [
      "Zoners que necesitan tiempo y espacio para colocar proyectiles"
    ],
    "vulnerableTo": [
      "Espadachines con muros de golpes desarticulados"
    ]
  },
  {
    "id": "falco",
    "name": "Falco Lombardi",
    "title": "El As Aéreo",
    "series": "Star Fox",
    "archetype": "All-Rounder",
    "archetypeLabel": "Juego Aéreo / Láseres y Reflector",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/falco/main.png",
    "accentColor": "#3b82f6",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 75,
      "power": 80,
      "range": 65,
      "combos": 92,
      "recovery": 70
    },
    "scores": {
      "allrounder": 8,
      "rushdown": 7,
      "swordie": 2,
      "zoner": 6,
      "heavy": 2,
      "tricky": 5,
      "fgc": 4,
      "difficultyPref": 2
    },
    "description": "El salto más alto de todo el juego. Su Down-Tilt levanta rivales al cielo para conectar combos aéreos espectaculares.",
    "pros": [
      "Salto descomunal que domina las alturas",
      "Láser que aturde al rival en tierra",
      "Reflector lanzado hacia adelante como proyectil"
    ],
    "cons": [
      "Velocidad de carrera en tierra moderada",
      "Recuperación vulnerable si le leen el Side-B"
    ],
    "beginnerTip": "Salta alto y usa Down-Air (Dair) para clavar al rival hacia el abismo con un meteorito.",
    "killMoves": [
      "Back Air",
      "Up Smash fuera de escudo",
      "Forward Smash"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Recuperación balanceada: salta en el momento justo y dirígete al borde.",
    "strongAgainst": [
      "Estilo flexible adaptable contra cualquier rival"
    ],
    "vulnerableTo": [
      "Especialistas extremos que dominan un área específica"
    ]
  },
  {
    "id": "marth",
    "name": "Marth",
    "title": "El Rey Heroico",
    "series": "Fire Emblem",
    "archetype": "Swordie",
    "archetypeLabel": "Espadachín / Precisión en la Punta (Tipper)",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/marth/main.png",
    "accentColor": "#38bdf8",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 76,
      "power": 84,
      "range": 85,
      "combos": 70,
      "recovery": 80
    },
    "scores": {
      "swordie": 10,
      "allrounder": 7,
      "rushdown": 5,
      "zoner": 2,
      "heavy": 3,
      "tricky": 3,
      "fgc": 3,
      "difficultyPref": 2
    },
    "description": "El espadachín clásico. La punta exacta de su espada (Tipper) hace el doble de daño y expulsa rivales con furia inigualable.",
    "pros": [
      "Golpear con la punta elimina rivales a porcentajes absurdamente bajos",
      "Movilidad aérea fluida con Forward Air",
      "Contraataque y escudo rompedor (Shield Breaker)"
    ],
    "cons": [
      "Si golpeas con el mango de la espada, el daño es muy flojo",
      "Exige espaciado milimétrico"
    ],
    "beginnerTip": "Mantén la distancia calculada para que solo la punta de tu espada toque al rival.",
    "killMoves": [
      "Shield Breaker",
      "Forward Smash",
      "Dolphin Slash (Up-B)"
    ],
    "oosMove": "Up-B (Dolphin Slash, sale en fotograma 1)",
    "recoveryTip": "Aprovecha el alcance de tu espada para cortar a rivales que intenten interceptarte.",
    "strongAgainst": [
      "Luchadores de poco rango y brawlers cuerpo a cuerpo"
    ],
    "vulnerableTo": [
      "Zoners de proyectiles pesados a larga distancia"
    ]
  },
  {
    "id": "lucina",
    "name": "Lucina",
    "title": "La Espadachina del Destino",
    "series": "Fire Emblem",
    "archetype": "Swordie",
    "archetypeLabel": "Espadachín / Consistencia Pura",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/lucina/main.png",
    "accentColor": "#3b82f6",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 76,
      "power": 78,
      "range": 85,
      "combos": 70,
      "recovery": 80
    },
    "scores": {
      "swordie": 10,
      "allrounder": 8,
      "rushdown": 6,
      "zoner": 2,
      "heavy": 3,
      "tricky": 2,
      "fgc": 3,
      "difficultyPref": 1
    },
    "description": "Todo el filo de su espada hace el mismo daño sólido de punta a mango. La mejor opción para aprender los fundamentos del juego neutral.",
    "pros": [
      "Daño 100% consistente sin importar dónde conecte la espada",
      "Excelente juego aéreo seguro y gran contraataque",
      "Dolphin Slash sale invulnerable en fotograma 1 fuera de escudo"
    ],
    "cons": [
      "Carece del factor 'sorpresa' del tipper de Marth",
      "Sin proyectiles"
    ],
    "beginnerTip": "Usa Forward Air retrocediendo para golpear sin arriesgarte jamás.",
    "killMoves": [
      "Shield Breaker",
      "Forward Smash",
      "Dolphin Slash (Up-B)"
    ],
    "oosMove": "Up-B (Dolphin Slash, sale en fotograma 1)",
    "recoveryTip": "Aprovecha el alcance de tu espada para cortar a rivales que intenten interceptarte.",
    "strongAgainst": [
      "Luchadores de poco rango y brawlers cuerpo a cuerpo"
    ],
    "vulnerableTo": [
      "Zoners de proyectiles pesados a larga distancia"
    ]
  },
  {
    "id": "young_link",
    "name": "Young Link",
    "title": "El Joven del Tiempo",
    "series": "The Legend of Zelda",
    "archetype": "Zoner",
    "archetypeLabel": "Zoner Ágil / Fuego y Flechas",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/young_link/main.png",
    "accentColor": "#4ade80",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 72,
      "power": 70,
      "range": 88,
      "combos": 88,
      "recovery": 76
    },
    "scores": {
      "zoner": 9,
      "rushdown": 6,
      "swordie": 6,
      "allrounder": 6,
      "tricky": 6,
      "heavy": 2,
      "fgc": 3,
      "difficultyPref": 2
    },
    "description": "Mucho más rápido que el Link adulto. Sus flechas de fuego aturden para abrir combos de espada inmediatos.",
    "pros": [
      "Flechas de fuego con gran cadencia de disparo",
      "Excelente velocidad de movimiento y juego de combos",
      "Espada ágil para pelear cuerpo a cuerpo"
    ],
    "cons": [
      "Le cuesta cerrar las muertes (Kill power directo bajo)",
      "Ligero"
    ],
    "beginnerTip": "Dispara flechas de fuego para frenar al enemigo y corre tras él con un Dash Attack.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "ganondorf",
    "name": "Ganondorf",
    "title": "El Rey del Mal",
    "series": "The Legend of Zelda",
    "archetype": "Heavyweight",
    "archetypeLabel": "Poder Absoluto / Lecturas Devastadoras",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/ganondorf/main.png",
    "accentColor": "#7e22ce",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 40,
      "power": 100,
      "range": 75,
      "combos": 40,
      "recovery": 42
    },
    "scores": {
      "heavy": 10,
      "swordie": 4,
      "allrounder": 4,
      "rushdown": 2,
      "zoner": 1,
      "tricky": 2,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "La encarnación de la fuerza bruta. Su espada Smash y puñetazo del hechicero eliminan rivales al 40% con una lectura acertada.",
    "pros": [
      "El mayor poder de noqueo de golpes individuales del juego",
      "Flame Choke (Side-B) pasa escudos y abre juego mental en el suelo",
      "Pánico psicológico para el rival"
    ],
    "cons": [
      "La peor movilidad y una de las peores recuperaciones del juego",
      "Fácil de torear con proyectiles"
    ],
    "beginnerTip": "Usa Forward Smash cargado para castigar cuando el oponente ruede predeciblemente hacia ti.",
    "killMoves": [
      "Forward Smash cargado",
      "Side-B (Comando de Agarre)",
      "Down Air (Meteorito)"
    ],
    "oosMove": "Up-B con súper armadura o Neutral Air",
    "recoveryTip": "Guarda tu salto doble y usa movimientos con súper armadura cerca del borde.",
    "strongAgainst": [
      "Luchadores ligeros que mueren a porcentajes tempranos"
    ],
    "vulnerableTo": [
      "Personajes ultra rápidos con combos largos y zoners"
    ]
  },
  {
    "id": "mewtwo",
    "name": "Mewtwo",
    "title": "El Clon Legendario",
    "series": "Pokémon",
    "archetype": "Zoner",
    "archetypeLabel": "Glass Cannon / Esfera Sombra y Confusión",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/mewtwo/main.png",
    "accentColor": "#a855f7",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 84,
      "power": 88,
      "range": 85,
      "combos": 75,
      "recovery": 92
    },
    "scores": {
      "zoner": 8,
      "tricky": 8,
      "rushdown": 6,
      "allrounder": 5,
      "heavy": 3,
      "swordie": 2,
      "fgc": 3,
      "difficultyPref": 2
    },
    "description": "Cola gigantesca con gran alcance, bola sombra cargable y confusión para reflejar ataques o voltear enemigos en el aire.",
    "pros": [
      "Movilidad aérea flotante y teletransporte versátil",
      "Shadow Ball a plena carga mata muy temprano",
      "Disable (Down-B) aturde al rival si te mira de frente"
    ],
    "cons": [
      "Su cola grande es parte de su hitbox y recibe golpes",
      "Sorprendentemente ligero a pesar de su tamaño"
    ],
    "beginnerTip": "Carga Shadow Ball para forzar al rival a saltar directo a los golpes de tu cola.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "roy",
    "name": "Roy",
    "title": "El León Joven",
    "series": "Fire Emblem",
    "archetype": "Rushdown",
    "archetypeLabel": "Espadachín Agresivo / Fuego en la Empuñadura",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/roy/main.png",
    "accentColor": "#ef4444",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 88,
      "power": 92,
      "range": 70,
      "combos": 85,
      "recovery": 65
    },
    "scores": {
      "rushdown": 10,
      "swordie": 8,
      "allrounder": 7,
      "heavy": 5,
      "zoner": 1,
      "tricky": 3,
      "fgc": 4,
      "difficultyPref": 1
    },
    "description": "A diferencia de Marth, la espada de Roy es letal en la empuñadura (cuerpo a cuerpo). Velocidad frenética y cortes incendiarios.",
    "pros": [
      "Velocidad de caída y carrera excelentes",
      "Daño colosal cuando se pega pecho a pecho con el rival",
      "Jab conecta directo en Forward Smash o Back Air"
    ],
    "cons": [
      "Débil si lo mantienen al extremo del alcance",
      "Recuperación con Up-B vulnerable a interrupciones"
    ],
    "beginnerTip": "Acércate sin miedo: Jab (golpe rápido neutro) conecta directamente con Back Air para matar.",
    "killMoves": [
      "Dash Attack -> Up-Air",
      "Forward Smash",
      "Back Air fuera de plataforma"
    ],
    "oosMove": "Neutral Air o Up-Smash directo",
    "recoveryTip": "Varía entre recuperarte alto o directo al borde para no ser predecible.",
    "strongAgainst": [
      "Zoners que necesitan tiempo y espacio para colocar proyectiles"
    ],
    "vulnerableTo": [
      "Espadachines con muros de golpes desarticulados"
    ]
  },
  {
    "id": "chrom",
    "name": "Chrom",
    "title": "El Príncipe Exaltado",
    "series": "Fire Emblem",
    "archetype": "Swordie",
    "archetypeLabel": "Espadachín Rápido / Hoja Equilibrada",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/chrom/main.png",
    "accentColor": "#2563eb",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 88,
      "power": 90,
      "range": 75,
      "combos": 82,
      "recovery": 50
    },
    "scores": {
      "swordie": 9,
      "rushdown": 9,
      "allrounder": 7,
      "heavy": 4,
      "zoner": 1,
      "tricky": 2,
      "fgc": 4,
      "difficultyPref": 1
    },
    "description": "La misma velocidad y movimientos que Roy, pero con daño uniforme en toda la longitud de su espada.",
    "pros": [
      "Excelente fluidez y alcance constante",
      "Presión en tierra con Jab y ataques Smash rapidísimos",
      "Facilidad para noquear en porcentajes medios"
    ],
    "cons": [
      "Su recuperación vertical con Soaring Slash es muy fácil de interceptar si cae lejos"
    ],
    "beginnerTip": "Mantén el ritmo ofensivo en la plataforma para no tener que salir del escenario a recuperarte.",
    "killMoves": [
      "Forward Smash (Corte Potente)",
      "Back Air (Golpe de Espalda)",
      "Up-Air en Techo"
    ],
    "oosMove": "Up-B o Shield Grab (Agarre tras bloqueo)",
    "recoveryTip": "Aprovecha el alcance de tu espada para cortar a rivales que intenten interceptarte.",
    "strongAgainst": [
      "Luchadores de poco rango y brawlers cuerpo a cuerpo"
    ],
    "vulnerableTo": [
      "Zoners de proyectiles pesados a larga distancia"
    ]
  },
  {
    "id": "mr_game_and_watch",
    "name": "Mr. Game & Watch",
    "title": "La Silueta Bidimensional",
    "series": "Game & Watch",
    "archetype": "Tricky",
    "archetypeLabel": "Impredecible / Fuera de Escudo Supremo",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/mr_game_and_watch/main.png",
    "accentColor": "#0f172a",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 70,
      "power": 85,
      "range": 62,
      "combos": 88,
      "recovery": 96
    },
    "scores": {
      "tricky": 10,
      "allrounder": 7,
      "zoner": 5,
      "rushdown": 6,
      "heavy": 3,
      "swordie": 2,
      "fgc": 3,
      "difficultyPref": 1
    },
    "description": "El rey de las opciones fuera de escudo con su Up-B (paracaídas) invulnerable. Su martillo Judge puede sacar un 9 y noquear al 0%.",
    "pros": [
      "Up-B sale en fotograma 3, es invulnerable y te permite atacar después",
      "Bacon con sartén para acampar en el borde",
      "El cubo absorbe tres proyectiles para devolver un tsunami de daño"
    ],
    "cons": [
      "Extremadamente ligero: vuela fácil con un golpe fuerte",
      "Animaciones 2D que a veces confunden tu propia distancia"
    ],
    "beginnerTip": "Si el oponente golpea tu escudo, presiona Up-B inmediatamente para castigarlo sin riesgo.",
    "killMoves": [
      "Trampa explosiva / Objeto especial",
      "Ataque Smash potenciado",
      "Down Smash en borde"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "meta_knight",
    "name": "Meta Knight",
    "title": "El Caballero Enmascarado",
    "series": "Kirby",
    "archetype": "Rushdown",
    "archetypeLabel": "Aéreo / Escaleras de Combos al Techo",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/meta_knight/main.png",
    "accentColor": "#1e3a8a",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 85,
      "power": 70,
      "range": 52,
      "combos": 94,
      "recovery": 98
    },
    "scores": {
      "rushdown": 9,
      "swordie": 7,
      "tricky": 8,
      "allrounder": 6,
      "heavy": 1,
      "zoner": 1,
      "fgc": 5,
      "difficultyPref": 3
    },
    "description": "4 movimientos especiales que sirven de recuperación y múltiples saltos. Famoso por sus 'escaleras de Up-Air' que llevan al rival hasta el techo.",
    "pros": [
      "Prácticamente imposible de tirar fuera del escenario",
      "Ataques con espada con prioridad rápida",
      "Potencial de matar arriba con Up-Air continuos"
    ],
    "cons": [
      "Rango de espada muy corto",
      "Poco daño por golpe individual"
    ],
    "beginnerTip": "Atrapa al rival con Dash Attack y encadena Up-Airs saltando hasta el límite superior de la pantalla.",
    "killMoves": [
      "Dash Attack -> Up-Air",
      "Forward Smash",
      "Back Air fuera de plataforma"
    ],
    "oosMove": "Neutral Air o Up-Smash directo",
    "recoveryTip": "Varía entre recuperarte alto o directo al borde para no ser predecible.",
    "strongAgainst": [
      "Zoners que necesitan tiempo y espacio para colocar proyectiles"
    ],
    "vulnerableTo": [
      "Espadachines con muros de golpes desarticulados"
    ]
  },
  {
    "id": "pit",
    "name": "Pit",
    "title": "El Capitán de Palutena",
    "series": "Kid Icarus",
    "archetype": "All-Rounder",
    "archetypeLabel": "Versátil / Flechas Guiadas y Escudos",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/pit/main.png",
    "accentColor": "#f8fafc",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 68,
      "power": 74,
      "range": 68,
      "combos": 76,
      "recovery": 92
    },
    "scores": {
      "allrounder": 10,
      "swordie": 6,
      "zoner": 6,
      "rushdown": 5,
      "heavy": 3,
      "tricky": 4,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "El guerrero balanceado por excelencia. Múltiples saltos, flechas que puedes doblar en el aire, reflector de escudos y gran vuelo.",
    "pros": [
      "Flechas sagradas que puedes dirigir con la palanca hacia donde quieras",
      "Excelente recuperación con alas de Ícaro",
      "Órbita de escudos que bloquea ataques por ambos lados"
    ],
    "cons": [
      "No destaca en potencia extrema en ningún área particular",
      "Kill power dependiente de Forward Smash"
    ],
    "beginnerTip": "Dispara flechas al rival cuando intente recuperarse hacia el borde para molestarlo.",
    "killMoves": [
      "Back Air",
      "Up Smash fuera de escudo",
      "Forward Smash"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Recuperación balanceada: salta en el momento justo y dirígete al borde.",
    "strongAgainst": [
      "Estilo flexible adaptable contra cualquier rival"
    ],
    "vulnerableTo": [
      "Especialistas extremos que dominan un área específica"
    ]
  },
  {
    "id": "dark_pit",
    "name": "Pit Sombrío",
    "title": "El Reflejo Rebelde",
    "series": "Kid Icarus",
    "archetype": "All-Rounder",
    "archetypeLabel": "Versátil / Flechas de Poder y Brazo Electro",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/dark_pit/main.png",
    "accentColor": "#18181b",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 68,
      "power": 76,
      "range": 68,
      "combos": 76,
      "recovery": 92
    },
    "scores": {
      "allrounder": 10,
      "swordie": 6,
      "zoner": 6,
      "rushdown": 5,
      "heavy": 4,
      "tricky": 4,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "Luchador eco de Pit. Sus flechas son más rectas y pesadas, y su Brazo Electrocataclísmico despide a los rivales hacia los lados.",
    "pros": [
      "Flechas con mayor poder de expulsión directa",
      "Brazo electro que mata lateralmente a porcentajes clave",
      "Sólido juego fundamental"
    ],
    "cons": [
      "Menos control de curva con sus flechas que Pit"
    ],
    "beginnerTip": "Usa su Side-B (Brazo Electro) para castigar rodadas predecibles cerca de la línea lateral.",
    "killMoves": [
      "Back Air",
      "Up Smash fuera de escudo",
      "Forward Smash"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Recuperación balanceada: salta en el momento justo y dirígete al borde.",
    "strongAgainst": [
      "Estilo flexible adaptable contra cualquier rival"
    ],
    "vulnerableTo": [
      "Especialistas extremos que dominan un área específica"
    ]
  },
  {
    "id": "zero_suit_samus",
    "name": "Zero Suit Samus",
    "title": "La Agente Ágil",
    "series": "Metroid",
    "archetype": "Rushdown",
    "archetypeLabel": "Movilidad Aérea / Parálisis y Flip Kick",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/zero_suit_samus/main.png",
    "accentColor": "#0ea5e9",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 94,
      "power": 76,
      "range": 65,
      "combos": 90,
      "recovery": 88
    },
    "scores": {
      "rushdown": 9,
      "tricky": 8,
      "allrounder": 7,
      "zoner": 4,
      "swordie": 1,
      "heavy": 1,
      "fgc": 4,
      "difficultyPref": 3
    },
    "description": "Pistola paralizadora, látigo de plasma y la voltereta 'Flip Kick' que entierra rivales o clava meteoritos imparables.",
    "pros": [
      "Una de las mejores movilidades del juego",
      "Flip Kick le permite escapar de cualquier esquina y enterrar oponentes",
      "Paralizador que regala un golpe Smash gratis"
    ],
    "cons": [
      "Sus ataques Smash son arriesgados si no contactan",
      "Requiere mucha precisión aérea"
    ],
    "beginnerTip": "Aturde con la pistola paralizadora (Neutral-B) y conecta un Forward Smash a placer.",
    "killMoves": [
      "Dash Attack -> Up-Air",
      "Forward Smash",
      "Back Air fuera de plataforma"
    ],
    "oosMove": "Neutral Air o Up-Smash directo",
    "recoveryTip": "Varía entre recuperarte alto o directo al borde para no ser predecible.",
    "strongAgainst": [
      "Zoners que necesitan tiempo y espacio para colocar proyectiles"
    ],
    "vulnerableTo": [
      "Espadachines con muros de golpes desarticulados"
    ]
  },
  {
    "id": "wario",
    "name": "Wario",
    "title": "El Avaro de los Gases",
    "series": "WarioWare",
    "archetype": "Tricky",
    "archetypeLabel": "Juego Aéreo / La Moto y el Waft",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/wario/main.png",
    "accentColor": "#eab308",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 70,
      "power": 88,
      "range": 50,
      "combos": 92,
      "recovery": 85
    },
    "scores": {
      "tricky": 10,
      "heavy": 6,
      "allrounder": 6,
      "rushdown": 6,
      "swordie": 1,
      "zoner": 2,
      "fgc": 4,
      "difficultyPref": 2
    },
    "description": "Excelente aceleración aérea. Conduce su moto para estorbar y acumula gases en su estómago para liberar el temido 'Wario Waft'.",
    "pros": [
      "El Waft completamente cargado elimina al 40-50%",
      "La moto sirve de proyectil, muro y trampolín",
      "Aéreos rápidos con combos seguros"
    ],
    "cons": [
      "Rango cuerpo a cuerpo corto",
      "Depende de la recarga del Waft para liquidar consistentemente"
    ],
    "beginnerTip": "Come objetos o partes de tu moto con la mordida (Neutral-B) para recargar el gas más rápido.",
    "killMoves": [
      "Trampa explosiva / Objeto especial",
      "Ataque Smash potenciado",
      "Down Smash en borde"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "snake",
    "name": "Snake",
    "title": "El Soldado Legendario",
    "series": "Metal Gear Solid",
    "archetype": "Zoner",
    "archetypeLabel": "Táctico / Granadas, C4 y Minas",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/snake/main.png",
    "accentColor": "#334155",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 50,
      "power": 94,
      "range": 98,
      "combos": 70,
      "recovery": 86
    },
    "scores": {
      "zoner": 10,
      "tricky": 9,
      "heavy": 7,
      "allrounder": 5,
      "swordie": 1,
      "rushdown": 2,
      "fgc": 3,
      "difficultyPref": 3
    },
    "description": "El campo de batalla es su zona de guerra. Tira granadas en fotograma 1, coloca C4 invisible en plataformas y lanza proyectiles Nikita teledirigidos.",
    "pros": [
      "Control de escenario total con explosivos",
      "Excelente peso y aguante de daño",
      "El proyectil Nikita persigue al rival fuera del escenario"
    ],
    "cons": [
      "Fácil de comboear por su peso y tamaño",
      "Requiere memorizar dónde dejaste el C4"
    ],
    "beginnerTip": "Saca granadas para interrumpir los combos del rival: si te golpean, la granada explota sobre ambos y te salva.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "ike",
    "name": "Ike",
    "title": "El Líder de los Mercenarios",
    "series": "Fire Emblem",
    "archetype": "Swordie",
    "archetypeLabel": "Espadachín Pesado / Neutral Air Gigante",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/ike/main.png",
    "accentColor": "#dc2626",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 58,
      "power": 96,
      "range": 88,
      "combos": 62,
      "recovery": 60
    },
    "scores": {
      "swordie": 10,
      "heavy": 8,
      "allrounder": 6,
      "rushdown": 3,
      "zoner": 1,
      "tricky": 2,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "Empuña la espada sagrada Ragnell a dos manos. Su Neutral Air cubre un semicírculo gigante que abre combos en Up-Air demoledores.",
    "pros": [
      "Alcance y daño devastadores en cada tajo",
      "Nair es uno de los mejores ataques de apertura del juego",
      "Aether (Up-B) con súper armadura para volver"
    ],
    "cons": [
      "Velocidad de ataque más pausada",
      "Recuperación vulnerable si le esperan en el borde"
    ],
    "beginnerTip": "Usa Neutral Air (salto + golpe neutral) para golpear al caer y conecta inmediatamente con Up-Air.",
    "killMoves": [
      "Forward Smash (Corte Potente)",
      "Back Air (Golpe de Espalda)",
      "Up-Air en Techo"
    ],
    "oosMove": "Up-B o Shield Grab (Agarre tras bloqueo)",
    "recoveryTip": "Aprovecha el alcance de tu espada para cortar a rivales que intenten interceptarte.",
    "strongAgainst": [
      "Luchadores de poco rango y brawlers cuerpo a cuerpo"
    ],
    "vulnerableTo": [
      "Zoners de proyectiles pesados a larga distancia"
    ]
  },
  {
    "id": "pokemon_trainer",
    "name": "Entrenador Pokémon",
    "title": "El Trío de Kanto",
    "series": "Pokémon",
    "archetype": "All-Rounder",
    "archetypeLabel": "Tres en Uno / Squirtle, Ivysaur y Charizard",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/pokemon_trainer/main.png",
    "accentColor": "#ef4444",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 75,
      "power": 90,
      "range": 75,
      "combos": 88,
      "recovery": 80
    },
    "scores": {
      "allrounder": 10,
      "rushdown": 8,
      "heavy": 8,
      "zoner": 7,
      "tricky": 7,
      "swordie": 3,
      "fgc": 4,
      "difficultyPref": 2
    },
    "description": "3 luchadores completos en 1: Squirtle para combos a 0%, Ivysaur para controlar con proyectiles y látigos, y Charizard para resistir y matar.",
    "pros": [
      "Cubre todas las situaciones del combate cambiando de Pokémon con Down-B",
      "Ivysaur tiene dos meteoritos aéreos colosales (Dair y Uair)",
      "Charizard aguanta mucho y remata con Flare Blitz"
    ],
    "cons": [
      "Debes aprender las propiedades de 3 personajes diferentes",
      "Cambiar de Pokémon en mal momento te deja vulnerable"
    ],
    "beginnerTip": "Empieza con Squirtle para acumular daño rápido, pasa a Ivysaur en medio y remata con Charizard.",
    "killMoves": [
      "Back Air",
      "Up Smash fuera de escudo",
      "Forward Smash"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Recuperación balanceada: salta en el momento justo y dirígete al borde.",
    "strongAgainst": [
      "Estilo flexible adaptable contra cualquier rival"
    ],
    "vulnerableTo": [
      "Especialistas extremos que dominan un área específica"
    ]
  },
  {
    "id": "diddy_kong",
    "name": "Diddy Kong",
    "title": "El Compañero Selvático",
    "series": "Donkey Kong",
    "archetype": "Rushdown",
    "archetypeLabel": "Plátanos / Presión y Agilidad",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/diddy_kong/main.png",
    "accentColor": "#b45309",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 88,
      "power": 75,
      "range": 55,
      "combos": 90,
      "recovery": 75
    },
    "scores": {
      "rushdown": 9,
      "tricky": 9,
      "allrounder": 7,
      "zoner": 4,
      "swordie": 1,
      "heavy": 2,
      "fgc": 3,
      "difficultyPref": 2
    },
    "description": "Lanza una cáscara de plátano que hace resbalar a cualquiera en el piso, dejándolo indefenso para un ataque Smash garantizado.",
    "pros": [
      "El plátano es uno de los mejores objetos de control del juego",
      "Velocidad y agarre aéreo Monkey Flip excelentes",
      "Ataques Smash rápidos"
    ],
    "cons": [
      "Los barriles cohete de Up-B pueden explotar si te golpean",
      "Kill power dependiente de la cáscara de plátano"
    ],
    "beginnerTip": "Saca tu plátano con Down-B, tíralo al rival para que resbale y conecta un Forward Smash libre.",
    "killMoves": [
      "Dash Attack -> Up-Air",
      "Forward Smash",
      "Back Air fuera de plataforma"
    ],
    "oosMove": "Neutral Air o Up-Smash directo",
    "recoveryTip": "Varía entre recuperarte alto o directo al borde para no ser predecible.",
    "strongAgainst": [
      "Zoners que necesitan tiempo y espacio para colocar proyectiles"
    ],
    "vulnerableTo": [
      "Espadachines con muros de golpes desarticulados"
    ]
  },
  {
    "id": "lucas",
    "name": "Lucas",
    "title": "El Niño de Tazmily",
    "series": "EarthBound",
    "archetype": "Tricky",
    "archetypeLabel": "Zoner / Hielo, Cuerda de Serpiente y PK Freeze",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/lucas/main.png",
    "accentColor": "#facc15",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 62,
      "power": 86,
      "range": 80,
      "combos": 82,
      "recovery": 70
    },
    "scores": {
      "tricky": 8,
      "zoner": 8,
      "allrounder": 6,
      "rushdown": 4,
      "heavy": 3,
      "swordie": 2,
      "fgc": 3,
      "difficultyPref": 2
    },
    "description": "Versión más técnica de Ness. Su PK Freeze congela al oponente enviándolo lejos en diagonal y su cuerda de serpiente permite recuperarse a salvo.",
    "pros": [
      "PK Freeze liquida rivales en porcentajes medios fuera de pantalla",
      "Down-Smash golpea tres veces con potencia brutal",
      "Agarre con la serpiente seguro desde lejos"
    ],
    "cons": [
      "Recuperación con PK Thunder puede ser absorbida o bloqueada"
    ],
    "beginnerTip": "Lanza PK Freeze cuando el oponente esté volando fuera de la arena para congelarlo sin remedio.",
    "killMoves": [
      "Trampa explosiva / Objeto especial",
      "Ataque Smash potenciado",
      "Down Smash en borde"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "sonic",
    "name": "Sonic",
    "title": "El Destello Azul",
    "series": "Sonic The Hedgehog",
    "archetype": "Rushdown",
    "archetypeLabel": "Velocidad Máxima / Spin Dash y Campers Killer",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/sonic/main.png",
    "accentColor": "#2563eb",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 100,
      "power": 70,
      "range": 45,
      "combos": 88,
      "recovery": 88
    },
    "scores": {
      "rushdown": 10,
      "tricky": 7,
      "allrounder": 6,
      "zoner": 2,
      "heavy": 1,
      "swordie": 1,
      "fgc": 3,
      "difficultyPref": 2
    },
    "description": "El personaje más veloz de todo el juego por un margen colosal. Sus giros Spin Dash le permiten recorrer la arena en milésimas de segundo.",
    "pros": [
      "Velocidad inalcanzable que dicta el ritmo absoluto de la partida",
      "Spin Dash seguro contra escudos y con combos aéreos",
      "Muelle (Up-B) para volver al escenario de forma instantánea"
    ],
    "cons": [
      "Rango cuerpo a cuerpo corto",
      "Requiere paciencia para encontrar aperturas de noqueo"
    ],
    "beginnerTip": "Carga el Spin Dash (Down-B), golpea y salta inmediatamente con Neutral-Air o Fair.",
    "killMoves": [
      "Dash Attack -> Up-Air",
      "Forward Smash",
      "Back Air fuera de plataforma"
    ],
    "oosMove": "Neutral Air o Up-Smash directo",
    "recoveryTip": "Varía entre recuperarte alto o directo al borde para no ser predecible.",
    "strongAgainst": [
      "Zoners que necesitan tiempo y espacio para colocar proyectiles"
    ],
    "vulnerableTo": [
      "Espadachines con muros de golpes desarticulados"
    ]
  },
  {
    "id": "king_dedede",
    "name": "Rey Dedede",
    "title": "El Soberano Autoproclamado",
    "series": "Kirby",
    "archetype": "Heavyweight",
    "archetypeLabel": "Tanque Aéreo / Gordo Toss y Martillo Jet",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/king_dedede/main.png",
    "accentColor": "#f59e0b",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 45,
      "power": 95,
      "range": 82,
      "combos": 50,
      "recovery": 92
    },
    "scores": {
      "heavy": 10,
      "zoner": 6,
      "allrounder": 5,
      "tricky": 6,
      "swordie": 3,
      "rushdown": 1,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "Múltiples saltos aéreos para un gigante súper pesado. Lanza Gordos con púas que botan por el suelo y absorbe proyectiles.",
    "pros": [
      "Enorme durabilidad y 4 saltos aéreos",
      "El Gordo crea trampas excelentes al borde del abismo",
      "Martillo con alcance descomunal"
    ],
    "cons": [
      "El Gordo puede ser devuelto por cualquier ataque rival",
      "Blanco enorme para combos"
    ],
    "beginnerTip": "Lanza el Gordo en diagonal baja cuando el oponente intente agarrarse del borde.",
    "killMoves": [
      "Forward Smash cargado",
      "Side-B (Comando de Agarre)",
      "Down Air (Meteorito)"
    ],
    "oosMove": "Up-B con súper armadura o Neutral Air",
    "recoveryTip": "Guarda tu salto doble y usa movimientos con súper armadura cerca del borde.",
    "strongAgainst": [
      "Luchadores ligeros que mueren a porcentajes tempranos"
    ],
    "vulnerableTo": [
      "Personajes ultra rápidos con combos largos y zoners"
    ]
  },
  {
    "id": "olimar",
    "name": "Olimar",
    "title": "El Capitán Navegante",
    "series": "Pikmin",
    "archetype": "Zoner",
    "archetypeLabel": "Gestión de Recursos / Enjambre de Pikmin",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/olimar/main.png",
    "accentColor": "#ca8a04",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 60,
      "power": 88,
      "range": 85,
      "combos": 78,
      "recovery": 80
    },
    "scores": {
      "zoner": 10,
      "tricky": 10,
      "allrounder": 5,
      "rushdown": 3,
      "swordie": 2,
      "heavy": 2,
      "fgc": 3,
      "difficultyPref": 3
    },
    "description": "Arranca y comanda hasta 3 Pikmin de colores distintos (rojo, amarillo, azul, blanco, morado) con propiedades únicas de daño, agarre y peso.",
    "pros": [
      "Pikmin blancos causan daño residual gigantesco",
      "Pikmin morados golpean como camiones",
      "Agarres lejanos y Smash con alcance con Pikmin"
    ],
    "cons": [
      "Completamente inofensivo si se queda sin Pikmin",
      "Muy ligero y diminuto"
    ],
    "beginnerTip": "Mantén siempre 3 Pikmin arrancados y usa a los morados para rematar con ataques Smash.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "lucario",
    "name": "Lucario",
    "title": "El Guerrero del Aura",
    "series": "Pokémon",
    "archetype": "All-Rounder",
    "archetypeLabel": "Mecánica de Aura / Remontadas Épicas",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/lucario/main.png",
    "accentColor": "#0284c7",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 72,
      "power": 94,
      "range": 72,
      "combos": 80,
      "recovery": 95
    },
    "scores": {
      "allrounder": 7,
      "tricky": 8,
      "heavy": 6,
      "rushdown": 6,
      "zoner": 6,
      "swordie": 1,
      "fgc": 4,
      "difficultyPref": 2
    },
    "description": "Mecánica de Aura: cuanto más daño acumula Lucario, más grandes, potentes y lejanos se vuelven TODOS sus ataques y su recuperación.",
    "pros": [
      "Al 100%+ su bola de energía y golpes Smash tienen potencia monstruosa",
      "Recuperación con Extreme Speed vuela toda la pantalla con daño alto",
      "Contraataque potente"
    ],
    "cons": [
      "Al 0% de daño sus ataques son débiles y noquea con dificultad"
    ],
    "beginnerTip": "No temas recibir algo de daño: con el aura activa tus ataques mandan a volar a cualquiera.",
    "killMoves": [
      "Back Air",
      "Up Smash fuera de escudo",
      "Forward Smash"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Recuperación balanceada: salta en el momento justo y dirígete al borde.",
    "strongAgainst": [
      "Estilo flexible adaptable contra cualquier rival"
    ],
    "vulnerableTo": [
      "Especialistas extremos que dominan un área específica"
    ]
  },
  {
    "id": "r_o_b",
    "name": "R.O.B.",
    "title": "El Robot Emocional",
    "series": "R.O.B.",
    "archetype": "All-Rounder",
    "archetypeLabel": "Zoner Pesado / Peonza y Rayo Láser",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/rob/main.png",
    "accentColor": "#64748b",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 65,
      "power": 90,
      "range": 88,
      "combos": 88,
      "recovery": 95
    },
    "scores": {
      "allrounder": 9,
      "zoner": 8,
      "heavy": 7,
      "tricky": 7,
      "rushdown": 5,
      "swordie": 2,
      "fgc": 3,
      "difficultyPref": 1
    },
    "description": "Uno de los personajes más completos y competitivos del juego. Láser que atraviesa toda la pantalla, peonza giratoria y recuperación con combustible infinito.",
    "pros": [
      "La peonza (Gyro) controla el suelo y abre combos letales",
      "Láser que sale al instante y se recarga solo",
      "Down-Tilt es uno de los ataques más rápidos y seguros del juego"
    ],
    "cons": [
      "Tamaño ancho que recibe proyectiles fácilmente"
    ],
    "beginnerTip": "Lanza la peonza al piso para cortar el paso del rival y hostígalo con el rayo láser.",
    "killMoves": [
      "Back Air",
      "Up Smash fuera de escudo",
      "Forward Smash"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Recuperación balanceada: salta en el momento justo y dirígete al borde.",
    "strongAgainst": [
      "Estilo flexible adaptable contra cualquier rival"
    ],
    "vulnerableTo": [
      "Especialistas extremos que dominan un área específica"
    ]
  },
  {
    "id": "toon_link",
    "name": "Toon Link",
    "title": "El Héroe de los Vientos",
    "series": "The Legend of Zelda",
    "archetype": "Zoner",
    "archetypeLabel": "Zoner Flotante / Bombas y Espadazos",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/toon_link/main.png",
    "accentColor": "#84cc16",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 74,
      "power": 76,
      "range": 85,
      "combos": 80,
      "recovery": 78
    },
    "scores": {
      "zoner": 9,
      "swordie": 6,
      "allrounder": 7,
      "rushdown": 5,
      "tricky": 6,
      "heavy": 2,
      "fgc": 2,
      "difficultyPref": 2
    },
    "description": "La versión caricaturesca de Link. Movimiento más ligero, saltos flotantes y bombas que botan alto abriendo combos con Forward-Air.",
    "pros": [
      "Excelente agilidad con proyectiles",
      "Bomba conectada -> Fair es un combo de noqueo clásico",
      "Smash hacia arriba muy rápido"
    ],
    "cons": [
      "Ligero y con espada de menor alcance que el Link adulto"
    ],
    "beginnerTip": "Tira una bomba al aire: si golpea al rival, salta de inmediato con Fair para liquidarlo.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "wolf",
    "name": "Wolf",
    "title": "El Rival de Fox",
    "series": "Star Fox",
    "archetype": "All-Rounder",
    "archetypeLabel": "Presión Ofensiva / Blaster Pesado y Garras",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/wolf/main.png",
    "accentColor": "#7c3aed",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 80,
      "power": 88,
      "range": 70,
      "combos": 80,
      "recovery": 64
    },
    "scores": {
      "allrounder": 9,
      "rushdown": 8,
      "zoner": 6,
      "swordie": 3,
      "heavy": 5,
      "tricky": 3,
      "fgc": 4,
      "difficultyPref": 1
    },
    "description": "Excelente para principiantes que buscan un personaje completo y ofensivo. Blaster de gran calibre y garras con daño fulminante.",
    "pros": [
      "Uno de los mejores Blasters del juego (hace daño pesado y empuja)",
      "Smash hacia abajo con dos fotogramas en el borde",
      "Aéreos fáciles de conectar"
    ],
    "cons": [
      "Recuperación con Side-B arriesgada que cae en muerte si falla",
      "Caída rápida ante combos"
    ],
    "beginnerTip": "Dispara el Blaster a media distancia y salta con Forward-Air cuando el oponente reaccione.",
    "killMoves": [
      "Back Air",
      "Up Smash fuera de escudo",
      "Forward Smash"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Recuperación balanceada: salta en el momento justo y dirígete al borde.",
    "strongAgainst": [
      "Estilo flexible adaptable contra cualquier rival"
    ],
    "vulnerableTo": [
      "Especialistas extremos que dominan un área específica"
    ]
  },
  {
    "id": "villager",
    "name": "Aldeano",
    "title": "El Vecino Amigable",
    "series": "Animal Crossing",
    "archetype": "Zoner",
    "archetypeLabel": "Zoner / El Bolsillo y la Talla del Árbol",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/villager/main.png",
    "accentColor": "#10b981",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 56,
      "power": 82,
      "range": 88,
      "combos": 72,
      "recovery": 98
    },
    "scores": {
      "zoner": 9,
      "tricky": 9,
      "allrounder": 6,
      "heavy": 3,
      "rushdown": 3,
      "swordie": 1,
      "fgc": 2,
      "difficultyPref": 2
    },
    "description": "Guarda cualquier proyectil enemigo en su bolsillo (Pocket) para devolvérselo con el doble de potencia. Planta un árbol y lo tala para aplastar rivales.",
    "pros": [
      "El bolsillo absorbe desde bombas hasta el árbol mismo",
      "Giroide volador (Lloid Rocket) para cabalgar o zonear",
      "Tirachinas en el aire con daño rápido continuo"
    ],
    "cons": [
      "Poco alcance en tierra si no usa objetos",
      "Lento al correr"
    ],
    "beginnerTip": "Monta el cohete Giroide (Side-B) para acercarte mientras disparas con el tirachinas.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "mega_man",
    "name": "Mega Man",
    "title": "El Bombardero Azul",
    "series": "Mega Man",
    "archetype": "Zoner",
    "archetypeLabel": "Zoner Clásico / Metal Blade y Crash Bomber",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/mega_man/main.png",
    "accentColor": "#06b6d4",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 62,
      "power": 84,
      "range": 95,
      "combos": 75,
      "recovery": 82
    },
    "scores": {
      "zoner": 10,
      "tricky": 8,
      "allrounder": 5,
      "heavy": 4,
      "rushdown": 3,
      "swordie": 2,
      "fgc": 3,
      "difficultyPref": 2
    },
    "description": "Fiel a sus juegos de NES: camina disparando busters, lanza sierras metálicas (Metal Blade) en 8 direcciones y remata con la cuchilla Flame Sword.",
    "pros": [
      "Metal Blade es uno de los objetos más versátiles de Smash",
      "Up-Air de viento (Air Shooter) noquea hacia arriba con facilidad",
      "Buen peso y defensa"
    ],
    "cons": [
      "Ataques estándar son proyectiles que pueden ser reflejados",
      "Juego cuerpo a cuerpo atípico"
    ],
    "beginnerTip": "Lanza Metal Blade hacia el suelo para recogerla como objeto y tenerla lista en la mano.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "wii_fit_trainer",
    "name": "Entrenadora de Wii Fit",
    "title": "La Instructora del Yoga",
    "series": "Wii Fit",
    "archetype": "Tricky",
    "archetypeLabel": "Curación / Respiración Profunda y Voleibol",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/wii_fit_trainer/main.png",
    "accentColor": "#22c55e",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 68,
      "power": 86,
      "range": 75,
      "combos": 78,
      "recovery": 84
    },
    "scores": {
      "tricky": 9,
      "allrounder": 6,
      "zoner": 7,
      "rushdown": 5,
      "heavy": 4,
      "swordie": 1,
      "fgc": 3,
      "difficultyPref": 2
    },
    "description": "Ataques con hitboxes dobles adelante y atrás. Respira hondo con Deep Breathing para aumentar su velocidad, ataque y curarse daño.",
    "pros": [
      "Deep Breathing potencia todos los ataques a niveles brutales",
      "Pelota de voleibol que se puede golpear con distintos ángulos",
      "Se agacha tanto que esquiva proyectiles"
    ],
    "cons": [
      "Golpes con ángulos poco intuitivos al inicio",
      "Rango algo inconsistente"
    ],
    "beginnerTip": "Usa Down-B (Respiración profunda) cada vez que mandes al rival lejos para pelear siempre potenciado.",
    "killMoves": [
      "Trampa explosiva / Objeto especial",
      "Ataque Smash potenciado",
      "Down Smash en borde"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "rosalina_and_luma",
    "name": "Estela y Destello",
    "title": "La Protectora del Cosmos",
    "series": "Super Mario",
    "archetype": "Tricky",
    "archetypeLabel": "Puppet / Control de Luma y Gravitatorio",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/rosalina_and_luma/main.png",
    "accentColor": "#38bdf8",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 66,
      "power": 84,
      "range": 80,
      "combos": 86,
      "recovery": 86
    },
    "scores": {
      "tricky": 10,
      "zoner": 8,
      "allrounder": 6,
      "rushdown": 4,
      "swordie": 2,
      "heavy": 2,
      "fgc": 4,
      "difficultyPref": 3
    },
    "description": "Arquetipo Puppet (Titiritero): Estela y Luma atacan a la vez. Luma puede golpear incluso si Estela está siendo agarrada o comboeada.",
    "pros": [
      "Gravitational Pull anula y absorbe todos los proyectiles",
      "Luma interrumpe los combos del enemigo sobre ti",
      "Excelente alcance en desarticulado"
    ],
    "cons": [
      "Muy ligera y flotante",
      "Si Luma muere, queda vulnerable durante varios segundos"
    ],
    "beginnerTip": "Envía a Luma hacia adelante con Neutral-B para acorralar al rival entre dos fuegos.",
    "killMoves": [
      "Trampa explosiva / Objeto especial",
      "Ataque Smash potenciado",
      "Down Smash en borde"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "little_mac",
    "name": "Little Mac",
    "title": "El Púgil de Bronx",
    "series": "Punch-Out!!",
    "archetype": "Rushdown",
    "archetypeLabel": "Luchador Terrestre / Súper Armadura y KO Punch",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/little_mac/main.png",
    "accentColor": "#15803d",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 98,
      "power": 96,
      "range": 42,
      "combos": 85,
      "recovery": 20
    },
    "scores": {
      "rushdown": 9,
      "heavy": 8,
      "allrounder": 4,
      "swordie": 1,
      "zoner": 1,
      "tricky": 4,
      "fgc": 5,
      "difficultyPref": 1
    },
    "description": "El rey indiscutible del combate en el suelo. Sus ataques Smash tienen súper armadura imparable y su barra de KO punch mata al 25% ignorando escudos.",
    "pros": [
      "Velocidad en tierra y daño de puñetazos abrumadores",
      "KO punch liquida inmediatamente atravesando bloques",
      "Súper armadura en todos sus ataques Smash"
    ],
    "cons": [
      "La peor recuperación aérea de la historia de los videojuegos: si lo sacan lejos del suelo, peligra gravemente"
    ],
    "beginnerTip": "Quédate siempre en el centro del escenario y suelta ataques Smash cuando el rival intente golpearte.",
    "killMoves": [
      "Dash Attack -> Up-Air",
      "Forward Smash",
      "Back Air fuera de plataforma"
    ],
    "oosMove": "Neutral Air o Up-Smash directo",
    "recoveryTip": "Varía entre recuperarte alto o directo al borde para no ser predecible.",
    "strongAgainst": [
      "Zoners que necesitan tiempo y espacio para colocar proyectiles"
    ],
    "vulnerableTo": [
      "Espadachines con muros de golpes desarticulados"
    ]
  },
  {
    "id": "greninja",
    "name": "Greninja",
    "title": "El Ninja Shinobi",
    "series": "Pokémon",
    "archetype": "Rushdown",
    "archetypeLabel": "Rushdown Ágil / Shurikens y Sustituto",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/greninja/main.png",
    "accentColor": "#1d4ed8",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 96,
      "power": 76,
      "range": 68,
      "combos": 90,
      "recovery": 86
    },
    "scores": {
      "rushdown": 10,
      "tricky": 8,
      "allrounder": 6,
      "zoner": 5,
      "swordie": 1,
      "heavy": 1,
      "fgc": 4,
      "difficultyPref": 2
    },
    "description": "Velocidad de carrera altísima y salto gigante. Shurikens de agua cargables, sombra furtiva para sorprender por la espalda y gran juego de combos.",
    "pros": [
      "Dash Attack inicia combos aéreos limpios",
      "Shuriken de agua presiona a cualquier distancia",
      "Excelente capacidad de esquiva"
    ],
    "cons": [
      "Agarre algo lento",
      "Requiere buen ritmo para confirmar noqueos"
    ],
    "beginnerTip": "Usa Dash Attack -> Forward-Air o Up-Air para combos sencillos y efectivos.",
    "killMoves": [
      "Dash Attack -> Up-Air",
      "Forward Smash",
      "Back Air fuera de plataforma"
    ],
    "oosMove": "Neutral Air o Up-Smash directo",
    "recoveryTip": "Varía entre recuperarte alto o directo al borde para no ser predecible.",
    "strongAgainst": [
      "Zoners que necesitan tiempo y espacio para colocar proyectiles"
    ],
    "vulnerableTo": [
      "Espadachines con muros de golpes desarticulados"
    ]
  },
  {
    "id": "mii_brawler",
    "name": "Luchador Mii",
    "title": "El Peleador Personalizable",
    "series": "Super Smash Bros",
    "archetype": "Rushdown",
    "archetypeLabel": "Personalizable / Puñetazos Rápidos",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/mii_fighter/main.png",
    "accentColor": "#dc2626",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 88,
      "power": 86,
      "range": 50,
      "combos": 88,
      "recovery": 70
    },
    "scores": {
      "rushdown": 9,
      "heavy": 6,
      "allrounder": 7,
      "tricky": 5,
      "swordie": 1,
      "zoner": 2,
      "fgc": 4,
      "difficultyPref": 1
    },
    "description": "Peleador cuerpo a cuerpo con movimientos seleccionables (Thrupper, Shot Put, Suplex). Muy rápido y con combos contundentes.",
    "pros": [
      "Flexibilidad total de movimientos especiales",
      "Thrupper mata hacia el techo en porcentajes bajos",
      "Shot Put da un proyectil pesado sorpresa"
    ],
    "cons": [
      "Rango cuerpo a cuerpo corto"
    ],
    "beginnerTip": "Equipa Thrupper (Up-B) y conecta Down-Tilt para matar por la parte superior.",
    "killMoves": [
      "Dash Attack -> Up-Air",
      "Forward Smash",
      "Back Air fuera de plataforma"
    ],
    "oosMove": "Neutral Air o Up-Smash directo",
    "recoveryTip": "Varía entre recuperarte alto o directo al borde para no ser predecible.",
    "strongAgainst": [
      "Zoners que necesitan tiempo y espacio para colocar proyectiles"
    ],
    "vulnerableTo": [
      "Espadachines con muros de golpes desarticulados"
    ]
  },
  {
    "id": "mii_swordfighter",
    "name": "Espadachín Mii",
    "title": "El Esgrimista Personalizable",
    "series": "Super Smash Bros",
    "archetype": "Swordie",
    "archetypeLabel": "Personalizable / Espada y Proyectiles",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/mii_fighter/main.png",
    "accentColor": "#2563eb",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 70,
      "power": 80,
      "range": 80,
      "combos": 75,
      "recovery": 75
    },
    "scores": {
      "swordie": 9,
      "zoner": 7,
      "allrounder": 7,
      "rushdown": 4,
      "heavy": 3,
      "tricky": 5,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "Combina esgrima con proyectiles como tornados o shurikens de luz, además de ataques giratorios de espada.",
    "pros": [
      "Tornado lanza al rival alto para remate garantizado",
      "Espada sólida para el juego neutral",
      "Variedad de proyectiles"
    ],
    "cons": [
      "Movilidad moderada"
    ],
    "beginnerTip": "Lanza el tornado (Neutral-B 1): si impacta, salta con Up-Air para un noqueo fácil.",
    "killMoves": [
      "Forward Smash (Corte Potente)",
      "Back Air (Golpe de Espalda)",
      "Up-Air en Techo"
    ],
    "oosMove": "Up-B o Shield Grab (Agarre tras bloqueo)",
    "recoveryTip": "Aprovecha el alcance de tu espada para cortar a rivales que intenten interceptarte.",
    "strongAgainst": [
      "Luchadores de poco rango y brawlers cuerpo a cuerpo"
    ],
    "vulnerableTo": [
      "Zoners de proyectiles pesados a larga distancia"
    ]
  },
  {
    "id": "mii_gunner",
    "name": "Tirador Mii",
    "title": "El Artillero Personalizable",
    "series": "Super Smash Bros",
    "archetype": "Zoner",
    "archetypeLabel": "Personalizable / Bombas y Misiles Pesados",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/mii_fighter/main.png",
    "accentColor": "#ea580c",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 55,
      "power": 88,
      "range": 98,
      "combos": 65,
      "recovery": 78
    },
    "scores": {
      "zoner": 10,
      "tricky": 7,
      "allrounder": 6,
      "heavy": 5,
      "rushdown": 2,
      "swordie": 1,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "Arsenal de artillería pesada con granadas, misiles guiados y disparos láser cargables como Samus o Mega Man.",
    "pros": [
      "Control de proyectiles extraordinario",
      "Forward Smash de largo alcance",
      "Fácil de aprender a jugar a distancia"
    ],
    "cons": [
      "Lento en el cuerpo a cuerpo cerrado"
    ],
    "beginnerTip": "Dispara misiles seguidos de granadas para hacer imposible que el rival se acerque en línea recta.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "palutena",
    "name": "Palutena",
    "title": "La Diosa de la Luz",
    "series": "Kid Icarus",
    "archetype": "All-Rounder",
    "archetypeLabel": "Neutral Supremo / Explosión Astral y Aéreos",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/palutena/main.png",
    "accentColor": "#10b981",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 82,
      "power": 85,
      "range": 78,
      "combos": 88,
      "recovery": 92
    },
    "scores": {
      "allrounder": 10,
      "zoner": 7,
      "rushdown": 6,
      "swordie": 4,
      "heavy": 3,
      "tricky": 5,
      "fgc": 3,
      "difficultyPref": 1
    },
    "description": "Una de las mejores opciones del juego para novatos y profesionales. Neutral-Air gigante, proyectiles teledirigidos (Autoreticle) e invulnerabilidad en su escudo.",
    "pros": [
      "Neutral Air es uno de los mejores ataques de todo el juego",
      "Teletransporte seguro con Warp",
      "Contraataque y reflector en un solo botón"
    ],
    "cons": [
      "Proyectiles algo predecibles si se abusa de ellos"
    ],
    "beginnerTip": "Atrapa al rival con un agarre hacia abajo y salta inmediatamente con Neutral-Air (Nair).",
    "killMoves": [
      "Back Air",
      "Up Smash fuera de escudo",
      "Forward Smash"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Recuperación balanceada: salta en el momento justo y dirígete al borde.",
    "strongAgainst": [
      "Estilo flexible adaptable contra cualquier rival"
    ],
    "vulnerableTo": [
      "Especialistas extremos que dominan un área específica"
    ]
  },
  {
    "id": "pac_man",
    "name": "Pac-Man",
    "title": "El Pionero del Arcade",
    "series": "Pac-Man",
    "archetype": "Tricky",
    "archetypeLabel": "Frutas y Trampas / La Hidrante y la Llave",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/pac_man/main.png",
    "accentColor": "#facc15",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 68,
      "power": 85,
      "range": 82,
      "combos": 86,
      "recovery": 95
    },
    "scores": {
      "tricky": 10,
      "zoner": 8,
      "allrounder": 6,
      "rushdown": 4,
      "heavy": 3,
      "swordie": 1,
      "fgc": 3,
      "difficultyPref": 3
    },
    "description": "Cicla 8 frutas diferentes (manzanas, campanas paralizantes, llaves que noquean) y coloca una boca de riego que empuja con chorros de agua.",
    "pros": [
      "La boca de incendios protege de proyectiles y crea caos con agua",
      "La campana paraliza para un Smash libre; la llave liquida al 70%",
      "Recuperación con trampolín casi infinita"
    ],
    "cons": [
      "Curva de aprendizaje empinada para gestionar los ciclos de frutas"
    ],
    "beginnerTip": "Carga la fruta hasta la Llave (última) o la Campana para asegurar muertes sencillas.",
    "killMoves": [
      "Trampa explosiva / Objeto especial",
      "Ataque Smash potenciado",
      "Down Smash en borde"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "robin",
    "name": "Robin",
    "title": "El Estratega de Ylisse",
    "series": "Fire Emblem",
    "archetype": "Zoner",
    "archetypeLabel": "Magia y Espada Trueno / Libros con Durabilidad",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/robin/main.png",
    "accentColor": "#8b5cf6",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 45,
      "power": 90,
      "range": 85,
      "combos": 75,
      "recovery": 74
    },
    "scores": {
      "zoner": 9,
      "swordie": 7,
      "tricky": 8,
      "heavy": 4,
      "allrounder": 5,
      "rushdown": 2,
      "fgc": 2,
      "difficultyPref": 2
    },
    "description": "Espada Levin electrificada y tomos mágicos (Arcfire, Thoron). Cuando se agotan, tira los libros gastados como proyectiles pesados.",
    "pros": [
      "Espada Levin tiene un daño y alcance demoledores",
      "Arcfire crea columnas de fuego que atrapan",
      "Nosferatu absorbe vida del oponente"
    ],
    "cons": [
      "La velocidad al correr más lenta entre los personajes humanos",
      "Sus armas tienen límite de usos y deben recargarse"
    ],
    "beginnerTip": "Usa Arcfire en el borde para atrapar al rival y remata con un Forward Smash de espada Trueno.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "shulk",
    "name": "Shulk",
    "title": "El Portador de la Monado",
    "series": "Xenoblade Chronicles",
    "archetype": "Swordie",
    "archetypeLabel": "Espadachín Adaptable / Artes de la Monado",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/shulk/main.png",
    "accentColor": "#ef4444",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 75,
      "power": 92,
      "range": 96,
      "combos": 78,
      "recovery": 80
    },
    "scores": {
      "swordie": 10,
      "allrounder": 7,
      "tricky": 9,
      "rushdown": 6,
      "heavy": 6,
      "zoner": 2,
      "fgc": 4,
      "difficultyPref": 3
    },
    "description": "Espada Monado con el mayor rango del juego base. Puede cambiar entre 5 artes: Salto, Velocidad, Escudo, Buster (daño x2) y Smash (muertes tempranas).",
    "pros": [
      "Monado Shield le permite salir de combos letales activándolo",
      "Alcance de espada gigantesco que supera a casi todo",
      "Monado Smash noquea en porcentajes bajísimos"
    ],
    "cons": [
      "Exige cambiar de artes continuamente según el momento",
      "Ataques con cierta lentitud de fotogramas"
    ],
    "beginnerTip": "Usa el arte 'Speed' para correr y meter presión; cambia a 'Smash' cuando el rival tenga más de 80%.",
    "killMoves": [
      "Forward Smash (Corte Potente)",
      "Back Air (Golpe de Espalda)",
      "Up-Air en Techo"
    ],
    "oosMove": "Up-B o Shield Grab (Agarre tras bloqueo)",
    "recoveryTip": "Aprovecha el alcance de tu espada para cortar a rivales que intenten interceptarte.",
    "strongAgainst": [
      "Luchadores de poco rango y brawlers cuerpo a cuerpo"
    ],
    "vulnerableTo": [
      "Zoners de proyectiles pesados a larga distancia"
    ]
  },
  {
    "id": "bowser_jr",
    "name": "Bowser Jr. / Koopalings",
    "title": "El Heredero en Helikoopa",
    "series": "Super Mario",
    "archetype": "Zoner",
    "archetypeLabel": "Zoner Móvil / Mechakoopas y Cañones",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/bowser_jr/main.png",
    "accentColor": "#22c55e",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 68,
      "power": 82,
      "range": 84,
      "combos": 76,
      "recovery": 75
    },
    "scores": {
      "zoner": 8,
      "tricky": 8,
      "allrounder": 6,
      "heavy": 5,
      "rushdown": 5,
      "swordie": 2,
      "fgc": 2,
      "difficultyPref": 2
    },
    "description": "Montado en su Helikoopa: embiste con las ruedas (Kart Dash), dispara balas de cañón y suelta Mechakoopas que caminan por el suelo.",
    "pros": [
      "El cochecito absorbe daño y embiste con armadura",
      "Mechakoopa distrae al oponente obligándolo a saltar",
      "Up-B te eyecta del vehículo con un martillazo mortal"
    ],
    "cons": [
      "Si recibe golpes fuera del cochecito, sufre un 15% más de daño",
      "Vulnerable si le golpean al salir del coche"
    ],
    "beginnerTip": "Lanza el Mechakoopa y corre detrás en tu cochecito con Side-B para atraparlo.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "duck_hunt",
    "name": "Dúo Duck Hunt",
    "title": "El Perro y el Pato",
    "series": "Duck Hunt",
    "archetype": "Zoner",
    "archetypeLabel": "Zoner Tramposo / Lata Explosiva y Pistoleros",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/duck_hunt/main.png",
    "accentColor": "#a16207",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 65,
      "power": 78,
      "range": 95,
      "combos": 70,
      "recovery": 85
    },
    "scores": {
      "zoner": 10,
      "tricky": 10,
      "allrounder": 5,
      "rushdown": 3,
      "swordie": 1,
      "heavy": 2,
      "fgc": 2,
      "difficultyPref": 2
    },
    "description": "La lata del suelo puede ser disparada desde cualquier lugar con el botón B. Invoca pistoleros del salvaje oeste y platos de tiro al pichón.",
    "pros": [
      "La lata se mueve independientemente de lo que estés haciendo",
      "Los pistoleros absorben proyectiles y disparan ráfagas",
      "Muy difícil de abordar si domina los artefactos"
    ],
    "cons": [
      "Poco poder de remate directo cuerpo a cuerpo",
      "Requiere coordinar disparos invisibles"
    ],
    "beginnerTip": "Patea la lata al empezar y sigue pulsando B para que bote hacia el rival mientras tú te mueves libremente.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "ryu",
    "name": "Ryu",
    "title": "El Guerrero Errante",
    "series": "Street Fighter",
    "archetype": "FGC",
    "archetypeLabel": "FGC Tradicional / Hadoken, Tatsumaki y Shoryuken",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/ryu/main.png",
    "accentColor": "#f8fafc",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 60,
      "power": 92,
      "range": 55,
      "combos": 94,
      "recovery": 72
    },
    "scores": {
      "fgc": 10,
      "heavy": 6,
      "rushdown": 7,
      "allrounder": 6,
      "zoner": 5,
      "tricky": 4,
      "swordie": 1,
      "difficultyPref": 3
    },
    "description": "Autogiro hacia el rival en 1v1. Botones sensibles (toque suave = ataque ligero, mantener = ataque fuerte) y comandos de palanca para Hadoken y Shoryuken auténticos.",
    "pros": [
      "True Shoryuken con comando es casi invulnerable y mata temprano",
      "Hadoken shakunetsu incendiario con múltiples impactos",
      "Focus Attack absorbe un golpe y aturde"
    ],
    "cons": [
      "Movilidad aérea pesada",
      "Exige memorizar entradas de Street Fighter (↓ ↘ → + A)"
    ],
    "beginnerTip": "Conecta golpes suaves de pie (Light Downtilt) y cancela de inmediato en Shoryuken con comando.",
    "killMoves": [
      "Shoryuken con comando",
      "Súper Especial (GO! / Rage Drive)",
      "Forward Smash"
    ],
    "oosMove": "Up-B (Shoryuken invulnerable al inicio)",
    "recoveryTip": "Usa ataques especiales con avance hacia adelante para impulsarte.",
    "strongAgainst": [
      "Cualquiera que se descuide en combate cerrado 1v1"
    ],
    "vulnerableTo": [
      "Campers a larga distancia y personajes con desarticulación"
    ]
  },
  {
    "id": "ken",
    "name": "Ken Masters",
    "title": "El Dragón Ardiente",
    "series": "Street Fighter",
    "archetype": "FGC",
    "archetypeLabel": "FGC Ofensivo / Patadas de Fuego y Shoryuken Ígneo",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/ken/main.png",
    "accentColor": "#dc2626",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 64,
      "power": 94,
      "range": 55,
      "combos": 96,
      "recovery": 72
    },
    "scores": {
      "fgc": 10,
      "rushdown": 8,
      "heavy": 6,
      "allrounder": 5,
      "zoner": 3,
      "tricky": 4,
      "swordie": 1,
      "difficultyPref": 3
    },
    "description": "Más rápido y comboeador que Ryu. Su Shoryuken envuelve en llamas con múltiples impactos y sus patadas giratorias cierran el paso.",
    "pros": [
      "Velocidad de carrera superior a Ryu",
      "Shoryuken de fuego con tremendo poder de remate",
      "Combos continuos con patadas crescent y roundhouse"
    ],
    "cons": [
      "Exige alta destreza con la palanca de control",
      "Hadoken más lento"
    ],
    "beginnerTip": "Usa Heavy Jab o Proximity Jab cancelado directamente en Shoryuken para asegurar la victoria.",
    "killMoves": [
      "Shoryuken con comando",
      "Súper Especial (GO! / Rage Drive)",
      "Forward Smash"
    ],
    "oosMove": "Up-B (Shoryuken invulnerable al inicio)",
    "recoveryTip": "Usa ataques especiales con avance hacia adelante para impulsarte.",
    "strongAgainst": [
      "Cualquiera que se descuide en combate cerrado 1v1"
    ],
    "vulnerableTo": [
      "Campers a larga distancia y personajes con desarticulación"
    ]
  },
  {
    "id": "cloud",
    "name": "Cloud Strife",
    "title": "El Ex-SOLDADO",
    "series": "Final Fantasy",
    "archetype": "Swordie",
    "archetypeLabel": "Espadachín Pesado / Buster Sword y Límite",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/cloud/main.png",
    "accentColor": "#10b981",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 78,
      "power": 89,
      "range": 92,
      "combos": 75,
      "recovery": 58
    },
    "scores": {
      "swordie": 10,
      "allrounder": 7,
      "heavy": 6,
      "rushdown": 5,
      "zoner": 4,
      "tricky": 3,
      "fgc": 3,
      "difficultyPref": 1
    },
    "description": "Espada Buster gigante con alcance demoledor. Carga su barra de Límite para obtener súper velocidad y habilidades especiales letales.",
    "pros": [
      "Back-Air y Forward-Air colosales con enorme prioridad",
      "La barra de Límite otorga un Cross Slash y recuperación potenciados",
      "Excelente en el juego neutral"
    ],
    "cons": [
      "Sin Límite, su recuperación con Climhazzard no llega lejos",
      "El Límite expira tras 15 segundos"
    ],
    "beginnerTip": "Carga el Límite (Down-B) cada vez que el rival vuele lejos; ¡intimidarás en todo momento!",
    "killMoves": [
      "Finishing Touch (Down-B con Límite)",
      "Forward Smash",
      "Back Air colosal"
    ],
    "oosMove": "Up-B (Climhazzard)",
    "recoveryTip": "Aprovecha el alcance de tu espada para cortar a rivales que intenten interceptarte.",
    "strongAgainst": [
      "Luchadores de poco rango y brawlers cuerpo a cuerpo"
    ],
    "vulnerableTo": [
      "Zoners de proyectiles pesados a larga distancia"
    ]
  },
  {
    "id": "corrin",
    "name": "Corrin",
    "title": "La Sangre de Dragón",
    "series": "Fire Emblem",
    "archetype": "Swordie",
    "archetypeLabel": "Espadachín / Pincho de Lanza y Colmillos",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/corrin/main.png",
    "accentColor": "#06b6d4",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 68,
      "power": 84,
      "range": 88,
      "combos": 78,
      "recovery": 76
    },
    "scores": {
      "swordie": 9,
      "allrounder": 7,
      "zoner": 5,
      "heavy": 4,
      "rushdown": 4,
      "tricky": 5,
      "fgc": 2,
      "difficultyPref": 2
    },
    "description": "Transforma sus extremidades en partes de dragón. Su Side-B clava una lanza en el suelo para saltar hacia adelante o atrás con un golpe demoledor.",
    "pros": [
      "Side-B (Dragon Lunge) es una de las herramientas de espaciado más seguras",
      "Proyectil de agua que aturde con colmillo de dragón",
      "Up-Air y Bair excelentes"
    ],
    "cons": [
      "Movilidad en tierra algo pausada",
      "Recuperación predecible"
    ],
    "beginnerTip": "Clava tu lanza en el piso con Side-B a distancia segura y patea al rival si intenta acercarse.",
    "killMoves": [
      "Forward Smash (Corte Potente)",
      "Back Air (Golpe de Espalda)",
      "Up-Air en Techo"
    ],
    "oosMove": "Up-B o Shield Grab (Agarre tras bloqueo)",
    "recoveryTip": "Aprovecha el alcance de tu espada para cortar a rivales que intenten interceptarte.",
    "strongAgainst": [
      "Luchadores de poco rango y brawlers cuerpo a cuerpo"
    ],
    "vulnerableTo": [
      "Zoners de proyectiles pesados a larga distancia"
    ]
  },
  {
    "id": "bayonetta",
    "name": "Bayonetta",
    "title": "La Bruja de Umbra",
    "series": "Bayonetta",
    "archetype": "Tricky",
    "archetypeLabel": "Combos Aéreos / Tiempo Brujo y Metralletas",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/bayonetta/main.png",
    "accentColor": "#475569",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 74,
      "power": 80,
      "range": 68,
      "combos": 96,
      "recovery": 88
    },
    "scores": {
      "tricky": 10,
      "rushdown": 7,
      "allrounder": 5,
      "swordie": 2,
      "zoner": 4,
      "heavy": 2,
      "fgc": 6,
      "difficultyPref": 3
    },
    "description": "Witch Time (Down-B) ralentiza al oponente en el tiempo cuando intenta golpearte. Encadena combos verticales infinitos con patadas de pistola.",
    "pros": [
      "Witch Time regala un ataque Smash completamente cargado gratis",
      "Combos aéreos continuos con Side-B y Up-B",
      "Dispara balas manteniendo presionados los botones"
    ],
    "cons": [
      "Requiere memorizar secuencias de combos aéreos para hacer daño",
      "Ligera y fácil de derribar si falla"
    ],
    "beginnerTip": "Activa Witch Time cuando el rival intente un ataque obvio para congelarlo y golpearlo a gusto.",
    "killMoves": [
      "Trampa explosiva / Objeto especial",
      "Ataque Smash potenciado",
      "Down Smash en borde"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "inkling",
    "name": "Inkling",
    "title": "El Calamar Urbano",
    "series": "Splatoon",
    "archetype": "Rushdown",
    "archetypeLabel": "Pintura y Rodillo / Daño Multiplicado",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/inkling/main.png",
    "accentColor": "#ea580c",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 90,
      "power": 80,
      "range": 65,
      "combos": 88,
      "recovery": 92
    },
    "scores": {
      "rushdown": 9,
      "tricky": 8,
      "allrounder": 7,
      "zoner": 5,
      "swordie": 1,
      "heavy": 2,
      "fgc": 3,
      "difficultyPref": 2
    },
    "description": "Pinta a sus oponentes con tinta: entre más entintado esté el rival, hasta un 50% MÁS de daño recibe de tus golpes. Rodillo que entierra en el piso.",
    "pros": [
      "El rodillo (Side-B) entierra al enemigo para un Smash mortal",
      "Multiplicador de daño masivo cuando el rival está bañado en tinta",
      "Nado en tinta para recargar y moverse indetectable"
    ],
    "cons": [
      "Si te quedas sin tinta, tus ataques especiales se desactivan",
      "Requiere recargar tinta periódicamente"
    ],
    "beginnerTip": "Entierra al oponente con el rodillo y remata con un Up-Smash directo.",
    "killMoves": [
      "Dash Attack -> Up-Air",
      "Forward Smash",
      "Back Air fuera de plataforma"
    ],
    "oosMove": "Neutral Air o Up-Smash directo",
    "recoveryTip": "Varía entre recuperarte alto o directo al borde para no ser predecible.",
    "strongAgainst": [
      "Zoners que necesitan tiempo y espacio para colocar proyectiles"
    ],
    "vulnerableTo": [
      "Espadachines con muros de golpes desarticulados"
    ]
  },
  {
    "id": "ridley",
    "name": "Ridley",
    "title": "La Muerte Alada de Zebes",
    "series": "Metroid",
    "archetype": "Heavyweight",
    "archetypeLabel": "Monstruo Pesado / Arrastre Espacial y Skewer",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/ridley/main.png",
    "accentColor": "#7c3aed",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 76,
      "power": 94,
      "range": 82,
      "combos": 60,
      "recovery": 72
    },
    "scores": {
      "heavy": 9,
      "rushdown": 6,
      "allrounder": 5,
      "swordie": 3,
      "zoner": 4,
      "tricky": 4,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "Dragón espacial enorme con gran velocidad para su tamaño. Arrastra al rival por toda la arena con Space Pirate Rush y Skewer hace 60% de daño dulce.",
    "pros": [
      "Space Pirate Rush (Side-B) pasa escudos y arroja contra el borde",
      "Bolas de fuego en cadena que cubren todo el escenario",
      "Tres saltos y gran potencia"
    ],
    "cons": [
      "Cuerpo gigante muy fácil de golpear",
      "Su Up-B solo viaja en 4 direcciones fijas"
    ],
    "beginnerTip": "Agarra al oponente con Side-B para llevarlo hacia el borde y tirarlo contra la pared exterior.",
    "killMoves": [
      "Forward Smash cargado",
      "Side-B (Comando de Agarre)",
      "Down Air (Meteorito)"
    ],
    "oosMove": "Up-B con súper armadura o Neutral Air",
    "recoveryTip": "Guarda tu salto doble y usa movimientos con súper armadura cerca del borde.",
    "strongAgainst": [
      "Luchadores ligeros que mueren a porcentajes tempranos"
    ],
    "vulnerableTo": [
      "Personajes ultra rápidos con combos largos y zoners"
    ]
  },
  {
    "id": "simon",
    "name": "Simon Belmont",
    "title": "El Cazador de Vampiros",
    "series": "Castlevania",
    "archetype": "Zoner",
    "archetypeLabel": "Zoner de Látigo / Hacha, Cruz y Agua Bendita",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/simon/main.png",
    "accentColor": "#b45309",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 48,
      "power": 88,
      "range": 98,
      "combos": 62,
      "recovery": 50
    },
    "scores": {
      "zoner": 10,
      "swordie": 8,
      "heavy": 5,
      "tricky": 6,
      "allrounder": 4,
      "rushdown": 1,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "El látigo Vampire Killer tiene el mayor alcance cuerpo a cuerpo del juego. Lanza hachas en arco, agua bendita que prende en llamas y una cruz bumerán.",
    "pros": [
      "Alcance de látigo y proyectiles que forman una barrera infranqueable",
      "El agua bendita inmoviliza al rival en el piso",
      "Smash hacia adelante con rango gigante"
    ],
    "cons": [
      "Recuperación vertical con Up-B muy corta",
      "Muy vulnerable si el enemigo logra acercase a su espalda"
    ],
    "beginnerTip": "Lanza agua bendita hacia el suelo: si arde sobre el rival, conecta inmediatamente tu Forward Smash de látigo.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "richter",
    "name": "Richter Belmont",
    "title": "El Heredero del Látigo",
    "series": "Castlevania",
    "archetype": "Zoner",
    "archetypeLabel": "Zoner de Látigo / Magia Sagrada y Cruz",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/richter/main.png",
    "accentColor": "#2563eb",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 48,
      "power": 88,
      "range": 98,
      "combos": 62,
      "recovery": 50
    },
    "scores": {
      "zoner": 10,
      "swordie": 8,
      "heavy": 5,
      "tricky": 6,
      "allrounder": 4,
      "rushdown": 1,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "Luchador eco de Simon con el mismo Vampire Killer letal y proyectiles, con animaciones y agua bendita de color azul sagrado.",
    "pros": [
      "Control de espacio supremo con látigo y proyectiles",
      "Capacidad de encadenar proyectil tras proyectil",
      "Agarre en borde con la punta del látigo"
    ],
    "cons": [
      "Misma recuperación rígida que Simon",
      "Velocidad de movimiento en tierra pausada"
    ],
    "beginnerTip": "Mantén al rival a raya lanzando la cruz y remata con la punta del Vampire Killer.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "king_k_rool",
    "name": "King K. Rool",
    "title": "El Rey de los Kremlings",
    "series": "Donkey Kong",
    "archetype": "Heavyweight",
    "archetypeLabel": "Tanque Acorazado / Cañón Trabuco y Corona",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/king_k_rool/main.png",
    "accentColor": "#15803d",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 52,
      "power": 98,
      "range": 80,
      "combos": 50,
      "recovery": 88
    },
    "scores": {
      "heavy": 10,
      "zoner": 7,
      "allrounder": 6,
      "tricky": 5,
      "swordie": 2,
      "rushdown": 2,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "La mejor armadura de vientre (Belly Armor) que resiste ataques Smash enteros. Lanza su corona como bumerán, dispara balas de cañón y vuela con su mochila helicóptero.",
    "pros": [
      "Superarmadura en la panza que absorbe ataques enemigos",
      "Recuperación con Up-B que viaja casi toda la pantalla",
      "Down-Smash que entierra rivales en el suelo"
    ],
    "cons": [
      "Si su panza recibe demasiado daño seguido, su armadura se rompe y queda aturdido",
      "Objetivo grande"
    ],
    "beginnerTip": "Tira la corona (Side-B) seguida de la bala de cañón (Neutral-B) para crear un muro de proyectiles pesados.",
    "killMoves": [
      "Forward Smash cargado",
      "Side-B (Comando de Agarre)",
      "Down Air (Meteorito)"
    ],
    "oosMove": "Up-B con súper armadura o Neutral Air",
    "recoveryTip": "Guarda tu salto doble y usa movimientos con súper armadura cerca del borde.",
    "strongAgainst": [
      "Luchadores ligeros que mueren a porcentajes tempranos"
    ],
    "vulnerableTo": [
      "Personajes ultra rápidos con combos largos y zoners"
    ]
  },
  {
    "id": "isabelle",
    "name": "Canela",
    "title": "La Secretaria Eficiente",
    "series": "Animal Crossing",
    "archetype": "Zoner",
    "archetypeLabel": "Trampas / Caña de Pescar y Cohetes Giroide",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/isabelle/main.png",
    "accentColor": "#facc15",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 58,
      "power": 76,
      "range": 85,
      "combos": 75,
      "recovery": 96
    },
    "scores": {
      "zoner": 9,
      "tricky": 9,
      "allrounder": 6,
      "rushdown": 3,
      "swordie": 1,
      "heavy": 2,
      "fgc": 2,
      "difficultyPref": 2
    },
    "description": "Planta cohetes Giroide enterrados que explotan cuando alguien los pisa. Su caña de pescar atrapa rivales a distancia y los lanza al aire.",
    "pros": [
      "La caña de pescar atrapa al rival incluso si se cubre con escudo",
      "Trampa enterrada que vigila una zona completa",
      "Bolsillo para robar proyectiles rivales"
    ],
    "cons": [
      "Poco peso",
      "Le cuesta matar sin una trampa o caña bien situada"
    ],
    "beginnerTip": "Entierra el cohete con Down-B y quédate cerca: si el oponente salta para evitarlo, lánzale la caña de pescar en el aire.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "incineroar",
    "name": "Incineroar",
    "title": "El Tigre del Ring",
    "series": "Pokémon",
    "archetype": "Grappler",
    "archetypeLabel": "Lucha Libre / Venganza (Revenge) y Alariat",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/incineroar/main.png",
    "accentColor": "#dc2626",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 42,
      "power": 99,
      "range": 58,
      "combos": 65,
      "recovery": 48
    },
    "scores": {
      "heavy": 10,
      "fgc": 6,
      "allrounder": 5,
      "rushdown": 3,
      "tricky": 5,
      "swordie": 1,
      "zoner": 1,
      "difficultyPref": 1
    },
    "description": "El personaje más lento al correr, pero sus agarres de lucha libre son descomunales. Con 'Revenge' (Down-B) absorbe ataques y multiplica su siguiente golpe hasta hacer 70% de un impacto.",
    "pros": [
      "El contraataque 'Revenge' potencia el daño a niveles monstruosos",
      "Alariat (Neutral-B) es invulnerable al inicio",
      "Side-B manda al rival a las cuerdas del ring con remate brutal"
    ],
    "cons": [
      "La velocidad de carrera más baja del juego",
      "Recuperación vulnerable si lo empujan lejos"
    ],
    "beginnerTip": "Usa Revenge cuando veas que un ataque enemigo viene hacia ti, y luego conecta Side-B para noquearlo de un golpe.",
    "killMoves": [
      "Forward Smash cargado",
      "Side-B (Comando de Agarre)",
      "Down Air (Meteorito)"
    ],
    "oosMove": "Up-B con súper armadura o Neutral Air",
    "recoveryTip": "Guarda tu salto doble y usa movimientos con súper armadura cerca del borde.",
    "strongAgainst": [
      "Luchadores ligeros que mueren a porcentajes tempranos"
    ],
    "vulnerableTo": [
      "Personajes ultra rápidos con combos largos y zoners"
    ]
  },
  {
    "id": "piranha_plant",
    "name": "Planta Piraña",
    "title": "La Flora Voraz",
    "series": "Super Mario",
    "archetype": "Tricky",
    "archetypeLabel": "Control de Área / Bola de Púas y Veneno",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/piranha_plant/main.png",
    "accentColor": "#16a34a",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 54,
      "power": 88,
      "range": 78,
      "combos": 60,
      "recovery": 88
    },
    "scores": {
      "tricky": 9,
      "heavy": 7,
      "zoner": 7,
      "allrounder": 5,
      "rushdown": 3,
      "swordie": 1,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "Lanza una bola de púas (Ptooie) que flota sobre su cabeza y castiga a cualquiera que intente acercarse por arriba. Nube de veneno tóxico que quema daño masivo.",
    "pros": [
      "Ptooie es una de las mejores herramientas de control del juego",
      "Excelente peso y recuperación con hojas giratorias",
      "Ataque estirado desde la maceta (Down-B) con súper armadura"
    ],
    "cons": [
      "Blanco algo grande",
      "Juego neutral más defensivo"
    ],
    "beginnerTip": "Saca la bola con Neutral-B y mantenla flotando: ningún rival podrá saltar sobre ti sin recibir daño.",
    "killMoves": [
      "Trampa explosiva / Objeto especial",
      "Ataque Smash potenciado",
      "Down Smash en borde"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "joker",
    "name": "Joker",
    "title": "El Ladrón Fantasma",
    "series": "Persona 5",
    "archetype": "Tricky",
    "archetypeLabel": "Agilidad & Modo Arsène / Contras y Pistola",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/joker/main.png",
    "accentColor": "#dc2626",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 90,
      "power": 88,
      "range": 68,
      "combos": 94,
      "recovery": 90
    },
    "scores": {
      "tricky": 10,
      "rushdown": 9,
      "allrounder": 7,
      "swordie": 4,
      "zoner": 5,
      "heavy": 3,
      "fgc": 6,
      "difficultyPref": 3
    },
    "description": "Ágil con cuchillo, pistola y garfio. Al llenar su barra de rebelión invoca a Arsène, transformándose en una fuerza imparable con contras dobles y ataques descomunales.",
    "pros": [
      "Con Arsène activo tiene el mejor contraataque (Tetrakarn) del juego",
      "Garfio para recuperaciones y combos verticales",
      "Velocidad y neutral impecables"
    ],
    "cons": [
      "Sin Arsène requiere combos largos para acumular daño y matar",
      "Técnico"
    ],
    "beginnerTip": "Usa Rebel's Guard (Down-B) para absorber ataques y llamar a Arsène el doble de rápido.",
    "killMoves": [
      "Back Air con Arsène",
      "Up Smash",
      "Tetrakarn (Contraataque x1.6)"
    ],
    "oosMove": "Up-B (Garfio sin Arsène) o Back Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "hero",
    "name": "Hero",
    "title": "El Héroe Elegido",
    "series": "Dragon Quest",
    "archetype": "Tricky",
    "archetypeLabel": "Menú de Hechizos / Golpes Críticos Aleatorios",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/dq_hero/main.png",
    "accentColor": "#6366f1",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 62,
      "power": 95,
      "range": 82,
      "combos": 68,
      "recovery": 82
    },
    "scores": {
      "tricky": 10,
      "swordie": 8,
      "zoner": 7,
      "heavy": 6,
      "allrounder": 6,
      "rushdown": 3,
      "fgc": 3,
      "difficultyPref": 2
    },
    "description": "Barra de puntos de magia (MP) y un menú con decenas de hechizos (Kamikazee, Hocus Pocus, Aceleración, Metal Slash). Sus ataques Smash pueden sacar golpes críticos de 1 impacto.",
    "pros": [
      "Posibilidad de golpe crítico aleatorio en cualquier ataque Smash",
      "Menú de hechizos con buffs de velocidad, rebote y proyectiles nucleares",
      "Excelente espada"
    ],
    "cons": [
      "Si te quedas sin MP, tus ataques especiales no funcionan",
      "Exige leer el menú de hechizos rápidamente"
    ],
    "beginnerTip": "Abre el menú con Down-B cuando estés lejos y busca hechizos como 'Oomph' o 'Bounce' para dominar.",
    "killMoves": [
      "Trampa explosiva / Objeto especial",
      "Ataque Smash potenciado",
      "Down Smash en borde"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "banjo_and_kazooie",
    "name": "Banjo y Kazooie",
    "title": "El Dúo del Nido",
    "series": "Banjo-Kazooie",
    "archetype": "All-Rounder",
    "archetypeLabel": "Versátil / Wonderwing Invulnerable y Huevos",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/banjo_and_kazooie/main.png",
    "accentColor": "#b45309",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 68,
      "power": 84,
      "range": 76,
      "combos": 75,
      "recovery": 82
    },
    "scores": {
      "allrounder": 9,
      "zoner": 7,
      "heavy": 6,
      "rushdown": 5,
      "swordie": 2,
      "tricky": 5,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "Huevos de granada que botan por la espalda y el temido 'Wonderwing' (Side-B): un placaje 100% invulnerable que arrasa con cualquier ataque.",
    "pros": [
      "Wonderwing es invulnerable a casi todo y mata al 80%",
      "Huevos que controlan el escenario con rebotes",
      "Muy amigable para principiantes"
    ],
    "cons": [
      "Wonderwing solo tiene 5 usos por cada vida"
    ],
    "beginnerTip": "Guarda tus Wonderwing para rematar cuando el rival esté en porcentaje alto y trate de atacarte.",
    "killMoves": [
      "Back Air",
      "Up Smash fuera de escudo",
      "Forward Smash"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Recuperación balanceada: salta en el momento justo y dirígete al borde.",
    "strongAgainst": [
      "Estilo flexible adaptable contra cualquier rival"
    ],
    "vulnerableTo": [
      "Especialistas extremos que dominan un área específica"
    ]
  },
  {
    "id": "terry",
    "name": "Terry Bogard",
    "title": "El Lobo Legendario",
    "series": "Fatal Fury / SNK",
    "archetype": "FGC",
    "archetypeLabel": "FGC Accesible / Modo GO! y Buster Wolf",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/terry/main.png",
    "accentColor": "#ea580c",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 70,
      "power": 92,
      "range": 62,
      "combos": 90,
      "recovery": 75
    },
    "scores": {
      "fgc": 9,
      "allrounder": 7,
      "heavy": 6,
      "rushdown": 7,
      "swordie": 1,
      "zoner": 3,
      "tricky": 4,
      "difficultyPref": 2
    },
    "description": "Excelente entrada para jugadores de peleas tradicionales. Siempre mira al oponente en 1v1 y desbloquea los súper ataques 'Power Geyser' y 'Buster Wolf' al superar el 100% de vida.",
    "pros": [
      "Modo 'GO!' con súper ataques ilimitados cuando está herido",
      "Jab cancela con enorme facilidad en Power Dunk",
      "Golpes contundentes y resistentes"
    ],
    "cons": [
      "Recuperación horizontal predecible",
      "Requiere memorizar comandos para los súpers"
    ],
    "beginnerTip": "Aprende el clásico 'Jab, Jab -> Power Dunk (Down-B)': conecta siempre y causa daño brutal.",
    "killMoves": [
      "Shoryuken con comando",
      "Súper Especial (GO! / Rage Drive)",
      "Forward Smash"
    ],
    "oosMove": "Up-B (Shoryuken invulnerable al inicio)",
    "recoveryTip": "Usa ataques especiales con avance hacia adelante para impulsarte.",
    "strongAgainst": [
      "Cualquiera que se descuide en combate cerrado 1v1"
    ],
    "vulnerableTo": [
      "Campers a larga distancia y personajes con desarticulación"
    ]
  },
  {
    "id": "byleth",
    "name": "Byleth",
    "title": "El Profesor de Garreg Mach",
    "series": "Fire Emblem",
    "archetype": "Swordie",
    "archetypeLabel": "Armas Reliquia / Lanza, Hacha, Arco y Espada Látigo",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/byleth/main.png",
    "accentColor": "#0d9488",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 50,
      "power": 96,
      "range": 95,
      "combos": 68,
      "recovery": 88
    },
    "scores": {
      "swordie": 10,
      "zoner": 8,
      "heavy": 7,
      "allrounder": 6,
      "rushdown": 2,
      "tricky": 4,
      "fgc": 2,
      "difficultyPref": 1
    },
    "description": "Empuña 4 Reliquias de los Héroes: Espada látigo para recuperaciones, lanza Areadbhar de alcance colosal, hacha Aymr que rompe escudos y arco Failnaught.",
    "pros": [
      "Alcance descomunal con la punta de la lanza (Forward-Smash)",
      "Down-B con hacha rompe cualquier escudo por completo",
      "Garfio de espada que se engancha al borde desde muy lejos"
    ],
    "cons": [
      "Velocidad de carrera bastante baja",
      "Ataques con tiempo de inicio algo lento si no se espacian bien"
    ],
    "beginnerTip": "Usa Forward-Tilt y Fair para mantener al enemigo al límite del alcance de tu lanza.",
    "killMoves": [
      "Forward Smash (Corte Potente)",
      "Back Air (Golpe de Espalda)",
      "Up-Air en Techo"
    ],
    "oosMove": "Up-B o Shield Grab (Agarre tras bloqueo)",
    "recoveryTip": "Aprovecha el alcance de tu espada para cortar a rivales que intenten interceptarte.",
    "strongAgainst": [
      "Luchadores de poco rango y brawlers cuerpo a cuerpo"
    ],
    "vulnerableTo": [
      "Zoners de proyectiles pesados a larga distancia"
    ]
  },
  {
    "id": "minmin",
    "name": "Min Min",
    "title": "La Reina de los Fideos",
    "series": "ARMS",
    "archetype": "Zoner",
    "archetypeLabel": "Brazos Elásticos de Ultra Alcance",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/minmin/main.png",
    "accentColor": "#facc15",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 55,
      "power": 90,
      "range": 100,
      "combos": 65,
      "recovery": 65
    },
    "scores": {
      "zoner": 10,
      "swordie": 6,
      "heavy": 5,
      "allrounder": 5,
      "rushdown": 3,
      "tricky": 6,
      "fgc": 3,
      "difficultyPref": 2
    },
    "description": "Brazos elásticos intercambiables (Megawatt pesado, Dragón láser y Ring rápido) que golpean de un extremo a otro del escenario sin moverse.",
    "pros": [
      "El mayor alcance de ataque horizontal del juego",
      "El brazo Megawatt noquea con una potencia demoledora",
      "Puede atacar con dos brazos a la vez en direcciones opuestas"
    ],
    "cons": [
      "Recuperación con garfio muy vulnerable si le impiden el enganche",
      "Sufre mucho si el rival logra meterse cuerpo a cuerpo"
    ],
    "beginnerTip": "Equipa el brazo Dragón o Megawatt y ataca manteniendo la distancia de pantalla completa.",
    "killMoves": [
      "Disparo/Proyectil cargado",
      "Forward Smash",
      "Back Air al borde"
    ],
    "oosMove": "Up-B o Neutral Air rápido",
    "recoveryTip": "Usa bombas o proyectiles en el aire para frenar al rival mientras vuelves.",
    "strongAgainst": [
      "Tanques pesados y personajes lentos sin proyectiles"
    ],
    "vulnerableTo": [
      "Rushdown hiper veloces que saltan por encima de los proyectiles"
    ]
  },
  {
    "id": "steve",
    "name": "Steve / Alex",
    "title": "El Artesano de Bloques",
    "series": "Minecraft",
    "archetype": "Tricky",
    "archetypeLabel": "Estrategia y Crafteo / Bloques en el Aire y Vagoneta",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/steve/main.png",
    "accentColor": "#15803d",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 48,
      "power": 96,
      "range": 75,
      "combos": 96,
      "recovery": 88
    },
    "scores": {
      "tricky": 10,
      "zoner": 7,
      "swordie": 4,
      "heavy": 5,
      "rushdown": 4,
      "allrounder": 3,
      "fgc": 5,
      "difficultyPref": 3
    },
    "description": "Coloca bloques en el aire para construir murallas y salvarse. Mina hierro, oro y diamantes para fabricar armas y suelta vagonetas con rieles que atrapan.",
    "pros": [
      "Las armas de diamante tienen uno de los daños por segundo más altos de la historia",
      "Los bloques rompen todas las reglas de recuperación",
      "Vagoneta (Side-B) pasa escudos y atrapa con agarre"
    ],
    "cons": [
      "Sin materiales sus ataques se rompen y queda inofensivo",
      "Salto básico muy corto"
    ],
    "beginnerTip": "Construye un muro de dos bloques al inicio de cada partida y ponte a minar para obtener diamante rápido.",
    "killMoves": [
      "Espada de Diamante F-Smash",
      "Minecart (Vagoneta)",
      "Up Smash de Magma"
    ],
    "oosMove": "Jab o Neutral Air",
    "recoveryTip": "Usa objetos, bloques o teletransportes para alterar tu trayectoria de caída.",
    "strongAgainst": [
      "Luchadores convencionales que caen fácil en trampas"
    ],
    "vulnerableTo": [
      "Personajes agresivos que no dan respiro para preparar recursos"
    ]
  },
  {
    "id": "sephiroth",
    "name": "Sefirot",
    "title": "El Ángel de una Sola Ala",
    "series": "Final Fantasy",
    "archetype": "Swordie",
    "archetypeLabel": "Espadachín de Ultra Rango / Cristal Cannon y Ala Negra",
    "difficulty": "Media",
    "difficultyStars": 2,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/sephiroth/main.png",
    "accentColor": "#64748b",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 74,
      "power": 94,
      "range": 99,
      "combos": 68,
      "recovery": 85
    },
    "scores": {
      "swordie": 10,
      "zoner": 7,
      "heavy": 4,
      "allrounder": 5,
      "rushdown": 3,
      "tricky": 5,
      "fgc": 3,
      "difficultyPref": 2
    },
    "description": "Espada Masamune con alcance colosal. Cuando acumula daño brota su Ala Negra, otorgándole un triple salto, velocidad aumentada y súper armadura en Smash.",
    "pros": [
      "Mayor alcance con espada del juego",
      "Megaflare y Gigaflare generan explosiones atómicas",
      "El Ala Negra le da armadura y tercer salto"
    ],
    "cons": [
      "Extremadamente ligero y frágil: muere si recibe golpes directos contundentes",
      "Hitbox amplia"
    ],
    "beginnerTip": "Mantén a raya con Forward-Tilt; nadie puede cruzar la longitud de tu espada sin pagar daño.",
    "killMoves": [
      "Gigaflare",
      "Octaslash",
      "Down Air (Hell's Gate atraviesa plataformas)"
    ],
    "oosMove": "Neutral Air o Scintilla (Contraataque)",
    "recoveryTip": "Aprovecha el alcance de tu espada para cortar a rivales que intenten interceptarte.",
    "strongAgainst": [
      "Luchadores de poco rango y brawlers cuerpo a cuerpo"
    ],
    "vulnerableTo": [
      "Zoners de proyectiles pesados a larga distancia"
    ]
  },
  {
    "id": "pyra",
    "name": "Pyra / Mythra",
    "title": "Las Espadas Égidas",
    "series": "Xenoblade Chronicles 2",
    "archetype": "All-Rounder",
    "archetypeLabel": "Dúo Égida / Velocidad y Potencia Divina",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/pyra/main.png",
    "accentColor": "#ef4444",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 88,
      "power": 95,
      "range": 84,
      "combos": 92,
      "recovery": 68
    },
    "scores": {
      "allrounder": 10,
      "swordie": 10,
      "rushdown": 9,
      "heavy": 8,
      "zoner": 4,
      "tricky": 5,
      "fgc": 4,
      "difficultyPref": 1
    },
    "description": "El mejor dúo de espadas del juego. Juega con Mythra para dominar el neutral con velocidad supersónica y Foresight, y cambia a Pyra (Down-B) para noquear con fuego descomunal.",
    "pros": [
      "Mythra tiene la velocidad y fluidez más seguras del juego",
      "Pyra tiene poder de remate en Smash a porcentajes mínimos",
      "Cambio instantáneo según lo requiera la partida"
    ],
    "cons": [
      "Recuperaciones algo lineales que pueden ser interceptadas si caen profundo"
    ],
    "beginnerTip": "Empieza la partida con Mythra para acumular daño sin parar y cambia a Pyra en cuanto el rival tenga más del 80%.",
    "killMoves": [
      "Back Air",
      "Up Smash fuera de escudo",
      "Forward Smash"
    ],
    "oosMove": "Up-B o Neutral Air",
    "recoveryTip": "Recuperación balanceada: salta en el momento justo y dirígete al borde.",
    "strongAgainst": [
      "Estilo flexible adaptable contra cualquier rival"
    ],
    "vulnerableTo": [
      "Especialistas extremos que dominan un área específica"
    ]
  },
  {
    "id": "kazuya",
    "name": "Kazuya Mishima",
    "title": "El Puño de Hierro",
    "series": "Tekken",
    "archetype": "FGC",
    "archetypeLabel": "FGC / Combos Letales 0-a-Muerte y Rage Drive",
    "difficulty": "Alta",
    "difficultyStars": 3,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/kazuya/main.png",
    "accentColor": "#b91c1c",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 46,
      "power": 100,
      "range": 52,
      "combos": 98,
      "recovery": 68
    },
    "scores": {
      "fgc": 10,
      "heavy": 9,
      "rushdown": 6,
      "tricky": 5,
      "allrounder": 3,
      "swordie": 1,
      "zoner": 2,
      "difficultyPref": 3
    },
    "description": "Superarmadura pesada, comandos de agarre demoníacos y el temido Electric Wind God Fist (EWGF). Capaz de eliminar a cualquier rival desde 0% si dominas la secuencia.",
    "pros": [
      "Combos que noquean desde 0% en manos expertas",
      "Rage Drive al superar el 100% liquida con un solo agarre",
      "Superarmadura Tough Guy que resiste golpes"
    ],
    "cons": [
      "Salto muy rígido y velocidad al caminar lenta",
      "Curva de aprendizaje empinada para ejecutar inputs de Tekken"
    ],
    "beginnerTip": "Aprende primero su combo de 10 golpes manteniendo pulsado el botón A para castigar sin fallar.",
    "killMoves": [
      "Electric Wind God Fist -> Up Smash",
      "Rage Drive",
      "Dragon Uppercut"
    ],
    "oosMove": "Up-B (Rising Uppercut)",
    "recoveryTip": "Usa ataques especiales con avance hacia adelante para impulsarte.",
    "strongAgainst": [
      "Cualquiera que se descuide en combate cerrado 1v1"
    ],
    "vulnerableTo": [
      "Campers a larga distancia y personajes con desarticulación"
    ]
  },
  {
    "id": "sora",
    "name": "Sora",
    "title": "El Elegido de la Llave Espada",
    "series": "Kingdom Hearts",
    "archetype": "Swordie",
    "archetypeLabel": "Espadachín Flotante / Magia y Triple Salto Aéreo",
    "difficulty": "Fácil",
    "difficultyStars": 1,
    "avatarUrl": "https://www.smashbros.com/assets_v2/img/fighter/sora/main.png",
    "accentColor": "#3b82f6",
    "bgGradient": "from-red-600/30 to-amber-600/20",
    "stats": {
      "speed": 72,
      "power": 82,
      "range": 80,
      "combos": 88,
      "recovery": 98
    },
    "scores": {
      "swordie": 9,
      "allrounder": 8,
      "tricky": 7,
      "zoner": 6,
      "rushdown": 5,
      "heavy": 2,
      "fgc": 3,
      "difficultyPref": 1
    },
    "description": "Recuperación casi infinita gracias a su salto flotante y la combinación de Up-B con Side-B (Sonic Blade). Magias ciclan entre Piro, Electro y Hielo.",
    "pros": [
      "Una de las mejores recuperaciones de todo el juego",
      "Sonic Blade persigue automáticamente al rival",
      "Combos de 3 golpes fáciles en tierra y aire"
    ],
    "cons": [
      "Muy ligero y flotante: puede sufrir para descender rápidamente"
    ],
    "beginnerTip": "Combina Up-B seguido inmediatamente de Side-B (Sonic Blade) para volver desde cualquier rincón del abismo.",
    "killMoves": [
      "Forward Smash (Corte Potente)",
      "Back Air (Golpe de Espalda)",
      "Up-Air en Techo"
    ],
    "oosMove": "Up-B o Shield Grab (Agarre tras bloqueo)",
    "recoveryTip": "Aprovecha el alcance de tu espada para cortar a rivales que intenten interceptarte.",
    "strongAgainst": [
      "Luchadores de poco rango y brawlers cuerpo a cuerpo"
    ],
    "vulnerableTo": [
      "Zoners de proyectiles pesados a larga distancia"
    ]
  }
];
