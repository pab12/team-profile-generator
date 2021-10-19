const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const team = [];
const pageTemplate = require('./pageTemplate');
// employees

const question1 = {
  type: "input",
  name: "name",
  message: "What is the employee name ?",
};
const question2 = {
  type: "input",
  name: "id",
  message: "What is your employee ID ?",
};
const question3 = {
  type: "input",
  name: "email",
  message: "What is your employee email ?",
};


function startProfile() {

  function choices() {
    inquirer
      .prompt(
        {
          type: "list",
          name: "choices",
          message: "add Engineer, Intern, or Done?",
          choices: ["Engineer", "Intern", "Done"]
        }
      ).then((choice) => {
        const { choices } = choice;
        this.choices = choices;
       
        switch (`${choices}`) {
          case 'Engineer':
            engineer();
            break;
          case 'Intern':
            intern();
            break;
          case 'Done':
            done();
            break;
        }
      })
  }

  function manager() {
    inquirer.prompt([question1, question2, question3, {
      type: 'input',
      name: 'officeNumber',
      message: 'What is their office number'
    }]).then((data) => {
      const manager = new Manager(
        "Manager",
        data.name,
        data.id,
        data.email,
        data.officeNumber,
      )
      let allEmployees = team.push(manager);
      
      choices();
      //engineer();
    })
  };

  // // engineer
  function engineer() {
    inquirer.prompt([question1, question2, question3, {
      type: 'input',
      name: 'github',
      message: 'What is their github Username?'
    }]).then((data) => {
      const engineer = new Engineer(
        "Engineer",
        data.name,
        data.id,
        data.email,
        data.github
      )
      // console.log(engineer);
      let allEmployees = team.push(engineer);
     
      choices();
    })
  };

  // // intern 
  function intern() {
    inquirer.prompt([question1, question2, question3, {
      type: 'input',
      name: 'school',
      message: 'What school do they go to?'
    }]).then((data) => {
      const intern = new Intern(
        "Intern",
        data.name,
        data.id,
        data.email,
        data.school
      )
      let allEmployees = team.push(intern);
      console.log("Team info", team);
      choices();
    })
  };

  function done() {
    // generate the HTML
    console.log("Done, you can close application now");
    writeFile();
  };
  console.log("Manager info first");
  manager();
}


const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", pageTemplate(team), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created",
      });
    });
  });
};


module.exports = { writeFile };

startProfile();

// console.log(Manager's name: ${manager.getName()});