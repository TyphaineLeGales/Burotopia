const container = document.querySelector("div.webpagesContainer");
const exitDiv = document.querySelector("div.exitIcon");


function randomInRange(min, max) {
  return(Math.floor((Math.random() * (max - min) + 1) + min));
}

class Website{
  constructor(task) {
    this.websiteDiv = document.createElement("div");
    this.crossIcon = document.createElement("div");
    this.username = "";
    this.password = "";
    this.service ="";
    this.task = task;
    this.taskDiv = document.createElement("h1");
    this.backgroundDiv = document.createElement("div");
    this.taskIsDone = false;
    this.resetLink = null;
    this.loginBtn = document.createElement("button");
    this.formInput =document.createElement("form");
    this.inputUsername = document.createElement("input");
    this.inputPassword = document.createElement("input");
    this.isAlreadyOpened = false;
    this.taskCheckBox =  document.createElement("div");

    this.create();
  }

  create () {
    this.websiteDiv.classList.add("websiteDiv");
    this.websiteDiv.classList.add("drag");

    this.createTopBar(this.websiteDiv);
    this.backgroundDiv.classList.add("backgroundSite");

    this.taskDiv.innerHTML = this.task;
    this.taskDiv.style.display = "none";

    this.taskCheckBox.classList.add('popUpCheckbox');
    this.taskCheckBox.onclick = e => {
      this.taskIsDone = true;
    }

    this.createForm();

    this.backgroundDiv.appendChild(this.formInput);
    this.backgroundDiv.appendChild(this.taskDiv);
    this.backgroundDiv.appendChild(this.taskCheckBox);

    this.websiteDiv.appendChild(this.backgroundDiv);

    container.appendChild(this.websiteDiv);

    this.generateRandPos(container, this.websiteDiv);

    var inputValidity = this.inputPassword.checkValidity();

      this.loginBtn.onclick = e => {
        if(this.inputPassword.validity.valid === true && this.inputPassword) {
          console.log("login onclick");
          this.setUsername();
          this.setPassword();
          this.showTask();
        }
      }

  }

  createTopBar (websiteDiv) {
    var topBar = document.createElement("div");
    topBar.classList.add("topBarSite");

    this.crossIcon.classList.add("crossIcon");
    this.crossIcon.classList.add("topBarSquare");

    var minusIcon = document.createElement("div");
    minusIcon.classList.add("minusIcon");
    minusIcon.classList.add("topBarSquare");

    var plusIcon = document.createElement("div");
    plusIcon.classList.add("plusIcon");
    plusIcon.classList.add("topBarSquare");

    var urlBar = document.createElement("div");
    urlBar.classList.add("urlBar");
    urlBar.classList.add("topBarSquare");

    topBar.appendChild(this.crossIcon);
    topBar.appendChild(minusIcon);
    topBar.appendChild(plusIcon);
    topBar.appendChild(urlBar);

    websiteDiv.appendChild(topBar);

  }

  createForm() {

    this.inputUsername.setAttribute("type", "text");
    this.inputUsername.setAttribute("placeholder", "Client15068");
    this.inputUsername.setAttribute("disabled", "true");

    this.inputPassword.setAttribute("type", "text");
    this.inputPassword.setAttribute("placeholder", "Password");
    this.inputPassword.setAttribute("minLength", "14");

    this.loginBtn.setAttribute("type", "button");
    this.loginBtn.innerHTML = "Login";
    this.loginBtn.classList.add("submitButton");

    this.formInput.appendChild(this.inputUsername);
    this.formInput.appendChild(this.inputPassword);
    this.formInput.appendChild(this.loginBtn);

  }

  setBackgroundImg(img) {
    this.backgroundDiv.style.backgroundImage = 'url(../Assets/Graphics/Level2/'+ img.trim() +'.png)';
  }

  showTask() {
    this.formInput.style.display = "none";
    this.taskDiv.style.display = "block";
    this.taskCheckBox.style.display="block";
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

  reset() {
    this.formInput.style.display = "flex";
    this.taskDiv.style.display = "none";
    this.taskCheckBox.style.display="none";
  }

  sendResetLink () {

  }

  delete() {
    container.removeChild(this.websiteDiv);
  }


}

