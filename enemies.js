
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
        this.setBoundaries();
        this.positionX -= this.velocity;
        this.updateElementPosition();
      }

     
      
}

