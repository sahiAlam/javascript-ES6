// 1 Allows you to write shorter function code
// 2. Arrow function by default return a single value
// 3. omit return keyword if a single statement have
// 4. remove curly bracket if one line have
// 5. if a single parameter have then omit the parenthesis
// 6. The this keyword is handled differently by arrow functions. Since it lacks a context of its own, they are unable to define its own. Anytime you call this, they take the value of this from the parent scope.

const greet = () => {
  console.log("Good Morning 🌄");
};
greet();

const addition = (a, b) => console.log(a + b);
addition(5, 4);

const myButton = document.querySelector("#myBtn");

const shop = {
  price: 1000,
  buyProduct: function () {
    // const _this = this;
    // myButton.addEventListener("click", function () {
    //   console.log(this);
    //   console.log(`I spent ${this.price}`);
    // });

    myButton.addEventListener("click", () => {
      console.log(this);
      console.log(`I spent ${this.price}`);
    });
  },
};

shop.buyProduct();
