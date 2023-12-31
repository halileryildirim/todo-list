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
            //unshift to add the latest addition to top.
            array.tasks.unshift(task);
            //update the local storage with tasks
            localStorage.setItem("projects", JSON.stringify(project.projects));
        }
        else
            alert("You can't add duplicate tasks in same project.");
    };
    
    const taskLoader = (array) => {
        //update content when project has no tasks
        const content = document.querySelector("#content-card");
        const noTask = document.createElement("p");
        noTask.style.color = "white";
        noTask.style.fontSize = "24px";
        noTask.innerText = "No Tasks Found!";

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
                titleP.style.fontWeight = 900;
                task.appendChild(titleP);
    
                const descrP = document.createElement("p");
                const taskDescr = array.tasks[i].description;
                descrP.innerText = taskDescr;
                task.appendChild(descrP);
    
                const dateP = document.createElement("p");
                const taskDate = array.tasks[i].dueDate;
                dateP.innerText = "Due: " + taskDate;
                task.appendChild(dateP);
    
                
                //check for the tasks's priority and add the correct ID when creating the task.
                const taskPrior = array.tasks[i].priority;

                if(taskPrior == "HIGH") {
                    task.id = "high";;
                }

                else if (taskPrior == "MEDIUM") {
                    task.id = "medium";;
                }

                else {
                    task.id = "low";
                }

                //assign the project's id to task buttons to detect tasks when buttons are used.
                const editTask = new Image(28, 28);
                editTask.src = "https://www.svgrepo.com/show/509911/edit.svg";
                editTask.id = taskTitle;
                editTask.classList.add("task-edit-button", array.id);

                const deleteTask = new Image(28, 28);
                deleteTask.src = "https://www.svgrepo.com/show/502608/delete-2.svg";
                deleteTask.id = taskTitle;
                deleteTask.classList.add("task-delete-button", array.id);

                //add a container for buttons and styling 
                const buttoncontainer = document.createElement("div");
                buttoncontainer.classList = "task-buttons";
                buttoncontainer.appendChild(editTask);
                buttoncontainer.appendChild(deleteTask);

                task.appendChild(buttoncontainer);
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
