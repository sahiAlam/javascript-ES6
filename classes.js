// 1.ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
// 2.JavaScript Classes are templates for JavaScript Objects.
// 3.A JavaScript class is not an object. It is a template for JavaScript objects.

// ** The constructor method is a special method:
// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties
// If you do not define a constructor method, JavaScript will add an empty constructor method.

// The super() method refers to the parent class.
// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class:

// Classes also allows you to use getters and setters.
// It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.
// To add getters and setters in the class, use the get and set keywords.

// Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
// That means that you must declare a class before you can use it:

class Person {
  constructor(name) {
    this.name = name; // initialize the property "name" with an empty string by default when
  }

  greet() {
    console.log("Good Night.." + this.name);
  }
}

const sahil = new Person("Sahil");
const rahil = new Person("Rahil");
console.log(sahil);
sahil.greet();

class GreatPerson extends Person {
  attitude = "cool";
}

const newPerson = new GreatPerson("John");
console.log(newPerson);
newPerson.greet();

// Static class methods are defined on the class itself.
// You cannot call a static method on an object, only on an object class.
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x;
  }
}
const myCar = new Car("Ford");
console.log(Car.hello("BMW"));
