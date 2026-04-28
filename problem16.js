// Function declaration (hoisted)
function points(twoPointers, threePointers) {
  return 2 * twoPointers + 3 * threePointers; // total score
}

// Arrow function (block body)
const points = (twoPointers, threePointers) => {
  return 2 * twoPointers + 3 * threePointers; // explicit return
}

// Function expression (fixed syntax)
const points = function(twoPointers, threePointers) {
  return 2 * twoPointers + 3 * threePointers; // calculate points
}

// Arrow function (implicit return)
const points = (twoPointers, threePointers) =>
  2 * twoPointers + 3 * threePointers; // short syntax