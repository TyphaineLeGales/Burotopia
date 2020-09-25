import {generatePlayerId, setPlayerId} from './init_playerID.js'
import generateDesks from './init_desks.js'

var playerIdArray = [];
var _playerHasWon = false;
var _maxNumberOfGuess = 3;
const _introduceAnswerDelay = 10;
var _remainingGuessesNum = _maxNumberOfGuess;
var _answerDeskHasBeenCreated = false;
var _randomizeDeskTimer = 2;
var _maxTime = 60 //timer is called every second;
var timeLeft = _maxTime;
var _timerId;

let _playerID;
const _idLength = 5;
let _desks = [];
const numberOfDesks = 28;

var deskContainer = document.querySelector("div.deskContainer");
var timerContainer = document.querySelector("#timer");
var endGameMsg =  document.querySelector("#endGameMsg");

document.addEventListener('DOMContentLoaded',(event) => {
  playGame();
});

function playGame() {
  _playerID = generatePlayerId(_idLength);
  setPlayerId(_playerID, document.querySelector("#playerID"));

  _desks = generateDesks(numberOfDesks, _playerID);
  deskContainer.onclick = e => {
    checkForWin(e);
  }
  _timerId = window.setInterval(countdown, 1000);
}


function randomizeStateDesk() {
  var changingDesk = _desks[getRandomInt(_desks.length)];
  doorAnimation(changingDesk);
}

function randDeskCustomer() {
  var changingDesk = _desks[getRandomInt(_desks.length)];
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

const randomizeId = () => {
  let changingDesk = _desks[getRandomInt(_desks.length)];
  if(changingDesk.state === "open") {
    for(let j = 0; j < _idLength; j++) {
      changingDesk.number[j] = _playerID[getRandomInt(_idLength)];
    }
    changingDesk.setId();
    changingDesk.displayTextEmployee(changingDesk.textEmployee, "Next Please !");
  }
}

function introduceAnswerDesk() {
  var randIndex = getRandomInt(_desks.length);
  var changingDesk = _desks[randIndex];
  changingDesk.index = randIndex;
  changingDesk.setIndex();
  changingDesk.number = playerID;
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
     if(_desks[i].id ===  playerID && _desks[i].state === "open") {
        _desks[i].setIsTheAnswer(true);
     } else {
        _desks[i].setIsTheAnswer(false);
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
    _desks[i].destroyDesk();
  }
  timeLeft = _maxTime;
  _desks = [];
  endGameMsg.style.display="none";
  _remainingGuessesNum= _maxNumberOfGuess;
  playerIDContainer.innerHTML = "";
  _playerHasWon = false;
  endGameMsg.innerHTML = "";
  deskContainer.style.display="flex";
  playGame();
}
