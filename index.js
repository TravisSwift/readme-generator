var message = 'Hello Node!';

var sum = 5 + 3;

console.log(message);
console.log(sum);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  })