var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var projectRegionSchema = new Schema({
    projectId: {type: Schema.Types.ObjectId, ref: 'Project'},
    operatorId: {type: Schema.Types.ObjectId, ref: 'Region'}
});
projectRegionSchema.index({projectId: 1});

module.exports = mongoose.model('ProjectRegion', projectRegionSchema);