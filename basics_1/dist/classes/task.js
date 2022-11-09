import { Category } from "../types/types.js";
export class TaskClass {
    constructor(name, done, category = Category.GENERAL
    // category: Category = Category.GENERAL -> default value
    // category?: Category                   -> optional value
    ) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate() {
        console.log(`Task został stworzony ${this.createdAt}`);
    }
}
