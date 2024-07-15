console.log("INDEX JS RUNNING");
//LISTEN WHEN YOU PRESS THE KEY
document.addEventListener("keydown", (event) => {
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

// PLAYER
const player = {
    positionX: 0,
    positionY: 0,
    velocity: 40,
    directions: [],
    element: document.querySelector("#player"), // Why the element : ????
    container: document.querySelector("#game-area"),
    move() {
        const direction = this.directions.join("")
        console.log(this.directions);
        switch (direction) {
            case "ArrowUp":
            case "w":
                this.positionY -= this.velocity;
                break;

            case "ArrowRight":
            case "d":
                this.positionX += this.velocity;

                break;

            case "ArrowDown":
            case "s":
                this.positionY += this.velocity;

                break;

            case "ArrowLeft":
            case "a":
                this.positionX -= this.velocity;
                break;
        };

        
        this.element.style.top = `${this.positionY}px`;
        this.element.style.left = `${this.positionX}px`;




    },
    setDirection(direction) {
        if (!this.directions.includes(direction)) {
            this.directions.push(direction);
        }
        this.move();
    },

    unSetDirections(direction) {
        const index = this.directions.indexOf(direction);
        if (index !== -1) {
            this.directions.splice(index, 1);
            // Update the player's movement whenever a direction is removed
            this.move();
        }
    }
}

