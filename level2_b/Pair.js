const container = document.querySelector("div.cardContainer");

class Pair {
  constructor (id) {
    this.name = null;
    this.serviceCard = document.createElement("div");
    this.passwordCard = document.createElement("div");
    this.graphics = null;
    this.password = null;
    this.id = id;
  }

  create() {
    this.createServiceCard();
    this.createPasswordCard();
  }


  resetPassword() {
    //after 3 failed trials
  }

  flipCard () {
    //onclick
  }

  setPassword(password) {
    this.password = password;
  }

  createServiceCard() {
    this.serviceCard.classList.add('card');
    this.serviceCard.classList.add('service');

    var cardInner = document.createElement("div");
    cardInner.classList.add('cardInner');
    this.serviceCard.appendChild(cardInner);

    var cardBack = document.createElement("div");
    cardBack.classList.add('cardBack');
    cardInner.appendChild(cardBack);

    var cardFront = document.createElement("div");
    cardFront.classList.add('cardFront');

    var debugName = document.createElement("p");
    debugName.innerHTML = "service";
    cardBack.appendChild(debugName);
    var debugId = document.createElement("p");
    debugId.innerHTML = this.id;
    cardBack.appendChild(debugId);


    cardInner.appendChild(cardFront);

    container.appendChild(this.serviceCard);

  }

  createPasswordCard() {
    this.passwordCard.classList.add('card');
    this.passwordCard.classList.add('password');

    var cardInner = document.createElement("div");
    cardInner.classList.add('cardInner');
    this.passwordCard.appendChild(cardInner);

    var cardBack = document.createElement("div");
    cardBack.classList.add('cardBack');
    cardInner.appendChild(cardBack);

    var cardFront = document.createElement("div");
    cardFront.classList.add('cardFront');
    var debugName = document.createElement("p");
    debugName.innerHTML = "password";
    cardBack.appendChild(debugName);
    var debugId = document.createElement("p");
    debugId.innerHTML = this.id;
    cardBack.appendChild(debugId);

    cardInner.appendChild(cardFront);

    container.appendChild(this.passwordCard);
  }


}
