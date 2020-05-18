var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
var startUI = document.querySelector(".introLevel");
var container = document.querySelector('div.gameContainer');
var endGameMSG = document.querySelector('.endGameMSG');
var machineGraphics = document.querySelector('.slotMachineGraphics');

function clickHandler() {

  playGame();
  startUI.style.display= "none";
}

function playGame() {

  machineGraphics.style.display = "block";

}
