const Employee = require('./employee');

class Engineer extend Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Intern';
    }
}