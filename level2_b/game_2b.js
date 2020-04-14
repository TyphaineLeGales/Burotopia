const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [];
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
//generatePassword
//addSiteGraphics
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
  generateCardGrid();
  fillGridRand();
}

function generateCardGrid() {
  for(var i=0; i<_numberOfCards*2; i++) {
    var cell = document.createElement("div")
    cell.classList.add("cell");
    cardContainer.appendChild(cell);
    cells.push(cell);
  }
}

function generatePasswords() {

}

function fillGridRand() {
  console.log(cells);
   for(var i=0; i<_numberOfCards; i++) {
    var pair = new Pair(i);
    pair.create();
    services.push(pair.serviceCard);
    passwords.push(pair.passwordCard);

    var randInt = getRandomInt(cells.length);
    cells[randInt].appendChild(pair.serviceCard);
    cells.splice(randInt,1);

    var randInt_2 = getRandomInt(cells.length);
    cells[randInt_2].appendChild(pair.passwordCard);
    cells.splice(randInt_2,1);
  }
}
