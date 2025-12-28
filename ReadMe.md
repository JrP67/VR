# Stadium Arena VR - Zombie Defense Game

A WebXR-based VR zombie defense game built with A-Frame. Eliminate zombies with your baseball bat before they reach you!

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

### 1. **Design** - Erica Del Carmen
**Responsibilities:**
- Visual design and UI/UX
- 3D model integration and asset placement
- Stadium environment layout
- Zombie spawn patterns and positioning
- Game aesthetic and art direction

---

### 2. **Game Logic** - Joseph Renanh Polistico
**Responsibilities:**
- Core game mechanics (spawning, collision detection, scoring)
- Zombie AI and behavior (movement)
- Player interactions (damage, health, game state)
- Event handling (clicks, gazes, controller inputs)
- Game loops and update functions

---

### 3. **Tester** - Chique Bangalao Cruiz
**Responsibilities:**
- Quality assurance (QA) testing
- Performance testing
- Compatibility testing (different browsers, mobile)
- Balance testing (spawn rates, zombie speed)


---

## Credits

- **Baseball Bat Model** by CreativeTrio
- **Sound Effects** by DRAGON-STUDIO from Pixabay
