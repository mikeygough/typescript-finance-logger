"use strict";
// GENERICS
// generics allow us to create reusable blocks of code for use with
// different types
// T must be an object
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
console.log(docOne.name);
// in the declaration we decide what type data should be.
const docThree = {
    uid: 1,
    resourceName: "person",
    data: "mikey",
};
const docFoud = {
    uid: 2,
    resourceName: "shoppingList",
    data: ["bread", "milk", "eggs"],
};
