// 1.findIndex() is a method in JavaScript that returns the index of a first array element that satisfies the provided condition; otherwise, if no such element exists, it returns -1
// 2.The findIndex() method does not execute the function for empty array elements.

const users = [
  { id: 1, name: "Rakesh", dept: "UI" },
  { id: 2, name: "Nandi", dept: "UX" },
  { id: 3, name: "Sahil", dept: "Javascript" },
  { id: 4, name: "Abhishaikh", dept: "React" },
];

const result = users.findIndex((item) => {
  return item.id === 2; // returns index of first match found in the array
});

console.log(result);
