// Lógica de Matching, Roster Completo de Smash Ultimate y Escenarios Rotatorios
const { useState, useEffect, useMemo, useRef } = React;

// Lista de Escenarios de Smash Ultimate para el fondo rotatorio
const STAGES = [
  {
    id: "battlefield",
    name: "Campo de Batalla (Battlefield)",
    game: "Super Smash Bros. Ultimate",
    url: "https://ssb.wiki.gallery/images/thumb/7/75/Battlefield_SSBU.png/1200px-Battlefield_SSBU.png",
    color: "#e11d48"
  },
  {
    id: "final_destination",
    name: "Destino Final (Final Destination)",
    game: "Super Smash Bros. Ultimate",
    url: "https://ssb.wiki.gallery/images/thumb/8/87/Final_Destination_SSBU.png/1200px-Final_Destination_SSBU.png",
    color: "#8b5cf6"
  },
  {
    id: "fountain_of_dreams",
    name: "Fuente de los Sueños (Fountain of Dreams)",
    game: "Kirby",
    url: "https://ssb.wiki.gallery/images/thumb/4/4b/Fountain_of_Dreams_SSBU.png/1200px-Fountain_of_Dreams_SSBU.png",
    color: "#06b6d4"
  },
  {
    id: "hollow_bastion",
    name: "Bastión Hueco (Hollow Bastion)",
    game: "Kingdom Hearts",
    url: "https://ssb.wiki.gallery/images/thumb/7/7e/Hollow_Bastion_SSBU.png/1200px-Hollow_Bastion_SSBU.png",
    color: "#f59e0b"
  },
  {
    id: "northern_cave",
    name: "Cueva del Norte (Northern Cave)",
    game: "Final Fantasy VII",
    url: "https://ssb.wiki.gallery/images/thumb/2/23/Northern_Cave_SSBU.png/1200px-Northern_Cave_SSBU.png",
    color: "#10b981"
  },
  {
    id: "kalos",
    name: "Liga Pokémon Kalos",
    game: "Pokémon X / Y",
    url: "https://ssb.wiki.gallery/images/thumb/3/3d/Kalos_Pok%C3%A9mon_League_SSBU.png/1200px-Kalos_Pok%C3%A9mon_League_SSBU.png",
    color: "#3b82f6"
  }
];

// Algoritmo de afinidad matemática ponderada
function calculateMatches(userScores, characters) {
  const categories = ['rushdown', 'zoner', 'swordie', 'heavy', 'allrounder', 'tricky', 'fgc'];
  
  let userMagnitude = 0;
  categories.forEach(cat => {
    userMagnitude += Math.pow(userScores[cat] || 0, 2);
  });
  userMagnitude = Math.sqrt(userMagnitude) || 1;

  const results = characters.map(char => {
    let dotProduct = 0;
    let charMagnitude = 0;

    categories.forEach(cat => {
      const u = userScores[cat] || 0;
      const c = char.scores[cat] || 0;
      dotProduct += u * c;
      charMagnitude += Math.pow(c, 2);
    });
    charMagnitude = Math.sqrt(charMagnitude) || 1;

    let cosineSim = dotProduct / (userMagnitude * charMagnitude);

    const userDiffPref = userScores.difficultyPref || 0;
    const charDiff = char.difficultyStars || 1;
    
    let diffBonus = 0;
    if (userDiffPref < 0 && charDiff === 1) diffBonus = 0.07;
    if (userDiffPref < 0 && charDiff === 3) diffBonus = -0.14;
    if (userDiffPref > 1 && charDiff >= 2) diffBonus = 0.08;

    let finalScore = Math.min(0.99, Math.max(0.40, cosineSim + diffBonus));
    let matchPercentage = Math.round(finalScore * 100);

    return {
      ...char,
      matchPercentage
    };
  });

  results.sort((a, b) => b.matchPercentage - a.matchPercentage);
  return results;
}

// Efectos de sonido Web Audio API
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
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.09);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.09);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } else if (type === 'victory') {
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25];
      notes.forEach((freq, idx) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.type = 'triangle';
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.18, ctx.currentTime + idx * 0.08);
        g.gain.linearRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.35);
        o.start(ctx.currentTime + idx * 0.08);
        o.stop(ctx.currentTime + idx * 0.08 + 0.4);
      });
    }
  } catch (e) {}
}

function triggerConfetti() {
  if (window.confetti) {
    window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    setTimeout(() => {
      window.confetti({ particleCount: 80, angle: 60, spread: 60, origin: { x: 0 } });
      window.confetti({ particleCount: 80, angle: 120, spread: 60, origin: { x: 1 } });
    }, 280);
  }
}

function MainFinderApp() {
  const [currentStep, setCurrentStep] = useState('welcome'); // welcome | quiz | result | roster
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [userScores, setUserScores] = useState({
    rushdown: 0, zoner: 0, swordie: 0, heavy: 0, allrounder: 0, tricky: 0, fgc: 0, difficultyPref: 0
  });
  const [matchResults, setMatchResults] = useState([]);
  
  // Roster state
  const [rosterSearch, setRosterSearch] = useState('');
  const [selectedArchetypeFilter, setSelectedArchetypeFilter] = useState('All');
  const [selectedDifficultyFilter, setSelectedDifficultyFilter] = useState('All');
  const [modalFighter, setModalFighter] = useState(null);

  // Escenario de fondo rotatorio
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [stageAutoRotate, setStageAutoRotate] = useState(true);

  const questions = window.QUESTIONS || [];
  const allCharacters = window.CHARACTERS || [];

  // Rotación automática de escenarios cada 12 segundos
  useEffect(() => {
    if (!stageAutoRotate) return;
    const interval = setInterval(() => {
      setCurrentStageIndex(prev => (prev + 1) % STAGES.length);
    }, 12000);
    return () => clearInterval(interval);
  }, [stageAutoRotate]);

  const currentStage = STAGES[currentStageIndex];

  const handleStart = () => {
    playSfx('select');
    setCurrentStep('quiz');
    setQuestionIndex(0);
    setAnswers({});
    setUserScores({
      rushdown: 0, zoner: 0, swordie: 0, heavy: 0, allrounder: 0, tricky: 0, fgc: 0, difficultyPref: 0
    });
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

    if (questionIndex + 1 < questions.length) {
      setTimeout(() => {
        setQuestionIndex(prev => prev + 1);
      }, 160);
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

  // Filtrado de la plantilla de 86 luchadores
  const filteredRoster = useMemo(() => {
    return allCharacters.filter(c => {
      const q = rosterSearch.toLowerCase();
      const matchesSearch = c.name.toLowerCase().includes(q) ||
                            c.series.toLowerCase().includes(q) ||
                            c.archetypeLabel.toLowerCase().includes(q);
      const matchesArch = selectedArchetypeFilter === 'All' || c.archetype === selectedArchetypeFilter;
      const matchesDiff = selectedDifficultyFilter === 'All' || c.difficulty === selectedDifficultyFilter;
      return matchesSearch && matchesArch && matchesDiff;
    });
  }, [allCharacters, rosterSearch, selectedArchetypeFilter, selectedDifficultyFilter]);

  const archetypes = ['All', 'All-Rounder', 'Rushdown', 'Heavyweight', 'Swordie', 'Zoner', 'Tricky', 'FGC', 'Grappler'];

  return (
    <div className="min-h-screen text-slate-100 flex flex-col font-sans selection:bg-red-500 selection:text-white relative overflow-x-hidden">
      
      {/* =========================================================================
          FONDO DINÁMICO CON ESCENARIOS DE SMASH (BATTLEFIELD, DESTINO FINAL, ETC.)
         ========================================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {STAGES.map((stage, idx) => (
          <div
            key={stage.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 transform scale-105 ${
              idx === currentStageIndex ? 'opacity-35' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${stage.url}')`,
              backgroundAttachment: 'fixed',
              filter: 'blur(1px)'
            }}
          />
        ))}
        {/* Capa de contraste cinematográfica estilo Smash */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950/95" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-red-600/15 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[400px] bg-amber-500/10 blur-[150px] rounded-full" />
      </div>

      {/* =========================================================================
          BARRA DE NAVEGACIÓN SUPERIOR
         ========================================================================= */}
      <header className="relative z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => setCurrentStep('welcome')}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 flex items-center justify-center shadow-lg shadow-red-600/40 font-black text-white text-xl border border-red-400/30 transform hover:scale-105 transition">
              ⚔️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300 text-lg">
                  SMASH MAIN FINDER
                </span>
                <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30">
                  Ultimate Roster (86)
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Descubre tu combatiente perfecto para Super Smash Bros. Ultimate</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentStep('roster')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition border flex items-center gap-1.5 ${
                currentStep === 'roster'
                  ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border-slate-700/80 hover:bg-slate-800'
              }`}
            >
              <span>👥</span>
              <span>Roster ({allCharacters.length})</span>
            </button>
            {currentStep !== 'welcome' && (
              <button
                onClick={handleStart}
                className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-black transition bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-slate-950 hover:brightness-110 shadow-md shadow-amber-500/20 border border-amber-300/40"
              >
                🔄 Nuevo Test
              </button>
            )}
          </div>
        </div>
      </header>

      {/* =========================================================================
          CONTENIDO PRINCIPAL
         ========================================================================= */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 py-8 flex flex-col justify-center">
        
        {/* --- PANTALLA 1: BIENVENIDA --- */}
        {currentStep === 'welcome' && (
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn my-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-red-500/40 text-red-300 text-xs sm:text-sm font-semibold shadow-lg backdrop-blur">
              <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
              ¡Plantilla Completa de 86 Luchadores de Smash Ultimate!
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-7xl font-black tracking-tight leading-none text-white drop-shadow-md">
                ¿Cuál es tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">MAIN</span> en Smash Ultimate?
              </h1>
              <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Super Smash Bros. Ultimate cuenta con <strong className="text-amber-400">86 combatientes</strong> únicos. Responde 7 preguntas sobre tus instintos y descubre qué personaje se adapta a tus manos y mente.
              </p>
            </div>

            {/* Galería Rápida de Héroes con Renders Oficiales */}
            <div className="py-2 flex justify-center items-center gap-2 overflow-x-auto no-scrollbar mask-fade">
              {['mario', 'link', 'donkey_kong', 'samus', 'fox', 'pikachu', 'cloud', 'joker', 'sephiroth', 'sora'].map(fid => (
                <div key={fid} className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900/80 border border-slate-700/80 p-1 flex items-center justify-center shrink-0 hover:scale-110 hover:border-red-500 transition duration-200 shadow-md">
                  <img
                    src={`https://www.smashbros.com/assets_v2/img/fighter/${fid}/main.png`}
                    alt={fid}
                    className="w-full h-full object-contain filter drop-shadow"
                  />
                </div>
              ))}
            </div>

            {/* Botones Principales */}
            <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={handleStart}
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-black text-lg tracking-wider uppercase shadow-2xl shadow-red-600/50 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 border-2 border-red-400/50"
              >
                <span>¡Comenzar Cuestionario!</span>
                <span className="text-2xl">➔</span>
              </button>

              <button
                onClick={() => setCurrentStep('roster')}
                className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-base border border-slate-700 shadow-xl backdrop-blur transition"
              >
                Explorar los 86 Luchadores
              </button>
            </div>

            {/* Tarjetas de Información */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur">
                <div className="text-red-400 font-extrabold text-sm mb-1 flex items-center gap-2">
                  <span>🎯</span> Algoritmo de 7 Dimensiones
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Evalúa velocidad, rango de armas, estilo de remate, combos y tolerancia a la dificultad.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur">
                <div className="text-amber-400 font-extrabold text-sm mb-1 flex items-center gap-2">
                  <span>🎒</span> 3 Pocket Picks de Apoyo
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Recibe alternativas secundarias que complementan a tu Main principal ante rivales desfavorables.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur">
                <div className="text-emerald-400 font-extrabold text-sm mb-1 flex items-center gap-2">
                  <span>💡</span> Consejos de Oro para Empezar
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Cada uno de los 86 combatientes incluye un consejo táctico directo para ganar desde tus primeras partidas.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* --- PANTALLA 2: CUESTIONARIO --- */}
        {currentStep === 'quiz' && questions[questionIndex] && (
          <div className="max-w-2xl mx-auto w-full animate-fadeIn my-auto">
            {/* Progreso */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-xs font-bold text-slate-400 mb-2">
                <span className="uppercase tracking-wider">PREGUNTA {questionIndex + 1} DE {questions.length}</span>
                <span className="text-amber-400 font-black">{Math.round(((questionIndex + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full h-3 bg-slate-900/90 rounded-full overflow-hidden p-0.5 border border-slate-800 backdrop-blur">
                <div
                  className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 rounded-full transition-all duration-300 shadow-sm"
                  style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Pregunta Activa */}
            <div className="bg-slate-950/85 border border-slate-800 p-6 sm:p-7 rounded-3xl shadow-2xl mb-6 backdrop-blur-md">
              <span className="text-xs font-black text-red-400 tracking-widest uppercase mb-1.5 block">
                {questions[questionIndex].title}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-snug">
                {questions[questionIndex].question}
              </h2>
              {questions[questionIndex].subtitle && (
                <p className="text-slate-400 text-sm">{questions[questionIndex].subtitle}</p>
              )}
            </div>

            {/* Opciones */}
            <div className="space-y-3.5">
              {questions[questionIndex].options.map((opt) => (
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
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {opt.description}
                    </p>
                  </div>
                  <div className="text-slate-500 group-hover:text-amber-400 transition transform group-hover:translate-x-1 shrink-0 self-center font-bold">
                    ➔
                  </div>
                </button>
              ))}
            </div>

            {/* Controles de regreso */}
            <div className="mt-6 flex justify-between items-center pt-2">
              <button
                onClick={() => questionIndex > 0 && setQuestionIndex(prev => prev - 1)}
                disabled={questionIndex === 0}
                className={`text-xs font-bold px-4 py-2 rounded-xl border transition ${
                  questionIndex === 0
                    ? 'opacity-30 border-slate-800 text-slate-600 cursor-not-allowed'
                    : 'border-slate-700 text-slate-300 hover:bg-slate-800 bg-slate-900/60'
                }`}
              >
                ← Pregunta anterior
              </button>
              <span className="text-xs text-slate-400">
                Responde según tu instinto natural
              </span>
            </div>
          </div>
        )}

        {/* --- PANTALLA 3: RESULTADOS (A NEW CHALLENGER APPROACHES!) --- */}
        {currentStep === 'result' && (
          <div className="max-w-5xl mx-auto w-full animate-scaleUp space-y-6 my-auto">
            {/* Banner de Anuncio Estilo Smash Bros */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs font-black tracking-widest uppercase shadow-lg backdrop-blur">
                <span>💥</span>
                <span>¡A NEW CHALLENGER APPROACHES!</span>
                <span>💥</span>
              </div>
              <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight drop-shadow">
                Tu Main Definitivo es:
              </h2>
            </div>

            {/* Tarjeta Principal del Luchador Ganador */}
            <div className="relative rounded-3xl bg-slate-950/90 border-2 border-red-500/70 shadow-2xl overflow-hidden p-6 sm:p-8 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-amber-600/10 to-transparent pointer-events-none" />
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Render Oficial Gigante de Smash */}
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

                {/* Detalles y Justificación de Afinidad */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      {primaryMatch.archetypeLabel}
                    </span>
                    <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                      {primaryMatch.name}
                    </h3>
                    <p className="text-sm font-semibold text-amber-300 italic">
                      "{primaryMatch.title}"
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {primaryMatch.description}
                  </p>

                  {/* Fortalezas Clave */}
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

                  {/* Consejo de Oro para Principiantes */}
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed">
                    <span className="font-black text-amber-300 block mb-1">💡 Consejo de oro para novatos:</span>
                    {primaryMatch.beginnerTip}
                  </div>
                </div>
              </div>

              {/* Atributos / Estadísticas */}
              <div className="mt-8 pt-6 border-t border-slate-800 relative z-10">
                <h4 className="text-xs font-black tracking-wider uppercase text-slate-400 mb-4">
                  📊 Atributos de Combate de {primaryMatch.name}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {Object.entries(primaryMatch.stats).map(([stat, val]) => (
                    <div key={stat} className="bg-slate-900/90 p-3 rounded-2xl border border-slate-800">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-400 mb-1.5">
                        <span className="capitalize">
                          {stat === 'speed' ? 'Velocidad' :
                           stat === 'power' ? 'Potencia' :
                           stat === 'range' ? 'Alcance' :
                           stat === 'combos' ? 'Combos' : 'Supervivencia'}
                        </span>
                        <span className="text-white font-extrabold">{val}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-500 to-amber-400 rounded-full"
                          style={{ width: `${val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Alternativas / Pocket Picks (3 luchadores) */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span>🎒</span> 3 Pocket Picks Secundarios Recomendados
              </h4>
              <p className="text-xs text-slate-400">
                Combatientes que cubren las debilidades de {primaryMatch.name} y complementan tu plantilla:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                {pocketPicks.map((pocket) => (
                  <div
                    key={pocket.id}
                    className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition flex items-center gap-3 backdrop-blur-md"
                  >
                    <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-700/80 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                      <img
                        src={pocket.avatarUrl}
                        alt={pocket.name}
                        className="w-full h-full object-contain filter drop-shadow"
                      />
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

            {/* Acciones */}
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={handleStart}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 hover:brightness-110 text-white font-black text-sm shadow-xl shadow-red-600/30 transition border border-red-400/40"
              >
                🔄 Repetir Cuestionario
              </button>
              <button
                onClick={() => setCurrentStep('roster')}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm border border-slate-700 transition"
              >
                👥 Explorar Todo el Roster ({allCharacters.length})
              </button>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(
                    `¡Mi Main ideal en Super Smash Bros. Ultimate es ${primaryMatch.name} (${primaryMatch.archetypeLabel}) con un ${primaryMatch.matchPercentage}% de afinidad!`
                  );
                  alert(`¡Resultado copiado al portapapeles!\n\n"Mi Main ideal es ${primaryMatch.name} con un ${primaryMatch.matchPercentage}% de afinidad"`);
                }}
                className="px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 font-bold text-sm border border-slate-750 transition flex items-center gap-2"
              >
                📋 Copiar Resultado
              </button>
            </div>
          </div>
        )}

        {/* --- PANTALLA 4: ROSTER COMPLETO DE SMASH ULTIMATE (86 LUCHADORES) --- */}
        {currentStep === 'roster' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Cabecera y Buscador */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-950/80 p-6 rounded-3xl border border-slate-800 backdrop-blur-md">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    Plantilla Oficial de Smash Ultimate
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-black text-xs">
                    {filteredRoster.length} / {allCharacters.length}
                  </span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                  Haz clic en cualquier combatiente para ver sus estadísticas, fortalezas y consejo para novatos.
                </p>
              </div>

              {/* Input de Búsqueda */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Buscar luchador, saga o arquetipo..."
                  value={rosterSearch}
                  onChange={(e) => setRosterSearch(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition shadow-inner"
                />
                {rosterSearch && (
                  <button
                    onClick={() => setRosterSearch('')}
                    className="absolute right-3.5 top-3 text-xs text-slate-400 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Filtros de Arquetipos y Dificultad */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-950/60 p-3 rounded-2xl border border-slate-800/80 backdrop-blur">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Arquetipo:</span>
              {archetypes.map((arch) => (
                <button
                  key={arch}
                  onClick={() => setSelectedArchetypeFilter(arch)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    selectedArchetypeFilter === arch
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {arch === 'All' ? 'Todos' : arch}
                </button>
              ))}
            </div>

            {/* Rejilla de los 86 Combatientes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {filteredRoster.map((fighter) => (
                <div
                  key={fighter.id}
                  onClick={() => setModalFighter(fighter)}
                  className="rounded-2xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-red-500/60 p-3 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-red-600/20 cursor-pointer flex flex-col justify-between group backdrop-blur"
                >
                  <div>
                    {/* Render */}
                    <div className="w-full h-28 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 p-1 border border-slate-800 flex items-center justify-center overflow-hidden mb-2 relative">
                      <img
                        src={fighter.avatarUrl}
                        alt={fighter.name}
                        className="w-full h-full object-contain filter drop-shadow group-hover:scale-110 transition duration-200"
                        loading="lazy"
                      />
                      <span className="absolute bottom-1 right-1 text-[9px] font-black px-1.5 py-0.5 rounded bg-slate-950/80 text-amber-300 border border-slate-800">
                        {'★'.repeat(fighter.difficultyStars)}
                      </span>
                    </div>

                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-400 block truncate">
                      {fighter.archetype}
                    </span>
                    <h3 className="font-black text-white text-sm group-hover:text-amber-300 transition truncate">
                      {fighter.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 truncate">{fighter.series}</p>
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-850 flex items-center justify-between text-[10px] text-slate-500">
                    <span>{fighter.difficulty}</span>
                    <span className="text-red-400 font-bold group-hover:translate-x-0.5 transition">Ver ➔</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredRoster.length === 0 && (
              <div className="text-center py-16 bg-slate-950/70 rounded-3xl border border-slate-800">
                <p className="text-lg text-slate-400 font-bold">No se encontraron luchadores con ese criterio de búsqueda.</p>
                <button
                  onClick={() => { setRosterSearch(''); setSelectedArchetypeFilter('All'); setSelectedDifficultyFilter('All'); }}
                  className="mt-3 px-4 py-2 rounded-xl bg-red-600 text-white font-bold text-xs"
                >
                  Restablecer todos los filtros
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* =========================================================================
          MODAL DETALLE DE LUCHADOR (AL HACER CLIC EN EL ROSTER)
         ========================================================================= */}
      {modalFighter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn" onClick={() => setModalFighter(null)}>
          <div className="relative w-full max-w-2xl bg-slate-950 border-2 border-red-500/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModalFighter(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-36 h-36 rounded-2xl bg-slate-900 border border-slate-700 p-2 flex items-center justify-center shrink-0">
                <img src={modalFighter.avatarUrl} alt={modalFighter.name} className="w-full h-full object-contain filter drop-shadow-xl" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <span className="text-xs font-black uppercase tracking-wider text-red-400">{modalFighter.archetypeLabel}</span>
                <h3 className="text-3xl font-black text-white">{modalFighter.name}</h3>
                <p className="text-xs text-amber-300 italic font-semibold">"{modalFighter.title}"</p>
                <span className="text-xs text-slate-400 block mt-1">Saga: {modalFighter.series}</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">{modalFighter.description}</p>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-emerald-950/30 border border-emerald-500/30 p-3 rounded-xl">
                <span className="font-black text-emerald-400 block mb-1">Puntos Fuertes:</span>
                {modalFighter.pros.map((p, i) => <div key={i} className="text-slate-300">• {p}</div>)}
              </div>
              <div className="bg-rose-950/30 border border-rose-500/30 p-3 rounded-xl">
                <span className="font-black text-rose-400 block mb-1">Debilidades:</span>
                {modalFighter.cons.map((c, i) => <div key={i} className="text-slate-300">• {c}</div>)}
              </div>
            </div>

            {/* Consejo */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs">
              <span className="font-black text-amber-300 block mb-0.5">💡 Consejo para principiantes:</span>
              {modalFighter.beginnerTip}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          CONTROL FLOTANTE DEL ESCENARIO DE FONDO (BATTLEFIELD ROTATIVO)
         ========================================================================= */}
      <div className="fixed bottom-3 right-3 z-30">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/90 border border-slate-700/80 shadow-2xl backdrop-blur text-xs">
          <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-slate-300 font-bold hidden sm:inline">Escenario:</span>
          <span className="text-amber-300 font-extrabold max-w-[180px] sm:max-w-none truncate">
            {currentStage.name}
          </span>
          <div className="flex items-center gap-1 ml-1 border-l border-slate-700 pl-2">
            <button
              onClick={() => setCurrentStageIndex(prev => (prev + 1) % STAGES.length)}
              title="Cambiar al siguiente escenario"
              className="text-slate-400 hover:text-white font-black px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700"
            >
              ⏭
            </button>
            <button
              onClick={() => setStageAutoRotate(!stageAutoRotate)}
              title={stageAutoRotate ? "Pausar rotación automática" : "Activar rotación automática"}
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                stageAutoRotate ? 'bg-red-600/30 text-red-300' : 'bg-slate-800 text-slate-400'
              }`}
            >
              {stageAutoRotate ? 'Auto' : 'Pausa'}
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PIE DE PÁGINA
         ========================================================================= */}
      <footer className="relative z-20 border-t border-slate-800/80 bg-slate-950/90 py-5 text-center text-xs text-slate-500 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Super Smash Bros. Ultimate Main Finder • Los 86 Luchadores y Escenarios Oficiales
          </div>
          <div className="flex gap-4">
            <button onClick={handleStart} className="hover:text-slate-300 font-semibold">Test de Afinidad</button>
            <button onClick={() => setCurrentStep('roster')} className="hover:text-slate-300 font-semibold">Ver Todos los 86</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MainFinderApp />);
