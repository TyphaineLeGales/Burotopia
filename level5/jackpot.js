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
var _speed = 10;
var _offset = 145;

const handle = document.querySelector('img.handleAnim');
const totalFrames = 20;
const animationDuration = 50;
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 1;
const imagePath = '../Assets/Graphics/Level5/OriginalAnim/machine_anim_branche_';

var _animationTime = 5*100;
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

function handleFrameAnimation (startTime) {

  if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
    timeFromLastUpdate = startTime - timeWhenLastUpdate;

  if (timeFromLastUpdate > timePerFrame) {
    handle.src = imagePath + `${frameNumber}.png`;
    console.log(handle.src);
    timeWhenLastUpdate = startTime;

    if (frameNumber >= totalFrames) {
      frameNumber = 1;
    } else {
       frameNumber = frameNumber + 1;
    }
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
    handleFrameAnimation(_timer);
    for(var i = 0; i < slots.length; i++) {
     slots[i].scrollTop += (i+1)*_speed;
     if(slots[i].scrollTop >= slots[i].offsetHeight*2-180) {
      slots[i].scrollTop = 0;
     }
    }
    window.requestAnimationFrame(automaticScroll);
  } else {
    clearInterval(_timerId);
    // console.log(userHasWon);
    //lock with nearest target slots[i].result
  }
}

function startRound () {
  _timer=0;
  for(var i = 0; i < slotsObj.length; i++) {
     slotsObj[i].container.scrollTop = 0;
     console.log(slots[i].scrollHeight);
     slotsObj[i].drawResult();
    // console.log(slotsObj[i].result);
  }

  if(slotsObj[0].result === slotsObj[1].result && slotsObj[0].result === slotsObj[2].result ) {
    userHasWon = true;
  } else {
    userHasWon = false;
  }
  _timerId = window.setInterval(countdown, 1);
  window.requestAnimationFrame(automaticScroll);
}

function countdown () {
  _timer += 1;
}

