import { Category } from "../types/types.js";
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL) {
        console.log("Zmiana na general!");
    }
    else if (category === Category.GYM) {
        alert("Lecisz na siłkę!");
    }
    else if (category === Category.HOBBY) {
        document.body.style.background = "red";
    }
    else if (category === Category.WORK) {
        console.log("Zmiana na work!");
        alert("Praca sraca");
        document.body.style.background = "gold";
    }
    else if (category === Category.SOCIAL) {
        document.body.style.background = "pink";
    }
    else {
        const never = category;
        console.log(never);
    }
};
export const render = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });
        const LabelElement = document.createElement("label");
        LabelElement.setAttribute("for", `category-${category}`);
        LabelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(LabelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
