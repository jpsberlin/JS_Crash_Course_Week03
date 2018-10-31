const TechYogi = require('./models/techYogi')
const Asana = require('./models/asana')
const Yogasession = require('./models/yogasession')
const Pranayama = require('./models/pranayama')
const Meditation = require('./models/meditation')


const Chalk = require('chalk')
const Database = require('./database')

const main = asyn () => {
 
const mala = new TechYogi('Mala', 28)
const anna = new TechYogi('Anna', 26)
const maria = new TechYogi('Maria', 27)
const bea = new TechYogi('Bea', 23)
const chris = new TechYogi('Chris', 32)
const dori = new TechYogi('Dori', 22)



const catcow = new Asana('Catcow', 5, true)
const bow = new Asana('Bow', 2, true)
const boat = new Asana('Boat', 1, true)

const satanama = new Meditation('Satanama', 7, true)
const aadsach = new Meditation('Aadsach', 5, true)


//const loadedFile = Database.load()
//Database.save(mala)


console.log(anna, mala, maria)

const yogasession1 = new Yogasession ('Yoga with WomenTechmakers', '60', 'Berlin')
const yogasession2 = new Yogasession ('Yoga with EuroStaff', '90', 'Berlin')

console.log(yogasession1)

mala.attend(yogasession1)
anna.attend(yogasession1)
maria.attend(yogasession1)

bea.attend(yogasession2)
chris.attend(yogasession2)
dori.attend(yogasession2)


yogasession1.report()
yogasession2. report()

console.log(yogasession1.attendees)
console.log(Chalk.blue(anna.name))
console.log(Chalk.red(mala.name))
console.log(Chalk.green(maria.name))

}

(async () => {
    try {
        await main()
    }   catch (err) {
        console.log(err)
    }

})()
