const inquirer = require('inquirer');
const Employee = require('./Employee');
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

}
console.log(Intern);

module.exports = Intern;