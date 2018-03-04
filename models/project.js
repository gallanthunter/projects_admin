var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    id: ObjectId,
    name: {type: String, required: [true, '']},
    region: {type: Schema.Types.ObjectId, ref: 'Region', required: [true, '区域是必选的']}, /* 项目所属区域/系统部 */
    operator: {type: Schema.Types.ObjectId, ref: 'Operator', required: [true, '运营商是必选的']}, /* 项目所属运营商 */
    segmentMarket: {type: Schema.Types.ObjectId, ref: 'SegmentMarket', required: [true, '细分市场是必选的']}, /* 项目细分市场 */
    scenario: {type: Schema.Types.ObjectId, ref: 'Scenario', required: [true, '场景是必选的']}, /* 应用场景 */
    status: {type: String, enum: ['正常', '预警', '延迟', '暂停']},
    applicationPartner: {type: String},
    devicePartner: {type: String},
    owner: {type: String, default: ''}          /* 项目owner */
});
projectSchema.index({region: 1, operator: 1, segmentMarket: 1, scenario: 1, status: 1});

module.exports = mongoose.model("Project", projectSchema);