var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var playerIdArray = [];
var playerID = "";
var idLength = 5;
var playerHasWon = false;
var maxNumberOfGuess = 3;
const introduceAnswerDelay = 10;
var remainingGuessesNum = maxNumberOfGuess;
var guessesContainer = document.querySelector("#guesses");
var numberOfDesks = 24;
var answerDeskHasBeenCreated = false;
var playerIDContainer = document.querySelector("#playerID");
var deskContainer = document.querySelector("div.deskContainer");
var desks = [];
var randomizeDeskTimer = 2;
var endGameMsg =  document.querySelector("#endGameMsg");
var maxTime = 60 //timer is called every second;
var timeLeft = maxTime;
var timerId;
var timerContainer = document.querySelector("#timer");
var playerGraphicsContainer = document.querySelector("#playerGraphicsContainer");
var testProjectile = document.querySelector("#testProjectile");
var startUI = document.querySelector(".introLevel");
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

  //TO DO :
  //Animation on click (paper throwing)
  //animation when changing number type transition
  //Text box => hit customer text

function clickHandler() {
  playGame();
  startUI.style.display= "none";
}

function playGame() {
  generatePlayerId();
  generateDesks();
  // movePlayerGraphicsAlongMouse();
  deskContainer.onclick = e => {
    checkForWin(e);
    // throwingAnimation(e);
  }
  // window.setInterval(randomizeStateDesk, 3000);
  timerId = window.setInterval(countdown, 1000);
}

function movePlayerGraphicsAlongMouse () {
  playerGraphicsContainer.style.display ="block";
  window.addEventListener('mousemove', e => {
    playerGraphicsContainer.style.left = e.clientX + "px";
  });
}

function throwingAnimation (e) {
  console.log(e.clientY);
  console.log(testProjectile);
  // var mousePosX = e.clientX;
  var yPos = e.clientY - playerGraphicsContainer.getBoundingClientRect().top - (testProjectile.clientHeight / 2);;
  testProjectile.style.top = yPos + "px";
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
      for(var j = 0; j < idLength; j++) {
        desk.id[j] = playerIdArray[getRandomInt(idLength)];
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
    for(var j = 0; j < idLength; j++) {
      changingDesk.id[j] = playerIdArray[getRandomInt(idLength)];
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


function countdown () {
  timeLeft -= 1;
  timerContainer.innerHTML = "" + timeLeft;

  if(timeLeft%1 ===0) {
    randomizeId();
  }
  if(timeLeft%randomizeDeskTimer===0) {
    randomizeStateDesk();
    updateIsTheAnswer();
    randDeskCustomer();
  }

  if(timeLeft > introduceAnswerDelay && answerDeskHasBeenCreated != true) {
    setTimeout(introduceAnswerDesk, getRandomInt(20000));
    answerDeskHasBeenCreated = true;
  }
  if(timeLeft === 0) {
    clearInterval(timerId);
    endGameMsg.innerHTML = "you're number has already been called pick another and pay attention this time";
    endGame();
  }
}

function checkForWin (e) {
  if(e.target.classList[0] === "clickTarget") {
      var clickedDesk = e.target.parentNode;
    if(e.target.parentNode.classList[1] === "isTheAnswer") {
      playerHasWon = true;
      endGame();
    } else if(remainingGuessesNum > 0){
      remainingGuessesNum -=1;
      //employeeText
      } else if(remainingGuessesNum === 0) {
        clearInterval(timerId);
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
