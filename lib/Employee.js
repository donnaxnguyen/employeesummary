//done
// TODO: Write code to define and export the Employee class


// this is the class -- employee
class Employee {
    // we want to create a name , id , and email object
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // get name , and return the typed name
    getname() {
        return this.name;
    }
    // get id , and return the typed id
    getId() {
        return this.id;
    }
    // get email , and return the typed id 
    getEmail() {
        return this.email;
    }
    // this returns as an "employee"
    getRole() {
        return "Employee"
    }
}

// exports the employee
module.exports = Employee;