const container = document.querySelector('div.conditionContainer');

class Condition{
  constructor (text) {
    this.width = 0;
    this.marginLeft = 0;
    this.speed = 0;
    this.text = text;
    this.selected = false;
    this.outOfScreen = false;
    this.isNeeded = false;
    this.div = document.createElement("div");
    this.pDiv = document.createElement("p");

    this.create();
  }

  create () {
    this.div.classList.add('conditionBlock');
    this.pDiv.innerHTML = this.text;
    this.div.appendChild(this.pDiv);
    container.appendChild(this.div);
    this.setRandPos(this.div);
  }

  setRandPos(div) {
    var minMarginRight = 50;
    var randLeft = getRandomInt(container.offsetWidth - 50);
    div.style.marginLeft = randLeft + "px";
    this.setRandWidth(div, randLeft);
  }

  setRandWidth (div, leftOffset) {
    var randWidth = getRandomInt(container.offsetWidth - leftOffset);
    div.style.width = randWidth + "px";
  }


  setSpeed () {

  }

  delete () {

  }

  update () {

  }

}
