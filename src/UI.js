import { project } from "./projects";
import { task } from "./tasks";

export const UI = (() => {
    const tasks = document.querySelectorAll(".task");
    const taskBtn = document.querySelector("#task-button");
    const taskDialog = document.querySelector("#task-dialog");
    const confirmTask = document.querySelector("#confirm-task");
    const closeTask = document.querySelector("#task-close-button");
    
    const projects = document.querySelector(".projects");
    const projectBtn = document.querySelector("#project-button");
    const projectDialog = document.querySelector("#project-dialog");
    const confirmProj = document.querySelector("#confirm-project");
    const closeProj = document.querySelector("#project-close-button");

    const buttonFuncs = () => {
        project.projectLoader(project.projects);
        taskBtn.addEventListener("click", () =>{taskDialog.showModal();});
        closeTask.addEventListener("click", () =>{taskDialog.close();});
        confirmTask.addEventListener("click", (event) => {
            let valid = document.querySelector("#task-form").checkValidity();
            if(valid) {
                event.preventDefault();
                task.taskCreator(project.projectSelector());
                console.log(project.projects);
            };
        });

        projectBtn.addEventListener("click", () => { projectDialog.showModal(); });
        closeProj.addEventListener("click", () => { projectDialog.close(); });   
        confirmProj.addEventListener("click", (event) => {
            let valid = document.querySelector("#project-form").checkValidity();
            if(valid) {
                event.preventDefault();
                project.projectCreator(document.querySelector("#project-name").value);
                project.projectLoader(project.projects);
            };
        });

        projects.addEventListener("click", (e) => {
            if(e.target.classList.contains("project")){
                let target = e.target.innerText;
                task.taskLoader(project.projectUpdater(target));
                console.log(project.projects);
            }

            else if(e.target.classList.contains("project-delete-button")){
                let target = e.target.id;
                console.log(target);
                project.projectRemover(target);
                project.projectLoader(project.projects);
                console.log(project.projects);
            }
        });       
    };
    
    return {buttonFuncs};
})();

