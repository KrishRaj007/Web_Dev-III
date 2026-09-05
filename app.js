// app.js
// Demonstrates reusability of custom modules (isEven + logger)

const isEven = require("./modules/isEven");
const { log } = require("./modules/logger");

const numbers = [4, 7, 10, 15, 22];

log("Checking even/odd numbers using custom isEven module");

numbers.forEach((num) => {
  if (isEven(num)) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }
});

log("Finished checking numbers");
