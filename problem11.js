// Function declaration (hoisted)
function circuitPower(voltage, current) {
  return voltage * current; // power = voltage × current
}

// Arrow function (block body)
const circuitPower = (voltage, current) => {
  return voltage * current; // explicit return
}

// Arrow function (implicit return)
const circuitPower = (voltage, current) => voltage * current; // short syntax

// Function expression (not hoisted)
const circuitPower = function(voltage, current) {
  return voltage * current; // calculate power
}