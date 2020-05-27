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

    this.create();
  }

  create () {
    this.container = document.createElement('div');
    this.container.classList.add('formContainer');

    this.picture.classList.add('picture');
    this.picture.classList.add('formItem');

    this.firstName.classList.add('name');
    this.firstName.classList.add('formItem');

    this.lastName.classList.add('lastName');
    this.lastName.classList.add('formItem');

    this.address.classList.add('address');
    this.address.classList.add('formItem');

    this.zip.classList.add('zip');
    this.createZipCode(this.zip);

    this.city.classList.add('city');
    this.city.classList.add('formItem');

    this.email.classList.add('email');
    this.email.classList.add('formItem');
    this.createEmail(this.email);

    this.signature.classList.add('signature');
    this.signature.classList.add('formItem');

    this.container.appendChild(this.picture);
    this.container.appendChild(this.firstName);
    this.container.appendChild(this.lastName);
    this.container.appendChild(this.address);
    this.container.appendChild(this.zip);
    this.container.appendChild(this.city);
    this.container.appendChild(this.email);
    this.container.appendChild(this.signature);


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
