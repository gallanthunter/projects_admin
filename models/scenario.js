var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var scenarioSchema = Schema({
    name: {type: String, required: true}
});
scenarioSchema.index({name: 1});

module.exports = mongoose.model('Scenario', scenarioSchema);