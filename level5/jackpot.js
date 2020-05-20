var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
var startUI = document.querySelector(".introLevel");
var container = document.querySelector('div.gameContainer');
var endGameMSG = document.querySelector('.endGameMSG');
var machineGraphics = document.querySelector('.slotMachine');
var btnStartMachine = document.querySelector('.btnStartMachine');
btnStartMachine.addEventListener("click", startRound, false);

var counter = 0;
var slots = document.querySelectorAll('.slot');

function clickHandler() {

  playGame();
  startUI.style.display= "none";
}

function playGame() {
  machineGraphics.style.display = "block";
  // slots[0].addEventListener("scroll", debugOffsetHeight, false);
  // console.log(slots[0].offsetHeight);
  // console.log(slots[0].scrollHeight);
}

function debugOffsetHeight () {
    console.log(slots[0].scrollTop);
}

function testScroll () {

  if(counter < slots[0].scrollHeight - slots[0].offsetHeight) {
    counter += 1;
    window.requestAnimationFrame(testScroll);
  }
  // console.log(counter);
  for(var i = 0; i < slots.length; i++) {
     slots[i].scrollTop = counter;

  }
}

function startRound () {
  counter = 0;
  window.requestAnimationFrame(testScroll);
}
