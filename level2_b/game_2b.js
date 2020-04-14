var button = document.querySelector("button");
var gameContainer =  document.querySelector("div.gameContainer");
const cardContainer = document.querySelector("div.cardContainer");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

var _numberOfCards = 10;
var cells = [];
var services = [];
var passwords = [];

//TO DO :

//randomly sample the arrays to fill grid
//flip card onclick
//count tries
//timer
//ajouter un post it manuscrit avec noter chaque password pour chaque site


function clickHandler() {
  gameContainer.style.display = "flex";
  button.style.display="none";
  playGame();
}

function playGame() {
  // generatePairs();
  generateCardGrid();
  fillGridRand();

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

function generateCardGrid() {
  for(var i=0; i<_numberOfCards*2; i++) {
    var cell = document.createElement("div")
    cell.classList.add("cell");
    cardContainer.appendChild(cell);
    cells.push(cell);
  }
}

function fillGridRand() {
  console.log(cells);
  //getRandCell => append pair.service
   for(var i=0; i<_numberOfCards; i++) {
    var pair = new Pair(i);
    pair.create();
    services.push(pair.serviceCard);
    passwords.push(pair.passwordCard);
    var randInt = getRandomInt(cells.length);
    console.log(randInt);
    console.log(cells[randInt]);
    cells[randInt].appendChild(pair.serviceCard);
    cells.splice(randInt,1);
    var randInt_2 = getRandomInt(cells.length);
    cells[randInt_2].appendChild(pair.passwordCard);
    cells.splice(randInt_2,1);
    console.log(randInt_2);
  }
}
