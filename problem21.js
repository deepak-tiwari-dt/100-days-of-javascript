// Function declaration (hoisted)
function printArray(number) {
  var newArray = []; // create empty array

  // Loop from 1 to given number
  for (var i = 1; i <= number; i++) {
    newArray.push(i); // add value to array
  }

  return newArray; // return final array
}

// Arrow function (block body)
const printArray = (number) => {
  var newArray = []; // create empty array

  // Add numbers into array
  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray; // return array
}

// Function expression (not hoisted)
const printArray = function(number) {
  var newArray = []; // initialize array

  // Loop through numbers
  for (var i = 1; i <= number; i++) {
    newArray.push(i); // push values
  }

  return newArray; // output array
}