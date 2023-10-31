const projects = {};

export function projectCreator(projectName) {
    const proj = [];
    proj[projectName] = [];
    let projName = projectName
    projects.projName= proj;
    projectLoader(projectName);
}

function projectLoader(projectName) {
    const sidebar = document.querySelector("#sidebar");
    const project = document.createElement("div");
    const projName = document.createElement("h2");
    projName.innerText = projectName;
    project.appendChild(projName);
    sidebar.appendChild(project);

    project.addEventListener("click", () =>{
        console.log(projects);
    })
}