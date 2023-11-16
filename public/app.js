"use strict";
// if we're certain that this tag will exist... add the !
const anchor = document.querySelector("a");
// one way
// if (anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);
// const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page refresh
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
