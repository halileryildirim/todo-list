import { project } from "./projects";
import { task } from "./tasks";

export const UI = (() => {
    //selectors for DOM manipulation
    const tasks = document.querySelector("#content");
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
            if(e.target.classList.contains("project")){
                let target = e.target.innerText;
                task.taskLoader(project.projectUpdater(target));
                
            }

            //remove the project, update tasks screen with no tasks.
            else if(e.target.classList.contains("project-delete-button")){
                let target = e.target.id;
                project.projectRemover(target);
                project.projectLoader(project.projects);
                const noTaskFound = document.createElement("p");
                noTaskFound.innerText = "No tasks found!";
                tasks.replaceChildren(noTaskFound);
            }
        });
        
        tasks.addEventListener("click", (e) => {
            if(e.target.classList.contains("task-delete-button")){
                //get the second class of the target which is the ID of parent project.
                const targetTaskArray = project.projectUpdater(e.target.classList[1]);

                //remove and return the task with the stored project array and id of task.  
                task.taskRemover(targetTaskArray, e.target.id);

                //update the tasks after removing the target task
                task.taskLoader(targetTaskArray);
            }
            else if(e.target.classList.contains("task-edit-button")){
                //call the modal but use a function to fill the input with data on tasks
                //find the tasks's project array
                const targetArray = project.projectUpdater(e.target.classList[1]);

                //find the selected task in project
                let targetTask = targetArray.find((elem) => elem.title == e.target.id);

                //get the index of selected task in project                
                let taskIndex = targetArray.indexOf(targetTask);

                //fill the dialog with task info, and show the modal.
                task.fillTaskDialog(targetTask);
                editedDialog.showModal();

                confirmEdit.addEventListener("click", (e) => {
                    let valid = document.querySelector("#task-form-edited").checkValidity();
                        if(valid) {
                            e.preventDefault();
                            console.log(targetArray);
                            targetArray[taskIndex] = task.taskUpdate(targetTask);
                            task.taskLoader(project.projectUpdater(targetArray.id));
                        }; 
                });
            }
            else if(e.target.classList.contains("task-complete-button")){
                //add a completed status to tasks's classes so it can be updated via css
            }
        });



        closeEdit.addEventListener("click", () => {editedDialog.close();});    

    };
    
    return {buttonFuncs};
})();

