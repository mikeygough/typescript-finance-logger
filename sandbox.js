// explicit types
var character;
var age;
var isLoggedIn;
age = 30;
isLoggedIn = true;
// arrays
var ninjas = []; // can only be an array of strings
// if we don't set as an empty array, calling push() will result in an error
ninjas = ["yoshi", "mario"];
ninjas.push("luigi");
// union types
// array of strings and numbers
var mixed = [];
mixed.push("hello");
mixed.push(20);
var uid;
uid = 123;
uid = "123";
// objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
// set the object type more specifically
var ninjaTwo;
ninjaTwo = {
    name: "mario",
    age: 20,
    beltColor: "Black",
};
