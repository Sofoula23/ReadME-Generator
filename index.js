const inquirer = require("inquirer");
const fs = require('fs');


inquirer.prompt([
    {
    type: "input",
    name: "github",
    message: "What is your Github username?"  
    },
    {
    type: "input",
    name: "email",
    message: "What is your email address?"  
    },
    {
    type: "input",
    name: "title",
    message: "What is the title?"
    },
    {
    type: "input",
    name: "description",
    message: "Please write a short description of your project"
    },
    {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"]
    },
    {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?"
    },
    {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?"
    },
    {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?"
    },
    {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
    }
]).then((answers) => {
    writeFile('Readme.md', readme({ ...answers }))
});

const readme = (answers) => {
return `
# Read Me Generator 

## Overview

In this homework we are creating a command-line application that dynamically generates a professional README.md file from a user's input. We are using the [Inquirer package](https://www.npmjs.com/package/inquirer).

## Questionaire 

* What is your Github username? ${answers.github}
* What is your email address? ${answers.email}
* What is the title? ${answers.title}
* Please write a short description of your project ${answers.description}
* What kind of license should your project have? ${answers.choices}
* What command should be run to install dependencies? ${answers.installation}
* What does the user need to know about using the repo? ${answers.usage}
* What does the user need to know about contributing to the repo? ${answers.contributing}

## Helpful Links

* [Node.js](https://nodejs.org/en/)

`};

 
const writeFile = (file, answers) => {
    fs.writeFile(file, answers, (err) =>
err ? console.error(err) : console.log("todo bien")
)};
