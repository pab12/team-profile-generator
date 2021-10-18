const inquirer = require('inquirer');
const Employee = require('./Employee');
class Manager extends Employee {
  constructor(role,name, id, email, officeNumber) {
    super(role,name, id, email);
    this.officeNumber = officeNumber;
  }
 getOfficeNumber(){
    return this.officeNumber;
  }
} 

module.exports = Manager;