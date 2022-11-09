import { Task } from "../types/types";

const render = (tasks: Task[], tasksContainerElement: HTMLElement) => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const tasksElement: HTMLElement = document.createElement("li");
    if (task.category) {
      tasksElement.classList.add(task.category);
    }
    const id: string = `task-${index}`;
    const LabelElement: HTMLLabelElement = document.createElement("label");

    LabelElement.innerHTML = task.name;
    LabelElement.setAttribute("for", id);

    const checkboxELement: HTMLInputElement = document.createElement("input");
    checkboxELement.type = "checkbox";
    checkboxELement.name = task.name;
    checkboxELement.id = id;
    checkboxELement.checked = task.done;
    checkboxELement.addEventListener("change", () => {
      task.done = !task.done;
    });

    tasksElement.appendChild(LabelElement);
    tasksElement.appendChild(checkboxELement);
    tasksContainerElement.appendChild(tasksElement);
  });
};

export default render;
