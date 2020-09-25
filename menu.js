const showClosedMsg = () =>  {
  const closedMsg = document.querySelector('h1.clickTC');
  closedMsg.classList.add('dispMsg');
  setTimeout(function() {closedMsg.classList.remove('dispMsg');}, 3000);
}

const showAbout = () => {
  const about =  document.querySelector('div.textAbout');
  about.classList.add('dispTextAbout');
}

const hideAbout = () =>  {
  const about = document.querySelector('div.textAbout');
  about.classList.remove('dispTextAbout');
}
