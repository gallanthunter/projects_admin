var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var operatorSchema = new Schema({
    name: {type: String, required: true}
});
operatorSchema.index({name: 1});

module.exports = mongoose.model('Operator', operatorSchema);