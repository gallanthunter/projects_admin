var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var projectScenarioSchema = new Schema({
    projectId: {type: Schema.Types.ObjectId, ref: 'Project'},
    operatorId: {type: Schema.Types.ObjectId, ref: 'Scenario'}
});
projectScenarioSchema.index({projectId: 1});

module.exports = mongoose.model('ProjectScenario', projectScenarioSchema);