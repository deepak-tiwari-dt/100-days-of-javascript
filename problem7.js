// Function declaration
function calcAge(age) {
  return age * 365; // converts years to days
}

// Arrow function (block body)
const calcAge = (age) => {
  return age * 365; // explicit return
}

// Arrow function (concise)
const calcAge = (age) => age * 365; // implicit return

// Function expression
const calcAge = function(age) {
  return age * 365; // converts to days
}