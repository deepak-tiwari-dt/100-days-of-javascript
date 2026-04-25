// Function declaration
function triArea(base, height) {
  return (base * height) / 2; // triangle area
}

// Arrow function (block body)
const triArea = (base, height) => {
  return (base * height) / 2; // explicit return
}

// Function expression
const triArea = function(base, height) {
  return (base * height) / 2; // triangle area
}

// Arrow function (concise)
const triArea = (base, height) => (base * height) / 2; // implicit return