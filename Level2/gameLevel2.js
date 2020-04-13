var tasks = ["bank", "phoneCompany", "streaming", "socialMedia", "news", "shopping", "socialSecurity", "getFood" ];
var taskContainer = document.querySelector("#tasksList");
var openedWindows = [];
var button = document.querySelector("button");
var gameContainer =  document.querySelector("div.gameContainer");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

// TO DO :

//when delete a site delete it from openedWindows;
// if password check succesful => can tick a box and mark task as done in to do list
//when completed a task => restore to form
//on creation button = create => other time button = login

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

function deletePopUp(site) {
    for(var i = 0; i< openedWindows.length; i++) {
      if(site.task === openedWindows[i].task) {
        console.log("condition works");
        openedWindows.splice(i, 1);
      }
    }
    site.delete();
}

function completeTask() {
  //is taskIsDone = true =>
  //fin the clicked checkBox and its corresponding task
  // taskInTasklist.classList.add('isDone');
  //site.delete + taskInTasklist.classList.add('isDone');
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
    } else {
      //check password
    }
  }
}

function endGame() {

}

function reset() {

}
