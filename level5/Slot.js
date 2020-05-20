
class Slot{
  constructor (container) {
    this.container = container;
    this.numberOfIcons = 8;
    this.iconArray = [];
    this.counter = 0;
    this.index = 0;
    this.fillRandSlot();
  }

  fillRandSlot() {
    var randImg = getRandomInt(this.numberOfIcons);
    for(var i = 0; i < this.numberOfIcons; i++) {
      var img = document.createElement("img");
      img.src = "../Assets/Graphics/Level5/Person_"+(i+randImg)%this.numberOfIcons+".png";
      img.classList.add('icon');
      this.container.appendChild(img);
      this.iconArray.push(img);
    }
  }

  reset() {
    this.counter = 0;
  }
 }
