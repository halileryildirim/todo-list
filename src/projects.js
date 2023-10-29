//make a project array. Make a default array for non-project tasks.
const tasks = [];
const projects = [tasks];

export function addTask(task) {
    tasks.push(task);
    return tasks;
};

export function addProject(projName) {
    projName = [];
    projects.push(projName);
    console.log(projects);
}