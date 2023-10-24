import { newTaskButton } from "./buttons";
import { newProjectButton } from "./buttons";

const header = document.querySelector("#header");

export default function loadPage() {
    newTaskButton();
    newProjectButton();
}

