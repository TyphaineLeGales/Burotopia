var tasks = ["bank", "phoneCompany", "streaming", "socialMedia", "news", "shopping", "socialSecurity", "getFood", "mail" ];
var taskContainer = document.querySelector("#tasksList");
var taskList = [];
var openedWindows = [];
var button = document.querySelector("button");
var gameContainer =  document.querySelector("div.gameContainer");

// TO DO :

//
// check that password is different than your other password
// is first time => store password if not compare
//onclick increase z-index => inFocus class with high z-index
// tick box when task is done +  animation before restart

//increase gamification : points ?
//on creation button = create => other time button = login
//can't login if null

// implement reset link logic
// design layout + websites content
//generate an email
//several emails ?
//add tasks as the player goes along
//animation loging button pulsing

document.addEventListener('DOMContentLoaded',(event) => {
  playGame();

});

function playGame() {
  generateTasks();
  taskContainer.onclick = e => {
    createSitePopUp(e);
  }
}

function generateTasks () {
  for(var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var listElement = document.createElement("li");
    listElement.style.position ="relative";
    listElement.innerHTML = `<div class="checkboxDiv"></div> <p>${task} </p>`;
    taskContainer.appendChild(listElement);

  }
}

function deletePopUp(popUp) {
    for(var i = 0; i< openedWindows.length; i++) {
      if(popUp.task === openedWindows[i].task) {
        console.log("condition works");
        openedWindows.splice(i, 1);
      }
    }
    popUp.delete();
}

function completeTask(popUp) {
  var taskList = document.querySelectorAll('li');
  for(var i = 0; i< taskList.length; i++) {
    var taskName = taskList[i].childNodes[2].innerHTML;
      if(popUp.task === taskName) {
        taskList[i].childNodes[2].classList.add("isDone");
      }
  }
  popUp.reset();
}

function popUpOutOfFocus () {
  for(var i = 0; i< openedWindows.length; i++) {
    openedWindows[i].classList.remove("foreground");
  }
}

function createSitePopUp (e) {
  var isAlreadyOpened = false;
  if(e.target.tagName.toLowerCase() === 'p' ) {
    // check that the task has not a popUp window opened already
    for(var i = 0; i < openedWindows.length; i++) {
      var task = openedWindows[i].task;
      if(e.target.textContent === task) {
        isAlreadyOpened = true;
      }
    }

    if(isAlreadyOpened === false) {
      var siteWindow = new Website(e.target.textContent);
      siteWindow.setBackgroundImg(e.target.textContent);
      openedWindows.push(siteWindow);

      siteWindow.crossIcon.onclick = e => {
        deletePopUp(siteWindow);
      }
      siteWindow.taskCheckBox.onclick = e => {
        completeTask(siteWindow);
      }
    } else {
      //check password
    }
  }
}

function endGame() {

}

function reset() {

}
