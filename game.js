console.log("INDEX JS RUNNING");

// Variables to store game state
const game = {
  isGameover: false,
  isStarted: false,

};

// Get the start game section and button
const startGameElement = document.querySelector("#start-game-section");
const startGameButton = document.querySelector(".start-game-button");
const controlsButton = document.querySelector(".controls-button");
const controlsSection = document.querySelector("#controls-section");
const creditsButton = document.querySelector(".credits-button")
const creditSection = document.querySelector("#credit-section")
const backButton = document.querySelector(".back-button")

let mainTheme = new Audio ("Assets/Sound/Test Subject Shadows_U.731.wav")


startGameButton.addEventListener("mouseover",() => {
  let hoverSound = new Audio ("Assets/Sound/ hoover sound.mp3")
  hoverSound.play()
})

controlsButton.addEventListener("mouseover",() => {
  let hoverSound = new Audio ("Assets/Sound/ hoover sound.mp3")
  hoverSound.play()
})

creditsButton.addEventListener("mouseover",() => {
  let hoverSound = new Audio ("Assets/Sound/ hoover sound.mp3")
  hoverSound.play()
})


backButton.addEventListener("click", () => {
  creditSection.style.display = "none";
  /* startGameElement.style.display = "flex" */
})

creditsButton.addEventListener("click", () => {
  creditSection.style.display = "flex";
  /* let mainTheme = new Audio ("Assets/Sound/Test Subject Shadows_U.731.wav") */
  mainTheme.play()
});


controlsButton.addEventListener("click", () => {
  controlsSection.style.display = "flex";

});


// Event listener for the start game button
startGameButton.addEventListener("click", () => {
  if (!game.isStarted) {
    startGameElement.style.display = "none";

    startGame();
    let startButton = new Audio ("Assets/Sound/ESM_GFTL_fx_transition_one_shots_glass_movement_energy_magic_short.wav")
    startButton.play()
    mainTheme.pause()
  }
});

const keyDownEvent = (event) => {
  if (game.isStarted && !game.isGameover) {
    if (event.key === " ") {
      player.turnLightOn();
    }
    player.setDirection(event.key);
  }
};

const keyUpEvent = (event) => {
  if (game.isStarted && !game.isGameover) {
    player.unSetDirections(event.key);
  }
};

document.addEventListener("keydown", keyDownEvent);
document.addEventListener("keyup", keyUpEvent);

const gameArea = document.querySelector("#game-area");
console.table({
  gameAreaHeight: gameArea.offsetHeight,
  gameAreaWidth: gameArea.offsetWidth,
});

function shakeGameArea() {
  gameArea.style.animation = "shake 300ms";
  setTimeout(() => {
    gameArea.style.animation = "";
  }, 300);
}

function startGame() {
  const numberOfNurses = 20;
  const nurseVelocity = 10;
  let backgroundSound = new Audio('Assets/Sound/ESM_Horror_Game_Ambience_Loop_Deadly_Fog_Full_Cemetary_Wind_Howl_Creepy_Scary_Soundscape.wav');
  backgroundSound.loop = true; // Enable looping
  backgroundSound.play();
  backgroundSound.volume = 0.6;

  for (let i = 0; i < numberOfNurses; i++) {
    const nurse = new Nurse(nurseVelocity);
    nurses.push(nurse);
  }

  const door = new Door();
  doorArray.push(door);

  game.isStarted = true;
}
const doorArray = [];

class Door {
  constructor() {
    this.createDoorElement();
    this.positionX = Math.floor(Math.random() * (gameArea.offsetWidth - this.element.offsetWidth )); // Random X position
    this.positionY = Math.floor(Math.random() * (gameArea.offsetHeight - this.element.offsetHeight))
    this.updateElementPosition();
    doorArray.push(this);
  }

  createDoorElement() {
    console.log("The Door was Created");
    this.element = document.createElement("div");
    this.element.className = "escape-door";
    gameArea.appendChild(this.element);
  }

  updateElementPosition() {
    this.element.style.left = `${this.positionX}px`;
    this.element.style.top = `${this.positionY}px`;
  }
}







