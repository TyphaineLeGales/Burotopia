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
    this.loginBtn = document.createElement("button");
    this.inputUsername = document.createElement("input");
    this.inputPassword = document.createElement("input");


    this.create();
  }

  create () {
    var websiteDiv =  document.createElement("div");
    websiteDiv.classList.add("websiteDiv");
    // websiteDiv.classList.add("drag");

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

    this.inputUsername.setAttribute("type", "text");
    this.inputUsername.setAttribute("placeholder", "Username");

    this.inputPassword.setAttribute("type", "text");
    this.inputPassword.setAttribute("placeholder", "Password");

    this.loginBtn.setAttribute("type", "submit");
    this.loginBtn.innerHTML = "Login";
    this.loginBtn.classList.add("submitButton");

    var taskName = document.createElement("h1");
    taskName.innerHTML = this.task;

    background.appendChild(this.inputUsername);
    background.appendChild(this.inputPassword);
    background.appendChild(this.loginBtn);
    // background.appendChild(taskName);

    websiteDiv.appendChild(topBar);
    websiteDiv.appendChild(background);

    container.appendChild(websiteDiv);

    this.generateRandPos(container, websiteDiv);

      this.loginBtn.onclick = e => {
        this.setUsername();
        this.setPassword();

    }

  }

  generateRandPos (container, div) {
    div.style.left = randomInRange(0, container.offsetWidth - exitDiv.offsetWidth) + "px";
    div.style.top = randomInRange(0, container.offsetHeight) + "px";

  }

  setUsername () {
    this.username = this.inputUsername.value;
  }

  setPassword () {
    this.password = this.inputPassword.value;
  }

  setTask() {

  }

  sendResetLink () {

  }


}

