import { project } from "./projects";
import { taskCreator } from "./tasks";

const taskBtn = document.querySelector("#task-button");
const taskDialog = document.querySelector("#task-dialog");
const confirmTask = document.querySelector("#confirm-task");
const cancelTask = document.querySelector("#cancel-task");

const projectBtn = document.querySelector("#project-button");
const projectDialog = document.querySelector("#project-dialog");
const confirmProj = document.querySelector("#confirm-project");
const cancelProj = document.querySelector("#cancel-project");

export default function buttonFuncs(){
    taskBtn.addEventListener("click", () =>{
        taskDialog.showModal();
    });

    confirmTask.addEventListener("click", (event) => {
        let valid = document.querySelector("#task-form").checkValidity();
        if(valid) {
            event.preventDefault();
        };
    });

    cancelTask.addEventListener("click", () => {
        taskDialog.close();
    });

    projectBtn.addEventListener("click", () =>{
        projectDialog.showModal();
    });

    confirmProj.addEventListener("click", (event) => {
        let valid = document.querySelector("#project-form").checkValidity();
        if(valid) {
            event.preventDefault();
            project.projectCreator(document.querySelector("#project-name").value);
            project.projectLoader(document.querySelector("#project-name").value);
        };
    });
    cancelProj.addEventListener("click", () => {
        projectDialog.close();
    });

}
