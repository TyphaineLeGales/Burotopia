var gameContainer = document.querySelector('div.gameContainer');

class Form {
  constructor() {
    this.container = document.createElement('div');
    this.pictureBox = document.createElement('div');
    this.nameBox = document.createElement('div');
    this.zip = document.createElement('div');
    this.create();
  }

  create () {
    this.container = document.createElement('div');
    this.container.classList.add('formContainer');

    this.pictureBox.classList.add('picture');
    this.pictureBox.classList.add('formItem');

    this.nameBox.classList.add('name');
    this.nameBox.classList.add('formItem');

    this.zip.classList.add('zip');
    this.createZipCode(this.zip);

    this.container.appendChild(this.pictureBox);
    this.container.appendChild(this.nameBox);
    this.container.appendChild(this.zip);

    gameContainer.appendChild(this.container);
  }

  createZipCode (zipContainer) {
    for(var i = 0; i< 6; i++) {
      var box = document.createElement('div');
      box.classList.add('zipBox');
      box.classList.add('formItem');
      box.style.left = i*2 +  "vw";
      zipContainer.appendChild(box);
    }
  }
}
