


class Condition{
  constructor () {
    this.container = null;
    this.numberOfIcons = 8;
  }

  fillRandSlot() {
     var randImg = getRandomInt(this.numberOfIcons);
    for(var i = 0; i < this.numberOfIcons; i++) {
      var img = document.createElement("img");
      img.src = "../Assets/Graphics/Level5/Person_"+randImg+".png";
    }
  }
