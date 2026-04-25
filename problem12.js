// Function declaration (hoisted)
function nextEdge(side1, side2) {
  return (side1 + side2) - 1; // max third edge
}

// Arrow function (block body)
const nextEdge = (side1, side2) => {
  return (side1 + side2) - 1; // explicit return
}

// Arrow function (implicit return)
const nextEdge = (side1, side2) => (side1 + side2) - 1; // short syntax

// Function expression (not hoisted)
const nextEdge = function(side1, side2) {
  return (side1 + side2) - 1; // compute edge
}