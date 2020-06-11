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
var _speed = 30;
var _offset = 145;

const handle = document.querySelector('img.handleAnim');
let totalFrames = 20;
const animationDuration = 100;
const animationDurationBack = 150;
const timePerFrameBack = animationDurationBack / totalFrames;
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 1;
const imagePath = '../Assets/Graphics/Level5/OriginalAnim/machine_anim_branche_';

var _animationTime = 2000;
var _timerId;
var _timer = 0;
var _t;
var userHasWon = false;
var _animTriggerIsDone = false;
var _animBackIsDone = false;
var _threshold;
var _sizeIcon;

//delay slot animation
//stop placement

document.addEventListener('DOMContentLoaded',(event) => {
  preloadAnimImg();
});

function preloadAnimImg () {
   for (var i = 1; i < totalFrames + 1; i++) {
    var img = new Image();
    img.src = "url('${imagePath}${i}.png')";
  }
  playGame();
}

function playGame() {
  machineGraphics.style.display = "block";
  createSlot();
}

function createSlot() {
   for(var i = 0; i < slots.length; i++) {
      slotsObj.push(new Slot(slots[i], i+1));
   }

   //get size of icon
   _sizeIcon = slotsObj[0].iconArray[0].offsetHeight;
}


function handleFrameAnimationTrigger (startTime) {

  if(_animTriggerIsDone != true) {
    if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
      timeFromLastUpdate = startTime - timeWhenLastUpdate;

    if (timeFromLastUpdate > timePerFrame) {
      handle.src = imagePath + `${frameNumber}.png`;
      // timeWhenLastUpdate = startTime;

      if (frameNumber >= totalFrames) {
        _animTriggerIsDone = true;
         frameNumber = 1;
      } else {
         frameNumber = frameNumber + 1;
      }
    }
  }
}

function handleFrameAnimationBackToStart (startTime) {
  if(_animBackIsDone != true) {
    if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
      timeFromLastUpdate = startTime - timeWhenLastUpdate;

    if (timeFromLastUpdate > timePerFrame) {
      handle.src = imagePath + `${totalFrames}.png`;
      // timeWhenLastUpdate = startTime;

      if (totalFrames <= 1) {
        _animBackIsDone = true;
        totalFrames = 20;
      } else {
         totalFrames = totalFrames - 1;
      }
    }
  }
}


function automaticScroll () {
  _t = clamp(mapRange(_timer, 0, _animationTime, 0, 1), 0, 1);
  handleFrameAnimationTrigger(_timer);
  if(_timer< _animationTime) {
    if(_animTriggerIsDone) {
      handleFrameAnimationBackToStart(_timer);
      _t = Math.sin(_t*3);
      for(var i = 0; i < slotsObj.length; i++) {
          animateTurn(slotsObj[i], _t);
      }
    }
    window.requestAnimationFrame(automaticScroll);
  } else {
    clearInterval(_timerId);
  }
}

function animateTurn(slot, t) {
  // slot.container.scrollTop += slot.offset*t*_speed;
  slot.container.scrollTop += slot.offset*_speed*t;
  console.log(t*_speed);
  if(slot.container.scrollTop >= _sizeIcon*4 +20) {
    slot.container.scrollTop = 0;
  }
}

function startRound () {
  _timerId = window.setInterval(countdown, 1);
  _timer = 0;
  _animTriggerIsDone = false;
  _animBackIsDone = false;
  for(var i = 0; i < slotsObj.length; i++) {
     slotsObj[i].drawResult();
  }

  if(slotsObj[0].result === slotsObj[1].result && slotsObj[0].result === slotsObj[2].result ) {
    userHasWon = true;
  } else {
    userHasWon = false;
  }

  window.requestAnimationFrame(automaticScroll);
}

function countdown () {
  _timer += 1;
}

function easeInOutQad (t) {
  if(t < 0.5) {
    return  2*t*t
  } else {
    console.log('desceleration');
    return -1+(4-2*t)*t
  }

}

function mapRange(value, a, b, c, d) {
  value = (value - a) / (b - a);
  return c + value*(d-c);
}

function  clamp ( value, min, max ) {

  return Math.max( min, Math.min( max, value ) );

}


