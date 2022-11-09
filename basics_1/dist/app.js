import { Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
import { TaskClass } from "./classes/task.js";
const taksNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
// const categories: Category[] = ["general", "work", "gym", "hobby", "social"];
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
    Category.SOCIAL,
];
const tasks = [
    {
        name: "Wyrzucić śmieci",
        done: false,
        category: Category.HOBBY,
    },
    {
        name: "Pójść na siłkę",
        done: true,
        category: Category.GYM,
    },
    {
        name: "Nakarmić koty",
        done: false,
        category: Category.WORK,
    },
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (e) => {
    /*
    const selectedRadioElement: HTMLInputElement = document.querySelector(
      "input[type='radio']:checked"
      ); -> nice query selector
    const selectedCategory: Category = selectedRadioElement.value as Category;
    -> this may cause some trouble
    */
    e.preventDefault();
    addTask({
        name: taksNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
// działają podobnie, subtelne różnice
let newTask;
newTask = {
    name: "nowy task",
    done: true,
};
let newTask2;
newTask2 = {
    name: "nowy task",
    done: true,
};
const taskClassInstance = new TaskClass("zadanie z konstruktora", false);
console.log(taskClassInstance.logCreationDate());
