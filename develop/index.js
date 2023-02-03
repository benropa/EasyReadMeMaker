// file interactions
const inquirer = require('inquirer');
const fs = require('fs/promises');
const Markdown = require('./utils/generateMarkdown');


// Prompt user with questions
const ask = [{
  type: 'input',
  name: 'title',
  message: 'What is the title of your project?',
},
{
  type: 'input',
  name: 'description',
  message: 'Enter a description of your project:',
},
{
  type: 'input',
  name: 'installs',
  message: 'Enter installation instructions:',
},
{
  type: 'input',
  name: 'use',
  message: 'Enter instructions on how to use application:',
},
{
  type: 'input',
  name: 'links',
  message: 'Enter links to files related to project:',
},
{
  type: 'input',
  name: 'collab',
  message: 'Enter a list of collaborators:',
},
{
  type: 'list',
  name: 'license',
  message: 'Choose a license for your project:',
  choices: ['Apache', 'GNU', 'MIT', 'BSD', 'Mozilla', 'None', 'Unlicense'],
},
{
  type: 'input',
  name: 'contributions',
  message: 'Enter contributions:',
},
{
  type: 'input',
  name: 'test',
  message: 'Enter instructions for testing:',
},
{
  type: 'input',
  name: 'gitHub',
  message: 'Enter your github username:',
},
{
  type: 'input',
  name: 'email',
  message: 'Enter your email address:',
},];


// Function to initialize creation of the app
function init() {
  inquirer
    .prompt(ask)
    .then((response) => {
      const readmeContent = Markdown(response)
      fs.writeFile('./README.md', readmeContent)
      console.log('Successfully created a README.md for your project!');
    })
    .catch((err) => console.log('An error has occurred. Please try again.'));

}

// Call the function
init();