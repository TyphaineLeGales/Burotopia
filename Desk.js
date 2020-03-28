var deskContainer = document.querySelector("div.deskContainer");

class Desk{
  constructor() {
    this.id = [];
    this.state = "closed";
    this.isTheAnswer = false;

  }

  displayDeskId() {

  }

  createDesk() {
    var divDesk = document.createElement("div");
    divDesk.classList.add('counterDesk');
    if(this.isTheAnswer) {
      divDesk.classList.add("isTheAnswer");
    }
    deskContainer.appendChild(divDesk);
    var deskId = document.createElement("p");
    deskId.classList.add('deskId');
    divDesk.appendChild(deskId);
    var deskState = document.createElement("p");
    deskState.classList.add('deskState');
    divDesk.appendChild(deskState);
    deskState.innerHTML = this.state;
    var divClickTarget = document.createElement("div");
    divClickTarget.classList.add('clickTarget');
    divDesk.appendChild(divClickTarget);
    //inside html desk container
    //<div class="counterDesk">
      //<p class="deskId"></p>
      //<p class="deskState"></p>
      //<div class="clickTarget"></div>
   // </div>
  }
}
