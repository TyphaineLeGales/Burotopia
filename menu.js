function showClosedMsg () {
  var closedMsg = document.querySelector('h1.clickTC');
  closedMsg.classList.add('dispMsg');
  setTimeout(function() {closedMsg.classList.remove('dispMsg');}, 3000);
}

// function showFormMsg () {
//   var formMsg = document.querySelector('h1.clickForm');
//   formMsg.classList.add('dispMsg');
//   setTimeout(function() {formMsg.classList.remove('dispMsg');}, 3000);
// }
