// Get elements
let countDisplay = document.getElementById("count");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");

let count = 0;


increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.innerText = count;
});


decreaseBtn.addEventListener("click", () => {
  count--;
  countDisplay.innerText = count;
});
