// PLAYER
const player = {
    positionX: 0,
    positionY: 0,
    velocity: 40,
    directions: [],
    lightOn: false,
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

        this.setBoundaries();
        this.element.style.top = `${this.positionY}px`;
        this.element.style.left = `${this.positionX}px`;
        if (this.lightOn === true){
        this.lightElement.style.top = `${this.positionY + (this.element.offsetHeight / 2)}px`;
        this.lightElement.style.left = `${this.positionX + (this.element.offsetWidth / 2)}px`;
        }




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
    },
    setBoundaries() {

        if (this.positionX <= 0) {
            this.positionX = 0;
        }

        if (this.positionY <= 0) {
            this.positionY = 0;
        }

        if (this.positionX >= gameArea.offsetWidth - this.element.offsetWidth) {
            this.positionX = gameArea.offsetWidth - this.element.offsetWidth;
        }

        if (this.positionY >= gameArea.offsetHeight - this.element.offsetHeight) {
            this.positionY = gameArea.offsetHeight - this.element.offsetHeight;
        }
    },

    turnLightOn() {


        if (this.lightOn === false) {
            this.lightOn = true;
            console.log("The LIGHT IS ON!!");
            this.lightElement = document.createElement("div");
            this.lightElement.className = "lantern";
            gameArea.appendChild(this.lightElement);
            this.lightElement.style.top = `${this.positionY + (this.element.offsetHeight / 2)}px`;
            this.lightElement.style.left = `${this.positionX + (this.element.offsetWidth / 2)}px`;

        }

        else {
            this.lightOn = false;
            this.lightElement.remove();
        }
    }
}




