// calculator.js
// CLI-based calculator using process.argv
// Usage: node calculator.js add 10 5

const { log } = require("./modules/logger");

// process.argv[0] = node path, process.argv[1] = file path
// process.argv[2] = operation, [3] and [4] = numbers
const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

log(`Calculator started with operation: ${operation}`);

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "div":
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    default:
      throw new Error("Invalid operation. Use: add, sub, mul, div");
  }
}

// Handle invalid inputs gracefully
if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log("Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
  console.log("Example: node calculator.js add 10 5");
} else {
  try {
    const result = calculate(operation, num1, num2);
    console.log(`Result: ${result}`);
    log(`Calculation successful: ${num1} ${operation} ${num2} = ${result}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    log(`Calculation failed: ${err.message}`);
  }
}
