const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (devResponse) => {
  let licenseBadge;
  switch (devResponse.license){
    case('MIT License'): 
      licenseBadge = '![Generic badge](https://img.shields.io/badge/License-MIT-blue.svg)';
      break;
    case('APACHE 2.0 License'):
      licenseBadge = '![Generic badge](https://img.shields.io/badge/License-APACHE-purple.svg)';
      break;
    case('BSD 3 License'):
      licenseBadge = '![Generic badge](https://img.shields.io/badge/License-BSD3-green.svg)';
      break;
    case('GNU General Public License'):
      licenseBadge = '![Generic badge](https://img.shields.io/badge/License-GPL-red.svg)';
      break;
    case('Mozilla Public License 2.0'):
      licenseBadge = '![Generic badge](https://img.shields.io/badge/License-Mozilla-orange.svg)';
      break;
    default: 
      licenseBadge = "No License";
  }


return ` 
# ${devResponse.project}
${licenseBadge}

### [My GitHub](https://github.com/${devResponse.gitUsername})

## Table of Contents:

* [Installing](#installing)
* [Usage](#usage)
* [Testing](#testing)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Description
${devResponse.description}
## Usage
${devResponse.usage}
## 
## Installing 
* The following command installs dependencies:
  * ${devResponse.installCommand}
## Testing
* The following command runs tests:
  * ${devResponse.testCommand}

## Usage

## Contributing
* What you should know about this GitHub repository:
  * ${devResponse.repoInfo}
## License
The project is licensed under the ${devResponse.license} license.
## Questions
Questions about the project may be directed to my email at ${devResponse.email}.
Here is a link to [my GitHub](https://github.com/${devResponse.gitUsername}) 
for access my other work.
`;
}

inquirer
.prompt([
  {
    type: 'input',
    name: 'project',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is a brief description of your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are some of the usage cases of this project?',
  },
  {
    type: 'input',
    name: 'gitUsername',
    message: 'What is your GitHub username?',
    },
  {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
  },
  {
      type: 'input',
      name: 'installCommand',
      message: 'What is the command  that installs dependencies?',
  },
  {
      type: 'input',
      name: 'testCommand',
      message: 'What is the command that runs tests?',
  },
  {
      type: 'input',
      name: 'repoInfo',
      message: 'What should a user know about your GitHub repository?',
  },
  {
      type: 'list',
      name: 'license',
      message: 'Under which license is this project published?',
      choices: ['MIT License', 'APACHE 2.0 License', 'BSD 3 License', 'GNU General Public License', 'Mozilla Public License 2.0', 'No License'],
  }
  ])
  .then((devResponse) => {
    const readmeContent = generateREADME(devResponse);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Created README.md!')
    );
  });
