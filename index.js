const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/htmlTemp");
const validator = require("email-validator");

const writeFileAsync = util.promisify(fs.writeFile);

let teamArray = [];
let teamString = ``;

console.clear();

async function main() {
  try {
    await prompt();

    for (let i = 0; i < teamArray.length; i++) {
      teamString = teamString + html.generateCard(teamArray[i]);
    }

    let finalHtml = html.generateHTML(teamString);

    console.clear();

    writeFileAsync("./dist/index.html", finalHtml);

    console.clear();
  } catch (err) {
    return console.log(err);
  }
}

async function prompt() {
  let responseDone = "";

  do {
    try {
      let response = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the employee's name?: ",
          validate: function validateName(name) {
            return name !== "";
          },
        },
        {
          type: "input",
          name: "id",
          message: "Enter the employee's ID: ",
          validate: function validateName(name) {
            return name !== "";
          },
        },
        {
          type: "input",
          name: "email",
          message: "Enter the employee's email address: ",

          validate: function validateEmail(name) {
            return validator.validate(name);
          },
        },
        {
          type: "list",
          name: "role",
          message: "What is the employee's role:",
          choices: ["Engineer", "Intern", "Manager"],
        },
      ]);

      let response2 = "";

      if (response.role === "Engineer") {
        response2 = await inquirer.prompt([
          {
            type: "input",
            name: "x",
            message: "What is the employee's github username?:",
            validate: function validateName(name) {
              return name !== "";
            },
          },
        ]);

        const engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response2.x
        );
        teamArray.push(engineer);
      } else if (response.role === "Intern") {
        response2 = await inquirer.prompt([
          {
            type: "input",
            name: "x",
            message: "What school is the employee attending?:",
            validate: function validateName(name) {
              return name !== "";
            },
          },
        ]);

        const intern = new Intern(
          response.name,
          response.id,
          response.email,
          response2.x
        );
        teamArray.push(intern);
      } else if (response.role === "Manager") {
        response2 = await inquirer.prompt([
          {
            type: "input",
            name: "x",
            message: "What is the employee's office number?:",
            validate: function validateName(name) {
              return name !== "";
            },
          },
        ]);

        const manager = new Manager(
          response.name,
          response.id,
          response.email,
          response2.x
        );
        teamArray.push(manager);
      }
    } catch (err) {
      return console.log(err);
    }

    responseDone = await inquirer.prompt([
      {
        type: "list",
        name: "finish",
        message: "Do you want to continue?: ",
        choices: ["Yes", "No"],
      },
    ]);
  } while (responseDone.finish === "Yes");
}

main();
