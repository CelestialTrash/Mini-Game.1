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

    console.log("the event happen");

    player.setDirection(event.key);

  }
})

// LISTEN WHEN YOU RELEASE THE KEY
const keyUpEvent = document.addEventListener("keyup", (event) => {
  if (!game.isGameover) {
    player.unSetDirections(event.key);

    console.log("the event happen too");

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
  const numberOfNurses = 15;
  const nurseVelocity = 10;

  for (let i = 0; i < numberOfNurses; i++) {
    const nurse = new Nurse(nurseVelocity);
    nurses.push(nurse)
  };

}


startGame();











