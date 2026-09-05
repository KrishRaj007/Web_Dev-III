// dice.js
// Random Dice Generator using crypto module

const crypto = require("crypto");
const { log } = require("./modules/logger");

// Generates a secure random number between 1 and 6
function rollDice() {
  // crypto.randomInt(min, max) -> max is exclusive, so use 7
  return crypto.randomInt(1, 7);
}

// Simulate multiple dice rolls
const numberOfRolls = 5;

log(`Rolling dice ${numberOfRolls} times`);

for (let i = 1; i <= numberOfRolls; i++) {
  const result = rollDice();
  console.log(`Roll ${i}: Dice Rolled: ${result}`);
}

log("Dice rolling finished");
