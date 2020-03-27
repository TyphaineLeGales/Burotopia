var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var id = [];
var stringID = "";
var counterIDs = [];
var idLength = 5;
var isTheAnswer = false;


var playerID = document.querySelector("#playerID");
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
  generateDesksId();

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generatePlayerId() {
  for(var i = 0; i < idLength; i++) {
    id[i] = generateCharacter();
  }

  stringID = id[0] + id[1] + id[2] + id[3] + id[4] ;
  playerID.innerHTML = "your number is " + stringID;
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

function generateDesksId () {
  // pick a random desk that will have the same id as the player
  var correctDesk = desks[getRandomInt(desks.length)];
  correctDesk.classList.add("isTheAnswer");
  correctDesk.childNodes[1].innerHTML = stringID;
  correctDesk.childNodes[3].innerHTML = "open";

  for(var i = 0; i< desks.length; i++) {
    //check for every desks that is not the answer
    if(desks[i].classList[1] != "isTheAnswer") {
      var deskState =  desks[i].childNodes[3];
      var randBinary = Math.round(Math.random());
      if(randBinary === 0) {
        deskState.innerHTML = "closed";
      } else {
        deskState.innerHTML = "open";
      }

    }
  }

  // for other desks : generate random variations from the idElement of the player

  // var deskId = desks[index].childNodes[1];
  // var deskState = desks[index].childNodes[3];
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
