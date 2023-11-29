//Create task as objects and append the related project objects' task array.
import { project } from "./projects";

export const task = (() => {
    //constructor for task object 
    class Task {
        constructor(title, description, dueDate, priority){
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        };
    }

    const taskCreator = (array) => {
        //receive the input values and create new tasks dynamically
        let title = document.querySelector("#title").value;
        let description = document.querySelector("#description").value;
        let dueDate = document.querySelector("#date").value;
        let priority = document.querySelector("#priority").value;
    
        let task = new Task(title, description, dueDate, priority);
        
        //find returns undefined when requirement is not met, so only push when find is undefined
        let searchDupe = array.tasks.find(task => task.title === title);
        if(searchDupe == undefined) {
            array.tasks.unshift(task);
            //update the local storage with tasks
            localStorage.setItem("projects", JSON.stringify(project.projects));
        }
        else
            alert("You can't add duplicate tasks in same project.");
    };
    
    const taskLoader = (array) => {
        //update content when project has no tasks
        const content = document.querySelector("#content");
        const noTask = document.createElement("p");
        noTask.innerText = "No tasks found.";

        if(array.tasks.length == 0) {
            content.replaceChildren(noTask);
        }
        else
        //if project has tasks, create a new div for the task and update innerText's with task values
            content.replaceChildren();
            for (let i=0; i < array.tasks.length; i++) {
                
                const task = document.createElement("div");
                task.classList = "task";
    
                const titleP = document.createElement("p");
                const taskTitle = array.tasks[i].title;
                titleP.innerText = taskTitle;
                task.appendChild(titleP);
    
                const descrP = document.createElement("p");
                const taskDescr = array.tasks[i].description;
                descrP.innerText = taskDescr;
                task.appendChild(descrP);
    
                const dateP = document.createElement("p");
                const taskDate = array.tasks[i].dueDate;
                dateP.innerText = taskDate;
                task.appendChild(dateP);
    
                const priorP = document.createElement("p");
                const taskPrior = array.tasks[i].priority;
                priorP.innerText = taskPrior;
                task.appendChild(priorP);

                //assign the project's id to task buttons to make task detecting easier.
                const editTask = document.createElement("button");
                editTask.innerText = "Edit";
                editTask.id = taskTitle;
                editTask.classList.add("task-edit-button", array.id);

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
        //find and remove task from the array with the given ID
        let taskIndexFinder = array.tasks.find((elem) => elem.title == taskID);
        let taskIndex = array.tasks.indexOf(taskIndexFinder);
        return array.tasks.splice(taskIndex, 1);
    };
    
    const fillTaskDialog = (task) => {
        //add values of task to filled modal.
        document.querySelector("#title-edited").value = task.title;
        document.querySelector("#description-edited").value = task.description;
        document.querySelector("#date-edited").value = task.dueDate;
    };
    
    const taskUpdate = (task) => {
        //run a condition because edit function is removing the reference by making task == ""
        if(task != "") {
            task.title = document.querySelector("#title-edited").value;
            task.description = document.querySelector("#description-edited").value;
            task.dueDate = document.querySelector("#date-edited").value;
            task.priority = document.querySelector("#priority-edited").value;
        };
        
    };

    return {taskCreator, taskLoader, taskRemover, fillTaskDialog, taskUpdate};
    
})();