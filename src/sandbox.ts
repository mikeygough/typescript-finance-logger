// notice the need for capital F
let greet: Function;

greet = () => {
  console.log('hello, again');
}


// the ? makes the argument optional
// const add = (a: number, b: number, c?: number | string) => {
//   console.log(a + b);
// }

// setting a default parameters requires removing the ?
// best practice to put default parameters at the end
// notice that this function returns void (hover over)
// if we don't result a value, the function by default returns void.
// it represents a lack of return value
const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
}

// override the default value
add(5, 10, 20);

const minus = (a: number, b: number): number => {
  return a - b;
}

let result = minus(10, 7);