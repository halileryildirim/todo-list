import { tasks } from "./projects";
import { projects } from "./projects";


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
/*
export function projectLoader() {
    const sidebar = document.querySelector("#sidebar");
    if(projects.length>1){
        for(proj in projects) {
            const 
        }
    }
}
*/