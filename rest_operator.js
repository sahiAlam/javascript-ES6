// 1.The rest operator in javaScript allows a function to take an indefinite number of arguments and bundle them in an array.

const addItem = (...params) => {
  console.log(params);
};

addItem(1, 3, 5, 4, 5, 7, 8, 9, 9);
