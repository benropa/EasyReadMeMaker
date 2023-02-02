const inquirer = require('inquirer');
const fs = require('fs');
const util = require('./utils/generateMarkdown');

// First, inquirer will allow us to gather user input

const askUser = () => {
     return inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of your project?',
                name: 'projectName',
            },
            {
                type: 'input',
                message: 'What is the purpose of your application?',
                name: 'purpose',
            },
            {
                type: 'input',
                message: 'Why did you build this project?',
                name: 'build',
            },
            {
                type: 'input',
                message: 'What did you learn while creating this app?',
                name: 'skills',
            },
            {
                type: 'input',
                message: 'What is necessary to use your project?',
                name: 'useProject',
            },
            {
                type: 'input',
                message: 'Are there any other collaborators you would like to include? List them here:',
                name: 'credits',
            },
            {
                type: 'input',
                message: 'Name the coding programs and languages you used here:',
                name: 'programs',
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'contact',
            },
        ])
    };

askUser();

// Next we need to generate a ReadMe.md file
const placeInFile = util.promisify(fs.writeFile)

const init = () => {
    askUser()
        .then((Ui) => placeInFile('readme.md', createMDfile(Ui)))
        .then(() => console.log('successfully created README'))
        .catch((err) => console.error(err));
};

init();
