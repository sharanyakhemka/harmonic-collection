let body = document.body;
var one = document.querySelector("#one")

function skip() {
  one.classList.add("skip");
}

body.addEventListener("click", skip);