var button = document.querySelector("button");
var gameContainer =  document.querySelector("div.gameContainer");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

var _numberOfCards = 10;
var services = [];
var passwords = [];

//TO DO :

//randomly sample the arrays to fill grid
//flip card onclick
//count tries
//timer


function clickHandler() {
  gameContainer.style.display = "flex";
  button.style.display="none";
  playGame();
}

function playGame() {
  generatePairs();

}

function generatePairs() {
  console.log("function is called ");
  for(var i=0; i<_numberOfCards; i++) {
    var pair = new Pair(i);
    pair.create();
    services.push(pair.serviceCard);
    passwords.push(pair.passwordCard);
  }
}

function fillGridRand() {

}
