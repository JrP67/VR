let score = 0, health = 10, gameStarted = false;
const activeZombies = [];
const player = document.getElementById("player");
const healthDisplay = document.getElementById("healthDisplay");

function spawnZombie() {
    if (!gameStarted || activeZombies.length >= 10) return;

    // Parent zombie entity
    const zombie = document.createElement("a-entity");
    zombie.setAttribute("class", "clickable");
    
    const angle = Math.random() * Math.PI * 2;
    const dist = 35 + (Math.random() * 10); 
    zombie.setAttribute("position", {
        x: Math.cos(angle) * dist,
        y: 0,
        z: Math.sin(angle) * dist
    });

    // Add the zombie model
    const models = ["#zombie-attack", "#zombie-turn", "#zombie-walk"];
    const randomModel = models[Math.floor(Math.random() * models.length)];
    zombie.setAttribute("gltf-model", randomModel);
    zombie.setAttribute("scale", "1.5 1.5 1.5");
    zombie.setAttribute("sound", {
        src: '#zombie-alive-sound-asset',
        loop: true,
        autoplay: true,
        volume: 0.8,
        poolSize: 10,
        positional: true
    });
    
    // Add invisible sphere hitbox as child
    const hitbox = document.createElement("a-sphere");
    hitbox.setAttribute("radius", "1.2");
    hitbox.setAttribute("material", "visible: false");
    hitbox.setAttribute("position", "0 1 0");
    zombie.appendChild(hitbox);
    
    zombie.addEventListener('model-loaded', () => {
        zombie.setAttribute('animation-mixer', { clip: '*', loop: 'repeat' });
    });

    // Kill on cursor gaze
    zombie.addEventListener("fusing", () => {
        score++;
        document.getElementById("scoreText").setAttribute('value', `Score: ${score}`);
        const idx = activeZombies.indexOf(zombie);
        if (idx > -1) activeZombies.splice(idx, 1);
        zombie.remove();
    });

    document.querySelector("a-scene").appendChild(zombie);
    activeZombies.push(zombie);
}

function gameLoop() {
    if (!gameStarted) return;
    const pPos = player.getAttribute("position");

    for (let i = activeZombies.length - 1; i >= 0; i--) {
        const z = activeZombies[i];
        if(!z.parentNode) continue;

        const zPos = z.getAttribute("position");
        const dx = pPos.x - zPos.x;
        const dz = pPos.z - zPos.z;
        const dist = Math.sqrt(dx*dx + dz*dz);

        const speed = 0.10; 
        z.setAttribute("position", {
            x: zPos.x + (dx/dist) * speed,
            y: 0,
            z: zPos.z + (dz/dist) * speed
        });

        if (z.object3D) z.object3D.lookAt(pPos.x, 0, pPos.z);

        if (dist < 1.5) {
            const biteSound = document.querySelector("#biteSound");
            if (biteSound && biteSound.components.sound) {
                biteSound.components.sound.stopSound(); 
                biteSound.components.sound.playSound();
            }
                    health--;
            healthDisplay.textContent = `Health: ${health}`;
            z.remove();
            activeZombies.splice(i, 1);
            if (health <= 0) {
                gameStarted = false;
                document.getElementById("gameOver").style.display = "flex";
                document.getElementById("finalScore").textContent = `Score: ${score}`;
            }
        }
    }
}

document.getElementById("startBtn").addEventListener("click", () => {
    gameStarted = true;
    document.getElementById("startBtn").style.display = "none";
    healthDisplay.textContent = `Health: ${health}`;
    setInterval(spawnZombie, 2000);
    setInterval(gameLoop, 16);
});

// Desktop mouse click detection
document.addEventListener("click", () => {
    if (!gameStarted) return;

    const camera = document.querySelector("a-entity[camera]");
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(0, 0); 
    const cameraObj = camera.getObject3D("camera");
    
    if (!cameraObj) return;
    
    raycaster.setFromCamera(mouse, cameraObj);
    
    const zombieObjects = activeZombies.map(z => z.object3D).filter(obj => obj);
    const intersects = raycaster.intersectObjects(zombieObjects, true);
    
    // KINI NGA LINE: "Kon naay naigo nga zombie..."
    if (intersects.length > 0) {
        
        // 1. DINHI NA NATO I-PLAY ANG GUNSHOT (Kay naigo na man)
        const gunshotSound = document.getElementById("gunshotSound");
        if (gunshotSound && gunshotSound.components.sound) {   
            gunshotSound.components.sound.stopSound();
            gunshotSound.components.sound.playSound();
        }

        // 2. Logic sa pag-detect kon kinsang zombie ang naigo
        for (let zombie of activeZombies) {
            let hit = intersects[0].object;
            let isHit = false;
            
            while(hit) {
                if(hit === zombie.object3D) { isHit = true; break; }
                hit = hit.parent;
            }

            if (isHit) {
                score++;
                document.getElementById("scoreText").setAttribute('value', `Score: ${score}`);
                const idx = activeZombies.indexOf(zombie);
                if (idx > -1) activeZombies.splice(idx, 1);
                zombie.remove();
                break;
            }
        }
    }
});