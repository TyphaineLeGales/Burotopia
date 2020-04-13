var tasks = ["bank", "phoneCompany", "streaming", "socialMedia", "news", "shopping", "socialSecurity", "getFood" ];
var taskContainer = document.querySelector("#tasksList");
var openedWindows = [];
var siteIsAlreadyOpened = false;
var button = document.querySelector("button");
var gameContainer =  document.querySelector("div.gameContainer");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

// TO DO :

//enter button to check username/password
//if user name is empty => userInput = userName
//in the beginning => player doesn't know his email => needs to check the emailIcon + the player hasn't enter any password => need to click I forgot my password
//if userName & passWord
//can open windows only once

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
    createWindow(e);
  }
  // returnIndexOfTask();

}

//need to create html divs for each task task class ?
function returnIndexOfTask () {
  for(var i = 0; i < tasks.length; i++) {
    tasks[i].onclick() = function () {
    }
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


function createWindow (e) {
  if(e.target.tagName.toLowerCase() === 'p' ) {
      var siteWindow = new Website(e.target.textContent);
      openedWindows.push(siteWindow);
  }
}

function endGame() {

}

function reset() {

}
