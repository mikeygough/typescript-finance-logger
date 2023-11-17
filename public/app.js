// interfaces
// interfaces allow us to force a certain structure on a class or object
// must follow the structure of the interface
const me = {
    name: "mikey",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
// function that takes in an object of interface IsPerson
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
// only objects created with the invoice class can be added to the array
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
// form
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page refresh
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
