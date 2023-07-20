// 1.The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element.
// 2.The find() method returns undefined if no elements are found.
// 3. find() does not mutate or change the original Array.

const users = [
  { id: 1, name: "Rakesh", dept: "UI" },
  { id: 2, name: "Nandi", dept: "UX" },
  { id: 3, name: "Sahil", dept: "Javascript" },
  { id: 4, name: "Abhishaikh", dept: "React" },
];

const data = users.find((item) => {
  return item.id === 3;
});

console.log(data);
