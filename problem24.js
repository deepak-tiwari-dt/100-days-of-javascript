// Function declaration (hoisted)
function reverseString(str) {
  return str.split("").reverse().join(""); // reverse string
}

// Arrow function (block body)
const reverseString = (str) => {
  return str.split("").reverse().join(""); // explicit return
};

// Arrow function (implicit return)
const reverseString = (str) =>
  str.split("").reverse().join(""); // short syntax

// Function expression (not hoisted)
const reverseString = function (str) {
  return str.split("").reverse().join(""); // reverse characters
};