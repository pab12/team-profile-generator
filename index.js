const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
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

// const questions = () => {
//   return inquirer
//   .prompt([{
//     type: 'input',
//     name: 'name',
//     message: 'what is the employee name?'
//   },
//   {
//     type: 'text',
//     name: 'employeeID',
//     message: "what is the employee ID"
//   },
//   {
//     type: 'text',
//     name: 'email',
//     message: 'What is their email address?'
//   },
//   ])
//   .then((answers) => { manager();
//     const {name,employeeID,email} = answers;
//     // console.log('this',answers);
//     // console.log(name);
//     // console.log('class',Employee);
//     let newUser = new Employee(name,employeeID,email);
//     console.log(newUser);
//   })








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
        this.choices =choices;
        // console.log('this is',choices);
        // console.log('that', choice.choices);
        switch (`${choices}`) {
          case 'Engineer':
            console.log('Engineerrr');
            engineer();
            break;
          case 'Intern':
            console.log('Intern');
            intern();
            break;
          case 'Done':
            console.log('Done');
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
        data.name,
        data.id,
        data.email,
        data.officeNumber
      )
      console.log(manager);
       console.log(`Manager's name: ${manager.getName()}`);
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
      data.name,
      data.id,
      data.email,
      data.github
    )
    console.log(engineer);
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
      data.name,
      data.id,
      data.email,
      data.school
    )
    console.log(intern);
    choices();
  })
};

function done(){
  // generate the HTML
  console.log("done");
};
  manager();
}
startProfile();

// console.log(Manager's name: ${manager.getName()});