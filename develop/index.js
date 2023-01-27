const inquirer = require('inquirer');
const fs = require('fs');
const utilize = require('utilize');

// First, inquirer will allow us to gather user input

function main() {
    inquirer
        .prompt([
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
    }

main();

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
           
// Finally, we will insert the user's input within the md file for a professional looking product
