var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var playerIdArray = [];
var playerID = "";
var idLength = 5;
var playerHasWon = false;
var maxNumberOfGuess = 3;
var remainingGuessesNum = maxNumberOfGuess;
var guessesContainer = document.querySelector("#guesses");
var numberOfDesks = 24;
var playerIDContainer = document.querySelector("#playerID");
var deskContainer = document.querySelector("div.deskContainer");
var desks = [];
var randomizeDeskTimer = 3;
var endGameMsg =  document.querySelector("#endGameMsg");
var maxTime = 60 //timer is called every second;
var timeLeft = maxTime;
var timerId;
var timerContainer = document.querySelector("#timer");
var startUI = document.querySelector(".introLevel");
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

  //TO DO :
  //dialogues : change error msg according to remaining guesses + different loosing cases
  //fix right id with changing state changes right answer desk
  //reshuflle id's and openDesk : Always one desk should be open with right id
  //animation when changing number type transition //check requestAnimationFrame
  //Other Clients
  //Animation on deskHover and on click (paper throwing)

function clickHandler() {
  playGame();
  startUI.style.display= "none";
}

function playGame() {
  generatePlayerId();
  generateDesks();
  deskContainer.onclick = e => {
    checkForWin(e);
  }
  // window.setInterval(randomizeStateDesk, 3000);
  timerId = window.setInterval(countdown, 1000);
}

function generatePlayerId() {
  for(var i = 0; i < idLength; i++) {
    playerIdArray[i] = generateCharacter();
  }
  playerID = playerIdArray[0] + playerIdArray[1] + playerIdArray[2] + playerIdArray[3] + playerIdArray[4] ;
  playerIDContainer.innerHTML = "your number is " + playerID;
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

function randomizeStateDesk() {
  var changingDesk = desks[getRandomInt(desks.length)];
  doorAnimation(changingDesk);
}

function displayNumberOfGuesses () {
  guessesContainer.innerHTML ="You have" + remainingGuessesNum + "guesses Left";
}

function doorAnimation (desk) {
  if(desk.state === "open") {
    desk.closeDoors();
    desk.state= "closed";
    desk.setState();
  } else if (desk.state === "closed") {
    desk.openDoors();
    desk.state ="open";
    desk.setState();
  }
}

function generateDesks() {
  //create array of empty desks
  for(var i=0; i < numberOfDesks; i++) {
    var desk = new Desk();
    desks.push(desk);
  }
  var randomIndexAnswer = getRandomInt(desks.length);
  var correctDesk = desks[randomIndexAnswer];
  correctDesk.index = randomIndexAnswer;
  correctDesk.id = playerID;
  correctDesk.state = "open";
  correctDesk.isTheAnswer = true;

  //add desk with same id that is closed
  var randomIndex = getRandomInt(desks.length);
  if(randomIndexAnswer === randomIndex) {
    randomIndex = getRandomInt(desks.length);
  }
  var closedDeskSameId = desks[randomIndex];
  closedDeskSameId.index = randomIndex;
  closedDeskSameId.id = playerID;
  closedDeskSameId.state = "closed";
  closedDeskSameId.isTheAnswer = false;
  for(var i = 0; i< desks.length; i++) {
    var desk = desks[i];
    desk.index = i;
    if(desk.id != playerID) {
      //Generate random state
      var randBinary = Math.round(Math.random());
      if(randBinary === 0) {
        desk.state = "closed";
      } else {
        desk.state = "open";
      }
      //Generate random id with same character as players ID
      for(var j = 0; j < idLength; j++) {
        desk.id[j] = playerIdArray[getRandomInt(idLength)];
      }
    }
    desk.createDesk();
  }
}


function checkForWin (e) {
  if(e.target.classList[0] === "clickTarget") {
    if(e.target.parentNode.classList[1] === "isTheAnswer") {
      playerHasWon = true;
      endGame();
    } else if(remainingGuessesNum > 0){
      var clickedDesk = e.target.parentNode;
      remainingGuessesNum -=1;
      } else if(remainingGuessesNum === 0) {
        endGame();
    }
  }
}

function countdown () {
  //if timeLeft < 0
  //"We are closing"
  timeLeft -= 1;
  timerContainer.innerHTML = "" + timeLeft;
  if(timeLeft%randomizeDeskTimer===0) {
    randomizeStateDesk();
  }
  if(timeLeft === 0) {
    clearInterval(timerId);
    endGame();
  }
}

function win() {
  endGameMsg.innerHTML = "Congratulations ! You won";
  setTimeout(goBackToMap, 3000);
}

function playerHasLost() {
  endGameMsg.innerHTML = "You lost";
  setTimeout(reset, 3000);
}


function endGame() {
  clearInterval();
  endGameMsg.style.display="block";
  deskContainer.style.display="none";
  if(playerHasWon) {
    win();
  } else {
    //Take a new number transition page
    playerHasLost();
  }
}

function reset () {
  for(var i=0; i < numberOfDesks; i++) {
    desks[i].destroyDesk();
  }
  timeLeft = maxTime;
  desks = [];
  endGameMsg.style.display="none";
  remainingGuessesNum= maxNumberOfGuess;
  playerIDContainer.innerHTML = "";
  playerHasWon = false;
  endGameMsg.innerHTML = "";
  deskContainer.style.display="flex";
  playGame();
}
