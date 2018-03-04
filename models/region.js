var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var regionSchema = new Schema({
    id: ObjectId,
    name: {type: String, required: true,}
});

regionSchema.index({name: 1});
module.exports = mongoose.model('Region', regionSchema);
