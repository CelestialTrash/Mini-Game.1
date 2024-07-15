console.log("INDEX JS RUNNING");
//LISTEN WHEN YOU PRESS THE KEY
document.addEventListener("keydown", (event) => {
  if (event.key === " "){
    player.turnLightOn ();
  }



    player.setDirection(event.key);
})

// LISTEN WHEN YOU RELEASE THE KEY
document.addEventListener("keyup", (event) => {
    player.unSetDirections(event.key);
});


const gameArea = document.querySelector("#game-area");
console.table({
  gameAreaHeight: gameArea.offsetHeight,
  gameAreaWidth: gameArea.offsetWidth,
});



function startGame() {
  const numberOfNurses= 15;
  const nurseVelocity = 10;

  for (let i = 0; i < numberOfNurses; i++) {
    const nurse = new Nurse(nurseVelocity);
    nurses.push(nurse)
  };

}

startGame();





