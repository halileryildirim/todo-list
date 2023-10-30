//make a project array. Make a default array for non-project tasks.
import { projectLoader } from "./domLoader";

export const tasks = [];
export const projects = [tasks];

export function addTask(task, i) {
    projects[i].push(task);
    console.log(projects[i]);
};

export function addProject(projName) {
    projName = [];
    projects.push(projName);
}