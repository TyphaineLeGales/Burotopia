var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var id = [];
var counterIDs = [];
var idLength = 5;

var playerID = document.querySelector("#playerID");
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

function clickHandler() {
  // playGameGuessNumber();
  playGame();

}

function playGame() {
  generateId();
  var stringID = id[0] + id[1] + id[2] + id[3] + id[4] ;
  playerID.innerHTML = "your number is " + stringID;

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateId() {
  for(var i = 0; i < idLength; i++) {
    id[i] = generateCharacter();
  }
}

function generateCharacter() {
  var randBinary = Math.round(Math.random());
  var isNumber = randBinary == 1 ? true : false;
  var idElement = "";

  if(isNumber) {
    idElement = "" + getRandomInt(9);
  } else {
    idElement = letters[getRandomInt(letters.length)];
  }

  return idElement ;
  // random letter or number
  // if letter use randomIn to get index of character in the letters Array
  //if number use randomInt
}
