// classes
// access modifiers: public, private readonly
// all properties all public by default
// private properties can be accessed inside the class but can't be accessed outside the class directly
// readonly attributes can be accessed inside / outside the class but can't be changed.

class Invoice {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    // this is a shorthand, but it only works if you're using access modifiers
    readonly client: string,
    private details: string,
    public amount: number,
  ){}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

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
