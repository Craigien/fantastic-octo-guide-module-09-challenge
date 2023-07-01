// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

function getUserInput()
{
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Please enter the project title',
                    name: 'title',
                },
                {
                    type: 'input',
                    message: 'Please enter your project description',
                    name: 'description',
                },
                {
                    type: 'input',
                    message: 'Please enter the project installation instructions',
                    name: 'installation',
                },
                {
                    type: 'input',
                    message: 'Please enter the project usage information',
                    name: 'usage',
                },
                {
                    type: 'input',
                    message: 'Please enter the project contribution guidelines',
                    name: 'contribution',
                },
                {
                    type: 'input',
                    message: 'Please enter the project testing instructions',
                    name: 'test',
                },
                {
                    type: 'list',
                    message: 'Please choose project license type',
                    choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'MIT', 'Mozilla Public License 2.0', 'The Unlicense', 'None'],
                    name: 'license',
                },
                {
                    type: 'input',
                    message: 'Please enter your GitHub username',
                    name: 'username',
                },
                {
                    type: 'input',
                    message: 'Please enter your email address',
                    name: 'email',
                },
            ])
            .then((response) => {
                console.log(response);

                const markdownText = generate.generateMarkdown(response);

                writeToFile("./output_README/testREADME.md", markdownText);
            });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data)
{
    console.log(data);

    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Successfully created " + fileName)
    );
}

// TODO: Create a function to initialize app
function init()
{
    getUserInput();
}

// Function call to initialize app
init();
