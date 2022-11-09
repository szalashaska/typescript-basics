// Basic Types
let id: number = 5;
let company: string = "Company";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Kamil", true];
// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

// Union
let pid: string | number = 22;
pid = "22";

// Enum

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};

// Types
type User = {
  id: number;
  name: string;
};

const user1: User = {
  id: 2,
  name: "Annie",
};

//Type Assertion
let cid: any = 1;

// let customerId = <number>cid
let customerId = cid as number;

// Functions

function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}
// readonly -> can't change it

const user2: UserInterface = {
  id: 12,
  name: "Helioszka",
};

type Point = number | string;
// interface Point = number | string -> cant do that, interface can't' use Unions
let p1 = 1;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x, y) => x + y;
const sub: MathFunc = (x, y) => x / y;

// Classes
class Person {
  id: number;
  name: string;
  // constructor method is called when new class is declared
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // We can have more function in class
  register() {
    return `${this.name} is now registered`;
  }
}

// With interface
interface PersonInterface {
  id: number;
  name: string;
  age?: number;
  register(): string;
}

class Person2 implements PersonInterface {
  id: number;
  name: string;
  // constructor method is called when new class is declared
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

// Subclasses
class Employee extends Person2 {
  position: string;

  constructor(id: number, name: string, position: string) {
    // super takes from extended class
    super(id, name);

    this.position = position;
  }
}

const emp = new Employee(3, "Shaoun", "Developer");
// console.log(emp.register());

// Generics
// T works like placeholder for future variable type
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["Shous", "Elvis", "Harry", "Ron"]);

// numArray.push("elo");
