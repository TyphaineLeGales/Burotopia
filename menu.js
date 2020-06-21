function showClosedMsg () {
  var closedMsg = document.querySelector('h1.clickTC');
  closedMsg.classList.add('dispMsg');
  setTimeout(function() {closedMsg.classList.remove('dispMsg');}, 3000);
}

function showAbout () {
  var about = document.getElementById('textAbout');
  about.style.display = "block";
}

function hideAbout() {
  var about = document.getElementById('textAbout');
  about.style.display = "none";

}

// function showFormMsg () {
//   var formMsg = document.querySelector('h1.clickForm');
//   formMsg.classList.add('dispMsg');
//   setTimeout(function() {formMsg.classList.remove('dispMsg');}, 3000);
// }
