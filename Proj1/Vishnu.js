const body = document.querySelector("body");
const button = document.querySelectorAll(".button");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = "white";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }
    if (e.target.id === "black") {
      body.style.backgroundColor = "black";
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = "green";
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = "purple";
    }
  });
});
