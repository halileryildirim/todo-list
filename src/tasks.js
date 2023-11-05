export const task = (() => {
    class Task {
        constructor(title, description, dueDate, priority){
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        };
    }

    const taskCreator = (array) => {
        let title = document.querySelector("#title").value;
        let description = document.querySelector("#description").value;
        let dueDate = document.querySelector("#date").value;
        let priority = document.querySelector("#priority").value;
    
        let task = new Task(title, description, dueDate, priority);
    
        array.push(task);
    };
    
    const taskLoader = (array) => {
        const content = document.querySelector("#content");
        content.replaceChildren();
        for (let i=0; i < array.length; i++) {
                const task = document.createElement("div");
                task.class = "task";
    
                const titleP = document.createElement("p");
                const taskTitle = array[i].title;
                titleP.innerText = taskTitle;
                task.appendChild(titleP);
    
                const descrP = document.createElement("p");
                const taskDescr = array[i].description;
                descrP.innerText = taskDescr;
                task.appendChild(descrP);
    
                const dateP = document.createElement("p");
                const taskDate = array[i].dueDate;
                dateP.innerText = taskDate;
                task.appendChild(dateP);
    
                const priorP = document.createElement("p");
                const taskPrior = array[i].priority;
                priorP.innerText = taskPrior;
                task.appendChild(priorP);
    
                content.appendChild(task);
        }
    };
    
    return {taskCreator, taskLoader};
    
})();