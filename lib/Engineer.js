//done
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// require Employee class
const Employee = require("./Employee");

// creating a class called engineer , which extends from Employee
class Engineer extends Employee {
    //  used super to call the parent constructor
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
        }
    
    // get github info
    getGithub(){
        return this.github;
    }

    // outputs the "engineer" role
    getRole(){
        return "Engineer";
    }
}

// exports the engineer
module.exports = Engineer;