// OLD WAY

// const logDetails = (uid: string | number, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// }

// const greet = (user: {name: string, uid: string | number}) => {
//   console.log(`${user.name} says hello`);
// }

// NEW WAY - Type Alias
type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

// this is nice!
const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
