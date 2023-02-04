// function to generate markdown
function Markdown(userInput) {
  return `# ${userInput.title}
 
![License](https://img.shields.io/badge/license-${userInput.license}-green)
  
## Description
${userInput.description}  

## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contrubutions](#Contributions)
  - [Test](#Test)
  - [Questions](#Questions)
## Installation
${userInput.installs}
## Usage
${userInput.use}
${userInput.links}
## Credits
${userInput.collab}
## License
This project is licensed under the ${userInput.license} license.
## Contributing
${userInput.contributions}
## Test
${userInput.test}
## Questions
[github.com/${userInput.gitHub}](https://github.com/${userInput.gitHub})
Questions about this proyect or to report an issue can be sent to:
${userInput.email}. Please especify the name of the proyect in the subject of the email.
`;
}

module.exports = Markdown;