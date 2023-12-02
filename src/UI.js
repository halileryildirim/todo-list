//add functionality to buttons by calling the project and task functions when clicked.

import { project } from "./projects";
import { task } from "./tasks";

export const UI = (() => {
    //selectors for DOM manipulation
    const tasks = document.querySelector("#content-card");
    const toggleTasks = document.querySelector("#task-view-toggle");
    const taskBtn = document.querySelector("#task-button");
    const taskDialog = document.querySelector("#task-dialog");
    const confirmTask = document.querySelector("#confirm-task");
    const closeTask = document.querySelector("#task-close-button");
    const editedDialog = document.querySelector("#task-dialog-filled");
    const closeEdit = document.querySelector("#taskedit-close-button");
    const confirmEdit = document.querySelector("#confirm-task-edit");

    const projects = document.querySelector(".projects");
    const projectBtn = document.querySelector("#project-button");
    const projectDialog = document.querySelector("#project-dialog");
    const confirmProj = document.querySelector("#confirm-project");
    const closeProj = document.querySelector("#project-close-button");
    

    const buttonFuncs = () => {

        //Load the default projects and future saved projects when loading the page
        project.projectLoader(project.projects);
        taskBtn.addEventListener("click", () =>{taskDialog.showModal();});
        closeTask.addEventListener("click", () =>{taskDialog.close();});

        //prevent default of the button, check for required inputs, create and render the selected project array's tasks.
        confirmTask.addEventListener("click", (e) => {
            let valid = document.querySelector("#task-form").checkValidity();
            if(valid) {
                e.preventDefault();
                task.taskCreator(project.projectSelector());
                task.taskLoader(project.projectSelector());
                
            };
        });

        projectBtn.addEventListener("click", () => { projectDialog.showModal(); });
        closeProj.addEventListener("click", () => { projectDialog.close(); });

        //prevent default of the button, check the required input and create the project with value.   
        confirmProj.addEventListener("click", (e) => {
            let valid = document.querySelector("#project-form").checkValidity();
            if(valid) {
                e.preventDefault();
                project.projectCreator(document.querySelector("#project-name").value);
                project.projectLoader(project.projects);
            };
        });

        //render the container with tasks if the project is focused.
        projects.addEventListener("click", (e) => {
            //remove the project, update tasks screen with no tasks.
            let target = e.target.id;
            if(e.target.classList.contains("project-delete-button")){
                e.stopPropagation();

                //prevent default project from being removed by user.
                if(target == "Other") {
                    alert("You can't remove default container for tasks.");
                }

                else {
                    project.projectRemover(target);
                    project.projectLoader(project.projects);
                    //when project is removed, task container is updated with no task message
                    const noTaskFound = document.createElement("p");
                    noTaskFound.innerHTML = "No Tasks Found!";
                    noTaskFound.style.color = "white";
                    noTaskFound.style.fontSize = "24px";
                    tasks.replaceChildren(noTaskFound);
                }

                //update localstorage
                localStorage.setItem("projects", JSON.stringify(project.projects));
            }
            else {
                task.taskLoader(project.projectUpdater(target));
            }

        });
        
        tasks.addEventListener("click", (e) => {
            //get the second class of the target which is the ID of parent project.
            //find the tasks's project array.
            let projectID = e.target.classList[1];
            let targetProject = project.projectUpdater(projectID);


            //delete button functionality
            if(e.target.classList.contains("task-delete-button")){
                //remove and return the task with the stored project array and id of task.  
                task.taskRemover(targetProject, e.target.id);

                //update localstorage
                localStorage.setItem("projects", JSON.stringify(project.projects));

                //update the tasks after removing the target task
                task.taskLoader(targetProject);
            }
            //Edit button functionality
            else if(e.target.classList.contains("task-edit-button")){
                //find the selected task in project with ID of button thats added when creating the task.
                let targetTask = targetProject.tasks.find((elem) => elem.title == e.target.id);              

                //fill the dialog with task info, and show the modal.
                task.fillTaskDialog(targetTask);
                editedDialog.showModal();

                confirmEdit.addEventListener("click", (e) => {
                    let valid = document.querySelector("#task-form-edited").checkValidity();
                        if(valid) {
                            e.preventDefault();
                            task.taskUpdate(targetTask);
                            task.taskLoader(project.projectUpdater(targetProject.id));
                            //emptying the targetTask value to remove the reference of previous tasks found by targetarray.find
                            targetTask = "";
                            //update localstorage
                            localStorage.setItem("projects", JSON.stringify(project.projects));
                            editedDialog.close();
                        }; 
                });
            }
            //complete button functionality
            else if(e.target.classList.contains("task-complete-button")){
                e.target.classList.add("completed");
                localStorage.setItem("projects", JSON.stringify(project.projects));
            }
        });



        closeEdit.addEventListener("click", () => {editedDialog.close();});
        //using a static ID for functions, variable class name for task view change
        toggleTasks.addEventListener("click", () => {
            if(tasks.className == "content-list") {
                tasks.classList = "content-card";
            }
            else
                tasks.classList = "content-list"; 
        })
        
    };
    
    return {buttonFuncs};
})();

