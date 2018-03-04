var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var segmentMarketSchema = new Schema({
    id: ObjectId,
    name: {type: String, required: true}
});
segmentMarketSchema.index({name: 1});

module.exports = mongoose.model('SegmentMarket', segmentMarketSchema);
