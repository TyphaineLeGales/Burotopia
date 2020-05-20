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
var slot1;
var slot2;
var slot3;

function clickHandler() {

  playGame();
  startUI.style.display= "none";
  createSlot();
  console.log(slot1.iconArray);
}

function playGame() {
  machineGraphics.style.display = "block";
  // slots[0].addEventListener("scroll", debugOffsetHeight, false);
}

function createSlot() {
  slot1 = new Slot(slots[0]);
  slot2 = new Slot(slots[1]);
  slot3 = new Slot(slots[2]);
}

function debugOffsetHeight () {

  // console.log(testIcon.offsetTop);
  console.log(testIcon.clientHeight);
  // console.log(testIcon.scrollTop);
}

function testScroll () {

  if(counter < slots[0].scrollHeight - slots[0].offsetHeight) {
    counter += 1;
    window.requestAnimationFrame(testScroll);
  }
  // console.log(counter);
  for(var i = 0; i < slots.length; i++) {
     slots[i].scrollTop = counter*(i+1);

  }
}

function startRound () {
  counter = 0;
  window.requestAnimationFrame(testScroll);
}
