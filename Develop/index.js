// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
        console.log("Readme file created successfully!")
    })
}

// TODO: Create a function to initialize app
function init() {
    console.log(`
=============================================================================================
                                                                                             
eeeee  eeee eeeee eeeee eeeeeee eeee   eeeee eeee eeeee eeee eeeee  eeeee eeeee eeeee eeeee  
8   8  8    8   8 8   8 8  8  8 8      8   8 8    8   8 8    8   8  8   8   8   8  88 8   8  
8eee8e 8eee 8eee8 8e  8 8e 8  8 8eee   8e    8eee 8e  8 8eee 8eee8e 8eee8   8e  8   8 8eee8e 
88   8 88   88  8 88  8 88 8  8 88     88 "8 88   88  8 88   88   8 88  8   88  8   8 88   8 
88   8 88ee 88  8 88ee8 88 8  8 88ee   88ee8 88ee 88  8 88ee 88   8 88  8   88  8eee8 88   8

                              Welcome to the ReadMe Generator! 
    Please enter information into the following prompts to generate your README file.
=============================================================================================
    `);

    inquirer.prompt(questions)
        .then(data => {
            writeToFile("README.md", generateMarkdown(data))
        })
 }

// Function call to initialize app
init();
