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

    const projectLoader = (array) => {
        if(array.length == 0) {
            console.log(projects);
            const noProject = document.createElement("h2");
            noProject.innerText = "No Projects Found!";
            projectDiv.replaceChildren(noProject);
        }
        else
            projectDiv.replaceChildren();
            for(let i = 0; i < array.length; i++) {
                const project = document.createElement("div");
                project.classList = "project-container";
                const projectTitle = document.createElement("h2");
                projectTitle.classList = "project";
                projectTitle.innerText = array[i].id;
                const projDelete = document.createElement("button");
                projDelete.innerText = "Delete";
                projDelete.classList = "project-delete-button";
                const projOption = document.createElement("option");
                
                projOption.value = array[i].id;
                projOption.innerText = array[i].id;

                options.appendChild(projOption);
                project.appendChild(projectTitle);
                project.appendChild(projDelete);
                projectDiv.appendChild(project);
            };
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

    const projectRemover = (projectID) => {
        let projIndexFinder = projects.find((elem) => elem.id == projectID);
        let projIndex = projects.indexOf(projIndexFinder)
        return projects.splice(projIndex, 1);
    }

    return {projectCreator, projectLoader, projectSelector, projectUpdater, projectRemover,projects};
})();