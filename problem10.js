// Function declaration (hoisted)
function squared(b) {
  return b * b; // square using multiplication
}

// Arrow function (block body)
const squared = b => {
  return b * b; // explicit return
}

// Arrow function (implicit return)
const squared = b => b * b; // short syntax

// Function expression (not hoisted)
const squared = function(b) {
  return b * b; // square value
}