const Employee = require("./Employee");

//In addition to Employee properties and methods, Engineer will also have github, getGithub(),getRole()
class Engineer extends Employee {
  constructor(name, id, email, github) {
    //grabbing Employee properties and methods
    super(name, id, email);
    //github—GitHub username
    this.github = github;
  }
  //getGithub()
  getGithub() {
    return this.github;
  }
  //getRole()—overridden to return 'Engineer'
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
