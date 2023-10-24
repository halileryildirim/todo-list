import { newTaskButton } from "./buttons";
import { newProjectButton } from "./buttons";

const header = document.querySelector("#header");

function loadPage() {
    newTaskButton();
    newProjectButton();
}

export default loadPage();