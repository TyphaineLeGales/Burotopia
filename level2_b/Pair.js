const container = document.querySelector("div.cardContainer");

class Pair {
  constructor () {
    this.name = null;
    this.serviceCard = document.createElement("div");
    this.passwordCard = document.createElement("div");
    this.graphics = null;
    this.password = null;
    this.div = document.createElement("div");
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
    cardInner.appendChild(cardFront);

    container.appendChild(this.serviceCard);

  }

  createPasswordCard() {
    this.passwordCard.classList.add('card');
    this.passwordCard.classList.add('password');
    container.appendChild(this.passwordCard);

  }


}
