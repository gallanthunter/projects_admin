var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userId: {type: String},
    name: {type: String},
    email: {type: String},
    group: {type: String, enum: ['admin']}
});
accountSchema.index({userId: 1});

module.exports = mongoose.model('User', userSchema);