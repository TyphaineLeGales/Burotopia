var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var playerIdArray = [];
var playerID = "";
var idLength = 5;
var playerHasWon = false;
var numberOfDesks = 12;
var playerIDContainer = document.querySelector("#playerID");
var deskContainer = document.querySelector("div.deskContainer");
var desks = [];
var clickText = document.querySelector("#clickText");
var button = document.querySelector("button");
var playForTheFirstTime = true;
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);


function clickHandler() {
  playGame();
  button.style.display= "none";
}

function playGame() {
  generatePlayerId();
  generateDesks();
  deskContainer.onclick = e => {
  checkForWin(e);
}

  //TO DO :
  //Closing Doors animation
  //Timer
  //Remaining guesses
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

function doorAnimation (desk) {
  desk.moveDoors();
}

function generateDesks() {
  //create array of empty desks
  for(var i=0; i < numberOfDesks; i++) {
    var desk = new Desk();
    desks.push(desk);
  }
  var randomIndexAnswer = getRandomInt(desks.length);
  var correctDesk = desks[randomIndexAnswer];
  correctDesk.id = playerID;
  correctDesk.state = "open";
  correctDesk.isTheAnswer = true;

  //add desk with same id that is closed
  var randomIndex = getRandomInt(desks.length);

  if(randomIndexAnswer === randomIndex) {
    randomIndex = getRandomInt(desks.length);
  }

  var closedDeskSameId = desks[randomIndex];
  closedDeskSameId.id = playerID;
  closedDeskSameId.state = "closed";
  closedDeskSameId.isTheAnswer = false;


  for(var i = 0; i< desks.length; i++) {
    var desk = desks[i];
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
    doorAnimation(desk);

  }
}

function reset () {
  for(var i=0; i < numberOfDesks; i++) {
    desks[i].destroyDesk();
  }
  desks = [];
  playerIDContainer.innerHTML = "";
  playerHasWon = false;
  clickText.innerHTML = "";
  button.style.display = "block";
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
