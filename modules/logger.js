// modules/logger.js
// Custom logger module - reusable across the project

function log(message) {
  const timestamp = new Date().toLocaleString();
  console.log(`[LOG] ${timestamp} - ${message}`);
}

// Exporting as an object so we can add more functions later if needed
module.exports = { log };
