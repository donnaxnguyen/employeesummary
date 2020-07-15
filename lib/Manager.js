// done
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// requires Employee class
const employee = require("./Employee");

// creating a class called manager , which extends from Employee
class Manager extends Employee {
    //  used super to call the parent constructor
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
        }
    
    // get office number info
    getOfficeNumber(){
        return this.officeNumber;
    }

    // outputs the "Manager" role
    getRole(){
        return "Manager";
    }
}

// exports the manager
module.exports = Manager;