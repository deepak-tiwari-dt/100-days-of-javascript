// Function declaration
function has_bugs(buggy_code) {
  if (buggy_code) {
    return "sad days"; // if bugs exist
  } else {
    return "it's a good day"; // no bugs
  }
}

// Arrow function (block body)
const has_bugs = (buggy_code) => {
  if (buggy_code) {
    return "sad days"; // explicit return
  } else {
    return "it's a good day";
  }
}

// Arrow function (concise with ternary)
const has_bugs = buggy_code => buggy_code 
  ? "sad days" 
  : "it's a good day"; // short condition

// Function expression
const has_bugs = function(buggy_code) {
  if (buggy_code) {
    return "sad days"; // if bugs
  } else {
    return "it's a good day";
  }
}