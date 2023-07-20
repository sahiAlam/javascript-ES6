// 1.A JavaScript Set is a collection of unique values.
// 2.Each value can only occur once in a Set.
// 3.A Set can hold any value of any data type.

const numbers = [3, 4, 5, 6, 3, 5];
const newEntries = new Set(numbers);
const arr = Array.from(newEntries);
console.log(arr);
