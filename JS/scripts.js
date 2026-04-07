const taskInput = document.getElementById("taskInput");
const output = document.getElementById("ouput");
const submitBtn = document.getElementById("submit");

let tasks = [];

function addTask() {
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({
      text: text,
      completed: false,
      id: Date.now(), // Unique ID based on timestamp
    });

    taskInput.value = "";
    taskInput.focus();
  }
}

submitBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
