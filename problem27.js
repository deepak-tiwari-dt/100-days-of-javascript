// Function declaration (hoisted)
function sumPolygon(n) {
  return (n - 2) * 180; // sum of interior angles
}

// Arrow function (block body)
const sumPolygon = (n) => {
  return (n - 2) * 180; // explicit return
}

// Function declaration (duplicate version)
function sumPolygon(n) {
  return (n - 2) * 180; // calculate angle sum
}

// Arrow function (implicit return)
const sumPolygon = n => (n - 2) * 180; // short syntax