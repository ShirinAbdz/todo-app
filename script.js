// step 1 : get todo input box value 


const taskInput = document.getElementById("task-input"); 
const dateInput = document.getElementById("date-input"); 
const addButton = document.getElementById("add-button"); 

const todoList=[];

const addHandler =()=> {
    console.log("add button working");
    const task = taskInput.value;
    const date = dateInput.value; 
    const todoItem = {
        task: task,
        date: date,
        completed: false
    }
    console.log(todoItem);
    if (task) {
        todoList.push(todoItem)
    }else{
        alert("Nothing added!")
    }
}



addButton.addEventListener("click" , addHandler);
