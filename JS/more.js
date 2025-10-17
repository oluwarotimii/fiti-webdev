// Track event counts in an object
const eventCounts = {
  click: 0,
  dblclick: 0,
  mouseover: 0,
  keydown: 0,
  keyup: 0,
  focus: 0,
  blur: 0,
  submit: 0,
  change: 0
};

// Get counter display element
const counterList = document.getElementById("counterList");

// Function to update display of event counts
function updateCounters() {
  counterList.innerHTML = "";
  for (let event in eventCounts) {
    const li = document.createElement("li");
    li.textContent = `${event}: ${eventCounts[event]}`;
    counterList.appendChild(li);
  }
}
updateCounters();

// === Event Handlers ===

// Click
document.getElementById("clickBox").addEventListener("click", () => {
  eventCounts.click++;
  updateCounters();
});

// Double Click
document.getElementById("dblClickBox").addEventListener("dblclick", () => {
  eventCounts.dblclick++;
  updateCounters();
});

// Mouseover (hover)
document.getElementById("hoverBox").addEventListener("mouseover", () => {
  eventCounts.mouseover++;
  updateCounters();
});

// Keyboard events
const keyInput = document.getElementById("keyInput");
keyInput.addEventListener("keydown", () => {
  eventCounts.keydown++;
  updateCounters();
});
keyInput.addEventListener("keyup", () => {
  eventCounts.keyup++;
  updateCounters();
});
keyInput.addEventListener("change", () => {
  eventCounts.change++;
  updateCounters();
});

// Focus & Blur
const focusBtn = document.getElementById("focusBtn");
focusBtn.addEventListener("focus", () => {
  eventCounts.focus++;
  updateCounters();
});
focusBtn.addEventListener("blur", () => {
  eventCounts.blur++;
  updateCounters();
});

// Form submit
document.getElementById("submitForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent actual form reload
  eventCounts.submit++;
  updateCounters();
  alert("Form submitted!");
});



