var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var playerId = [];
var deskId = [];
var stringID = "";
var counterIDs = [];
var idLength = 5;
var isTheAnswer = false;


var playerIDContainer = document.querySelector("#playerID");
var desks = document.querySelectorAll("div.counterDesk");
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

function clickHandler() {
  playGame();
}

function playGame() {
  reset();
  generatePlayerId();
  generateDesks();

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generatePlayerId() {
  for(var i = 0; i < idLength; i++) {
    playerId[i] = generateCharacter();
  }

  stringID = playerId[0] + playerId[1] + playerId[2] + playerId[3] + playerId[4] ;
  playerIDContainer.innerHTML = "your number is " + stringID;
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
}

function generateDesks() {
  // pick a random desk that will have the same id as the player
  var correctDesk = desks[getRandomInt(desks.length)];
  correctDesk.classList.add("isTheAnswer");
  correctDesk.childNodes[1].innerHTML = stringID;
  correctDesk.childNodes[3].innerHTML = "open";

  for(var i = 0; i< desks.length; i++) {
    //check for every desks that is not the answer
    if(desks[i].classList[1] != "isTheAnswer") {

      // generate deskState
      var deskState =  desks[i].childNodes[3];
      var randBinary = Math.round(Math.random());
      if(randBinary === 0) {
        deskState.innerHTML = "closed";
      } else {
        deskState.innerHTML = "open";
      }

      //generate deskId
      var deskId = desks[i].childNodes[1];
      for(var j = 0; j < idLength; j++) {
        deskId[j] = playerId[getRandomInt(idLength)];
      }
      deskId.innerHTML = "" + deskId[0] + deskId[1] + deskId[2] + deskId[3] + deskId[4];
    }
  }

}

function reset () {
  var id = [];
  for(var i = 0; i < desks.length; i++) {
    var deskId = desks[i].childNodes[1];
    var deskState = desks[i].childNodes[3];
    deskState.innerHTML = "";
    deskId.innerHTML = "";

    if(desks[i].classList[1] === "isTheAnswer") {
      desks[i].classList.remove("isTheAnswer");
    }
  }
}
