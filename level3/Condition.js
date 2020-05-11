const container = document.querySelector('div.conditionContainer');

class Condition{
  constructor (text, color) {
    this.speed = 0;
    this.text = text;
    this.accepted = false;
    this.isNeeded = false;
    this.div = document.createElement("div");
    this.pDiv = document.createElement("p");
    this.checkBox = document.createElement("div");
    this.color = color;
    this.create();
  }

  create () {
    this.div.classList.add('conditionBlock');
    this.div.classList.add('drag');
    this.div.style.backgroundColor = 'white';
    this.pDiv.innerHTML = this.text;
    this.checkBox.classList.add('check');
    this.div.appendChild(this.checkBox);
    this.div.appendChild(this.pDiv);
    container.appendChild(this.div);
    this.setRandPos(this.div);
  }

  setRandPos(div) {
    var minMarginRight = 100;
    var randLeft = getRandomInt(container.offsetWidth - minMarginRight);
    div.style.left = randLeft + "px";
    this.setRandWidth(div, randLeft);
  }

  setRandWidth (div, leftOffset) {
    var minWidth= 150;
    var randWidth = getRandomInt(container.offsetWidth - leftOffset);
    if(randWidth < minWidth) {
      div.style.width = randWidth + minWidth + "px";
    } else {
      div.style.width = randWidth + "px";
    }
  }


  setSpeed (speed) {
    this.speed = speed;
  }

  delete () {

  }

  update () {

  }

}
