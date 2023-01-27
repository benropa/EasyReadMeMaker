const inquirer = require('inquirer');
const fs = require('fs');


function writeMd({GitHub, description}) {
    const md =`
    # ${GitHub}

    ## ${description}`
   
    return md; 
}

           

function writeMdFile(MdString) {
    fs.writeFile('index.md', MdString, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('Success: Md File Generated!')
        }
    })
}

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
                message: 'Add a description of your project:',
                name: 'description',
            },
        ])

        .then((response) => {
            const prompt = {
                GitHub: response.name,
                description: response.location,
            }

            const html = writeMd(prompt);

            writeMdFile(md);

        });
}

main();