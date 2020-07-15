// done
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// this is the employee class 
const employee = require("./Employee");

// creating a class called intern that extends employee
class Intern extends Employee{
    // using constructor to set name , id , email , and school
    constructor(name, id, email, school){
    // using super to call the parent constructor 
    super(name, id, email)
    this.school = school;
    }

    // gets school
    getSchool(){
        return this.school;
    }
    // outputs the role as intern
    getRole(){
        return "Intern";
    }
}
// exports the intern
module.exports = Intern;