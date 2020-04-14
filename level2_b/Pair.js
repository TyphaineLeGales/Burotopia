const container = document.querySelector("div.cardContainer");

class Pair {
  constructor (id) {
    this.name = null;
    this.serviceCard = document.createElement("div");
    this.serviceCardInner = document.createElement("div");
    this.passwordCard = document.createElement("div");
    this.passwordCardInner = document.createElement("div");
    this.graphics = null;
    this.password = "";
    this.id = id;
    this.isFlipped = false;
  }

  create() {
    this.createServiceCard();
    this.createPasswordCard();
  }


  resetPassword() {
    //after 3 failed trials
  }

  setPassword(password) {
    this.password = password;
  }

  createServiceCard() {
    this.serviceCard.classList.add('card');
    this.serviceCard.classList.add('service');


    this.serviceCardInner.classList.add('cardInner');
    this.serviceCard.appendChild( this.serviceCardInner);

    var cardBack = document.createElement("div");
    cardBack.classList.add('cardBack');
     this.serviceCardInner.appendChild(cardBack);

    var cardFront = document.createElement("div");
    cardFront.classList.add('cardFront');

    var debugName = document.createElement("p");
    debugName.innerHTML = "service";
    cardBack.appendChild(debugName);
    var debugId = document.createElement("p");
    debugId.innerHTML = this.id;
    cardBack.appendChild(debugId);


     this.serviceCardInner.appendChild(cardFront);

    container.appendChild(this.serviceCard);

  }

  createPasswordCard() {
    this.passwordCard.classList.add('card');
    this.passwordCard.classList.add('password');

    this.passwordCardInner.classList.add('cardInner');
    this.passwordCard.appendChild( this.passwordCardInner);

    var cardBack = document.createElement("div");
    cardBack.classList.add('cardBack');
     this.passwordCardInner.appendChild(cardBack);

    var cardFront = document.createElement("div");
    cardFront.classList.add('cardFront');
    var debugName = document.createElement("p");
    debugName.innerHTML = "password";
    cardBack.appendChild(debugName);
    var debugId = document.createElement("p");
    debugId.innerHTML = this.id;
    cardBack.appendChild(debugId);

     this.passwordCardInner.appendChild(cardFront);

    container.appendChild(this.passwordCard);
  }


}
