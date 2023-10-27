//manage buttons functionality

const taskBtn = document.querySelector("#task-button");
const taskDialog = document.querySelector("#task-dialog");
const cancelTask = document.querySelector("#cancel-task");

const projectBtn = document.querySelector("#project-button");
const projectDialog = document.querySelector("#project-dialog");
const cancelProj = document.querySelector("#cancel-project");

export default function buttonFuncs(){
    taskBtn.addEventListener("click", () =>{
        taskDialog.showModal();
    });

    cancelTask.addEventListener("click", () => {
        taskDialog.close();
    });

    projectBtn.addEventListener("click", () =>{
        projectDialog.showModal();
    });

    cancelProj.addEventListener("click", () => {
        projectDialog.close();
    });
}
