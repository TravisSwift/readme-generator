// const fs = require('fs');
// const inquirer = require('inquirer');
// // const readline = require('readline');
// //const generatePage = require('./src/page-template');


// var message = 'Hello Node!';
// console.log(message);
 
const profileDataArgs = process.argv.slice(2, process.argv.length);

const name = profileDataArgs[0];
const github = profileDataArgs[1];


// const readline = require('npm install').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
//   })

//   const readmeDataArgs = process.argv.slice(2, process.argv.length);
// console.log(readmeDataArgs);

// // Notice the lack of parentheses around the `profileDataArr` parameter?
// const printReadmeData = readmeDataArr => {
//     for (let i = 0; i < readmeDataArr.length; i++) {
//       console.log(readmeDataArr[i]);
//     }
//   };

//   printReadmeData(readmeDataArgs);


const generatePage = (userName, githubName) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
  };


console.log(name, github);
console.log(generatePage(name, github));
 