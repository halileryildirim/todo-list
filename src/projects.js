//make a project array. Make a default array for non-project tasks.
const tasks = [];

export default function projectCreate(task) {
    tasks.push(task);
    return tasks;
};