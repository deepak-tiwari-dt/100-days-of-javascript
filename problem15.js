// Function declaration (hoisted)
function giveMeSomething(a) {
  return "something" + " " + a; // concatenate string
}

// Arrow function (implicit return)
const giveMeSomething = a => "something" + " " + a; // short syntax

// Arrow function (block body)
const giveMeSomething = a => {
  return "something" + " " + a; // explicit return
}

// Function expression (not hoisted)
const giveMeSomething = function(a) {
  return "something" + " " + a; // join string + value
}