var deskContainer = document.querySelector("div.deskContainer");

class Desk{
  constructor() {
    this.id = [];
    this.state = "closed";
    this.isTheAnswer = false;
    this.divDesk = document.createElement("div");
    this.divDeskState = document.createElement("p");
    this.divDoors = document.createElement("div");
    this.doorDelay = getRandomInt(1000);
    this.leftDoor = document.createElement("div");
    this.rightDoor = document.createElement("div");

  }

  createDeskId() {
    var deskId = document.createElement("p");
    deskId.classList.add('deskId');
    this.divDesk.appendChild(deskId);
    deskId.innerHTML = ""+this.id[0] + this.id[1] + this.id[2] + this.id[3] + this.id[4] ;
  }

  createDeskState() {
    this.divDeskState.classList.add('deskState');
    this.divDesk.appendChild(this.divDeskState);
    this.setDeskState();
  }

  setDeskState() {
    this.divDeskState.innerHTML = this.state;
  }

  createClickTarget() {
    var divClickTarget = document.createElement("div");
    divClickTarget.classList.add('clickTarget');
    this.divDesk.appendChild(divClickTarget);
  }

  createDoors () {

    this.leftDoor.classList.add("deskDoorLeft");
    this.leftDoor.classList.add("deskDoors");
    this.divDesk.appendChild(this.leftDoor);
    this.setDoors(this.leftDoor);

    this.rightDoor.classList.add("deskDoorRight");
    this.rightDoor.classList.add("deskDoors");
    this.divDesk.appendChild(this.rightDoor);
    this.setDoors(this.rightDoor);
  }


  createDesk() {
    this.divDesk = document.createElement("div");
    this.divDesk.classList.add('counterDesk');
    if(this.isTheAnswer) {
      this.divDesk.classList.add("isTheAnswer");
    }
    deskContainer.appendChild(this.divDesk);
    this.createDeskId();
    this.createDeskState();
    this.createClickTarget();
    this.createDoors();

  }

  destroyDesk() {
    this.divDesk.remove();
  }

  setDoors (door) {
    if(this.state === "open") {
      door.style.width = 0 + '%'
    } else {
      door.style.width = 45 + '%'
    }
  }


  openDoors () {
    var widthPercentage = 45;
    var doorLeft = this.leftDoor;
    var doorRight = this.rightDoor;
    setTimeout(opening, 10);
    function opening () {
      var id = setInterval(openingAnim, 10);
      function openingAnim() {
        if (widthPercentage === 0) {
          clearInterval(id);
        } else {
          doorRight.style.width = widthPercentage + '%';
          doorLeft.style.width = widthPercentage + '%';
          widthPercentage--;
        }
      }
    }
  }

  closeDoors () {
    var widthPercentage = 0;
    var doorLeft = this.leftDoor;
    var doorRight = this.rightDoor;
    setTimeout(closing, this.doorDelay);
    function closing () {
      var id = setInterval(closingAnim, 10);
      function closingAnim() {
        if (widthPercentage ===45) {
          clearInterval(id);
        } else {
          doorRight.style.width = widthPercentage + '%';
          doorLeft.style.width = widthPercentage + '%';
          widthPercentage++;
        }
      }
    }
  }

}
