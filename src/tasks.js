//retrieve data from html forms, add hide and show for the task button, update the task with form data.  

class Task {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
}

export function taskCreator() {
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;
    let dueDate = document.querySelector("#date").value;
    let priority = document.querySelector("#priority").value;

    let task = new Task(title, description, dueDate, priority);

    return task;
}