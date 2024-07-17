
const nurses = [];



class Nurse {
    constructor(velocity) {
        this.createNurseElement();
        

        this.positionX = Math.floor(Math.random() * (gameArea.offsetWidth - this.element.offsetWidth )); // Random X position
        this.positionY = Math.floor(Math.random() * (gameArea.offsetHeight - this.element.offsetHeight)); // Random Y position
        this.velocity = velocity;

        this.updateElementPosition();

        if(this.lightOn === true) {

        }

    }



    createNurseElement() {
        this.element = document.createElement("div")
        this.element.className = "nurses"
        gameArea.appendChild(this.element)

    }

    updateElementPosition() {
        this.element.style.left = `${this.positionX}px`;
        this.element.style.top = `${this.positionY}px`;
      }


      move() {
        if (this.chasingPlayer && player.lightOn) {
            this.chasePlayer(player.positionX, player.positionY);
        } else {
            this.defaultMove();
        }
        this.updateElementPosition();
    }

    chasePlayer(playerX, playerY) {
        const dx = playerX - this.positionX;
        const dy = playerY - this.positionY;
        const angle = Math.atan2(dy, dx);
        this.positionX += Math.cos(angle) * this.velocity;
        this.positionY += Math.sin(angle) * this.velocity;
    }

    defaultMove() {
        // Default movement logic if needed. For now, we'll keep it stationary.
    }
    
    setBoundaries() {
        if (this.positionX < 0) {
            this.positionX = gameArea.offsetWidth;
            this.positionY = Math.floor(Math.random() * (gameArea.offsetHeight - this.element.offsetHeight));
        }
    }

    checkInLightRadius(centerX, centerY, radius) {
        const distanceX = centerX - (this.positionX + this.element.offsetWidth / 2);
        const distanceY = centerY - (this.positionY + this.element.offsetHeight / 2);
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        return distance < radius;
    }
}


