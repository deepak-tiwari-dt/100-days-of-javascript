// Function declaration (hoisted)
function returnNegative(n) {
  return n * -1; // convert to negative
}

// Arrow function (implicit return)
const returnNegative = n => n * -1; // short syntax

// Function expression (not hoisted)
const returnNegative = function(n) {
  return n * -1; // return negative value
}

// Arrow function (block body)
const returnNegative = n => {
  return n * -1; // explicit return
}