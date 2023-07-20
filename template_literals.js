// 1. we have Template Literals which are indicated by the backtick (` `) character. Template literals can also be used to hold the placeholders, that are indicated by the '$' sign and the {} braces such as (${expression})
// 2.Template literals provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.
// 3.Template literals allows multiline strings

const firstName = "Sahil";
const lastName = "Khan";
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

const message = "Hello \n" + "How Are you";
const message2 = `hello template string
how are you ? 
`;
console.log(message);
console.log(message2);
