const readline = require('readline');

if (process.stdin.isTTY) {
  process.stdin.on('data', (name) => {
    process.stdout.write(`Your name is: ${name}`);
    process.exit()
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  ouput: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
