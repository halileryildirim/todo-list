const header = document.querySelector("#header");

export function newTaskButton() {
    const newTaskButton = document.createElement('button');
    newTaskButton.innerText = "Add Task";
    newTaskButton.id = "new-task-btn"
    newTaskButton.addEventListener('click', () =>{
        alert("new task added");
    });
    header.appendChild(newTaskButton);
};

export function newProjectButton() {
    const newProjectButton = document.createElement('button');
    newProjectButton.innerText = "Add Project";
    newProjectButton.id = "new-proj-btn";
    newProjectButton.addEventListener('click', () =>{
        alert("new project added");
    });

    header.appendChild(newProjectButton);
};