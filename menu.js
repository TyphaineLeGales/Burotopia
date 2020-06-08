function showClosedMsg () {
  var closedMsg = document.getElementById('closedTC');
  closedMsg.classList.add('dispMsg');
  setTimeout(function() {closedMsg.classList.remove('dispMsg');}, 3000);
}
