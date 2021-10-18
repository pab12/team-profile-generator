const inquirer = require('inquirer');
const Employee = require('./Employee');
class Intern extends Employee {
  constructor(role, name, id, email, school) {
    super(role, name, id, email);
    this.school = school;
  }
  getSchool(){
    return this.school;
  }
}
console.log(Intern);

module.exports = Intern;