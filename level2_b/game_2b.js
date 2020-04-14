const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const symbols = ["@", "#", "$", "%", "§", "(", ")", "*", "£", "{", "}"];
var button = document.querySelector("button");
var gameContainer =  document.querySelector("div.gameContainer");
const cardContainer = document.querySelector("div.cardContainer");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

var _passwordLength = 10;
var _guesses =[];
var cells = [];
var services = [];
var passwords = [];
var sitesNames = ["bank", "foodDelivery", "mail", "phoneCompany", "streaming"];
var _numberOfPairs = 10;
var _numberOfCards = 2* _numberOfPairs;
var playerHasWon = false;

//TO DO :
//winning Condition
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
  generatePassword();
}

function generateCardGrid() {
  for(var i=0; i<_numberOfCards; i++) {
    var cell = document.createElement("div")
    cell.classList.add("cell");
    cardContainer.appendChild(cell);
    cells.push(cell);
  }
}

function generatePassword() {
  var password="";
  for(var i = 0; i < _passwordLength; i++) {
    password = ""+password+ generateCharacter();
  }
  return password;
}

function generateCharacter() {
  var randBinary = Math.round(Math.random());
  var isNumber = randBinary == 1 ? true : false;

  var randBinary_2 = Math.round(Math.random());
  var isSymbol = randBinary_2 == 1 ? true : false;

  var randBinary_3 = Math.round(Math.random());
  var isLowerCase = randBinary_3 == 1 ? true : false;
  var idElement = "";

  if(isNumber) {
    idElement = "" + getRandomInt(9);
  } else if (isSymbol){
    idElement = "" + symbols[getRandomInt(symbols.length)];
  } else if(isLowerCase) {
    idElement = letters[getRandomInt(letters.length)].toLowerCase();
  }else {
    idElement = letters[getRandomInt(letters.length)];
  }
  return idElement ;
}

function fillGridRand() {
   for(var i=0; i<_numberOfPairs; i++) {
    var pair = new Pair(i);
    pair.password = generatePassword();
    pair.name = sitesNames[i];
    pair.create();
    services.push(pair.serviceCard);
    passwords.push(pair.passwordCard);

    pair.serviceCard.onclick = e => {
      flip(e);
    }

    pair.passwordCard.onclick = e => {
       flip(e);
    }

    var randInt = getRandomInt(cells.length);
    cells[randInt].appendChild(pair.serviceCard);
    cells.splice(randInt,1);

    var randInt_2 = getRandomInt(cells.length);
    cells[randInt_2].appendChild(pair.passwordCard);
    cells.splice(randInt_2,1);
  }
}

function flip(e) {

  var innerCardContainer = e.target.parentElement;
  var flipedCards = document.querySelectorAll("div.fliped");

  if(innerCardContainer.classList[1] != "fliped" && flipedCards.length < 1 ) {
     innerCardContainer.classList.add('fliped');
  } else if (innerCardContainer.classList[1] != "fliped" && flipedCards.length === 1 ) {
    innerCardContainer.classList.add('fliped');
    checkForWin(e, innerCardContainer);
    setTimeout(flipBackAll, 1000);
  } else{
    innerCardContainer.classList.remove('fliped');
  }
}

  function flipBackAll () {
    var flipedCards = document.querySelectorAll("div.fliped");
    flipedCards.forEach(card => card.classList.remove('fliped'));
  }

function checkForWin(e) {
  console.log("checkForVictory");
  var flipedCards = document.querySelectorAll("div.fliped");
  var idFlipedCards = [];
  flipedCards.forEach(function(card) {
    var id = card.lastChild.childNodes[0].innerHTML;
    idFlipedCards.push(id);
  });

  if(idFlipedCards[0] === idFlipedCards[1]) {
    console.log(idFlipedCards[0]);
    console.log(idFlipedCards[1]);
    console.log("you win");
  } else {
    console.log(idFlipedCards[0]);
    console.log(idFlipedCards[1]);
    console.log("you loose");
  }
}



 //if card is not flipped && guesses.length < 2 => flip card
 //if card is flipped && guess
