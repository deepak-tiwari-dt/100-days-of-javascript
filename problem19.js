// Function declaration (hoisted)
function isSeven(x) {
  return x == 7 ? true : false; // check if 7
}

// Arrow function (block body)
const isSeven = (x) => {
  return x == 7 ? true : false; // explicit return
}

// Function expression (not hoisted)
const isSeven = function(x) {
  return x == 7 ? true : false; // compare value
}

// Arrow function (implicit return)
const isSeven = (x) => x == 7 ? true : false; // short syntax