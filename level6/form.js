var gameContainer = document.querySelector('div.gameContainer');

class Form {
  constructor() {
    this.container = document.createElement('div');
    this.picture = document.createElement('div');
    this.create();
  }

  create () {
    this.container = document.createElement('div');
    this.container.classList.add('formContainer');
    this.picture.classList.add('picture');

    this.container.appendChild(this.picture);

    gameContainer.appendChild(this.container);
  }
}
