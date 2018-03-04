var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var projectSegmentMarketSchema = new Schema({
    projectId: {type: Schema.Types.ObjectId, ref: 'Project'},
    operatorId: {type: Schema.Types.ObjectId, ref: 'SegmentMarket'}
});
projectSegmentMarketSchema.index({projectId: 1});

module.exports = mongoose.model('ProjectSegmentMarket', projectSegmentMarketSchema);