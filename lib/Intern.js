const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // https://www.w3schools.com/jsref/jsref_class_super.asp
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
