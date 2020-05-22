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
var _speed = 4;

//delay slot animation
//stop placement
//infinite loop
//winning condition

function clickHandler() {

  playGame();
  startUI.style.display= "none";
}

function playGame() {
  machineGraphics.style.display = "block";
  createSlot();
  // slots[0].addEventListener("scroll", debugOffsetHeight, false);
}

function createSlot() {
  slot1 = new Slot(slots[0]);
  slot2 = new Slot(slots[1]);
  slot3 = new Slot(slots[2]);
}

function debugOffsetHeight () {
  var viewportOffset = slot1.iconArray[7].getBoundingClientRect();
  // console.log(testIcon.offsetTop);
  console.log(Math.trunc(viewportOffset.top));
  // console.log(testIcon.scrollTop);
}

function automaticScroll () {
  console.log(slots[0].offsetHeight);
  if(counter < slots[0].offsetHeight) {
    counter += 1;
    window.requestAnimationFrame(automaticScroll);
  }
  console.log(counter);
  for(var i = 0; i < slots.length; i++) {
     slots[i].scrollTop = counter*(i+_speed);
  }
}

function startRound () {
  counter = 0;
  window.requestAnimationFrame(automaticScroll);
}

