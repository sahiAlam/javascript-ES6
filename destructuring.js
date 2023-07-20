// 1. Destructuring makes it easy to extract only what is needed.
// 2.When destructuring arrays, the order that variables are declared is important.
// 3.object properties do not have to be declared in a specific order.

// object destructuring
const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const { id, name: fullName, username, email } = user;
console.log("Object ->", id, fullName, username, email);

// array destructuring

const data = ["Sahil Khan", 30, "Engineer"];
const [name, age, profession] = data;
console.log("Array ->", name, age, profession);
