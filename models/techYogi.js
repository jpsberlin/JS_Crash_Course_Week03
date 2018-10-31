

module.exports = class TechYogi {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
  
    attend(yogasession) {
        yogasession.attendees.push(this)
    }
  }
 
  