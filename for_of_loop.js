// 1. Special loop that can use with iterable object like Array, Object, Set, Map

const numbers = [2, 4, 5, 7];
for (const item of numbers) {
  console.log(item);
}

const str = "javascript";
for (const char of str) {
  console.log(char);
}

const person = {
  name: "Sahi alam khan",
  city: "Kolkata",
  age: 21,
  brand: "apple",
};
for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}
