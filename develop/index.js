const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// First, inquirer will allow us to gather user input
const placeInFile = util.promisify(fs.writeFile)

const askUser = () => {
     return inquirer.prompt([
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'GitHub',
            },
            {
                type: 'input',
                message: 'Add a description to your Read Me file:',
                name: 'description',
            },
        ])
    };

askUser();

// Next we need to generate a ReadMe.md file

const createMDfile = (Ui) => {
    return `# ${Ui.Github}
    ## ${Ui.description}
`
}

const init = () => {
    askUser()
        .then((Ui) => placeInFile('readme.md', createMDfile(Ui)))
        .then(() => console.log('successfully created README'))
        .catch((err) => console.error(err));
};

init();
