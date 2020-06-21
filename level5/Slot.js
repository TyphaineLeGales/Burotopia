
class Slot{
  constructor (container, offset) {
    this.container = container;
    this.offset = offset;
    this.numberOfIcons = 4;
    this.iconArray = [];
    this.counter = 0;
    this.index = 0;
    this.fillRandSlot();
    this.result = 0;
  }

  fillRandSlot() {
    var indexArray = [];
    for(var j =0; j<this.numberOfIcons; j++){
      indexArray.push(j);
    }

    for(var i = 0; i < this.numberOfIcons; i++) {
      var randImg = getRandomInt(indexArray.length);

      var img = document.createElement("img");
      img.src = "../Assets/Graphics/Level1/employee"+randImg+".png";
      img.classList.add('icon');
      this.container.appendChild(img);
      this.iconArray.push(img);
      indexArray.splice(randImg, 1);
    }

    //duplicate the order so that the loop is seemless
    for(var j = 0; j < this.numberOfIcons; j++){
      var copyImg = this.iconArray[j].cloneNode(true);
      this.container.appendChild(copyImg);
    }

    console.log(this.iconArray);
  }

  drawResult() {
     this.result = getRandomInt(4);
  }

 }
