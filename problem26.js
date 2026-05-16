// Function declaration (hoisted)
function largest(arr) {
  return Math.max(...arr); // find largest number
}

// Arrow function (implicit return)
const largest = (arr) => Math.max(...arr); // short syntax

// Function expression (not hoisted)
const largest = function(arr) {
  return Math.max(...arr); // get max value
}

// Arrow function (block body)
const largest = (arr) => {
  return Math.max(...arr); // explicit return
}