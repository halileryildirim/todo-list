export const task = (() => {
    class Task {
        constructor(title, description, dueDate, priority){
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        };
    }

    const taskCreator = (array) => {
        let title = document.querySelector("#title").value;
        let description = document.querySelector("#description").value;
        let dueDate = document.querySelector("#date").value;
        let priority = document.querySelector("#priority").value;
    
        let task = new Task(title, description, dueDate, priority);
        
        let searchDupe = array.find(task => task.title === title);
        if(searchDupe == undefined) {
            array.push(task);
        }
        else
            alert("You can't add duplicate tasks in same project.");
    };
    
    const taskLoader = (array) => {
        const content = document.querySelector("#content");
        const noTask = document.createElement("p");
        noTask.innerText = "No tasks found.";

        if(array.length == 0) {
            content.replaceChildren(noTask);
        }
        else
            content.replaceChildren();
            for (let i=0; i < array.length; i++) {
                
                const task = document.createElement("div");
                task.classList = "task";
    
                const titleP = document.createElement("p");
                const taskTitle = array[i].title;
                titleP.innerText = taskTitle;
                task.appendChild(titleP);
    
                const descrP = document.createElement("p");
                const taskDescr = array[i].description;
                descrP.innerText = taskDescr;
                task.appendChild(descrP);
    
                const dateP = document.createElement("p");
                const taskDate = array[i].dueDate;
                dateP.innerText = taskDate;
                task.appendChild(dateP);
    
                const priorP = document.createElement("p");
                const taskPrior = array[i].priority;
                priorP.innerText = taskPrior;
                task.appendChild(priorP);

                const editTask = document.createElement("button");
                editTask.innerText = "Edit";
                editTask.id = taskTitle;
                editTask.classList = "task-edit-button";

                const deleteTask = document.createElement("button");
                deleteTask.innerText = "Delete";
                deleteTask.id = taskTitle;
                deleteTask.classList.add("task-delete-button", array.id);

                const completeTask = document.createElement("button");
                completeTask.innerText = "Complete";
                completeTask.id = taskTitle;
                completeTask.classList = "task-complete-button";

                task.appendChild(completeTask);
                task.appendChild(editTask);
                task.appendChild(deleteTask);
                content.appendChild(task);
            };
    };

    const taskRemover = (array, taskID) => {
        let taskIndexFinder = array.find((elem) => elem.title == taskID);
        let taskIndex = array.indexOf(taskIndexFinder);
        return array.splice(taskIndex, 1);
    };

    return {taskCreator, taskLoader, taskRemover};
    
})();