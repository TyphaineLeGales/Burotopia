const container = document.querySelector("div.webpagesContainer");
const exitDiv = document.querySelector("div.exitIcon");


  function randomInRange(min, max) {
    return(Math.floor((Math.random() * (max - min) + 1) + min));
}

class Website{
  constructor(task) {
    this.username = "";
    this.password = "";
    this.service ="";
    this.task = task;
    this.resetLink = null;
    this.create();
  }

  create () {
    var websiteDiv =  document.createElement("div");
    websiteDiv.classList.add("websiteDiv");
    websiteDiv.classList.add("drag");

    var topBar = document.createElement("div");
    topBar.classList.add("topBarSite");

    var crossIcon = document.createElement("div");
    crossIcon.classList.add("crossIcon");
    crossIcon.classList.add("topBarSquare");


    var minusIcon = document.createElement("div");
    minusIcon.classList.add("minusIcon");
    minusIcon.classList.add("topBarSquare");

    var plusIcon = document.createElement("div");
    plusIcon.classList.add("plusIcon");
    plusIcon.classList.add("topBarSquare");

    var urlBar = document.createElement("div");
    urlBar.classList.add("urlBar");
    urlBar.classList.add("topBarSquare");

    topBar.appendChild(crossIcon);
    topBar.appendChild(minusIcon);
    topBar.appendChild(plusIcon);
    topBar.appendChild(urlBar);

    var background = document.createElement("div");
    background.classList.add("backgroundSite");

    var form = document.createElement("form");

    var inputUsername = document.createElement("input");
    inputUsername.setAttribute("type", "text");
    inputUsername.setAttribute("placeholder", "Username");

    var inputPassword = document.createElement("input");
    inputPassword.setAttribute("type", "text");
    inputPassword.setAttribute("placeholder", "Password");

    var enterButton = document.createElement("button");
    enterButton.setAttribute("type", "submit");
    enterButton.innerHTML = "Login";
    enterButton.classList.add("submitButton");


    var taskName = document.createElement("h1");
    taskName.innerHTML = this.task;

    background.appendChild(inputUsername);
    background.appendChild(inputPassword);
    background.appendChild(enterButton);
    // background.appendChild(taskName);

    websiteDiv.appendChild(topBar);
    websiteDiv.appendChild(background);

    container.appendChild(websiteDiv);

    this.generateRandPos(container, websiteDiv);

  }

  generateRandPos (container, div) {
    div.style.left = randomInRange(0, container.offsetWidth - exitDiv.offsetWidth) + "px";
    div.style.top = randomInRange(0, container.offsetHeight) + "px";

  }

  setUsername () {

  }

  setPassword () {

  }

  setTask() {

  }

  sendResetLink () {

  }


}

