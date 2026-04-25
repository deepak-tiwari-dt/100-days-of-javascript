// Function declaration (hoisted)
function cubes(a) {
  return a * a * a; // cube using multiplication
}

// Arrow function (implicit return)
const cubes = a => a ** 3; // cube using **

// Function expression (not hoisted)
const cubes = function(a) {
  return a ** 3; // cube using **
}

// Arrow function (block body)
const cubes = (a) => {
  return a ** 3; // explicit return
}

// Function declaration (modern)
function cubes(a) {
  return a ** 3; // cube using **
}