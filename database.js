const fs = require('fs')

module.exports = {
        save: function(data) {
            fs.writeFileSync('data.json', JSON.stingify(data))
        },
        load: function() {
            return JSON.parse(fs.readFileSync('data.json'))
        }
}