// Function declaration (hoisted)
function animals(chickens, cows, pigs) {
  return 2 * chickens + 4 * cows + 2 * pigs; // total legs
}

// Arrow function (block body)
const animals = (chickens, cows, pigs) => {
  return 2 * chickens + 4 * cows + 2 * pigs; // explicit return
}

// Arrow function (implicit return)
const animals = (chickens, cows, pigs) =>
  2 * chickens + 4 * cows + 2 * pigs; // short syntax

// Function expression (not hoisted)
const animals = function(chickens, cows, pigs) {
  return 2 * chickens + 4 * cows + 2 * pigs; // calculate legs
}