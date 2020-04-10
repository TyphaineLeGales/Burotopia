const container = document.querySelector("div.webpagesContainer");

class Website{
  constructor() {
    this.username = "";
    this.password = "";
    this.service ="";
    this.task = null;
    this.resetLink = null;
  }


  createWebsite () {
    var websiteDiv =  document.createElement("div");
    websiteDiv.classList.add("websiteDiv");

    var topBar = document.createElement("div");
    topBar.classList.add("topBarSite");

    var crossIcon = document.createElement("div");
    crossIcon.classList.add("crossIcon topBarSquare");

    var minusIcon = document.createElement("div");
    minusIcon.classList.add("minusIcon topBarSquare");

    var plusIcon = document.createElement("div");
    plusIcon.classList.add("plusIcon topBarSquare");

    var urlBar = document.createElement("div");
    urlBar.classList.add("urlBar topBarSquare");

    topBar.appendChild(crossIcon);
    topBar.appendChild(minusIcon);
    topBar.appendChild(plusIcon);
    topBar.appendChild(urlBar);

    var background = document.createElement("div");
    background.classList.add("backgroundSite");

    var inputUsername = document.createElement("div");
    inputUsername.classList.add("inputFields");

    var inputPassword = document.createElement("div");
    inputUsername.classList.add("inputFields");

    background.appendChild(inputUsername);
    background.appendChild(inputPassword);

    websiteDiv.appendChild(topBar);
    websiteDiv.appendChild(background);

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

