var gameContainer = document.querySelector('div.gameContainer');

class Form {
  constructor() {
    this.container = document.createElement('div');
    this.picture = document.createElement('div');
    this.firstName = document.createElement('div');
    this.lastName = document.createElement('div');
    // this.zip = document.createElement('div');
    this.city =document.createElement('div');
    this.address = document.createElement('div');
    this.email = document.createElement('div');
    this.signature = document.createElement('div');
    this.block = document.createElement('div');
    this.isFilled = false;
    this.id = document.createElement('p');
    this.create();
  }

  create () {
    this.container = document.createElement('div');
    this.container.classList.add('formContainer');

    this.picture.classList.add('picture', 'formItem');
    this.firstName.classList.add('name', 'formItem');
    this.lastName.classList.add('lastName', 'formItem');
    this.address.classList.add('address', 'formItem');
    this.city.classList.add('city', 'formItem');
    this.email.classList.add('email', 'formItem');
    this.block.classList.add('block', 'formItem');
    this.signature.classList.add('signature', 'formItem');

    // this.zip.classList.add('zip');
    // this.createZipCode(this.zip);

    this.container.innerHTML = this.picture.outerHTML + this.firstName.outerHTML + this.lastName.outerHTML + this.address.outerHTML + this.city.outerHTML + this.email.outerHTML + this.block.outerHTML + this.signature.outerHTML;
    gameContainer.appendChild(this.container);
  }

  delete() {
    this.container.remove();
  }

  // createZipCode (zipContainer) {
  //   for(var i = 0; i< 6; i++) {
  //     var box = document.createElement('div');
  //     box.classList.add('zipBox');
  //     box.classList.add('formItem');
  //     box.style.left = i*2 +  "vw";
  //     zipContainer.appendChild(box);
  //     box.backgroundColor = "blue";
  //   }
  // }
createId() {
    this.id.classList.add('formId');
    this.divDesk.appendChild(this.deskId);
    this.deskId.innerHTML = ""+this.id[0] + this.id[1] + this.id[2] + this.id[3] + this.id[4] ;
  }
}
