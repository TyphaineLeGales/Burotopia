var button = document.querySelector("button");
var gameContainer =  document.querySelector("div.gameContainer");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

var _numberOfCards = 5;
var services = [];
var passwords = [];

//TO DO :
//store cards in two corresponding arrays;
//randomly sample the arrays to fill grid
//flip card onclick
//count tries
//timer
//generate password/service pair

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
    var pair = new Pair();
    pair.create();
    console.log(pair.serviceCard);
    services.push(pair.serviceCard);
    passwords.push(pair.passwordCard);
  }
}

function fillGridRand() {

}
