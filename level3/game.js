var button = document.querySelector("button");
button.addEventListener("click", clickHandler, false);
const beginningScreen =  document.querySelector("div.introLevel");
const gameContainer =  document.querySelector("div.gameContainer");
var playerHasWon = false;


function clickHandler() {
  gameContainer.style.display = "flex";
  beginningScreen.style.display="none";
  playGame();
}

function playGame() {

}

function generateBlocks { 

}
