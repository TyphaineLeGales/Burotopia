var deskContainer = document.querySelector("div.deskContainer");

class Desk{
  constructor() {
    this.id = [];
    this.state = "closed";
    this.isTheAnswer = false;
    this.divDesk = document.createElement("div");
    this.divDoors = document.createElement("div");
    this.doorDelay = getRandomInt(1000);

  }

  createDeskId(divDesk) {
    var deskId = document.createElement("p");
    deskId.classList.add('deskId');
    divDesk.appendChild(deskId);
    deskId.innerHTML = ""+this.id[0] + this.id[1] + this.id[2] + this.id[3] + this.id[4] ;
  }

  createDeskState(divDesk) {
    var deskState = document.createElement("p");
    deskState.classList.add('deskState');
    divDesk.appendChild(deskState);
    deskState.innerHTML = this.state;
  }

  createClickTarget(divDesk) {
    var divClickTarget = document.createElement("div");
    divClickTarget.classList.add('clickTarget');
    divDesk.appendChild(divClickTarget);
  }

  createDoors (divDesk) {
    var leftDoor = document.createElement("div");
    leftDoor.classList.add("deskDoorLeft");
    leftDoor.classList.add("deskDoors");
    divDesk.appendChild(leftDoor);
    this.setDoors(leftDoor);

    var rightDoor = document.createElement("div");
    rightDoor.classList.add("deskDoorRight");
    rightDoor.classList.add("deskDoors");
    divDesk.appendChild(rightDoor);
    this.setDoors(rightDoor);
  }

  setDoors (door) {
    if(this.state === "open") {
      door.style.width = 0 + '%'
    } else {
      door.style.width = 45 + '%'
    }
  }

  createDesk() {
    this.divDesk = document.createElement("div");
    this.divDesk.classList.add('counterDesk');
    if(this.isTheAnswer) {
      this.divDesk.classList.add("isTheAnswer");
    }
    deskContainer.appendChild(this.divDesk);
    this.createDeskId(this.divDesk);
    this.createDeskState(this.divDesk);
    this.createClickTarget(this.divDesk);
    this.createDoors(this.divDesk);

  }

  destroyDesk() {
    this.divDesk.remove();
  }

  moveDoors (door) {
    var widthPercentage = 0;
    if(this.state === "open") {
    setTimeout(closing, this.doorDelay);

    }

    function closing () {
      var id = setInterval(closingAnim, 10);
      function closingAnim() {
        if (widthPercentage === 45) {
          clearInterval(id);
          setTimeout(OpeningAnim, this.doorDelay);
        } else {
          door.style.width = widthPercentage + '%';
          widthPercentage++;
        }
      }
    }
  }

}
