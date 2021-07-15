const Employee = require('./employee');

class Manager extend Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
    }
}
module.exports = Manager;