const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  ouput: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  process.exit(0)
  //rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
