var deskContainer = document.querySelector("div.deskContainer");

class Desk{
  constructor() {
    this.id = [];
    this.state = "closed";
    this.isTheAnswer = false;
    this.divDesk = document.createElement("div");

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

  }

  destroyDesk() {
    this.divDesk.remove();
  }

}
