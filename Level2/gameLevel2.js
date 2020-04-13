var tasks = ["bank", "phoneCompany", "streaming", "socialMedia", "news", "shopping", "socialSecurity", "getFood" ];
var taskContainer = document.querySelector("#tasksList");
var openedWindows = [];
var siteIsAlreadyOpened = false;
var button = document.querySelector("button");
var gameContainer =  document.querySelector("div.gameContainer");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

// TO DO :

//implement password security requirement : number of character + combinaison
// check that password is different than your other password
// is first time => store password if not compare
// if password check succesful => can tick a box and mark task as done in to do list

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
