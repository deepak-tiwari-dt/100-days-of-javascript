// Function declaration (hoisted)
function isSameNum(num1, num2) {
  return num1 === num2 ? true : false; // check strict equality
}

// Arrow function (implicit return)
const isSameNum = (num1, num2) =>
  num1 === num2 ? true : false; // short syntax

// Function expression (not hoisted)
const isSameNum = function(num1, num2) {
  return num1 === num2 ? true : false; // compare numbers
}

// Arrow function (block body)
const isSameNum = (num1, num2) => {
  return num1 === num2 ? true : false; // explicit return
}