# Stadium Arena VR - Zombie Defense Game

A WebXR-based VR zombie defense game built with A-Frame. Eliminate zombies with your baseball bat before they reach you!

## Game Concept

**Game Premise**: A VR arena-based survival game inspired by DOOM's intense combat but grounded in a zombie apocalypse. Instead of progressing through levels, players are trapped in a single, ever-evolving circular colosseum where they must survive endless waves of undead. The arena itself becomes a character—with shifting barriers, random supply locations, and environmental changes that force constant adaptation. Victory isn't about reaching an end; it's about surviving another wave, another hour, another day.

**Core Mechanics**:
- Endless waves of increasingly aggressive zombies
- Weapon scavenging and resource management
- Dynamic arena layout changes
- No escape—only endurance
- Permadeath or persistent progression depending on game mode

## Story: A Last Stand

The walls of the circular colosseum gleam with rust and dried blood. You wake with no memory of how you arrived here—only the weight of a combat knife in your hand and the desperate need to survive.

The arena is your prison. Ancient concrete barriers create shifting maze-like corridors. Rusted weapons scatter across the bloodstained floor—relics of those who came before. Above, crumbling bleachers loom empty, their silence more terrifying than any crowd could be.

Then you hear it. The scrape of bone on stone.

They emerge from the darkness—the infected. Not the organized forces of an invading army, but something far worse: the shambling remnants of the forgotten. Each zombie is a piece of a puzzle you can't quite understand. They don't speak, don't coordinate. They simply *hunger*.

There's no escape. No levels to clear, no final boss to defeat. Just an endless cycle: survive the waves, scavenge for ammunition, fortify your position, repeat. The arena has its own twisted rhythm. The walls shift slightly at nightfall, forcing you to adapt. Supply crates appear at random. Sometimes there's a gun with a single clip. Sometimes there's nothing but a crowbar and hope.

Hours blur together. Days lose meaning. You've killed thousands—thousands upon thousands. But for every zombie that falls, more seem to crawl from the shadows. This isn't a mission to complete. This is purgatory with a pulse. This is man against nature's cruelest mistake, trapped in a concrete tomb where the only victory is another sunrise.

And somewhere in the darkness above those empty bleachers, you wonder: *who put me here? And why won't they let me leave?*

## Planned Features & Future Improvements

### Weapon Arsenal (Currently: Baseball Bat Only)
- **Firearms**: Pistols, shotguns, assault rifles with ammunition scarcity mechanics
- **Melee Weapons**: Crowbars, machetes, sledgehammers with varying damage/speed trade-offs
- **Explosives**: Grenades, molotov cocktails for area-of-effect damage
- **Utility**: Flares, decoys, and medical supplies for survival management
- **Weapon Degradation**: Weapons lose effectiveness over time, requiring maintenance or replacement

### Essential Game Mechanics
- **Dynamic Wave System**: Progressively harder zombie types and increasing spawn rates
- **Arena Evolution**: Barriers shift at intervals, forcing tactical repositioning
- **Supply Crates**: Random weapon and health spawns across the arena
- **Health & Stamina**: Player vitals system affecting combat performance
- **Score & Leaderboards**: Track kills, survival time, and wave progression
- **Difficulty Scaling**: Adaptive difficulty based on player performance
- **Audio Cues**: Directional zombie sounds and environmental alerts
- **Zombie Variety**: Fast runners, tank-like brutes, ranged variants, and special infected

### Known Limitations & Technical Challenges
- **A-Frame Performance**: VR performance optimization is challenging with large zombie counts on lower-end hardware
- **Physics Simulation**: Realistic collision detection and ragdoll physics are resource-intensive
- **Advanced AI**: Complex pathfinding and tactical zombie behavior requires significant computational overhead
- **Persistent State**: Server-side save systems and leaderboard storage not yet implemented
- **Cross-Platform VR**: Full compatibility across all VR headsets requires extensive testing and optimization
- **3D Asset Constraints**: Limited by available open-source models; custom assets require external creation
- **Browser Limitations**: WebXR support varies across browsers; some VR features may not work universally
- **Testing Limitations**: Currently only tested on desktop (mouse/keyboard) and mobile browsers. Full VR headset testing (Meta Quest, HTC Vive, etc.) has not been performed, so VR-specific interactions and performance on actual hardware remain unvalidated

## Development Stack

### Frontend
- **A-Frame** (v1.4.0) - WebXR framework for building 3D/VR experiences
- **JavaScript (ES6)** - Game logic and interactions
- **HTML5** - Structure and asset management
- **Three.js** - 3D rendering (included with A-Frame)

### Backend
- **Node.js** - Server runtime
- **Express.js** (implicit) - HTTP server for serving files

### Asset Types
- **3D Models** - GLTF/GLB format (Zombies, Baseball Bat)
- **Audio** - MP3 format (Zombie sounds, dying sounds)
- **Textures** - JPG/PNG (Floor, Stadium background)

## Setup Instructions

### Prerequisites
- Node.js (v12 or higher)
- npm (comes with Node.js)
- A modern web browser (Chrome, Firefox, Edge)
- VR headset (Meta Quest, HTC Vive, etc.) for full VR experience

### Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The server will run at `http://localhost:3000`

4. **Access the game**
   - Desktop: Open browser to `http://localhost:3000`
   - VR: Open in WebXR-compatible browser on VR headset
   - Mobile: View on phone, then enter VR mode if device supports it

### Controls

**Desktop (Mouse + Keyboard)**
- **WASD** - Move around the arena
- **Mouse** - Look around
- **Mouse Click** - Shoot/kill zombies at cursor

**VR (Controllers)**
- **Controller Joystick** - Move around
- **Controller Aim** - Point laser at zombies
- **Controller Trigger** - Kill zombies (automatic on hit)

## Team Roles

### 1. **Design & Visual Direction** - Erica Del Carmen
**Responsibilities:**
- Arena environment design and layout optimization
- Zombie model customization and variant creation
- 3D asset integration (weapons)
- UI/HUD design for health & score.
- Visual feedback for gameplay (hit effects, damage states)
- Atmospheric lighting and ambiance design
- Player spawn positioning

---

### 2. **Core Game Development** - Joseph Renanh Polistico
**Responsibilities:**
- Wave spawning system and zombie generation logic
- Player health and damage system implementation
- Score tracking and progression system
- VR controller input mapping and interaction detection
- Collision detection and physics-based combat feedback
- Game state management (active, paused, game over)

---

### 3. **Quality Assurance & Optimization** - Chique Bangalao Cruiz
**Responsibilities:**
- Gameplay balance testing (spawn rates, zombie difficulty scaling)
- Performance profiling and optimization recommendations
- VR comfort and motion sickness mitigation testing
- Cross-browser and VR headset compatibility verification
- Collision and interaction bug detection
- Audio synchronization testing
- Stress testing with high zombie counts


---

## Credits

- **Baseball Bat Model** by CreativeTrio
- **Sound Effects** by DRAGON-STUDIO from Pixabay
