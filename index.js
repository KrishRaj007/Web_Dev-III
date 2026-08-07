// const cities = require("./data/data.js");
// console.log(cities);

// const fs = require("fs");
// fs.writeFileSync("test.txt", "Hello World");

// const path = require("path");
// const filename = path.join(__dirname, "data", "test.txt");
// console.log(filename)

// const os = require("os")
// const userInfo = os.userInfo();
// const freeMemory = os.freemem();
// const totalMemory = os.totalmem();
// const uptime = os.uptime();

// console.log("User Info:", userInfo);
// console.log("FreeMemory:", freeMemory);
// console.log("Total Memory:", totalMemory),
// console.log("Uptime:", uptime)

// import chalk from `chalk`;
// console.log(chalk.blue("Hello World"));
// console.log(chalk.red("Error: Something went wrong"));
// console.log(chalk.green("Success: Operation completed successfully!"));
// console.log(chalk.yellow("Warning: This action may have consequences"));

const process = require('process');
console.log(process.argv[2]);
require('dotenv').config();
console.log(process.env.PORT)