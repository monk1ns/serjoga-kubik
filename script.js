// script.js
let count = 0;
const button = document.getElementById("button");
const square = document.getElementById("square");
const container = document.getElementById("container");

button.addEventListener("click", function() {
  // Generate random values for top and left properties
  count = count + 1;

  let randomTop = rNumber(container.offsetHeight - square.offsetHeight - 30) + 15;
  let randomLeft = rNumber(container.offsetWidth - square.offsetWidth - 30) + 15;
  let dgr = rNumber(360);
  let r = rNumber(255);
  let g = rNumber(255);
  let b = rNumber(255);
  // Set the top and left properties of the square
  square.style.top = randomTop + "px";
  square.style.left = randomLeft + "px";
  square.style.rotate = dgr + "deg";
  square.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
  button.innerHTML = "Move " + count 
});

function rNumber(number) {
  return Math.floor(Math.random() * number)
}