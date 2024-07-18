// PLAYER
const livesElement = document.querySelector("#live-section-container")
const darkOverlay = document.querySelector("#dark-overlay");
const gameOverElement = document.querySelector("#game-over-section")
const winElement = document.querySelector("#win-section")

const player = {
    positionX: 0,
    positionY: 0,
    velocity: 40,
    directions: [],
    lightOn: false,
    lives: 10,
    element: document.querySelector("#player"), // Why the element : ????
    container: document.querySelector("#game-area"),
    move() {
        this.checkCollision();
        
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
        /* this.updateDarkOverlay(); */
        if (this.lightOn === true){
        this.lightElement.style.top = `${this.positionY + (this.element.offsetHeight / 2)}px`;
        this.lightElement.style.left = `${this.positionX + (this.element.offsetWidth / 2)}px`;
        darkOverlay.style.maskImage = `radial-gradient(circle at ${this.positionX + (this.element.offsetWidth / 2)}px ${this.positionY + (this.element.offsetHeight / 2)}px, transparent 100px, black 160px)`;
        }
        else(darkOverlay.style.maskImage = "none")
        this.updateNursesChasing();




    },
    setDirection(direction) {
        if (!this.directions.includes(direction)) {
            this.directions.push(direction);
        }
        let footStep1 = new Audio ("Assets/Sound/FOOT STEP 1.mp3")
        footStep1.play()
        footStep1.volume = 0.9;
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

    checkCollision() {
        nurses.forEach((nurse) => {
            const playerLeftEdge = this.positionX;
            const playerRightEdge = this.positionX + this.element.offsetWidth;
            const playerTopEdge = this.positionY;
            const playerBottomEdge = this.positionY + this.element.offsetHeight;

            const nurseLeftEdge = nurse.positionX;
            const nurseRightEdge = nurse.positionX + nurse.element.offsetWidth;
            const nurseTopEdge = nurse.positionY;
            const nurseBottomEdge = nurse.positionY + nurse.element.offsetHeight;

            if (
                playerLeftEdge < nurseRightEdge &&
                playerRightEdge > nurseLeftEdge &&
                playerTopEdge < nurseBottomEdge &&
                playerBottomEdge > nurseTopEdge
            ) {
                console.log("Collision detected");
                let playerHit = new Audio ("Assets/Sound/PLAYER HIT.mp3")
                let nurseScream1 = new Audio ("Assets/Sound/NURSE SCREAM 2.mp3")
                playerHit.play()
                nurseScream1.play()
                nurseScream1.volume = 0.35;
                shakeGameArea();
                this.lives --;
                livesElement.textContent = this.lives;

            
                if (this.lives <= 0) {
                    game.isGameover = true;
                    this.endGame();
                    gameOverElement.style.display = "flex";  
                    let gameOverSound = new Audio ("Assets/Sound/YOU DIED SOUND.mp3")
                    gameOverSound.play()

                }


            
            }

            
        });

        doorArray.forEach((door) => {
            const playerLeftEdge = this.positionX;
            const playerRightEdge = this.positionX + this.element.offsetWidth;
            const playerTopEdge = this.positionY;
            const playerBottomEdge = this.positionY + this.element.offsetHeight;

            const doorLeftEdge = door.positionX;
            const doorRightEdge = door.positionX + door.element.offsetWidth;
            const doorTopEdge = door.positionY;
            const doorBottomEdge = door.positionY + door.element.offsetHeight;

            

            if (
                playerLeftEdge < doorRightEdge &&
                playerRightEdge > doorLeftEdge &&
                playerTopEdge < doorBottomEdge &&
                playerBottomEdge > doorTopEdge
            ) {
                console.log("You Win!!");
                this.endGame();
                let ElevatorSound = new Audio ("Assets/Sound/ELEVATOR.mp3")
                ElevatorSound.play();

                winElement.style.display = "flex";



            }

            
        });

        
    },

    




    turnLightOn() {


        if (this.lightOn === false) {
            this.lightOn = true;
            let flashLightSound = new Audio ("Assets/Sound/flashlight.mp3")
            flashLightSound.play()
            console.log("The LIGHT IS ON!!");
            this.lightElement = document.createElement("div");
            this.lightElement.className = "lantern";
            gameArea.appendChild(this.lightElement);
            this.lightElement.style.top = `${this.positionY + (this.element.offsetHeight / 2)}px`;
            this.lightElement.style.left = `${this.positionX + (this.element.offsetWidth / 2)}px`;
           /*  darkOverlay.style.clipPath = `circle(0px at ${this.positionX + (this.element.offsetWidth / 2)}px ${this.positionY + (this.element.offsetHeight / 2)}px)`;
 */
        }

        else {
            this.lightOn = false;
            this.lightElement.remove();
          
        }
    },

    updateNursesChasing() {
        const centerX = this.positionX + this.element.offsetWidth / 2;
        const centerY = this.positionY + this.element.offsetHeight / 2;
        const radius = 100; // The radius of the light

        nurses.forEach((nurse) => {
            if (this.lightOn && nurse.checkInLightRadius(centerX, centerY, radius)) {
                nurse.chasingPlayer = true;
            } else {
                nurse.chasingPlayer = false;
            }
            nurse.move();
        });
    },
    /* updateDarkOverlay() {
        const centerX = this.positionX + this.element.offsetWidth / 2;
        const centerY = this.positionY + this.element.offsetHeight / 2;
        darkOverlay.style.clipPath = `circle(100px at ${centerX}px ${centerY}px)`; // Adjust the radius as needed
    }, */

   


    endGame (){
        console.log("Game Over");
        this.element.style.display = "none";
        if (this.lightOn === true){
        this.lightElement.style.display = "none";}

        
    
    },


    


    



}





