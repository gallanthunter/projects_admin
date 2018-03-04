var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var projectOperatorSchema = new Schema({
    projectId: {type: Schema.Types.ObjectId, ref: 'Project'},
    operatorId: {type: Schema.Types.ObjectId, ref: 'Operator'}
});
projectOperatorSchema.index({projectId: 1});

module.exports = mongoose.model('ProjectOperator', projectOperatorSchema);