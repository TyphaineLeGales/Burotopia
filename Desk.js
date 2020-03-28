var deskContainer = document.querySelector("div.deskContainer");

class Desk{
  constructor() {
    this.id = [];
    this.state = "closed";
    this.isTheAnswer = false;
    this.divDesk = document.createElement("div");
    this.divDoors = document.createElement("div");

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
    this.moveDoors(leftDoor, "left");
    var rightDoor = document.createElement("div");
    rightDoor.classList.add("deskDoorRight");
    rightDoor.classList.add("deskDoors");
    divDesk.appendChild(rightDoor);
    this.moveDoors(rightDoor, "right");
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

  moveDoors (door, side) {
    var widthPercentage = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (widthPercentage === 50) {
        clearInterval(id);
      } else {
        door.style.width = widthPercentage + '%';
        widthPercentage++;
      }
    }
  }

}
