console.log("js/tasks-list.js");

const tasksContainer = document.getElementById("tasks-container");
tasksContainer.addEventListener("click", function (e) {
    const targetElement = e.target;
    if (targetElement.id == "btn-done") {
        const taskName = targetElement.parentElement.parentElement.children["task-name"];
        taskName.style.textDecoration = "line-through";
        taskName.style.textDecorationColor = "white";
        targetElement.disabled = true;

    }
    else if (targetElement.id = "btn-remove") {
        targetElement.parentElement.parentElement.remove();
    }
});


document.getElementById("btn-add-new-task").addEventListener("click", function (e) {
    e.preventDefault();

    const taskElement = document.getElementById("new-task");
    const taskText = taskElement.value;

    if (taskText.length < 20) {
        alert("Task text must contain atleast 20 character.");
    }
    else {
        const newTask = document.createElement("div");
        newTask.classList.add("task");
        newTask.innerHTML = `
            <p id="task-name">${taskText}</p>
            <div id="btn-container">
                <button id="btn-done">Done</button>
                <button id="btn-remove">Remove</button>
            </div>
    `
        tasksContainer.appendChild(newTask)
        taskElement.value = "";

    }
});

document.getElementById("new-task").addEventListener("keydown",function(e){
    if(e.key == "Enter" && !e.shiftKey){
        e.preventDefault();
    }
})
