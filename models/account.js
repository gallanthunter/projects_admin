var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var accountSchema = new Schema({
    userId: {type: String},
    name: {type: String},
    email: {type: String},
    group: {type: String, enum: ['admin']}
});
accountSchema.index({projectId: 1});

module.exports = mongoose.model('ProjectOperator', projectOperatorSchema);