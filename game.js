var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var playerId = [];
var deskId = [];
var stringID = "";
var counterIDs = [];
var idLength = 5;
var playerHasWon = false;
var numberOfDesks = 12;
var playerIDContainer = document.querySelector("#playerID");
var deskContainer = document.querySelector("div.deskContainer");
var desks = [];
var clickText = document.querySelector("#clickText");
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

deskContainer.onclick = e => {
  checkForWin(e);
}

function clickHandler() {
  playGame();
}

function playGame() {
  reset();
  generatePlayerId();
  generateDesks();

  //TO DO :
  //Make a desk class : Create desks on html desks no the fly with a class method
  //Remaining guesses
  //Timer
  //Closing Doors animation
  //Other Clients
  //TextBox
  //Implement graphics => sprites logic
  //Animation on deskHover and on click (paper throwing)


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
  //create array of empty desks
  for(var i=0; i < numberOfDesks; i++) {
    var desk = new Desk();
    desks.push(desk);
  }

  var correctDesk = desks[getRandomInt(desks.length)];
  console.log(getRandomInt(desks.length));
  correctDesk.id = stringID;
  correctDesk.state = "open";
  correctDesk.isTheAnswer = true;

  for(var i = 0; i< desks.length; i++) {
    //check for every desks that is not the answer
    var desk = desks[i];
    if(desk.isTheAnswer != true) {
      var randBinary = Math.round(Math.random());
      if(randBinary === 0) {
        desk.state = "closed";
      } else {
        desk.state = "open";
      }

      //generate deskId
      for(var j = 0; j < idLength; j++) {
        desk.id[j] = playerId[getRandomInt(idLength)];
      }
    }

    desk.createDesk();

  }

}

function reset () {
  desks = [];
  playerIDContainer.innerHTML = "";
  playerHasWon = false;
  // clickText.innerHTML = "";
  // for(var i = 0; i < desks.length; i++) {
  //   var deskId = desks[i].childNodes[1];
  //   var deskState = desks[i].childNodes[3];
  //   deskState.innerHTML = "";
  //   deskId.innerHTML = "";
  //   if(desks[i].classList[1] === "isTheAnswer") {
  //     desks[i].classList.remove("isTheAnswer");
  //   }
  // }
}

function checkForWin (e) {
  if(e.target.classList[0] === "clickTarget") {
    if(e.target.parentNode.classList[1] === "isTheAnswer") {
      playerHasWon = true;
      clickText.innerHTML = "Congratulations ! You won";
      reset();
    } else {
      clickText.innerHTML = "I'm afraid that's not the number I called, please wait for your turn";
    }
  }
}
