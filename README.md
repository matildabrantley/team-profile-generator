 
# Team Profile Generator
![Generic badge](https://img.shields.io/badge/License-MIT-blue.svg)
### Matilda Brantley
### [GitHub](https://github.com/matildabrantley/team-profile-generator)

## Summary
The purpose of this project is to generate a professional team profile roster website with contact information and job descriptions for each employee.
## Table of Contents:
* [Installing](#installing)
* [Usage](#usage)
* [Testing](#testing)
* [Contributing](#contributing)
* [Features](#features)
* [License](#license)
* [Questions](#questions)
* [Screenshots](#screenshots)
## Usage
The primary use case is for software development teams that need to quickly generate or update their team's roster. Other use cases include teams at any company in general whose employees (including interns and managers) are in need of a website and may not have the technical experience to create one.
## 
## Installing 
* The following command installs dependencies: **npm i**
## Testing
* The following command runs tests: **npm test**
## Features
* **Inquirer.js** module used to prompt users from the command line for information about team members. This callback is wrapped in a recursive function that repeats the prompt as long as the user selects to add more team members.
* **Jest.js** module used to test Employee and it's subclasses Intern, Engineer and Manager. These test files are in the __ test __ folder.
* **Employee** class holds information applicable to all employees including name, id and email, as well as get methods for each. Has a get method for employee's role (overriden by each subclass).
* Three subclasses of Employee:
  * **Intern** has information and get method for employee's school attended.
  * **Engineer** has information and get method for employee's GitHub.
  * **Manager** has information and get method for employee's office hours.
* **Index.js** is the entry point for the command line application that prompts user and then generates an HTML page.
  * teamMemberInput() starts the Inquirer prompt, calls generateCard after each team member's input, pushes that HTML block into teamMemberCards array, and calls itself if more team members to add. It finishes by calling generateHTML.
  * generateCard() creates an HTML block including team member's information with Bootstrap styles.
  * generateHTML() creates the main HTML page and unpacks the teamMemberCards array with toString(), adding those blocks into the document.

## License
The project is licensed under the MIT License license.
## Questions
Questions about the project may be directed to my email at matildahbrantley@gmail.com.
Here is a link to [my GitHub](https://github.com/matildabrantley) 
for access my other work.

## Screenshots