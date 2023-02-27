const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

console.log("Please build your team.");

const employees = [];

inquirer
  .prompt([
    // Start application by prompting manager details
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team manager's Office Number?",
    },
  ])
  .then((answer) => {
    // Create an object
    const manager = new Manager(
      answer.name,
      answer.id,
      answer.email,
      answer.officeNumber
    );
    // Add a manager to the employee array
    employees.push(manager);

    // Call function to present menu with options to add team members
    promptOption();
  });

const promptOption = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamList",
        message: "Which type of team member would you like to add?",
        options: ["Engineer", "Intern", "Finish building the team"],
      },
    ])
    .then((answer) => {
      // New prompting based on list option
      if (answers.teamList === "Engineer") {
        // User choose to add an engineer
        promptEngineer();
      } else if (answer.teamList === "Intern") {
        // User choose to add an intern
        promptIntern();
      } else {
        // User do not want to add any more members into team. Exit the application and create the HTML.
        buildPage();
      }
    });
};

const promptEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((answer) => {
      // Add an engineer to the employee array
      const engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
      );
      employees.push(engineer);
    });

  // Call function to present menu with options to add team members
  promptOption();
};

const promptIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
      },
    ])
    .then((answer) => {
      // Add an intern to the employee array
      const intern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        answer.school
      );
      employees.push(intern);
    });

  // Call function to present menu with options to add team members
  promptOption();
};

const buildPage = () => {
  // Create the HTML page with added employees
  fs.writeFile(outputPath, render(employees), (err) =>
    err ? console.error(err) : console.log("The page was successfully created!")
  );
};
