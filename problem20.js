// Function declaration (hoisted)
function lessThan100(a, b) {
  return a + b < 100; // returns true if sum < 100
}

// Arrow function (implicit return)
const lessThan100 = (a, b) => a + b < 100; // short syntax

// Function expression (not hoisted)
const lessThan100 = function (a, b) {
  return a + b < 100; // compare sum
};

// Arrow function (implicit return)
const lessThan100 = (a, b) => a + b < 100; // concise version
