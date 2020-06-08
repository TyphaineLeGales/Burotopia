function showClosedMsg () {
  var closedMsg = document.querySelector('h1.clickTC');
  closedMsg.classList.add('dispMsg');
  setTimeout(function() {closedMsg.classList.remove('dispMsg');}, 3000);
}
