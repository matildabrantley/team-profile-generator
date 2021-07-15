const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./libs/employee');
const Intern = require('./libs/intern');
const Engineer = require('./libs/engineer');
const Manager = require('./libs/manager');

const generateHTML = (res) => {
  let employee;
  switch (res.role){
    case('Intern'): 
      employee = new Intern(res.name, res.id, res.email, res.school);
      break;
    case('Engineer'): 
      employee = new Intern(res.name, res.id, res.email, res.github);
      break;
    case('Manager'): 
      employee = new Intern(res.name, res.id, res.email, res.officeHours);
      break;
    default: 
      employee = new Employee(res.name, res.id, res.email);
  }

  //TODO: insert expressions into template literal from class get methods

return ` 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Team Profiles</title>

  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- <link rel="stylesheet"  href="assets/css/style.css"> -->
</head>
<body>

  <div class="jumbotron text-center">
    <h1>Team</h1>
  </div>

  <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">
      <h2>Name</h2><br>
      <h2>Role</h2>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item list-group-item-primary"></li>
        <li class="list-group-item list-group-item-primary"></li>
        <li class="list-group-item list-group-item-primary"></li>
      </ul>
    </div>
  </div>
</body>
</html>
`;
}

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
    message: 'What is the office number of the team member? (Leave empty if N/A)',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the GitHub username of the team member? (Leave empty if N/A)',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What was the school of the team member? (Leave empty if N/A)',
  }
  ])
  .then((res) => {
    const teamHTML = generateHTML(res);
    fs.writeFile('team.html', teamHTML, (error) =>
      error ? console.log(error) : console.log('Created team.html')
    );
  });
