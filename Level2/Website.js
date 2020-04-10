const container = document.querySelector("div.webpagesContainer");

class Website{
  constructor() {
    this.username = "";
    this.password = "";
    this.service ="";
    this.task = null;
    this.resetLink = null;
  }


  create () {
    var websiteDiv =  document.createElement("div");
    websiteDiv.classList.add("websiteDiv");

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

    var input_1 = document.createElement("div");
    input_1.classList.add("inputFields");

    var inputUsername = document.createElement("input");
    inputUsername.setAttribute("type", "text");
    inputUsername.setAttribute("placeholder", "Username");

    var input_2 = document.createElement("div");
    input_2.classList.add("inputFields");

    var inputPassword = document.createElement("input");
    inputPassword.setAttribute("type", "text");
    inputPassword.setAttribute("placeholder", "Password");

    input_1.appendChild(inputUsername);
    input_2.appendChild(inputPassword);

    background.appendChild(input_1);
    background.appendChild(input_2);

    websiteDiv.appendChild(topBar);
    websiteDiv.appendChild(background);

    container.appendChild(websiteDiv);

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

