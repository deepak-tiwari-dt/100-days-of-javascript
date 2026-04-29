// Function declaration (hoisted)
function lessThan100(a, b) {
  return a + b < 100 ? true : false; // check sum < 100
}

// Arrow function (implicit return)
const lessThan100 = (a, b) => a + b < 100 ? true : false; // short syntax

// Function expression (not hoisted)
const lessThan100 = function(a, b) {
  return a + b < 100 ? true : false; // compare sum
}

// Arrow function (block body)
const lessThan100 = (a, b) => {
  return a + b < 100 ? true : false; // explicit return
}