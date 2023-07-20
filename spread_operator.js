// 1.The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

// Shallow copying -> creates a new object with references to the same memory locations as the original object,
// Deep copying -> creates a new object with new memory locations for all of its properties and nested objects or arrays.

const languages = ["c", "C++", "Java", "JavaScript"];
const updatedLanguages = [...languages, "react js"];
console.log(updatedLanguages);

const settings = {
  volume: 10,
  brightness: 80,
  theme: "Dark",
};

const newSettings = { ...settings, contrast: 50 };
newSettings.volume = 90;
console.log(settings);
console.log(newSettings);
