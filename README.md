# ⚔️ Fighter Main Finder

Una aplicación web interactiva diseñada para que los nuevos jugadores de **Super Smash Bros y Fighting Games** descubran su luchador (*Main*) ideal a través de un cuestionario dinámico de 7 preguntas.

---

## 🚀 Cómo Iniciar la Aplicación

Tienes dos opciones muy sencillas:

### Opción 1: Con un Doble Clic (Recomendado)
Haz doble clic en el archivo:
- **`iniciar_app.bat`** (o ejecuta `python start_app.py` en tu terminal).  
Se abrirá automáticamente en tu navegador web en `http://localhost:5173`.

### Opción 2: Directo en el Navegador
Abre directamente el archivo **`index.html`** con cualquier navegador moderno (Google Chrome, Microsoft Edge, Firefox, Brave, etc.).

---

## 🌟 Características de la App

1. **Test Dinámico de 7 Preguntas**:
   - Mentalidad de combate (Rushdown, Zoner, Espadachín, Tanque, etc.)
   - Preferencia de velocidad y movilidad
   - Tipo de armamento (cuerpo a cuerpo, espadas, magia/proyectiles)
   - Tolerancia a combos y dificultad de ejecución
   - Estilo de remate (meteoritos, ráfagas en el aire, trampas calculadas)
   - Gusto por mecánicas especiales (barras de límite, modos furia, recursos)
   - Estilo de recuperación y supervivencia

2. **Algoritmo de Compatibilidad (Vector Matching)**:
   - Modela las respuestas del jugador y las contrasta con los vectores de puntuación de cada luchador mediante similitud de coseno ponderada.
   - Aplica bonificaciones y filtros de accesibilidad según la experiencia declarada.

3. **Presentación de Resultados Épica**:
   - Estilo *"A New Challenger Approaches"* con animación, sonido de victoria y confeti.
   - **Main Principal** con porcentaje de afinidad, fortalezas, debilidades y consejo clave para novatos.
   - **Pocket Picks**: 2 alternativas secundarias recomendadas para torneos o situaciones desfavorables.
   - Desglose de atributos (Velocidad, Potencia, Alcance, Combos, Supervivencia).
   - Botón para copiar resultado y compartirlo.

4. **Modo Roster Completo ("Explorar Plantilla")**:
   - Catálogo interactivo de luchadores con buscador en vivo por nombre o saga.
   - Filtros instantáneos por arquetipo (*All-Rounder*, *Rushdown*, *Heavyweight*, *Swordie*, *Zoner*, *Tricky*, *FGC*).

---

## 📁 Estructura del Proyecto

```text
main-finder-app/
├── index.html            # Interfaz principal Single Page App (Tailwind CSS + React 18)
├── characters_data.js    # Base de datos de luchadores, atributos, arquetipos y consejos
├── questions_data.js     # Banco de preguntas y ponderaciones de afinidad
├── app.js                # Lógica del cuestionario, cálculo de matching y componentes UI
├── start_app.py          # Servidor local ligero en Python con auto-apertura del navegador
├── iniciar_app.bat       # Lanzador rápido de un clic para Windows
└── README.md             # Esta documentación
```

---

## 🛠️ Cómo Personalizar o Agregar más Personajes

Para agregar más combatientes, solo abre [characters_data.js](file:///c:/Users/bigote/Downloads/ytb/main-finder-app/characters_data.js) y añade un objeto nuevo al arreglo `window.CHARACTERS`:

```javascript
{
  id: "mi_personaje",
  name: "Nombre",
  title: "Título Épico",
  series: "Saga",
  archetype: "Rushdown", // o Zoner, Swordie, Heavyweight, All-Rounder, Tricky, FGC
  archetypeLabel: "Descripción del Arquetipo",
  difficulty: "Fácil", // Fácil, Media o Alta
  difficultyStars: 1,
  avatarUrl: "URL_DE_LA_IMAGEN",
  stats: { speed: 85, power: 75, range: 60, combos: 80, recovery: 70 },
  scores: { rushdown: 9, allrounder: 5, swordie: 2, zoner: 2, heavy: 3, tricky: 4, fgc: 3, difficultyPref: 1 },
  description: "Resumen de su estilo...",
  pros: ["Punto fuerte 1", "Punto fuerte 2"],
  cons: ["Punto débil"],
  beginnerTip: "Consejo rápido para empezar..."
}
```
