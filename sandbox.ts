// arrays
let names = ["luigi", "mario", "yoshi"];
names.push("toad");

let numbers = [10, 20, 30, 40];
numbers.push(25);

let mixed = ["ken", 3, "chun-li", 8, 9];
mixed.push("sandburg");
mixed.push(41);

// objects
// can't change type of attribute, or even add a new key!
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

ninja.age = 40;
ninja.name = "ryu";

// you can redefine as long as it's the same type
// must match the structure of the initial object
ninja = {
  name: "yoshi",
  belt: "organge",
  age: 40,
};
