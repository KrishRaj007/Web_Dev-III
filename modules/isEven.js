// modules/isEven.js
// Custom module to check if a number is even or odd

function isEven(num) {
  return num % 2 === 0;
}

// Exporting the function so other files can use it via require()
module.exports = isEven;
