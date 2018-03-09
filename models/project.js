var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    name: {type: String, required: [true, '']},
    region: {type: String, required: [true, '区域是必选的']}, /* 项目所属区域/系统部 */
    country: {type: String, required: [true, '']},
    operator: {type: String, required: [true, '运营商是必选的']}, /* 项目所属运营商 */
    marketSegment: {type: String, required: [true, '细分市场是必选的']}, /* 项目细分市场 */
    scenario: {type: String, required: [true, '场景是必选的']}, /* 应用场景 */
    status: {type: String, enum: ['正常', '预警', '延迟', '暂停']},
    applicationPartner: {type: String},
    devicePartner: {type: String},
    owner: {type: String, default: ''}          /* 项目owner */
});
projectSchema.index({region: 1, operator: 1, segmentMarket: 1, scenario: 1, status: 1});

module.exports = mongoose.model("Project", projectSchema);