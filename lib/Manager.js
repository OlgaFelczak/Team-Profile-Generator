// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    if (!officeNumber) {
      throw new Error("You are missing the Office Number.");
    }

    this.officeNumber = officeNumber;

    // https://www.w3schools.com/jsref/jsref_class_super.asp
    super(name, id, email);
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
