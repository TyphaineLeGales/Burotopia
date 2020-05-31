var gameContainer = document.querySelector('div.gameContainer');

class Form {
  constructor() {
    this.container = document.createElement('div');
    this.picture = document.createElement('div');
    this.firstName = document.createElement('div');
    this.lastName = document.createElement('div');
    this.zip = document.createElement('div');
    this.city =document.createElement('div');
    this.address = document.createElement('div');
    this.email = document.createElement('div');
    this.signature = document.createElement('div');
    this.block = document.createElement('div');

    this.create();
  }

  create () {
    this.container = document.createElement('div');
    this.container.classList.add('formContainer');

    this.picture.classList.add('picture', 'formItem');

    this.firstName.classList.add('name', 'formItem');

    this.lastName.classList.add('lastName', 'formItem');

    this.address.classList.add('address', 'formItem');

    this.zip.classList.add('zip');
    this.createZipCode(this.zip);

    this.city.classList.add('city', 'formItem');

    this.email.classList.add('email', 'formItem');
    this.createEmail(this.email);

    this.block.classList.add('block', 'formItem');

    this.signature.classList.add('signature', 'formItem');

    this.container.innerHTML = this.picture.outerHTML + this.firstName.outerHTML + this.lastName.outerHTML + this.address.outerHTML + this.zip.outerHTML + this.city.outerHTML + this.email.outerHTML + this.block.outerHTML + this.signature.outerHTML;
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

  createEmail (emailContainer) {
    var firstPart = document.createElement('div');
    firstPart.style.width = '15vw';
    firstPart.style.height = '2vw';
    var arobase = document.createElement('p');
    arobase.innerHTML = "@";
    arobase.style.width = '5vw';
    var endPart = document.createElement('div');
    endPart.style.width = '10vw';

    emailContainer.appendChild(firstPart);
    emailContainer.appendChild(arobase);
    emailContainer.appendChild(endPart);
  }
}
