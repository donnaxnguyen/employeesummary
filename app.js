const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./htmlRenderer");


const teamMember = [];

function mainApp() {
    // create a manager
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Managers name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the Managers id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the Managers email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the Managers office number?"
            }
        ])
        .then(answers => {
            var { name, id, email, officeNumber } = answers;
            var manager = Manager(name, id, email, officeNumber);
            
            //Adds the manager to the team array
            teamMember.push(manager);

            //Initiates the prompt to ask for more team members
            createTeam();
            
        })

}
// this function create a list to add teammembers
function createTeam() {

    inquirer
        .prompt([
        {
            type: "list",
            name: "command",
            message:"Would you like to add more team members?",
            choices:["Add an Engineer", "Add an Intern", "Make team"]
        }
        ])
        .then(answers => {
            // create a switch statement to choose between engineer, intern, or build team
            statement = answers.command;

            switch(statement){
                case "Add an Engineer":
                    getEngineer();
                    break;

                case "Add an Intern":
                    getIntern();
                    break;

                case "Make team":
                    buildTeam();
                    break;
            }
        })
}

// a function that create an engineer
function getEngineer() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Engineers name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the Engineers id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the Engineers email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the Engineers github username?"
            }

        ])
        .then(answers => {
            var {name, id, email, github} = answers;
            var engineer = Engineer(name, id, email, github);
            teamMember.push(engineer);
        })

}
// a function that create an intern
function getIntern() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Interns name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the Interns id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the Interns email?"
            },
            {
                type: "input",
                name: "school",
                message: "What is the Intern's school name?"
            }

        ])
        .then(answers => {
            var {name, id, email, school} = answers;
            var intern = Intern(name, id, email, school);

        })

}

function buildTeam() {
    fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}

mainApp()


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
