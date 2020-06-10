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
let totalFrames = 20;
const animationDuration = 30;
const animationDurationBack = 50;
const timePerFrameBack = animationDurationBack / totalFrames;
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 1;
const imagePath = '../Assets/Graphics/Level5/OriginalAnim/machine_anim_branche_';

var _animationTime = 8*110;
var _timerId;
var _timer = 0;
var userHasWon = false;
var _animTriggerIsDone = false;
var _animBackIsDone = false;

//delay slot animation
//stop placement
//infinite loop

document.addEventListener('DOMContentLoaded',(event) => {
  playGame();
});

function playGame() {
  machineGraphics.style.display = "block";
  preloadAnimImg();
  createSlot();
}

function createSlot() {
   for(var i = 0; i < slots.length; i++) {
      slotsObj.push(new Slot(slots[i]));
      // console.log(slotsObj);
   }
}

function preloadAnimImg () {
  console.log("preload is called");
   for (var i = 1; i < totalFrames + 1; i++) {
    var img = new Image();
    img.src = "url('${imagePath}${i}.png')";
  }
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
        console.log("condition gets checked");
        _animBackIsDone = true;
        totalFrames = 20;
      } else {
         totalFrames = totalFrames - 1;
      }
    }
  }
}


function automaticScroll () {
    handleFrameAnimationTrigger(_timer);
  if(_timer< _animationTime) {
    if(_animTriggerIsDone) {
      handleFrameAnimationBackToStart(_timer);
      for(var i = 0; i < slots.length; i++) {
       slots[i].scrollTop += (i+1)*_speed;
       if(slots[i].scrollTop >= slots[i].offsetHeight*2-180) {
        slots[i].scrollTop = 0;
       }
      }
    }
    window.requestAnimationFrame(automaticScroll);
  } else {
    clearInterval(_timerId);
  }
}

function startRound () {
  _timer=0;
  _animTriggerIsDone = false;
  _animBackIsDone = false;
  for(var i = 0; i < slotsObj.length; i++) {
     // slotsObj[i].container.scrollTop = 0;
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

