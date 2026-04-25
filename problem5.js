// Function declaration
function howManySeconds(hours) {
  return hours * 60 * 60; // converts hours to seconds
}

// Arrow function (block body)
const howManySeconds = (hours) => {
  return hours * 60 * 60; // explicit return
};

// Arrow function (concise)
const howManySeconds = (hours) => hours * 60 * 60; // implicit return

// Function expression
const howManySeconds = function (hours) {
  return hours * 60 * 60; // converts to seconds
};