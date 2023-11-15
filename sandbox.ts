// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;
isLoggedIn = true;

// arrays
let ninjas: string[] = []; // can only be an array of strings
// if we don't set as an empty array, calling push() will result in an error
ninjas = ["yoshi", "mario"];
ninjas.push("luigi");

// union types
// array of strings and numbers
let mixed: (string | number)[] = [];
mixed.push("hello");
mixed.push(20);

let uid: string | number;
uid = 123;
uid = "123";

// objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };

// set the object type more specifically
let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = {
  name: "mario",
  age: 20,
  beltColor: "Black",
};
