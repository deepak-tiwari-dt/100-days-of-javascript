// Function declaration (hoisted)
function isPalindrome(str) {
  return str === str.split("").reverse().join(""); // check palindrome
}

// Arrow function (block body)
const isPalindrome = (str) => {
  return str === str.split("").reverse().join(""); // explicit return
}

// Function expression (not hoisted)
const isPalindrome = function(str) {
  return str === str.split("").reverse().join(""); // compare reversed string
}

// Arrow function (implicit return)
const isPalindrome = (str) =>
  str === str.split("").reverse().join(""); // short syntax