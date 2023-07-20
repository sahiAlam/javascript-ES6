// computed property keys
// if we want to pass data dynamically then simply use this features in js ES6
const keyName = "name";
const product = {
  [keyName]: "Mobile",
  price: 5000,
};
console.log(product);

// method definition shorthand
// No need to write longer function syntax instead you just put the function name as a key
const getOrder = {
  buy() {
    console.log("Getting order");
  },
};
getOrder.buy();

// property shorthand
// If the key and value are both same then we can only write single thing
const accessToken = "adhdh74rfhwquihfkjwfhuweehgfy";
const refreshToken = "ajdoijao784893u4583758383ut8";

const user = {
  accessToken,
  refreshToken,
};

console.log(user);
