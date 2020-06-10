var container = document.querySelector('div.gameContainer');
var endGameMSG = document.querySelector('.endGameMSG');
var machineGraphics = document.querySelector('.slotMachine');
var btnStartMachine = document.querySelector('.btnStartMachine');
btnStartMachine.addEventListener("click", startRound, false);

var counter = 0;
var slots = document.querySelectorAll('.slot');
var slotsObj = [];
var slot1;
var slot2;
var slot3;
var _speed = 1.5;
var _offset = 145;

var _animationTime = 5;
var _timerId;
var _timer = 0;
var userHasWon = false;

//delay slot animation
//stop placement
//infinite loop

document.addEventListener('DOMContentLoaded',(event) => {
  playGame();
});

function playGame() {
  machineGraphics.style.display = "block";
  createSlot();
  // slots[0].addEventListener("scroll", debugOffsetHeight, false);
}

function createSlot() {
   for(var i = 0; i < slots.length; i++) {
      slotsObj.push(new Slot(slots[i]));
      // console.log(slotsObj);
   }
}

function debugOffsetHeight () {
  var viewportOffset = slot1.iconArray[7].getBoundingClientRect();
  // console.log(testIcon.offsetTop);
  // console.log(Math.trunc(viewportOffset.top));
  // console.log(testIcon.scrollTop);
}

function automaticScroll () {
  if(_timer< _animationTime) {
    for(var i = 0; i < slots.length; i++) {
     slots[i].scrollTop += 1+i*_speed;
    }
    window.requestAnimationFrame(automaticScroll);
  } else {
    clearInterval(_timerId);
    //lock with nearest target slots[i].result
  }
}

function startRound () {
  _timer=0;
  for(var i = 0; i < slotsObj.length; i++) {
     slotsObj[i].container.scrollTop = 0;
     slotsObj[i].drawResult();
  }

  if(slotsObj[0].result === slotsObj[1].result && slotsObj[0].result === slotsObj[2].result ) {
    userHasWon = true;
  }
  _timerId = window.setInterval(countdown, 1000);
  window.requestAnimationFrame(automaticScroll);
}

function countdown () {
  _timer += 1;
}

