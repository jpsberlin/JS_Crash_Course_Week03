const Chalk = require('chalk')

module.exports = class Yogasession {
    constructor(name, time, location, asana, pranayama, meditation) {
        this.name = name
        this.time = time
        this.location = location
        this.asana = asana
        this.pranayama = pranayama
        this.meditation = meditation
        this.attendees = []
        
        
    }


report() {
    console.log(Chalk.blue.bgRed(this.name), 'yogasession is held at', this.location, 'and number of attendees are', this.attendees.length)
}
}