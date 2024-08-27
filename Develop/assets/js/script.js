
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

function generateTaskId() {
    let currentId = nextId;
    nextId ++;

    localStorage.setItem('nextId', nextId)
    return currentId;

}

function createTaskCard(task) {
    const taskdiv = document.getElementById("TaskCard");

    const taskCard = document.createElement('div');
    taskCard.id ='task' + task.id;
    taskCard.classList.add('card','draggle', "mb-2");

    taskCard.innerHtml = 
    <div class = "card-body">
        <h5 class="card-name">${task.taskname} </h5>
        <p class ="card-body">${task.body} </p>
        <p class= "card-body"><small class = "body-muted">due: ${task.taskDate}</small></p>
        <button class="btn btn-danger deletebutton" oneclick = "delete (${task.id})">Delete</button>
    </div>
    ;
    return taskCard;
}

function renderTaskList() {
    const lanes = {
        'to-do': document.getElementById('to-do'),
        'in-progress': document.getElementById('in-progress'),
        'done': document.getElementById('done')
    };

    Object.values(lanes).forEach(lane => lane.innerHTML = '');

    taskList.forEach(task => {
        const taskCard = createTaskCard(task);
        lanes[task.status].appendChild(taskCard);

        $(taskCard).draggable({
            helper: 'clone',
            revert: 'invalid',
            start: function () {
                $(this).addClass('dragging');
            },
            stop: function () {
                $(this).removeClass('dragging');
            }
        });
    });

    $('.lane').droppable({
        accept: '.draggable',
        drop: function (event, ui) {
            const taskId = ui.helper[0].id.replace('task-', '');
            const newStatus = $(this).attr('id');
            updateTaskStatus(taskId, newStatus);
            renderTaskList();
        }
    });
}


// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});


const dayjs = require('dayjs')
dayjs().format()