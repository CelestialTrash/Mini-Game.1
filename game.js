console.log("INDEX JS RUNNING");
//LISTEN WHEN YOU PRESS THE KEY

const game = {
  isGameover: false,
}





const keyDownEvent = document.addEventListener("keydown", (event) => {
  if (!game.isGameover) {
    if (event.key === " ") {
      player.turnLightOn();
    }
    
    
    
    player.setDirection(event.key);
    
  }
})

// LISTEN WHEN YOU RELEASE THE KEY
const keyUpEvent = document.addEventListener("keyup", (event) => {
  if (!game.isGameover) {
    player.unSetDirections(event.key);
    
    
    
  }
});


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
  const nurseVelocity = 15;
  
  for (let i = 0; i < numberOfNurses; i++) {
    const nurse = new Nurse(nurseVelocity);
    nurses.push(nurse)
  };
  
}


startGame();


const doorArray = []

class Door {
  constructor() {
    this.createDoorElement();
    this.positionX = gameArea.offsetWidth - this.element.offsetWidth -10; 
    this.positionY = gameArea.offsetHeight - this.element.offsetHeight - 40; 
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

// Create the door when starting the game
const door = new Door();







