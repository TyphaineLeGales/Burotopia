var deskContainer = document.querySelector("div.deskContainer");
var employeeTextWrongNumber = "I'm afraid that's not the number I called, please wait for your turn";
var employeeTextClosed = "Can't you see I'm on a break ?!";

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
    this.clickTarget = document.createElement("div");
    this.hasACustomer = false;
    this.customer = document.createElement("div");
    this.customerLife = getRandomInt(6000);
    this.deskId =document.createElement("p");
    this.textEmployee = document.createElement("p");
  }

  createId() {
    this.deskId.classList.add('deskId');
    this.divDesk.appendChild(this.deskId);
    this.deskId.innerHTML = ""+this.id[0] + this.id[1] + this.id[2] + this.id[3] + this.id[4] ;
  }

  setId() {
    this.deskId.innerHTML = ""+this.id[0] + this.id[1] + this.id[2] + this.id[3] + this.id[4] ; ;
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
    this.employee.classList.add('employee');
    this.divDesk.appendChild(this.employee);
    var randImg = getRandomInt(4);
    this.employee.style.backgroundImage = 'url(../Assets/Graphics/Level1/PersoGris'+ randImg +'.png)';
    this.employee.style.backgroundRepeat = "no-repeat";
    this.textEmployee.classList.add('textEmployee');
    this.divDesk.appendChild(this.textEmployee);
    this.clickTarget.onclick = e => {
      if(this.state === "closed") {
         this.displayTextEmployee(this.textEmployee, employeeTextClosed);
      } else {
        this.displayTextEmployee(this.textEmployee, employeeTextWrongNumber);
      }
    };
  }

  displayTextEmployee(textEmployee, text) {
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
    this.leftDoor.classList.add('deskDoorLeft', 'deskDoors');
    this.divDesk.appendChild(this.leftDoor);
    this.rightDoor.classList.add('deskDoorRight', 'deskDoors');
    this.divDesk.appendChild(this.rightDoor);

    //init state
    if(this.state === "open") {
      this.leftDoor.classList.add('doorLeftOpen');
      this.rightDoor.classList.add('doorRightOpen');
    } else {
      this.leftDoor.classList.add('doorLeftClosed');
      this.rightDoor.classList.add('doorRightClosed');
    }
  }

  createCustomer () {
    this.customer.classList.add("customer");
    this.divDesk.appendChild(this.customer);
    var randImgCustomer = getRandomInt(8);
    this.customer.style.backgroundImage = 'url(../Assets/Graphics/Level1/customer-'+ randImgCustomer +'.png)';
  }

  customerUpdate() {
     if(this.hasACustomer === true) {
      this.customer.style.display = "block";
      this.divDesk.classList.add('hasACustomer');
     } else {
      this.customer.style.display = "none";
      this.divDesk.classList.remove('hasACustomer');
     }
  }

  createDesk() {
    this.divDesk = document.createElement("div");
    var randImgDesk = getRandomInt(4);
    this.divDesk.style.backgroundImage = 'url(../Assets/Graphics/Level1/deskBackground'+ randImgDesk +'.png)';
    this.divDesk.classList.add('counterDesk');
    if(this.isTheAnswer) {
      this.divDesk.classList.add("isTheAnswer");
    }
    deskContainer.appendChild(this.divDesk);
    this.clickTarget.classList.add('clickTarget');
    this.divDesk.appendChild(this.clickTarget);
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

  openDoors () {

    var doorLeft = this.leftDoor;
    var doorRight = this.rightDoor;

    doorLeft.classList.remove('doorLeftClosed');
    doorRight.classList.remove('doorRightClosed');
    doorLeft.classList.add('doorLeftOpen');
    doorRight.classList.add('doorRightOpen');
  }

  closeDoors () {
    var doorLeft = this.leftDoor;
    var doorRight = this.rightDoor;
    doorLeft.classList.add('doorLeftClosed');
    doorRight.classList.add('doorRightClosed');
    doorLeft.classList.remove('doorLeftOpen');
    doorRight.classList.remove('doorRightOpen');

  }

}
