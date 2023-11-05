export const project =(() =>{

    const projectDiv = document.querySelector(".projects");
    const options = document.querySelector("#project-options");
    const other = [];
    other.id = "OTHER TASKS";
    const projects = [other];

    const projectCreator = (projectName) => {
        const proj = [];
        proj.id = projectName;
        projects.push(proj);
    };

    const projectLoader = (projectName) => {  
        const project = document.createElement("div");
        project.classList = "project";
        project.innerText = projectName;
        const projOption = document.createElement("option");
        

        projOption.value = projectName;
        projOption.innerText = projectName;

        options.appendChild(projOption);
        projectDiv.appendChild(project);

    };

    const projectSelector = () => {
        let projectID = document.querySelector("#project-options").value;
        let projIndexFinder = projects.find((elem) => elem.id == projectID);
        let projIndex = projects.indexOf(projIndexFinder)
        return projects[projIndex];

    };

    const projectUpdater = (projectID) => {
        let projIndexFinder = projects.find((elem) => elem.id == projectID);
        let projIndex = projects.indexOf(projIndexFinder)
        return projects[projIndex];
    };

    return {projectCreator, projectLoader, projectSelector, projectUpdater, projects};
})();