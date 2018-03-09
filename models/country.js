var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var countrySchema = new Schema({
    name: {type: String, required: true}
});

regionSchema.index({name: 1});
module.exports = mongoose.model('Country', countrySchema);
