// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    if (!name) {
      throw new Error("You are missing the employee name.");
    }
    if (!id) {
      throw new Error("You are missing the employee ID.");
    }
    if (!email) {
      throw new Error("You are missing the email address.");
    }
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
