var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
var startUI = document.querySelector(".introLevel");
var container = document.querySelector('div.gameContainer');
var form;

function clickHandler() {

  playGame();
  startUI.style.display= "none";
}

function playGame() {
  form = new Form();
  // Generate empty form
  // Generate side items
  // Dragable item
  // Check correct position
}
