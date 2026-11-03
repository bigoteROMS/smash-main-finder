// Lógica de Matching Avanzada, Fighter Card PNG, Cazador de Matchups, Sinergias 2v2 y Guía de Combate
const { useState, useEffect, useMemo, useRef } = React;

const STAGES = [
  { id: "battlefield", name: "Campo de Batalla (Battlefield)", url: "https://ssb.wiki.gallery/images/thumb/7/75/Battlefield_SSBU.png/1200px-Battlefield_SSBU.png" },
  { id: "final_destination", name: "Destino Final (Final Destination)", url: "https://ssb.wiki.gallery/images/thumb/8/87/Final_Destination_SSBU.png/1200px-Final_Destination_SSBU.png" },
  { id: "fountain_of_dreams", name: "Fuente de los Sueños (Fountain of Dreams)", url: "https://ssb.wiki.gallery/images/thumb/4/4b/Fountain_of_Dreams_SSBU.png/1200px-Fountain_of_Dreams_SSBU.png" },
  { id: "hollow_bastion", name: "Bastión Hueco (Hollow Bastion)", url: "https://ssb.wiki.gallery/images/thumb/7/7e/Hollow_Bastion_SSBU.png/1200px-Hollow_Bastion_SSBU.png" },
  { id: "northern_cave", name: "Cueva del Norte (Northern Cave)", url: "https://ssb.wiki.gallery/images/thumb/2/23/Northern_Cave_SSBU.png/1200px-Northern_Cave_SSBU.png" },
  { id: "kalos", name: "Liga Pokémon Kalos", url: "https://ssb.wiki.gallery/images/thumb/3/3d/Kalos_Pok%C3%A9mon_League_SSBU.png/1200px-Kalos_Pok%C3%A9mon_League_SSBU.png" }
];

// Algoritmo de matching ponderado
function calculateMatches(userScores, characters) {
  const categories = ['rushdown', 'zoner', 'swordie', 'heavy', 'allrounder', 'tricky', 'fgc'];
  
  let maxScore = -999;
  let dominantCategory = 'allrounder';
  categories.forEach(cat => {
    const val = userScores[cat] || 0;
    if (val > maxScore) {
      maxScore = val;
      dominantCategory = cat;
    }
  });

  const results = characters.map(char => {
    let matchScore = 0;
    let totalWeight = 0;

    categories.forEach(cat => {
      const u = userScores[cat] || 0;
      const c = char.scores[cat] || 0;
      if (u > 0) {
        matchScore += (u * c);
        totalWeight += (u * 10);
      }
    });

    let basePercentage = totalWeight > 0 ? (matchScore / totalWeight) * 100 : 70;

    if (char.scores[dominantCategory] >= 8) basePercentage += 8;
    if (char.scores[dominantCategory] <= 2) basePercentage -= 15;

    const userDiffPref = userScores.difficultyPref || 0;
    const charDiff = char.difficultyStars || 1;
    if (userDiffPref < 0 && charDiff === 1) basePercentage += 6;
    if (userDiffPref < 0 && charDiff === 3) basePercentage -= 12;
    if (userDiffPref > 1 && charDiff >= 2) basePercentage += 6;

    let finalPercentage = Math.round(Math.min(99, Math.max(45, basePercentage)));

    return {
      ...char,
      matchPercentage: finalPercentage
    };
  });

  results.sort((a, b) => b.matchPercentage - a.matchPercentage);
  return results;
}

function playSfx(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'select') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } else if (type === 'victory') {
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25];
      notes.forEach((freq, idx) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.type = 'triangle';
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.16, ctx.currentTime + idx * 0.07);
        g.gain.linearRampToValueAtTime(0.001, ctx.currentTime + idx * 0.07 + 0.35);
        o.start(ctx.currentTime + idx * 0.07);
        o.stop(ctx.currentTime + idx * 0.07 + 0.4);
      });
    }
  } catch (e) {}
}

function triggerConfetti() {
  if (window.confetti) {
    window.confetti({ particleCount: 110, spread: 80, origin: { y: 0.6 } });
    setTimeout(() => {
      window.confetti({ particleCount: 70, angle: 60, spread: 60, origin: { x: 0 } });
      window.confetti({ particleCount: 70, angle: 120, spread: 60, origin: { x: 1 } });
    }, 250);
  }
}

function generateSwitchExplanation(currentFighter, recommendedFighter) {
  if (!currentFighter) return null;
  
  if (currentFighter.id === recommendedFighter.id) {
    return {
      action: "KEEP",
      badge: "¡MANTÉN TU MAIN ACTUAL!",
      badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      headline: `Tus respuestas confirman al 100% que ${currentFighter.name} es tu combatiente ideal.`,
      text: `Tu instinto de combate, ritmo y preferencias de ejecución están completamente alineados con ${currentFighter.name}. No te conviene cambiar de personaje: lo ideal es que profundices en sus opciones en el juego neutral y pulas tus castigos.`
    };
  }

  const reasons = [];
  const statDiffs = {
    speed: recommendedFighter.stats.speed - currentFighter.stats.speed,
    power: recommendedFighter.stats.power - currentFighter.stats.power,
    range: recommendedFighter.stats.range - currentFighter.stats.range
  };

  if (statDiffs.speed >= 12) {
    reasons.push(`Ganarás mucha más agilidad y velocidad (+${statDiffs.speed}%) para presionar sin sentirte atado.`);
  } else if (statDiffs.speed <= -15 && recommendedFighter.stats.power > currentFighter.stats.power) {
    reasons.push(`Cambias velocidad excesiva por un poder de impacto mucho más contundente (+${statDiffs.power}% de potencia).`);
  }

  if (statDiffs.range >= 15) {
    reasons.push(`Obtendrás mucho mayor alcance seguro (+${statDiffs.range}%) para golpear sin arriesgar tu propio cuerpo.`);
  }

  if (recommendedFighter.difficultyStars < currentFighter.difficultyStars) {
    reasons.push(`Reducirás la frustración técnica: ${recommendedFighter.name} es más consistente y no te exige memorizar secuencias tan complejas como ${currentFighter.name}.`);
  }

  if (reasons.length === 0) {
    reasons.push(`${recommendedFighter.name} cubre directamente los puntos ciegos de ${currentFighter.name} en el juego neutral y te dará un soplo de aire fresco.`);
  }

  return {
    action: "SWITCH",
    badge: "¡TE RECOMENDAMOS CAMBIAR DE MAIN!",
    badgeClass: "bg-amber-500/20 text-amber-300 border-amber-500/50",
    headline: `Actualmente juegas con ${currentFighter.name}, pero ${recommendedFighter.name} encaja mejor con tu instinto real.`,
    text: reasons.join(" ")
  };
}

// Generador de imagen PNG para Fighter Card usando Canvas
function downloadFighterCard(playerTag, mainFighter, pocketPicks) {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext('2d');

  // Fondo oscuro con degradado
  const bgGrad = ctx.createLinearGradient(0, 0, 1200, 630);
  bgGrad.addColorStop(0, '#070a13');
  bgGrad.addColorStop(0.5, '#111827');
  bgGrad.addColorStop(1, '#1e1b4b');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1200, 630);

  // Marco de borde rojo Smash
  ctx.strokeStyle = '#dc2626';
  ctx.lineWidth = 14;
  ctx.strokeRect(20, 20, 1160, 590);

  // Resplandor interior
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 3;
  ctx.strokeRect(30, 30, 1140, 570);

  // Título de la tarjeta
  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 24px Montserrat, sans-serif';
  ctx.fillText('SUPER SMASH BROS. ULTIMATE • OFFICIAL FIGHTER CARD', 60, 80);

  // Nombre de Jugador (Tag)
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 64px Montserrat, sans-serif';
  ctx.fillText((playerTag || 'SMASH FIGHTER').toUpperCase(), 60, 155);

  // Main Principal
  ctx.fillStyle = '#ef4444';
  ctx.font = 'bold 24px Montserrat, sans-serif';
  ctx.fillText('MAIN OFICIAL:', 60, 220);

  ctx.fillStyle = '#ffffff';
  ctx.font = '900 48px Montserrat, sans-serif';
  ctx.fillText(mainFighter.name, 60, 275);

  ctx.fillStyle = '#cbd5e1';
  ctx.font = 'italic 20px Montserrat, sans-serif';
  ctx.fillText(mainFighter.archetypeLabel, 60, 310);

  // Estadísticas en texto
  ctx.fillStyle = '#94a3b8';
  ctx.font = 'bold 18px Montserrat, sans-serif';
  ctx.fillText(`VELOCIDAD: ${mainFighter.stats.speed}%   |   POTENCIA: ${mainFighter.stats.power}%   |   ALCANCE: ${mainFighter.stats.range}%`, 60, 370);
  ctx.fillText(`AFINIDAD TOTAL: ${mainFighter.matchPercentage}% MATCH`, 60, 400);

  // Pocket Picks
  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 22px Montserrat, sans-serif';
  ctx.fillText('POCKET PICKS SECUNDARIOS:', 60, 470);

  const pocketText = pocketPicks.map(p => `• ${p.name} (${p.archetypeLabel})`).join('    ');
  ctx.fillStyle = '#e2e8f0';
  ctx.font = 'bold 20px Montserrat, sans-serif';
  ctx.fillText(pocketText, 60, 510);

  // Pie de tarjeta
  ctx.fillStyle = '#64748b';
  ctx.font = '14px Montserrat, sans-serif';
  ctx.fillText('Generado en bigoteroms.github.io/smash-main-finder', 60, 575);

  // Cargar y dibujar el render del luchador
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    ctx.drawImage(img, 720, 80, 440, 480);
    const link = document.createElement('a');
    link.download = `FighterCard_${(playerTag || 'Smash').replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  img.onerror = () => {
    // Si la imagen falla por CORS, descargar canvas de todas formas con gráfica
    const link = document.createElement('a');
    link.download = `FighterCard_${(playerTag || 'Smash').replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  img.src = mainFighter.avatarUrl;
}

function MainFinderApp() {
  const [currentStep, setCurrentStep] = useState('welcome'); // welcome | selectCurrent | quiz | result | roster | matchups | doubles
  const [quizMode, setQuizMode] = useState('tournament'); // 'express' (4 preguntas) | 'tournament' (8 preguntas)
  const [selectedCurrentMainId, setSelectedCurrentMainId] = useState(null);
  const [currentMainSearch, setCurrentMainSearch] = useState('');
  
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [userScores, setUserScores] = useState({
    rushdown: 0, zoner: 0, swordie: 0, heavy: 0, allrounder: 0, tricky: 0, fgc: 0, difficultyPref: 0
  });
  const [matchResults, setMatchResults] = useState([]);
  
  // Fighter Card Modal
  const [showCardModal, setShowCardModal] = useState(false);
  const [playerTag, setPlayerTag] = useState('');

  // Matchup Hunter State
  const [hatedFighterId, setHatedFighterId] = useState('ness');
  const [matchupSearch, setMatchupSearch] = useState('');

  // 2v2 Doubles State
  const [partnerFighterId, setPartnerFighterId] = useState('mario');
  const [doublesSearch, setDoublesSearch] = useState('');

  // Roster
  const [rosterSearch, setRosterSearch] = useState('');
  const [selectedArchetypeFilter, setSelectedArchetypeFilter] = useState('All');
  const [modalFighter, setModalFighter] = useState(null);

  // Escenario
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [stageAutoRotate, setStageAutoRotate] = useState(true);

  const rawQuestions = window.QUESTIONS || [];
  const allCharacters = window.CHARACTERS || [];

  // Filtrar preguntas según modo (Express = 4 preguntas, Torneo = 8 preguntas)
  const activeQuestions = useMemo(() => {
    if (quizMode === 'express') {
      return rawQuestions.filter(q => q.isExpress);
    }
    return rawQuestions;
  }, [rawQuestions, quizMode]);

  useEffect(() => {
    if (!stageAutoRotate) return;
    const interval = setInterval(() => {
      setCurrentStageIndex(prev => (prev + 1) % STAGES.length);
    }, 12000);
    return () => clearInterval(interval);
  }, [stageAutoRotate]);

  const currentStage = STAGES[currentStageIndex];

  const handleStartFlow = (mode = 'tournament') => {
    playSfx('select');
    setQuizMode(mode);
    setSelectedCurrentMainId(null);
    setCurrentMainSearch('');
    setCurrentStep('selectCurrent');
  };

  const handleConfirmCurrentMain = (fighterId) => {
    playSfx('select');
    setSelectedCurrentMainId(fighterId);
    setQuestionIndex(0);
    setAnswers({});
    setUserScores({
      rushdown: 0, zoner: 0, swordie: 0, heavy: 0, allrounder: 0, tricky: 0, fgc: 0, difficultyPref: 0
    });
    setCurrentStep('quiz');
  };

  const handleSelectOption = (option) => {
    playSfx('select');
    const newAnswers = { ...answers, [questionIndex]: option.id };
    setAnswers(newAnswers);

    const newScores = { ...userScores };
    if (option.weights) {
      Object.keys(option.weights).forEach(k => {
        newScores[k] = (newScores[k] || 0) + option.weights[k];
      });
    }
    setUserScores(newScores);

    if (questionIndex + 1 < activeQuestions.length) {
      setTimeout(() => {
        setQuestionIndex(prev => prev + 1);
      }, 150);
    } else {
      const ranked = calculateMatches(newScores, allCharacters);
      setMatchResults(ranked);
      setCurrentStep('result');
      setTimeout(() => {
        playSfx('victory');
        triggerConfetti();
      }, 300);
    }
  };

  const primaryMatch = matchResults[0] || allCharacters[0];
  const pocketPicks = matchResults.slice(1, 4);
  const currentFighter = allCharacters.find(c => c.id === selectedCurrentMainId) || null;
  const switchAdvice = generateSwitchExplanation(currentFighter, primaryMatch);

  // Cálculo de Cazador de Matchups
  const hatedFighter = allCharacters.find(c => c.id === hatedFighterId) || allCharacters[0];
  const counterPicks = useMemo(() => {
    if (!hatedFighter) return [];
    const arch = hatedFighter.archetype;
    // Lógica competitiva de counter-picks de Smash Ultimate
    return allCharacters.filter(c => {
      if (c.id === hatedFighter.id) return false;
      if (arch === 'Zoner' && (c.archetype === 'Rushdown' || c.name.includes('Fox') || c.name.includes('Wolf') || c.name.includes('Palutena'))) return true;
      if (arch === 'Heavyweight' && (c.archetype === 'Zoner' || c.archetype === 'Rushdown' || c.archetype === 'Swordie')) return true;
      if (arch === 'Rushdown' && (c.archetype === 'Swordie' || c.archetype === 'Heavyweight')) return true;
      if (arch === 'Swordie' && (c.archetype === 'Zoner' || c.archetype === 'Rushdown')) return true;
      return c.matchPercentage > 85;
    }).slice(0, 3);
  }, [hatedFighter, allCharacters]);

  // Cálculo de Sinergia de Dobles 2v2
  const partnerFighter = allCharacters.find(c => c.id === partnerFighterId) || allCharacters[0];
  const synergyPicks = useMemo(() => {
    if (!partnerFighter) return [];
    const arch = partnerFighter.archetype;
    // En 2v2:
    // Si tu amigo es Heavyweight -> Lo ideal es un Zoner o Swordie que lo cubra
    // Si tu amigo es Zoner -> Lo ideal es un Rushdown agresivo o Heavyweight
    // Si tu amigo es Rushdown -> Un Heavyweight para matar o un Swordie de rango
    let desiredArch = 'All-Rounder';
    if (arch === 'Heavyweight' || arch === 'Grappler') desiredArch = 'Zoner';
    else if (arch === 'Zoner') desiredArch = 'Rushdown';
    else if (arch === 'Rushdown') desiredArch = 'Heavyweight';
    else if (arch === 'Swordie') desiredArch = 'Rushdown';
    else desiredArch = 'Swordie';

    return allCharacters.filter(c => c.id !== partnerFighter.id && (c.archetype === desiredArch || c.archetype === 'All-Rounder')).slice(0, 3);
  }, [partnerFighter, allCharacters]);

  const currentMainCandidates = useMemo(() => {
    if (!currentMainSearch.trim()) return allCharacters;
    const q = currentMainSearch.toLowerCase();
    return allCharacters.filter(c => c.name.toLowerCase().includes(q) || c.series.toLowerCase().includes(q));
  }, [allCharacters, currentMainSearch]);

  const filteredRoster = useMemo(() => {
    return allCharacters.filter(c => {
      const q = rosterSearch.toLowerCase();
      const matchesSearch = c.name.toLowerCase().includes(q) || c.series.toLowerCase().includes(q) || c.archetypeLabel.toLowerCase().includes(q);
      const matchesArch = selectedArchetypeFilter === 'All' || c.archetype === selectedArchetypeFilter;
      return matchesSearch && matchesArch;
    });
  }, [allCharacters, rosterSearch, selectedArchetypeFilter]);

  const archetypes = ['All', 'All-Rounder', 'Rushdown', 'Heavyweight', 'Swordie', 'Zoner', 'Tricky', 'FGC', 'Grappler'];

  return (
    <div className="min-h-screen text-slate-100 flex flex-col font-sans selection:bg-red-500 selection:text-white relative overflow-x-hidden">
      
      {/* FONDO ESCENARIO ROTATORIO */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {STAGES.map((stage, idx) => (
          <div
            key={stage.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 transform scale-105 ${
              idx === currentStageIndex ? 'opacity-30' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${stage.url}')`, backgroundAttachment: 'fixed', filter: 'blur(1.5px)' }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/75 to-slate-950/95" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-red-600/15 blur-[150px] rounded-full" />
      </div>

      {/* CABECERA CON NUEVAS PESTAÑAS */}
      <header className="relative z-30 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => setCurrentStep('welcome')}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 flex items-center justify-center shadow-lg shadow-red-600/40 font-black text-white text-xl border border-red-400/30">
              ⚔️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300 text-lg">
                  SMASH MAIN FINDER
                </span>
                <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30">
                  Ultimate 86
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Encuentra tu Main, Matchups y Sinergias 2v2</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setCurrentStep('matchups')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition border ${
                currentStep === 'matchups' ? 'bg-amber-600 text-white border-amber-500 shadow-md' : 'bg-slate-900/80 text-slate-300 hover:text-white border-slate-700/80'
              }`}
            >
              🥊 Counters
            </button>
            <button
              onClick={() => setCurrentStep('doubles')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition border ${
                currentStep === 'doubles' ? 'bg-indigo-600 text-white border-indigo-500 shadow-md' : 'bg-slate-900/80 text-slate-300 hover:text-white border-slate-700/80'
              }`}
            >
              👥 2v2
            </button>
            <button
              onClick={() => setCurrentStep('roster')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition border ${
                currentStep === 'roster' ? 'bg-red-600 text-white border-red-500 shadow-md' : 'bg-slate-900/80 text-slate-300 hover:text-white border-slate-700/80'
              }`}
            >
              Plantilla (86)
            </button>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 py-8 flex flex-col justify-center">
        
        {/* --- PANTALLA 1: BIENVENIDA CON SELECTOR DE MODO (EXPRESS O TORNEO) --- */}
        {currentStep === 'welcome' && (
          <div className="max-w-4xl mx-auto text-center space-y-7 animate-fadeIn my-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-red-500/40 text-red-300 text-xs sm:text-sm font-semibold shadow-lg backdrop-blur">
              <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
              ¡Herramienta Definitiva para Super Smash Bros. Ultimate!
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-7xl font-black tracking-tight leading-none text-white drop-shadow-md">
                Encuentra tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">MAIN</span> Perfecto
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Elige entre un test rápido de 30 segundos o el diagnóstico de torneo completo. Genera tu <strong className="text-amber-400">Fighter Card</strong>, analiza tus <strong className="text-red-400">Counters</strong> y crea tu <strong className="text-indigo-400">Dúo 2v2</strong>.
              </p>
            </div>

            {/* Selector de Modo de Test */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-2">
              {/* Modo Express */}
              <div
                onClick={() => handleStartFlow('express')}
                className="p-5 rounded-3xl bg-slate-900/85 hover:bg-slate-850 border-2 border-slate-700 hover:border-amber-400 transition cursor-pointer text-left group shadow-xl active:scale-95"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">⚡</span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">30 Segundos</span>
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition">Modo Express</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">4 preguntas clave para descubrir tu estilo al instante en juntas con amigos.</p>
                <div className="mt-3 text-xs font-bold text-amber-400 flex items-center gap-1">Empezar Express ➔</div>
              </div>

              {/* Modo Torneo */}
              <div
                onClick={() => handleStartFlow('tournament')}
                className="p-5 rounded-3xl bg-gradient-to-br from-slate-900/90 to-red-950/40 hover:from-slate-850 hover:to-red-950/60 border-2 border-red-500/60 hover:border-red-400 transition cursor-pointer text-left group shadow-2xl active:scale-95"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🏆</span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-red-600/30 text-red-300 border border-red-500/50">Recomendado</span>
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-red-300 transition">Modo Torneo</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">8 preguntas tácticas (juego neutral, bordes, combos y recuperación).</p>
                <div className="mt-3 text-xs font-bold text-red-400 flex items-center gap-1">Empezar Modo Torneo ➔</div>
              </div>
            </div>

            {/* Accesos Rápidos Nuevos */}
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <button onClick={() => setCurrentStep('matchups')} className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs font-bold hover:bg-slate-800 transition flex items-center gap-1.5">
                <span>🥊</span> Cazador de Counters
              </button>
              <button onClick={() => setCurrentStep('doubles')} className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs font-bold hover:bg-slate-800 transition flex items-center gap-1.5">
                <span>👥</span> Parejas 2v2
              </button>
              <button onClick={() => setCurrentStep('roster')} className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs font-bold hover:bg-slate-800 transition flex items-center gap-1.5">
                <span>📖</span> Guía de 86 Luchadores
              </button>
            </div>
          </div>
        )}

        {/* --- PANTALLA 1.5: SELECCIONAR MAIN ACTUAL --- */}
        {currentStep === 'selectCurrent' && (
          <div className="max-w-3xl mx-auto w-full animate-fadeIn my-auto space-y-5">
            <div className="bg-slate-950/85 border border-slate-800 p-6 sm:p-7 rounded-3xl shadow-2xl backdrop-blur-md text-center">
              <span className="text-xs font-black text-amber-400 tracking-widest uppercase mb-1 block">
                PASO PREVIO AL TEST ({quizMode === 'express' ? 'MODO EXPRESS' : 'MODO TORNEO'})
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                ¿A quién juegas actualmente en Smash?
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
                Selecciona al combatiente con el que más juegas para evaluar si te conviene mantenerlo o cambiar.
              </p>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={() => handleConfirmCurrentMain(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs border border-slate-700 transition"
                >
                  🌱 Soy nuevo / No tengo ningún Main todavía
                </button>
              </div>

              <div className="mt-5 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Buscar tu luchador actual..."
                  value={currentMainSearch}
                  onChange={(e) => setCurrentMainSearch(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition text-center"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5 max-h-[380px] overflow-y-auto p-2 bg-slate-950/60 rounded-2xl border border-slate-850">
              {currentMainCandidates.map((fighter) => (
                <button
                  key={fighter.id}
                  onClick={() => handleConfirmCurrentMain(fighter.id)}
                  className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-amber-400/70 transition flex flex-col items-center text-center group active:scale-95"
                >
                  <div className="w-14 h-14 rounded-lg bg-slate-950 p-1 mb-1.5 flex items-center justify-center overflow-hidden border border-slate-800 group-hover:border-amber-400/40">
                    <img src={fighter.avatarUrl} alt={fighter.name} className="w-full h-full object-contain filter drop-shadow group-hover:scale-110 transition" loading="lazy" />
                  </div>
                  <span className="text-xs font-bold text-slate-200 group-hover:text-white truncate w-full">{fighter.name}</span>
                  <span className="text-[10px] text-slate-500 truncate w-full">{fighter.archetype}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* --- PANTALLA 2: CUESTIONARIO --- */}
        {currentStep === 'quiz' && activeQuestions[questionIndex] && (
          <div className="max-w-2xl mx-auto w-full animate-fadeIn my-auto">
            <div className="mb-6">
              <div className="flex justify-between items-center text-xs font-bold text-slate-400 mb-2">
                <span className="uppercase tracking-wider">PREGUNTA {questionIndex + 1} DE {activeQuestions.length} ({quizMode === 'express' ? 'EXPRESS' : 'TORNEO'})</span>
                <span className="text-amber-400 font-black">{Math.round(((questionIndex + 1) / activeQuestions.length) * 100)}%</span>
              </div>
              <div className="w-full h-3 bg-slate-900/90 rounded-full overflow-hidden p-0.5 border border-slate-800 backdrop-blur">
                <div
                  className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 rounded-full transition-all duration-300"
                  style={{ width: `${((questionIndex + 1) / activeQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="bg-slate-950/85 border border-slate-800 p-6 sm:p-7 rounded-3xl shadow-2xl mb-6 backdrop-blur-md">
              <span className="text-xs font-black text-red-400 tracking-widest uppercase mb-1.5 block">
                {activeQuestions[questionIndex].title}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-snug">
                {activeQuestions[questionIndex].question}
              </h2>
              {activeQuestions[questionIndex].subtitle && (
                <p className="text-slate-400 text-sm">{activeQuestions[questionIndex].subtitle}</p>
              )}
            </div>

            <div className="space-y-3.5">
              {activeQuestions[questionIndex].options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt)}
                  className="w-full text-left p-4 sm:p-5 rounded-2xl bg-slate-950/75 hover:bg-slate-900 border border-slate-800 hover:border-red-500/70 hover:shadow-xl hover:shadow-red-600/20 active:scale-[0.99] transition duration-150 group flex items-start gap-4 backdrop-blur-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 group-hover:bg-red-600 group-hover:text-white border border-slate-700/80 group-hover:border-red-400 flex items-center justify-center font-black text-slate-300 transition shrink-0">
                    {opt.id.toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-extrabold text-slate-100 group-hover:text-white text-base sm:text-lg mb-0.5 flex items-center gap-2">
                      {opt.label}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{opt.description}</p>
                  </div>
                  <div className="text-slate-500 group-hover:text-amber-400 transition transform group-hover:translate-x-1 shrink-0 self-center font-bold">➔</div>
                </button>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center pt-2">
              <button
                onClick={() => questionIndex > 0 && setQuestionIndex(prev => prev - 1)}
                disabled={questionIndex === 0}
                className={`text-xs font-bold px-4 py-2 rounded-xl border transition ${
                  questionIndex === 0 ? 'opacity-30 border-slate-800 text-slate-600 cursor-not-allowed' : 'border-slate-700 text-slate-300 hover:bg-slate-800 bg-slate-900/60'
                }`}
              >
                ← Pregunta anterior
              </button>
              <span className="text-xs text-slate-400">Responde según tu instinto</span>
            </div>
          </div>
        )}

        {/* --- PANTALLA 3: RESULTADOS, COMPARATIVA Y GUÍA DE COMBATE --- */}
        {currentStep === 'result' && (
          <div className="max-w-5xl mx-auto w-full animate-scaleUp space-y-6 my-auto">
            
            {/* Veredicto de Cambio de Main */}
            {switchAdvice && (
              <div className="bg-slate-950/90 border-2 border-slate-700 p-6 rounded-3xl shadow-2xl backdrop-blur-md space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{switchAdvice.action === 'KEEP' ? '🛡️' : '⚡'}</span>
                    <span className={`text-xs font-black px-3 py-1 rounded-full border uppercase tracking-wider ${switchAdvice.badgeClass}`}>
                      {switchAdvice.badge}
                    </span>
                  </div>
                  {currentFighter && (
                    <span className="text-xs text-slate-400">
                      Comparando: <strong>{currentFighter.name}</strong> vs <strong>{primaryMatch.name}</strong>
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5">{switchAdvice.headline}</h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{switchAdvice.text}</p>
                </div>

                {currentFighter && currentFighter.id !== primaryMatch.id && (
                  <div className="pt-3 border-t border-slate-800">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                        <div className="w-14 h-14 rounded-xl bg-slate-950 p-1 flex items-center justify-center shrink-0 border border-slate-800">
                          <img src={currentFighter.avatarUrl} alt={currentFighter.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Tu Main Actual</span>
                          <h4 className="font-extrabold text-white text-base truncate">{currentFighter.name}</h4>
                          <span className="text-xs text-slate-400">{currentFighter.archetypeLabel}</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-red-950/40 to-amber-950/30 border border-red-500/50 flex items-center gap-3">
                        <div className="w-14 h-14 rounded-xl bg-slate-950 p-1 flex items-center justify-center shrink-0 border border-red-500/40">
                          <img src={primaryMatch.avatarUrl} alt={primaryMatch.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-black text-amber-400 uppercase">Recomendado para ti</span>
                          <h4 className="font-black text-white text-base truncate">{primaryMatch.name}</h4>
                          <span className="text-xs text-emerald-400 font-bold">{primaryMatch.matchPercentage}% AFINIDAD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tarjeta Principal del Personaje */}
            <div className="relative rounded-3xl bg-slate-950/90 border-2 border-red-500/70 shadow-2xl overflow-hidden p-6 sm:p-8 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-amber-600/10 to-transparent pointer-events-none" />
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 flex flex-col items-center text-center">
                  <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 p-3 border-2 border-slate-700/80 shadow-2xl flex items-center justify-center overflow-hidden group">
                    <img
                      src={primaryMatch.avatarUrl}
                      alt={primaryMatch.name}
                      className="w-full h-full object-contain filter drop-shadow-2xl transform group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-red-600 text-white font-black text-xs px-3 py-1 rounded-full border border-red-400 shadow-md">
                      {primaryMatch.matchPercentage}% AFINIDAD
                    </div>
                  </div>

                  <span className="text-xs font-bold text-slate-400 mt-3">{primaryMatch.series}</span>
                  <div className="inline-flex items-center gap-2 mt-1.5 px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-amber-300 font-bold">
                    <span>Dificultad:</span>
                    <span>{primaryMatch.difficulty}</span>
                    <span className="text-amber-400">{'★'.repeat(primaryMatch.difficultyStars)}</span>
                  </div>
                </div>

                <div className="md:col-span-7 space-y-4">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">{primaryMatch.archetypeLabel}</span>
                    <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight">{primaryMatch.name}</h3>
                    <p className="text-sm font-semibold text-amber-300 italic">"{primaryMatch.title}"</p>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{primaryMatch.description}</p>

                  <div className="space-y-1.5 pt-1">
                    <div className="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                      <span>✓</span> Por qué encaja con tu estilo:
                    </div>
                    {primaryMatch.pros.map((pro, i) => (
                      <div key={i} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2">
                        <span className="text-emerald-400 font-bold mt-0.5">•</span>
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed">
                    <span className="font-black text-amber-300 block mb-1">💡 Consejo de oro para tus partidas:</span>
                    {primaryMatch.beginnerTip}
                  </div>
                </div>
              </div>

              {/* Guía de Combate Práctica: Kill Moves, OoS y Recuperación */}
              <div className="mt-8 pt-6 border-t border-slate-800 relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                  <span className="text-xs font-black text-rose-400 uppercase tracking-wider block mb-2">💥 Kill Moves (Para Matar):</span>
                  {(primaryMatch.killMoves || ["Forward Smash", "Back Air"]).map((m, i) => (
                    <div key={i} className="text-xs text-slate-300 mb-1">• {m}</div>
                  ))}
                </div>

                <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                  <span className="text-xs font-black text-sky-400 uppercase tracking-wider block mb-2">🛡️ Fuera de Escudo (OoS):</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{primaryMatch.oosMove || "Up-B o Neutral Air"}</p>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                  <span className="text-xs font-black text-emerald-400 uppercase tracking-wider block mb-2">🪂 Recuperación Segura:</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{primaryMatch.recoveryTip || "Guarda tu salto doble y usa tu Up-B al borde."}</p>
                </div>
              </div>

              {/* Estadísticas de combate */}
              <div className="mt-6 pt-5 border-t border-slate-850 relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {Object.entries(primaryMatch.stats).map(([stat, val]) => (
                    <div key={stat} className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <div className="flex justify-between items-center text-[11px] font-bold text-slate-400 mb-1">
                        <span className="capitalize">{stat === 'speed' ? 'Velocidad' : stat === 'power' ? 'Potencia' : stat === 'range' ? 'Alcance' : stat === 'combos' ? 'Combos' : 'Supervivencia'}</span>
                        <span className="text-white font-extrabold">{val}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-500 to-amber-400 rounded-full" style={{ width: `${val}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Alternativas / Pocket Picks */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span>🎒</span> 3 Pocket Picks Secundarios Recomendados
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                {pocketPicks.map((pocket) => (
                  <div key={pocket.id} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-3 backdrop-blur-md">
                    <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-700/80 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                      <img src={pocket.avatarUrl} alt={pocket.name} className="w-full h-full object-contain filter drop-shadow" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-amber-400">{pocket.matchPercentage}% MATCH</span>
                        <span className="text-[10px] text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">{pocket.difficulty}</span>
                      </div>
                      <h5 className="font-extrabold text-white text-sm truncate">{pocket.name}</h5>
                      <p className="text-[11px] text-slate-400 truncate">{pocket.archetypeLabel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTONES DE ACCIÓN: FIGHTER CARD PNG Y MÁS */}
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setShowCardModal(true)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 hover:brightness-110 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/30 transition flex items-center gap-2 border border-amber-300"
              >
                <span>📸</span>
                <span>Generar Mi Fighter Card (PNG)</span>
              </button>
              <button
                onClick={() => handleStartFlow('tournament')}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 transition"
              >
                🔄 Repetir Test
              </button>
              <button
                onClick={() => setCurrentStep('matchups')}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-sm border border-slate-700 transition"
              >
                🥊 Ver Counters de {primaryMatch.name}
              </button>
            </div>
          </div>
        )}

        {/* --- PANTALLA 4: CAZADOR DE MATCHUPS (CONTRA QUIEN PIERDES) --- */}
        {currentStep === 'matchups' && (
          <div className="max-w-4xl mx-auto w-full animate-fadeIn space-y-6">
            <div className="bg-slate-950/85 border border-slate-800 p-6 rounded-3xl backdrop-blur-md">
              <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-1">HERRAMIENTA TÁCTICA</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">🥊 Cazador de Matchups: ¿A quién no puedes ganarle?</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Selecciona al combatiente que más te cuesta vencer en Smash Ultimate y descubre qué luchadores y estrategias lo destrozan.
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-3 items-center">
                <input
                  type="text"
                  placeholder="Buscar personaje odiado (ej: Ness, Samus, Sonic, Kazuya...)"
                  value={matchupSearch}
                  onChange={(e) => setMatchupSearch(e.target.value)}
                  className="w-full sm:w-72 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-red-500"
                />
                <span className="text-xs text-slate-500">Seleccionado: <strong className="text-white">{hatedFighter.name}</strong></span>
              </div>

              {/* Mini lista de selección */}
              <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar mt-2">
                {allCharacters
                  .filter(c => !matchupSearch || c.name.toLowerCase().includes(matchupSearch.toLowerCase()))
                  .map(c => (
                    <button
                      key={c.id}
                      onClick={() => setHatedFighterId(c.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 shrink-0 border transition ${
                        hatedFighterId === c.id ? 'bg-red-600 text-white border-red-400 shadow-md' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      <img src={c.avatarUrl} alt={c.name} className="w-5 h-5 object-contain" />
                      <span>{c.name}</span>
                    </button>
                  ))}
              </div>
            </div>

            {/* Análisis y Counters */}
            <div className="bg-slate-950/90 border-2 border-red-500/60 p-6 sm:p-7 rounded-3xl shadow-2xl backdrop-blur-md space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-700 p-2 flex items-center justify-center shrink-0">
                  <img src={hatedFighter.avatarUrl} alt={hatedFighter.name} className="w-full h-full object-contain filter drop-shadow" />
                </div>
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase">{hatedFighter.archetypeLabel}</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">Cómo derrotar a {hatedFighter.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">{hatedFighter.description}</p>
                </div>
              </div>

              {/* Debilidades Clave a Explotar */}
              <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30">
                <span className="text-xs font-black text-rose-300 uppercase block mb-1">🎯 Sus debilidades para explotar:</span>
                {hatedFighter.cons.map((con, idx) => (
                  <div key={idx} className="text-xs text-slate-200 mb-0.5">• {con}</div>
                ))}
              </div>

              {/* Mejores Counter-Picks */}
              <div>
                <h4 className="text-sm font-black text-emerald-400 uppercase tracking-wider mb-3">🛡️ Los 3 Mejores Luchadores para Castigar a {hatedFighter.name}:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {counterPicks.map(counter => (
                    <div key={counter.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                      <img src={counter.avatarUrl} alt={counter.name} className="w-14 h-14 object-contain shrink-0" />
                      <div>
                        <h5 className="font-extrabold text-white text-base">{counter.name}</h5>
                        <p className="text-xs text-slate-400">{counter.archetypeLabel}</p>
                        <span className="text-[10px] text-emerald-400 font-bold block mt-1">✓ Ventaja neutral</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- PANTALLA 5: SINERGIAS 2v2 (DOBLES) --- */}
        {currentStep === 'doubles' && (
          <div className="max-w-4xl mx-auto w-full animate-fadeIn space-y-6">
            <div className="bg-slate-950/85 border border-slate-800 p-6 rounded-3xl backdrop-blur-md">
              <span className="text-xs font-black text-indigo-400 uppercase tracking-widest block mb-1">MODO DOBLES / 2 VS 2</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">👥 Pareja Ideal para el Main de tu Amigo</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Selecciona al personaje que juega tu amigo o compañero de equipo. La app calculará los mejores personajes con sinergia para ganar torneos en dobles.
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-3 items-center">
                <input
                  type="text"
                  placeholder="Buscar el Main de tu amigo..."
                  value={doublesSearch}
                  onChange={(e) => setDoublesSearch(e.target.value)}
                  className="w-full sm:w-72 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
                <span className="text-xs text-slate-500">Amigo juega con: <strong className="text-white">{partnerFighter.name}</strong></span>
              </div>

              <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar mt-2">
                {allCharacters
                  .filter(c => !doublesSearch || c.name.toLowerCase().includes(doublesSearch.toLowerCase()))
                  .map(c => (
                    <button
                      key={c.id}
                      onClick={() => setPartnerFighterId(c.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 shrink-0 border transition ${
                        partnerFighterId === c.id ? 'bg-indigo-600 text-white border-indigo-400 shadow-md' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      <img src={c.avatarUrl} alt={c.name} className="w-5 h-5 object-contain" />
                      <span>{c.name}</span>
                    </button>
                  ))}
              </div>
            </div>

            <div className="bg-slate-950/90 border-2 border-indigo-500/60 p-6 sm:p-7 rounded-3xl shadow-2xl backdrop-blur-md space-y-5">
              <div className="flex items-center gap-4">
                <img src={partnerFighter.avatarUrl} alt={partnerFighter.name} className="w-20 h-20 object-contain p-1 rounded-xl bg-slate-900 border border-slate-700" />
                <div>
                  <span className="text-xs font-bold text-indigo-400 uppercase">Estilo de tu compañero</span>
                  <h3 className="text-2xl font-black text-white">{partnerFighter.name} ({partnerFighter.archetypeLabel})</h3>
                  <p className="text-xs text-slate-300">En 2v2 necesita cobertura para sus recuperaciones y apoyo con daño masivo.</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-black text-amber-300 uppercase tracking-wider mb-3">🤝 Los 3 Mejores Compañeros de Equipo para {partnerFighter.name}:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {synergyPicks.map(syn => (
                    <div key={syn.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                      <img src={syn.avatarUrl} alt={syn.name} className="w-14 h-14 object-contain shrink-0" />
                      <div>
                        <h5 className="font-extrabold text-white text-base">{syn.name}</h5>
                        <p className="text-xs text-slate-400">{syn.archetypeLabel}</p>
                        <span className="text-[10px] text-indigo-300 font-bold block mt-1">★ Sinergia 2v2 Alta</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- PANTALLA 6: ROSTER COMPLETO --- */}
        {currentStep === 'roster' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-950/80 p-6 rounded-3xl border border-slate-800 backdrop-blur-md">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl sm:text-3xl font-black text-white">Plantilla Oficial de Smash Ultimate</h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-black text-xs">{filteredRoster.length} / {allCharacters.length}</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Haz clic en cualquier combatiente para ver Kill Moves, Fuera de Escudo y Guía.</p>
              </div>

              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Buscar luchador, saga o arquetipo..."
                  value={rosterSearch}
                  onChange={(e) => setRosterSearch(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition shadow-inner"
                />
                {rosterSearch && (
                  <button onClick={() => setRosterSearch('')} className="absolute right-3.5 top-3 text-xs text-slate-400 hover:text-white">✕</button>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 bg-slate-950/60 p-3 rounded-2xl border border-slate-800/80 backdrop-blur">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Arquetipo:</span>
              {archetypes.map((arch) => (
                <button
                  key={arch}
                  onClick={() => setSelectedArchetypeFilter(arch)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    selectedArchetypeFilter === arch ? 'bg-red-600 text-white shadow-md' : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {arch === 'All' ? 'Todos' : arch}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {filteredRoster.map((fighter) => (
                <div
                  key={fighter.id}
                  onClick={() => setModalFighter(fighter)}
                  className="rounded-2xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-red-500/60 p-3 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-red-600/20 cursor-pointer flex flex-col justify-between group backdrop-blur"
                >
                  <div>
                    <div className="w-full h-28 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 p-1 border border-slate-800 flex items-center justify-center overflow-hidden mb-2 relative">
                      <img src={fighter.avatarUrl} alt={fighter.name} className="w-full h-full object-contain filter drop-shadow group-hover:scale-110 transition duration-200" loading="lazy" />
                      <span className="absolute bottom-1 right-1 text-[9px] font-black px-1.5 py-0.5 rounded bg-slate-950/80 text-amber-300 border border-slate-800">
                        {'★'.repeat(fighter.difficultyStars)}
                      </span>
                    </div>

                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-400 block truncate">{fighter.archetype}</span>
                    <h3 className="font-black text-white text-sm group-hover:text-amber-300 transition truncate">{fighter.name}</h3>
                    <p className="text-[11px] text-slate-400 truncate">{fighter.series}</p>
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-850 flex items-center justify-between text-[10px] text-slate-500">
                    <span>{fighter.difficulty}</span>
                    <span className="text-red-400 font-bold group-hover:translate-x-0.5 transition">Ficha ➔</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* =========================================================================
          MODAL FIGHTER CARD PNG GENERATOR
         ========================================================================= */}
      {showCardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn" onClick={() => setShowCardModal(false)}>
          <div className="relative w-full max-w-xl bg-slate-950 border-2 border-amber-500/60 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowCardModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white font-bold">✕</button>

            <div className="text-center">
              <span className="text-xs font-black text-amber-400 uppercase tracking-widest block">PERSONALIZA TU TARJETA</span>
              <h3 className="text-2xl font-black text-white">Generador de Fighter Card</h3>
              <p className="text-xs text-slate-400 mt-1">Escribe tu apodo o Tag de jugador para crear tu carnet oficial de Smash.</p>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Nombre o Tag de Jugador:</label>
              <input
                type="text"
                placeholder="Ej: Bigote, Player 1, FoxMaster..."
                value={playerTag}
                onChange={(e) => setPlayerTag(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Vista Previa de la tarjeta */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 border border-amber-500/40 text-left flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider">SMASH FIGHTER CARD</span>
                <h4 className="text-xl font-black text-white">{(playerTag || 'SMASH FIGHTER').toUpperCase()}</h4>
                <p className="text-xs text-slate-300 mt-0.5">Main: <strong className="text-red-400">{primaryMatch.name}</strong> ({primaryMatch.matchPercentage}% Afin.)</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Pockets: {pocketPicks.map(p => p.name).join(', ')}</p>
              </div>
              <img src={primaryMatch.avatarUrl} alt={primaryMatch.name} className="w-20 h-20 object-contain filter drop-shadow" />
            </div>

            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => {
                  downloadFighterCard(playerTag, primaryMatch, pocketPicks);
                  setShowCardModal(false);
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:brightness-110 text-slate-950 font-black text-sm shadow-xl transition flex items-center justify-center gap-2"
              >
                <span>⬇️</span>
                <span>Descargar Imagen PNG</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL DETALLE DE LUCHADOR CON GUÍA DE COMBATE
         ========================================================================= */}
      {modalFighter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn" onClick={() => setModalFighter(null)}>
          <div className="relative w-full max-w-2xl bg-slate-950 border-2 border-red-500/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModalFighter(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center font-bold">✕</button>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="w-28 h-28 rounded-2xl bg-slate-900 border border-slate-700 p-2 flex items-center justify-center shrink-0">
                <img src={modalFighter.avatarUrl} alt={modalFighter.name} className="w-full h-full object-contain filter drop-shadow-xl" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <span className="text-xs font-black uppercase tracking-wider text-red-400">{modalFighter.archetypeLabel}</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{modalFighter.name}</h3>
                <p className="text-xs text-amber-300 italic font-semibold">"{modalFighter.title}"</p>
                <span className="text-xs text-slate-400 block mt-0.5">Saga: {modalFighter.series} • Dificultad: {modalFighter.difficulty} ({'★'.repeat(modalFighter.difficultyStars)})</span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{modalFighter.description}</p>

            {/* Guía Táctica: Kill Moves & Fuera de Escudo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-rose-950/30 border border-rose-500/30 p-3 rounded-xl">
                <span className="font-black text-rose-400 block mb-1">💥 Kill Moves (Para Matar):</span>
                {(modalFighter.killMoves || ["Forward Smash"]).map((m, i) => <div key={i} className="text-slate-300">• {m}</div>)}
              </div>
              <div className="bg-sky-950/30 border border-sky-500/30 p-3 rounded-xl">
                <span className="font-black text-sky-400 block mb-1">🛡️ Fuera de Escudo (OoS):</span>
                <div className="text-slate-300">{modalFighter.oosMove || "Up-B o Neutral Air"}</div>
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-emerald-950/30 border border-emerald-500/30 p-3 rounded-xl">
                <span className="font-black text-emerald-400 block mb-1">Puntos Fuertes:</span>
                {modalFighter.pros.map((p, i) => <div key={i} className="text-slate-300">• {p}</div>)}
              </div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                <span className="font-black text-slate-400 block mb-1">Debilidades:</span>
                {modalFighter.cons.map((c, i) => <div key={i} className="text-slate-300">• {c}</div>)}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs">
              <span className="font-black text-amber-300 block mb-0.5">💡 Consejo de oro:</span>
              {modalFighter.beginnerTip}
            </div>
          </div>
        </div>
      )}

      {/* CONTROL FLOTANTE ESCENARIO */}
      <div className="fixed bottom-3 right-3 z-30">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/90 border border-slate-700/80 shadow-2xl backdrop-blur text-xs">
          <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-slate-300 font-bold hidden sm:inline">Escenario:</span>
          <span className="text-amber-300 font-extrabold max-w-[170px] sm:max-w-none truncate">{currentStage.name}</span>
          <div className="flex items-center gap-1 ml-1 border-l border-slate-700 pl-2">
            <button onClick={() => setCurrentStageIndex(prev => (prev + 1) % STAGES.length)} title="Siguiente" className="text-slate-400 hover:text-white font-black px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700">⏭</button>
            <button onClick={() => setStageAutoRotate(!stageAutoRotate)} className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${stageAutoRotate ? 'bg-red-600/30 text-red-300' : 'bg-slate-800 text-slate-400'}`}>
              {stageAutoRotate ? 'Auto' : 'Pausa'}
            </button>
          </div>
        </div>
      </div>

      <footer className="relative z-20 border-t border-slate-800/80 bg-slate-950/90 py-5 text-center text-xs text-slate-500 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>Super Smash Bros. Ultimate Main Finder • 86 Luchadores, Counters & Fighter Card</div>
          <div className="flex gap-4">
            <button onClick={() => setCurrentStep('welcome')} className="hover:text-slate-300 font-semibold">Test</button>
            <button onClick={() => setCurrentStep('matchups')} className="hover:text-slate-300 font-semibold">Counters</button>
            <button onClick={() => setCurrentStep('doubles')} className="hover:text-slate-300 font-semibold">2v2</button>
            <button onClick={() => setCurrentStep('roster')} className="hover:text-slate-300 font-semibold">Plantilla</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MainFinderApp />);
