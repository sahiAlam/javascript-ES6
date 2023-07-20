// 1.Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed

const register = (name, password, age = 21) => {
  console.log(name, password, age);
};

register("Sahil", "sahi@123");
