export function taskLoader(tasks) {
    const content = document.querySelector("#content");
        content.replaceChildren();
        for(let task in tasks) {
            const taskDiv = document.createElement("div");
            if(tasks[task].priority == "medium") {
                taskDiv.innerText = `${tasks[task].title} medium`;
                content.append(taskDiv);
            }
            else if(tasks[task].priority == "high") {
                taskDiv.innerText = `${tasks[task].title} high`;
                content.append(taskDiv);
            }
            else
                taskDiv.innerText = `${tasks[task].title} low`;
                content.append(taskDiv);

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
    //project.appendChild(projDelete);
    sidebar.appendChild(project);
}
