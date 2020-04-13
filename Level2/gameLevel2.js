var tasks = ["bank", "phoneCompany", "streaming", "socialMedia", "news", "shopping", "socialSecurity", "getFood" ];
var taskContainer = document.querySelector("#tasksList");
var taskList = [];
var openedWindows = [];
var button = document.querySelector("button");
var gameContainer =  document.querySelector("div.gameContainer");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

// TO DO :

// if password check succesful => can tick a box and mark task as done in to do list
//when completed a task => restore to form
//on creation button = create => other time button = login
//can't login if null

// check that password is different than your other password
// is first time => store password if not compare

//drag and drop compatible with user input
// - implement reset link logic
// - design layout + websites content
//generate listOfTasks
//generate an email
//several emails ?
//add tasks as the player goes along
//animation loging button pulsing

function clickHandler() {
  gameContainer.style.display = "flex";
  button.style.display="none";
  playGame();
}

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
    console.log(taskName);
      if(popUp.task === taskName) {
        taskList[i].childNodes[2].classList.add("isDone");
      }
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
