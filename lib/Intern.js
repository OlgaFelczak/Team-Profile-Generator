// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    if (!school) {
      throw new Error("You are missing the school.");
    }

    this.school = school;

    // https://www.w3schools.com/jsref/jsref_class_super.asp
    super(name, id, email);
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
