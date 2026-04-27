// Function declaration (hoisted)
function findPerimeter(length, width) {
  return 2 * (length + width); // perimeter = 2(l + w)
}

// Arrow function (block body) - fixed syntax
const findPerimeter = (length, width) => {
  return 2 * (length + width); // explicit return
}

// Function expression (not hoisted)
const findPerimeter = function(length, width) {
  return 2 * (length + width); // calculate perimeter
}

// Arrow function (implicit return)
const findPerimeter = (length, width) => 2 * (length + width); // short syntax