import { taskCreator } from "./tasks";

export const project =(() =>{

    const sidebar = document.querySelector("#sidebar");
    const projects = [];

    const projectCreator = (projectName) => {
        const proj = [];
        proj.id = projectName;
        projects.push(proj);
        
    };

    const projectLoader = (projectName) => {  
        const project = document.createElement("div");
        const projName = document.createElement("h2");
        const projTask = document.createElement("button");

        projTask.innerText = "Add Task";
        projName.innerText = projectName;
    
        project.appendChild(projName);
        project.appendChild(projTask);
        sidebar.appendChild(project);

        
        project.addEventListener("click", () =>{
            console.log(projects);
            let projectArray = projects.find(element => element.id = projName.innerText);
        });
    
        projTask.addEventListener("click", (event) => {
            document.querySelector("#task-dialog").showModal();
            
        });
        
    }
    return {projectCreator, projectLoader, projects};
})();