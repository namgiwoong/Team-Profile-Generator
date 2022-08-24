const Employee = require("./Employee");

//In addition to Employee's properties and methods, Intern will also have school, getSchool(), getRole()
class Intern extends Employee {
  constructor(name, id, email, school) {
    //grabbing Employee properties and methods
    super(name, id, email);
    //school
    this.school = school;
  }
  //getSchool()
  getSchool() {
    return this.school;
  }
  //getRole()—overridden to return 'Intern'
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
