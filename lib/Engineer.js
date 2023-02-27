// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    if (!github) {
      throw new Error("You are missing the GitHub username.");
    }

    this.github = github;

    // https://www.w3schools.com/jsref/jsref_class_super.asp
    super(name, id, email);
  }

  getGitHub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
