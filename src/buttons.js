//manage buttons functionality
import taskCreator from "./tasks";
import projectCreate from "./projects";

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
        let validity = document.querySelector("#task-form").checkValidity();
        if(validity) {
            event.preventDefault();
            let defaultTasks = projectCreate(taskCreator());
            console.log(defaultTasks);
        };
    });

    cancelTask.addEventListener("click", () => {
        taskDialog.close();
    });

    projectBtn.addEventListener("click", () =>{
        projectDialog.showModal();
    });
    confirmProj.addEventListener("click", (event) => {
        let validity = document.querySelector("#project-form").checkValidity();
        if(validity) {
            event.preventDefault();
            console.log("test");
        };
    });
    cancelProj.addEventListener("click", () => {
        projectDialog.close();
    });

}
