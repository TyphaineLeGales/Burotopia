var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
var startUI = document.querySelector(".introLevel");
var container = document.querySelector('div.gameContainer');
var endGameMSG = document.querySelector('.endGameMSG');
var machineGraphics = document.querySelector('.slotMachine');

var counter = 0;
var slot_1 = document.getElementById('slot1');

function clickHandler() {

  playGame();
  startUI.style.display= "none";
}

function playGame() {

  machineGraphics.style.display = "block";
  window.requestAnimationFrame(testScroll);

}

function testScroll () {

  if(counter < slot_1.offsetHeight) {
    counter += 1;
  } else {
    console.log("branching works");
    counter = 0;
  }
  console.log(counter);
  slot_1.scrollTop = counter + "px";
  window.requestAnimationFrame(testScroll);
}
