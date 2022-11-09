"use strict";
// Basic Types
let id = 5;
let company = "Company";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "Kamil", true];
// Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
// Union
let pid = 22;
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// Objects
const user = {
    id: 1,
    name: "John",
};
const user1 = {
    id: 2,
    name: "Annie",
};
//Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
// readonly -> can't change it
const user2 = {
    id: 12,
    name: "Helioszka",
};
// interface Point = number | string -> cant do that, interface can't' use Unions
let p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x / y;
// Classes
class Person {
    // constructor method is called when new class is declared
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // We can have more function in class
    register() {
        return `${this.name} is now registered`;
    }
}
class Person2 {
    // constructor method is called when new class is declared
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// Subclasses
class Employee extends Person2 {
    constructor(id, name, position) {
        // super takes from extended class
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shaoun", "Developer");
// console.log(emp.register());
// Generics
// T works like placeholder for future variable type
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Shous", "Elvis", "Harry", "Ron"]);
// numArray.push("elo");
