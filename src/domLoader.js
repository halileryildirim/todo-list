import { tasks } from "./projects";

export function taskLoader() {
    const content = document.querySelector("#content");
    if(tasks.length>0){
        content.replaceChildren();
        for(let task in tasks) {
            const taskDiv = document.createElement("div");
            taskDiv.innerText = `${tasks[task].title} is the title.`;
            content.append(taskDiv);
        }
    }

}

export function projectLoader(projName) {
    const sidebar = document.querySelector("#sidebar");
    const project = document.createElement("div");

    /*
    const projDelete = document.createElement("button");
    projDelete.innerText= "Delete Project";

    projDelete.addEventListener("click", () => {
        
    })
    */
    const projectName = document.createElement("h2");
    projectName.innerText = projName;

    project.appendChild(projectName);
    project.appendChild(projDelete);
    sidebar.appendChild(project);
}
