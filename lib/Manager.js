const Employee = require("./Employee");

//In addition to Employee's properties and methods, Manager will also have officeNumber and getRole()
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //grabbing Employee properties and methods
    super(name, id, email);
    //officeNumber
    this.officeNumber = officeNumber;
  }
  //getRole()—overridden to return 'Manager'
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
