export const project =(() =>{

    const sidebar = document.querySelector("#sidebar");
    const options = document.querySelector("#project-options");
    const other = [];
    other.id = "other";
    const projects = [other];

    const projectCreator = (projectName) => {
        const proj = [];
        proj.id = projectName;
        projects.push(proj);
    };

    const projectLoader = (projectName) => {  
        const project = document.createElement("div");
        const projName = document.createElement("h2");
        const projOption = document.createElement("option");
        projName.innerText = projectName;

        projOption.value = projectName;
        projOption.innerText = projectName;

        options.appendChild(projOption);
        project.appendChild(projName);
        sidebar.appendChild(project);

    };

    const projectSelector = () => {
        let projectID = document.querySelector("#project-options").value;
        let projIndex = projects.find((elem) => elem.id == projectID);
        return projects[projIndex];
    };

    return {projectCreator, projectLoader, projectSelector, projects};
})();