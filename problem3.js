// Function declaration
function convert(minutes) {
  return minutes * 60; // converts minutes to seconds
}

// Arrow function (block body)
const convert = (minutes) => {
  return minutes * 60; // explicit return
}

// Arrow function (concise)
const convert = (minutes) => minutes * 60; // implicit return

// Function expression
const convert = function(minutes) {
  return minutes * 60; // returns seconds
}