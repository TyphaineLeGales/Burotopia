const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var playerIdArray = [];
var playerID = "";
var _idLength = 5;
var _playerHasWon = false;
var _maxNumberOfGuess = 3;
const _introduceAnswerDelay = 10;
var _remainingGuessesNum = _maxNumberOfGuess;
var numberOfDesks = 28;
var _answerDeskHasBeenCreated = false;
var desks = [];
var _randomizeDeskTimer = 2;
var _maxTime = 60 //timer is called every second;
var timeLeft = _maxTime;
var _timerId;
var playerIDContainer = document.querySelector("#playerID");
var playerGraphics = document.querySelector("#playerGraphics");
var deskContainer = document.querySelector("div.deskContainer");
var timerContainer = document.querySelector("#timer");
var endGameMsg =  document.querySelector("#endGameMsg");

document.addEventListener('DOMContentLoaded',(event) => {
  playGame();
});

function playGame() {
  generatePlayerId();
  generateDesks();
  deskContainer.onclick = e => {
    checkForWin(e);
  }
  _timerId = window.setInterval(countdown, 1000);
}

function generatePlayerId() {
  for(var i = 0; i < _idLength; i++) {
    playerIdArray[i] = generateCharacter();
  }
  playerID = playerIdArray.join('');
  console.log(playerID);
  playerIDContainer.innerHTML = '<span class="idCard">' + playerID + "</span>";
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

  //add desk with same id that is closed
  var randomIndex = getRandomInt(desks.length);

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
      for(var j = 0; j < _idLength; j++) {
        desk.id[j] = playerIdArray[getRandomInt(_idLength)];
      }
    }
    desk.createDesk();
  }
}

function randomizeStateDesk() {
  var changingDesk = desks[getRandomInt(desks.length)];
  doorAnimation(changingDesk);
}

function randDeskCustomer() {
  var changingDesk = desks[getRandomInt(desks.length)];
  var timeAtDesk = changingDesk.customerLife+3000;
  if(changingDesk.state === "open") {
    changingDesk.hasACustomer = true;
    changingDesk.customerUpdate();
    setTimeout(customerGoesOutDesk, timeAtDesk);
    function customerGoesOutDesk() {
      changingDesk.customer.classList.add('customerPopOut');
    }
    setTimeout(customerIsRemoved, timeAtDesk + 450);
    function customerIsRemoved () {
      changingDesk.hasACustomer = false;
      changingDesk.customerUpdate();
      changingDesk.customer.classList.remove('customerPopOut');
    }
  }
}

function randomizeId () {
  var changingDesk = desks[getRandomInt(desks.length)];
  if(changingDesk.state === "open") {
    for(var j = 0; j < _idLength; j++) {
      changingDesk.id[j] = playerIdArray[getRandomInt(_idLength)];
    }
    changingDesk.setId();
    changingDesk.displayTextEmployee(changingDesk.textEmployee, "Next Please !");

  }
}

function introduceAnswerDesk() {
  var randIndex = getRandomInt(desks.length);
  var changingDesk = desks[randIndex];
  changingDesk.index = randIndex;
  changingDesk.setIndex();
  changingDesk.id = playerID;
  changingDesk.setId();
  changingDesk.state = "open";
  changingDesk.setState();
  changingDesk.openDoors();
  changingDesk.hasACustomer = true;
  changingDesk.customerUpdate();

}

function displayNumberOfGuesses () {
  guessesContainer.innerHTML ="You have" + _remainingGuessesNum + "guesses Left";
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


function countdown () {
  timeLeft -= 1;
  timerContainer.innerHTML = "" + timeLeft;

  if(timeLeft%1 ===0) {
    randomizeId();
  }
  if(timeLeft%_randomizeDeskTimer===0) {
    randomizeStateDesk();
    updateIsTheAnswer();
    randDeskCustomer();
  }

  if(timeLeft > _introduceAnswerDelay && _answerDeskHasBeenCreated != true) {
    setTimeout(introduceAnswerDesk, getRandomInt(20000));
    _answerDeskHasBeenCreated = true;
  }
  if(timeLeft === 0) {
    clearInterval(_timerId);
    endGameMsg.innerHTML = "you're number has already been called pick another and pay attention this time";
    endGame();
  }
}

function checkForWin (e) {
  if(e.target.classList[0] === "clickTarget") {
      var clickedDesk = e.target.parentNode;
    if(e.target.parentNode.classList[1] === "isTheAnswer") {
      _playerHasWon = true;
      endGame();
    } else if(_remainingGuessesNum > 0){
      _remainingGuessesNum -=1;
      //employeeText
      } else if(_remainingGuessesNum === 0) {
        clearInterval(_timerId);
        endGameMsg.innerHTML ="If you can't wait for your number to be called I'll have to ask you to leave now !!! It's been 3 times"
        endGame();
    }
  }
}

function updateIsTheAnswer() {
   for(var i=0; i < numberOfDesks; i++) {
     if(desks[i].id ===  playerID && desks[i].state === "open") {
        desks[i].setIsTheAnswer(true);
     } else {
        desks[i].setIsTheAnswer(false);
     }

   }
}

function win() {
  endGameMsg.innerHTML = "Thank you! I'll transfer your file to the right service";
  setTimeout(goBackToMap, 3000);
}

function playerHasLost() {
  setTimeout(reset, 3000);
}


function endGame() {
  clearInterval();
  endGameMsg.style.display="block";
  deskContainer.style.display="none";
  if(_playerHasWon) {
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
  timeLeft = _maxTime;
  desks = [];
  endGameMsg.style.display="none";
  _remainingGuessesNum= _maxNumberOfGuess;
  playerIDContainer.innerHTML = "";
  _playerHasWon = false;
  endGameMsg.innerHTML = "";
  deskContainer.style.display="flex";
  playGame();
}
