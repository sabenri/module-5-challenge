// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

function generateTaskId() {
    let currentId = parseInt(localStorage.getItem('nextId')) || 1;
    currentId++

    if (currentId > 100) {
        currentId =1;
    }

    localStorage.setItem('nextId', currentId);
    console.log(currentId);

    return currentId;

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
