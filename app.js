const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const teamMember = [];


function getUserInput() {
    inquirer.prompt([
        {
        type:"list",
        message: "What member would you like to make?",
        name: "createdEmployee",
        choices: ["Manager", "Engineer", "Intern", "Done"]
        },
    ])
    .then(teamMember => {
        switch(teamMember.createdEmployee) {
            case "Engineer":
                engineer();
                break;
            case "Manager":
                manager();
                break;
            case "Intern":
                intern();
                break;
            case "Done":
                createTeam();
                break;
        }
    })

}

function manager() {
    // create a manager
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the Managers name?"
            },
            {
                type: "input",
                name: "employeeId",
                message: "What is the Managers id?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the Managers email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the Managers office number?"
            }
        ])
        .then(function(response) {
            let managerName = response.managerName;
            let managerId = response.managerId;
            let managerEmail = response.managerEmail;
            let managerOffice = response.managerOffice;

            let manager = new Manager (
                managerName, 
                managerId,
                managerEmail,
                managerOffice
            );
                
            //Adds the manager to the team array
            teamMember.push(manager);

            //Initiates the prompt to ask for more team members
            getUserInput();
            
        });

}
// this function create a list to add teammembers
function engineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the Engineers name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the Engineers id?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the Engineers email?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the Engineers github username?"
            }

        ])
        .then(function(response) {
            let engineerName = response.engineerName;
            let engineerId = response.engineerId;
            let engineerEmail = response.engineerEmail;
            let engineerGithub = response.engineerGithub;

            let engineer = new Engineer (
               engineerName,
               engineerId,
               engineerEmail,
               engineerGithub
            );
    
            //Adds the engineer to the team array
            teamMember.push(engineer);

            //Initiates the prompt to ask for more team members
            getUserInput();
            
        });

}

// a function that create an intern
function intern() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the Interns name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is the Interns id?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the Interns email?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the Intern's school name?"
            }

        ])
        .then(function(response) {
    let internName = response.internName;
    let internId = response.internId;
    let internEmail = response.internEmail;
    let internSchool = response.internGithub;

    let intern = new Intern (
       internName,
       internId,
       internEmail,
       internSchool
    );

    //Adds the intern to the team array
    teamMember.push(intern);

    //Initiates the prompt to ask for more team members
    getUserInput();
    
})

}

function createTeam() {
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMember), "utf-8")
}
getUserInput();


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
