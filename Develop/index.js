// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('.utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    // project title
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please enter the title of your project?',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log('This is a required field, please enter the title of your project!');
                return false;
            }
        }
    },

    // project description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('This is a required field, please provide a project description!');
                return false;
            }
        }
    },

    //license selection
    {
        type: 'list',
        name: 'licenseChoice',
        message: 'Choose a license',
        choices: [
            'Apache 2.0',
            'GPL 3.0',
            'MIT',
            'None'
        ],
    }
    ,

    //GitHub username
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('A GitHub username is required, please enter your GitHub username!');
                return false;
            }
        }
    },

    // email input
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'Please enter an email address so that you can be reached if there are additoinal questions',
        validate: questionsEmailInput => {
            if (questionsEmailInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
