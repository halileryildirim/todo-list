export const project =(() =>{

    const container = document.querySelector("#content");
    const projectDiv = document.querySelector(".projects");
    const options = document.querySelector("#project-options");
    //default loaded task container for the tasks without projects
    const other = [];
    other.id = "Other";
    const projects = [other];
    //add the default projects to local storage
    localStorage.setItem("projects", JSON.stringify(projects));


    const projectCreator = (projectName) => {
        //create project array and push to projects array.
        const proj = [];
        proj.id = projectName;
        //search the array for possible duplicate before creating the project.
        let searchDupe = projects.find(proj => proj.id === projectName);
        if(searchDupe == undefined) {
            projects.push(proj);
            //update the local storage with new project elements
            localStorage.setItem("projects", JSON.stringify(projects));
        }
        else
            alert("You can't create projects with same name.");
            
    };

    const projectLoader = (array) => {
        if(array.length == 0) {
            //Update the content page if all the projects are deleted.
            const noProject = document.createElement("h2");
            noProject.innerText = "No Projects Found!";
            projectDiv.replaceChildren(noProject);

            //Clears the page when all the projects are deleted.                            !!!!!!!!!!!!!!!!!!!!!!!!!
            container.replaceChildren();
            
        }

        else {
            //update content with projects excluding duplicates. 
            projectDiv.replaceChildren();
            for(let i = 1; i < options.options.length; i++) {
                options.remove(i);
                //Reduce i by 1 because options length is reduced with every remove function.
                i--;
            }
            for(let i = 0; i < array.length; i++) {
                //create dynamic projects and append to sidebar.
                const project = document.createElement("div");
                project.classList = "project-container";
                project.id = array[i].id;

                const projectTitle = document.createElement("h2");
                projectTitle.classList = "project";
                projectTitle.innerText = array[i].id;

                const projDelete = document.createElement("button");
                projDelete.innerText = "Delete";
                projDelete.classList = "project-delete-button";
                projDelete.id = array[i].id;

                const projOption = document.createElement("option");
                projOption.value = array[i].id;
                projOption.innerText = array[i].id;
                options.appendChild(projOption);

                
                project.appendChild(projectTitle);
                project.appendChild(projDelete);
                projectDiv.appendChild(project);
            };
        }


    };

    const projectSelector = () => {
        //select projects for task creation. Variable is not defined.
        let projectID = document.querySelector("#project-options").value;
        let projIndexFinder = projects.find((elem) => elem.id == projectID);
        let projIndex = projects.indexOf(projIndexFinder)
        return projects[projIndex];
    };

    const projectUpdater = (projectID) => {
        //update the selected project.
        let projIndexFinder = projects.find((elem) => elem.id == projectID);
        let projIndex = projects.indexOf(projIndexFinder)
        return projects[projIndex];
    };

    const projectRemover = (projectID) => {
        //remove the project option when removing the project.
        for(let i = 0; i<options.length; i++) {
            if(options[i].value == projectID) {
                options.remove(i);
            }
        }
        //find the projects index in array and splice with the found index. 
        let projIndexFinder = projects.find((elem) => elem.id == projectID);
        let projIndex = projects.indexOf(projIndexFinder);
        return projects.splice(projIndex, 1);
    };

    return {projectCreator, projectLoader, projectSelector, projectUpdater, projectRemover, projects, other};
})();