const d = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  d.innerHTML = date.toLocaleString();
}, 1000);
