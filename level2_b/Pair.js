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

    var idHidden = document.createElement("p");
    idHidden.innerHTML = this.id;
    idHidden.style.display = "none";
    cardFront.appendChild(idHidden);

    this.serviceCardInner.appendChild(cardFront);

    container.appendChild(this.serviceCard);

    cardBack.style.backgroundImage = 'url(../Assets/Graphics/Level2/'+ this.name.trim() +'.png)';
    cardBack.classList.add('serviceGraphics');
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

     var idHidden = document.createElement("p");
    idHidden.innerHTML = this.id;
    idHidden.style.display = "none";
    cardFront.appendChild(idHidden);

    var passwordDiv = document.createElement("p");
    passwordDiv.innerHTML = this.password;
    cardBack.appendChild(passwordDiv);

    this.passwordCardInner.appendChild(cardFront);

    container.appendChild(this.passwordCard);
  }


}
