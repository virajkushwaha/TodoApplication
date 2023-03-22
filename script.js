let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

function addTask() {
  if (taskInput.value === "") {
    alert("Please enter a task");
  } else {
    let task = document.createElement("li");
    let taskText = document.createElement("span");
    taskText.innerText = taskInput.value;
    task.appendChild(taskText);
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
      task.remove();
    });
    task.appendChild(deleteButton);
    taskList.appendChild(task);
    taskInput.value = "";
  }
}
function toggleTodoCompletion(checkbox) {
  var label = checkbox.parentNode;
  if (checkbox.checked) {
    label.style.textDecoration = "line-through";
  } else {
    label.style.textDecoration = "none";
  }
}
