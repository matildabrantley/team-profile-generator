const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./libs/employee');
const Intern = require('./libs/intern');
const Engineer = require('./libs/engineer');
const Manager = require('./libs/manager');

//Array of HTML card elements for team members
const teamMemberCards = [];

//Add a card to teamMemberCards
const generateCard = (res) => {
  let employee;
  let extraInfo = "";
  switch (res.role){
    case('Intern'): 
      employee = new Intern(res.name, res.id, res.email, res.school);
      extraInfo = "School: " + res.school;
      break;
      case('Engineer'): 
      employee = new Engineer(res.name, res.id, res.email, res.github);
      extraInfo = "GitHub: " + res.github;
      break;
      case('Manager'): 
      employee = new Manager(res.name, res.id, res.email, res.officeHours);
      extraInfo = "Office Hours: " + res.officeHours;
      break;
    default: 
      employee = new Employee(res.name, res.id, res.email);
  }

return ` 
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">
      <h2>${employee.getId()}</h2><br>
      <h2>${employee.getRole()}</h2>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item list-group-item-primary">ID: ${employee.getId()}</li>
        <li class="list-group-item list-group-item-primary">Email: ${employee.getEmail()}</li>
        <li class="list-group-item list-group-item-primary">${extraInfo}</li>
      </ul>
    </div>
  </div>
`;
}

const generateHTML = (res) => {
return ` 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Team Profiles</title>

  <!-- Minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- <link rel="stylesheet"  href="assets/css/style.css"> -->
</head>
<body>

  <div class="jumbotron text-center">
    <h1>Team</h1>
  </div>

  ${teamMemberCards.toString()}
  
</body>
</html>
`;
}

function teamMemberInput(){
inquirer
.prompt([
  {
    type: 'list',
    name: 'role',
    message: 'Choose role for team member:',
    choices: ['Intern', 'Engineer', 'Manager'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the team member?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the ID of the team member?',
  },
  {
      type: 'input',
      name: 'email',
      message: 'What is the email of the team member?',
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the office number of the team member? (Press enter if N/A)',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the GitHub username of the team member? (Press enter if N/A)',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What was the school of the team member? (Leave empty if N/A)',
  },
  {
    type: 'confirm',
    name: 'another',
    message: 'Add another team member?',
  }
  ])
  .then((res) => {
    teamMemberCards.push(generateCard(res));
    if (res.another) 
      teamMemberInput();
    else {
      const teamHTML = generateHTML(res);
      fs.writeFile('team.html', teamHTML, (error) =>
        error ? console.log(error) : console.log('Created team.html')
      );
    }
  });
}

//start command-line application
teamMemberInput();
