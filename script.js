// step 1 : get todo input box value

const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addButton = document.getElementById("add-button");
const alertMessage = document.getElementById("alert-message");
const tableBody = document.querySelector("tbody");

const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
console.log(todoList);

const generateId = () => {
  return Math.round((Math.random() * Math.pow(10, 15)).toString());
};

const saveToLocalStorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

const showAlert = (message, type) => {
  alertMessage.innerHTML = "";
  const alert = document.createElement("p");
  alert.innerHTML = message;
  alert.classList.add("alert");
  alert.classList.add(`alert-${type}`);
  alertMessage.append(alert);
  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
};

const displayTodoList = () => {
  if (!todoList.length) {
    tableBody.innerHTML = "<tr ><td colspan='4'>No task found!</td></tr>";
    return

  }
  todoList.forEach(todoItem => {
    tableBody.innerHTML = 
    
    
  });
};

displayTodoList();
const addHandler = () => {
  console.log("add button working");
  const task = taskInput.value;
  const date = dateInput.value;
  const todoItem = {
    id: generateId(),
    task: task,
    date: date,
    completed: false,
  };
  console.log(todoItem);
  if (task) {
    todoList.push(todoItem);
    saveToLocalStorage();
    taskInput.value = "";
    dateInput.value = "";
    console.log(todoList);
    showAlert("Todo added successfully!", "success");
  } else {
    showAlert("Nothing added!", "error");
  }
};

addButton.addEventListener("click", addHandler);
