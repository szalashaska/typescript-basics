import { Category } from "../types/types.js";

export class TaskClass {
  public name: string;
  public done: boolean;
  public category?: Category;
  private createdAt: Date;

  constructor(
    name: string,
    done: boolean,
    category: Category = Category.GENERAL
    // category: Category = Category.GENERAL -> default value
    // category?: Category                   -> optional value
  ) {
    this.name = name;
    this.done = done;
    this.category = category;
    this.createdAt = new Date();
  }

  public logCreationDate() {
    console.log(`Task został stworzony ${this.createdAt}`);
  }
}
