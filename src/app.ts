// interfaces
// interfaces allow us to force a certain structure on a class or object

// we dont use isperson to create new objects
// we just use it enforce shape
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

// must follow the structure of the interface
const me: IsPerson = {
  name: "mikey",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
};

// function that takes in an object of interface IsPerson
const greetPerson = (person: IsPerson) => {
  console.log("hello", person.name);
}

greetPerson(me);
console.log(me);

import { Invoice } from "./classes/invoice.js";

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

// only objects created with the invoice class can be added to the array
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

// form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault(); // prevent page refresh

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
