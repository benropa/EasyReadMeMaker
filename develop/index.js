const inquirer = require('inquirer');
const fs = require('fs');


function writeHTML( {name, location, bio, linkedInUser, gitHubUser} ) {
    const htmlString = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./styles.css">
            <title>My Portfolio</title>
        </head>
        <body>
            <header >
                <h1>
                    ${name}
                </h1>
            </header>
            <main>
                <div>
                    <h2>
                        Bio:
                    </h2>
                    <p>
                        ${bio}
                    </p>
                </div>
            </main>
            <footer >
                <div>
                    ${location}
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/${linkedInUser}">LinkedIn</a>
                </div>
                <div>
                    <a href="https://www.github.com/${gitHubUser}">GitHub</a>
                </div>
            </footer>
        </body>
        </html>`
    return htmlString
}

function writeHTMLFile(htmlString) {
    fs.writeFile('index.html', htmlString, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('Success: HTML File Generated!')
        }
    })
}

function main() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is your current location?',
                name: 'location',
            },
            {
                type: 'input',
                message: 'Tell us about yourself.',
                name: 'bio',
            },
            {
                type: 'input',
                message: 'What is your LinkedIn username?',
                name: 'linkedInUser',
            },
            {
                type: 'input',
                message: 'What is your Github username?',
                name: 'gitHubUser',
            },
        ])
        .then((response) => {
            const prompt = {
                name: response.name,
                location: response.location,
                bio: response.bio,
                linkedInUser: response.linkedInUser,
                gitHubUser: response.gitHubUser
            }

            const html = writeHTML(prompt);

            writeHTMLFile(html);

        });
}

main();