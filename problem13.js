// Function declaration (hoisted)
function lessThanOrEqualToZero(num) {
  return num <= 0 ? true : false; // check <= 0
}

// Arrow function (block body)
const lessThanOrEqualToZero = (num) => {
  return num <= 0 ? true : false; // explicit return
}

// Arrow function (implicit return)
const lessThanOrEqualToZero = num => num <= 0 ? true : false; // short syntax

// Function expression (not hoisted)
const lessThanOrEqualToZero = function(num) {
  return num <= 0 ? true : false; // check condition
}

// Arrow function with if-else
const lessThanOrEqualToZero = (num) => {
  if (num <= 0) {
    return true; // condition true
  } else {
    return false; // condition false
  }
}