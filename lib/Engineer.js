const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // https://www.w3schools.com/jsref/jsref_class_super.asp
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
