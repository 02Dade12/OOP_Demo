// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const fs = require('fs');

// const EngineerQuestions = [{
//     type: 'input',
//     name: 'Name',
//     message: 'What is your current position?',
// },
// {
//     type: 'input',
//     name: 'ID',
//     message: 'Please enter your Badge ID#?',
// },
// {
//     type: 'input',
//     name: 'githubLink',
//     message: 'What is your Github Link?',
// },
// {
//     type: 'input',
//     name: 'githubEmail',
//     message: 'What is your email?',
// }];

// inquirer
//     .prompt(questions)
//     .then(data => {
//         let html =
// ``

// fs.writeFileSync("index.html", html);

// });
