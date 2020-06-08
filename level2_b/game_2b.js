const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const symbols = ["@", "#", "$", "%", "§", "(", ")", "*", "£", "{", "}"];
var gameContainer =  document.querySelector("div.gameContainer");
const cardContainer = document.querySelector("div.cardContainer");

var endGameMSG =  document.querySelector("h1.endGameMSG");
var matchMsg = document.querySelector("h1.matchMSG");

var _passwordLength = 10;
var _guesses =[];
var cells = [];
var services = [];
var passwords = [];
var cards = [];
var sitesNames = ["bank", "delivery", "eMail", "phone", "streaming", "health", "shop", "friend", "dating", "news"];
var _numberOfPairs = sitesNames.length;
var _numberOfCards = 2* _numberOfPairs;
var playerHasWon = false;

//TO DO :
//start screen
//count number of time card has been clicked
//count tries => after 3 reset Password
//can't pick the same card more than 3 times in a row
//timer
document.addEventListener('DOMContentLoaded',(event) => {
  playGame();

});

function playGame() {
  generateCardGrid();
  fillGridRand();
  generatePassword();
  createMatchIndexCell();
}

function generateCardGrid() {
  for(var i=0; i<_numberOfCards; i++) {
    var cell = document.createElement("div");
    cell.classList.add("cell");
    cardContainer.appendChild(cell);
    cells.push(cell);
  }
}

function createMatchIndexCell () {
  var indexCell = document.createElement("div");
  indexCell.classList.add("cell");
  indexCell.classList.add("matchIndex");
  cardContainer.appendChild(indexCell);
  displayPasswordServiceMatch(indexCell);
}

function displayPasswordServiceMatch (cell) {
  var insidePostIt = document.createElement("div");
  insidePostIt.classList.add("insidePostIt");
  for(var i =0; i < _numberOfPairs; i++) {
    var passwordServiceMatch = document.createElement("p");
    passwordServiceMatch.classList.add('passwordServiceMatch');
    passwordServiceMatch.innerHTML = "<u>" +services[i] + "</u>" + " : " + "<br>"+ passwords[i];
    insidePostIt.appendChild(passwordServiceMatch);
  }

  cell.appendChild(insidePostIt);

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
    services.push(pair.name);
    passwords.push(pair.password);

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
  var card = innerCardContainer.parentElement;
  var cell = card.parentElement;
  var flipedCards = document.querySelectorAll("div.fliped");

  //+1 to card clickedCount
  //access pair object onClick

  if(innerCardContainer.classList[1] != "fliped" && flipedCards.length < 1) {
     innerCardContainer.classList.add('fliped');
  } else if (innerCardContainer.classList[1] != "fliped" && flipedCards.length === 1 ) {
    innerCardContainer.classList.add('fliped');
    checkForMatch(e, innerCardContainer);
  } else{
    innerCardContainer.classList.remove('fliped');
  }
}

function flipBackAll () {
  var flipedCards = document.querySelectorAll("div.fliped");
  flipedCards.forEach(card => card.classList.remove('fliped'));
}

function checkForMatch(e) {
  var flipedCards = document.querySelectorAll("div.fliped");
  var idFlipedCards = [];
  flipedCards.forEach(function(card) {
    var id = card.lastChild.childNodes[0].innerHTML;
    idFlipedCards.push(id);
  });

  if(idFlipedCards[0] === idFlipedCards[1]) {
    flipedCards.forEach(function(card){
    card.classList.remove('fliped');
    card.classList.add('hasBeenFound');
  });
  matchMsg.classList.add('in');
  setTimeout(matchMSGOut, 2000);
  checkWin();
  } else {
    setTimeout(flipBackAll, 1000);
  }
}

function matchMSGOut () {
  matchMsg.classList.remove('in');
}


function checkWin() {
  var hasBeenFoundCards = document.querySelectorAll('div.hasBeenFound');
  if(hasBeenFoundCards.length === _numberOfCards) {
    playerWins();
  }
}

function playerWins () {
  endGameMSG.innerHTML = "you win";
  endGameMSG.style.display = "block";
  playerHasWon = true;
}
