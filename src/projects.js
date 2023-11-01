const sidebar = document.querySelector("#sidebar");
const defaultTasks = [];
const projects = [defaultTasks];

export function projectCreator(projectName) {
    const proj = [];
    projects.push(proj);

    const project = document.createElement("div");
    const projName = document.createElement("h2");
    const projTask = document.createElement("button");

    projTask.innerText = "Add Task";
    projName.innerText = projectName;

    project.appendChild(projName);
    project.appendChild(projTask);
    sidebar.appendChild(project);

    
    project.addEventListener("click", () =>{
        let index = projects.indexOf(proj)
        console.log(index);
        console.log(projects);
    });

    
    projTask.addEventListener("click", (event) => {
        event.stopPropagation();
        document.querySelector("#task-dialog").showModal();
        console.log(index);
        console.log(projects);
    });   
}
