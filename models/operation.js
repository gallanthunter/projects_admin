var mongoose = require('mongoose');
var project = require('project');
require('operator');
require('region')
require('sgement-market');
require('scenario');
require('projectOperator');
require('projectRegion');
require('projectScenario');
require('projectSgementMarket');


Project.create(doc, function (err, project) {
    if (err) return handleError(err);
});

// 项目
function createProject(p) {
    return project.create(p).exec()
};

// function getComments (postId) {
//     return Comment
//         .find({ postId: postId })
//         .populate({ path: 'author', model: 'User' })
//         .sort({ _id: 1 })
//         .addCreatedAt()
//         .contentToHtml()
//         .exec()
// };

// 运营商
//
// 区域
//
// 分市场
//
// 场景
