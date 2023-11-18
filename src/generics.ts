// GENERICS
// generics allow us to create reusable blocks of code for use with
// different types

// T must be an object
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 40 });

console.log(docOne.name);

// interface defines how an object should look
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

// in the declaration we decide what type data should be.
const docThree: Resource<string> = {
  uid: 1,
  resourceName: "person",
  data: "mikey",
};

const docFoud: Resource<string[]> = {
  uid: 2,
  resourceName: "shoppingList",
  data: ["bread", "milk", "eggs"],
};
