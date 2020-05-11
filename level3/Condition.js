const container = document.querySelector('div.conditionContainer');

class Condition{
  constructor (text, color) {
    this.width = 0;
    this.marginLeft = 0;
    this.speed = 0;
    this.text = text;
    this.selected = false;
    this.outOfScreen = false;
    this.isNeeded = false;
    this.div = document.createElement("div");
    this.pDiv = document.createElement("p");
    this.checkBox = document.createElement("div");
    this.color = color;
    this.create();
  }

  create () {
    this.div.classList.add('conditionBlock');
    this.div.style.backgroundColor = this.color;
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


  setSpeed () {

  }

  delete () {

  }

  update () {

  }

}
