var deskContainer = document.querySelector("div.deskContainer");

class Desk{
  constructor() {
    this.index = null;
    this.id = [];
    this.state = "closed";
    this.isTheAnswer = false;
    this.divDesk = document.createElement("div");
    this.divDeskState = document.createElement("p");
    this.divDoors = document.createElement("div");
    this.doorDelay = getRandomInt(1000);
    this.leftDoor = document.createElement("div");
    this.rightDoor = document.createElement("div");
    this.employee = document.createElement("div");
  }


  createId() {
    var deskId = document.createElement("p");
    deskId.classList.add('deskId');
    this.divDesk.appendChild(deskId);
    deskId.innerHTML = ""+this.id[0] + this.id[1] + this.id[2] + this.id[3] + this.id[4] ;
  }

  createState() {
    this.divDeskState.classList.add('deskState');
    this.divDesk.appendChild(this.divDeskState);
    this.setState();
  }

  setState() {
    this.divDeskState.innerHTML = this.state;
  }

  createEmployee() {
    this.employee.classList.add('clickTarget');
    this.divDesk.appendChild(this.employee);
    var randImg = getRandomInt(7);
    this.employee.style.backgroundImage = 'url(../Assets/Graphics/DeskEmployee-'+ randImg +'.png)';
    // this.deskEmployee.style.backgroundImage = 'url(Assets/Graphics/DeskEmployee-0.png)';
    var textEmployee =document.createElement("p");
    textEmployee.classList.add('textEmployee');
    this.divDesk.appendChild(textEmployee);
    this.employee.addEventListener("click", this.displayTextEmployee(textEmployee));

  }


  displayTextEmployee(textEmployee) {
    console.log("onclick employee is being called");
    textEmployee.style.display = "block";
    textEmployee.innerHTML = "I'm afraid that's not the number I called, please wait for your turn";
    setTimeout(1000, removeTextEmployee);
    function removeTextEmployee () {
       textEmployee.style.display = "none";
       console.log("removeTextEmployee is being called");
    }
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
    this.createId();
    this.createState();
    this.createEmployee();
    this.createDoors();

  }

  destroyDesk() {
    this.divDesk.remove();
  }

  setIndex(index) {
    this.index = index;
  }

  setDoors (door) {
    if(this.state === "open") {
      door.style.width = 0 + '%'
    } else {
      door.style.width = 49 + '%'
    }
  }

  openDoors () {
    var widthPercentage = 49;
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
        if (widthPercentage === 50) {
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
