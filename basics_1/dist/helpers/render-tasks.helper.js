const render = (tasks, tasksContainerElement) => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const tasksElement = document.createElement("li");
        if (task.category) {
            tasksElement.classList.add(task.category);
        }
        const id = `task-${index}`;
        const LabelElement = document.createElement("label");
        LabelElement.innerHTML = task.name;
        LabelElement.setAttribute("for", id);
        const checkboxELement = document.createElement("input");
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
