import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
import { TaskClass } from "./classes/task.js";

const taksNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

let selectedCategory: Category;

// const categories: Category[] = ["general", "work", "gym", "hobby", "social"];
const categories: Category[] = [
  Category.GENERAL,
  Category.WORK,
  Category.GYM,
  Category.HOBBY,
  Category.SOCIAL,
];

const tasks: Task[] = [
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

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (e: Event) => {
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

renderCategories(
  categories,
  categoriesContainerElement,
  updateSelectedCategory
);
renderTasks(tasks, tasksContainerElement);

// Type alias
type TaskType = {
  name: string;
  done: boolean;
  category?: Category;
};

// Interface
interface TaskInterface {
  name: string;
  done: boolean;
  category?: Category;
}

// działają podobnie, subtelne różnice
let newTask: TaskType;

newTask = {
  name: "nowy task",
  done: true,
};

let newTask2: TaskInterface;

newTask2 = {
  name: "nowy task",
  done: true,
};

const taskClassInstance = new TaskClass("zadanie z konstruktora", false);

console.log(taskClassInstance.logCreationDate());
