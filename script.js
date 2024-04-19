function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value !== "") {
      var taskItem = document.createElement("li");
      taskItem.innerText = taskInput.value;
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  }