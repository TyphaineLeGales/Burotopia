var deskContainer = document.querySelector("div.deskContainer");

class Desk{
  constructor() {
    this.id = [];
    this.state = "closed";
    this.isTheAnswer = false;
    this.divDesk = document.createElement("div");
    this.divDoors = document.createElement("div");
    this.doorDelay = getRandomInt(1000);
    this.leftDoor = document.createElement("div");
    this.rightDoor = document.createElement("div");

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

    this.leftDoor.classList.add("deskDoorLeft");
    this.leftDoor.classList.add("deskDoors");
    divDesk.appendChild(this.leftDoor);
    this.setDoors(this.leftDoor);

    this.rightDoor.classList.add("deskDoorRight");
    this.rightDoor.classList.add("deskDoors");
    divDesk.appendChild(this.rightDoor);
    this.setDoors(this.rightDoor);
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

  moveDoors() {
    if(this.state === "closed") {
      this.openDoors(this.leftDoor);
      this.openDoors(this.rightDoor);
    } else if(this.state === "open") {
      this.closeDoors(this.leftDoor);
      this.closeDoors(this.rightDoor);
    }
  }

  openDoors (door) {
    var widthPercentage = 45;
    setTimeout(opening, this.doorDelay);
    function opening () {
      var id = setInterval(openingAnim, 10);
      function openingAnim() {
        if (widthPercentage === 0) {
          clearInterval(id);
        } else {
          door.style.width = widthPercentage + '%';
          widthPercentage--;
        }
      }
    }
  }

  closeDoors (door) {
    var widthPercentage = 0;
    setTimeout(closing, this.doorDelay);
    function closing () {
      var id = setInterval(closingAnim, 10);
      function closingAnim() {
        if (widthPercentage ===45) {
          clearInterval(id);
        } else {
          door.style.width = widthPercentage + '%';
          widthPercentage++;
        }
      }
    }
  }

}
