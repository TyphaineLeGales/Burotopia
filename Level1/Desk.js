var deskContainer = document.querySelector("div.deskContainer");
var employeeText1 = "I'm afraid that's not the number I called, please wait for your turn";

class Desk{
  constructor() {
    this.index = null;
    this.id = [];
    this.state = "closed";
    this.isTheAnswer = false;
    this.divDesk = document.createElement("div");
    this.divDeskState = document.createElement("p");
    this.divDoors = document.createElement("div");
    this.leftDoor = document.createElement("div");
    this.rightDoor = document.createElement("div");
    this.employee = document.createElement("div");
    this.hasACustomer = false;
    this.customer = document.createElement("div");
    this.customerLife = getRandomInt(6000);
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

  setIsTheAnswer(bool) {
    this.isTheAnswer = bool;
    if(this.isTheAnswer === true) {
      this.divDesk.classList.add("isTheAnswer");
    } else {
       this.divDesk.classList.remove("isTheAnswer");
    }
  }

  createEmployee() {
    this.employee.classList.add('clickTarget');
    this.divDesk.appendChild(this.employee);
    var randImg = getRandomInt(7);
    this.employee.style.backgroundImage = 'url(../Assets/Graphics/DeskEmployee-'+ randImg +'.png)';

    var textEmployee =document.createElement("p");
    textEmployee.classList.add('textEmployee');
    this.divDesk.appendChild(textEmployee);
    this.employee.onclick = e => {this.displayTextEmployee(textEmployee, employeeText1)};
  }

  displayTextEmployee(textEmployee, text) {
    //if remaining guesses === 3 : Get Out of here => lost
    if(this.isTheAnswer != true) {
      textEmployee.style.display = "block";
      textEmployee.innerHTML = text ;
    }
    setTimeout(removeTextEmployee,2000);
    function removeTextEmployee () {
       textEmployee.style.display = "none";
    }
  }

  createDoors () {
    this.leftDoor.classList.add("deskDoorLeft");
    this.leftDoor.classList.add("deskDoors");
    this.divDesk.appendChild(this.leftDoor);
    this.initDoors(this.leftDoor);
    this.rightDoor.classList.add("deskDoorRight");
    this.rightDoor.classList.add("deskDoors");
    this.divDesk.appendChild(this.rightDoor);
    this.initDoors(this.rightDoor);
  }

  createCustomer () {
    this.customer.classList.add("customer");
    this.divDesk.appendChild(this.customer);
  }

  customerUpdate() {
     if(this.hasACustomer === true) {
      this.customer.style.display = "block";
     } else {
      this.customer.style.display = "none";
     }
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
    this.createCustomer();

  }

  destroyDesk() {
    this.divDesk.remove();
  }

  setIndex(index) {
    this.index = index;
  }

  initDoors (door) {
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

  closeDoors () {
    var widthPercentage = 0;
    var doorLeft = this.leftDoor;
    var doorRight = this.rightDoor;
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
