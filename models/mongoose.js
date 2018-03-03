var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var project = new Schema({
    id:{type:String, index:true},
    name: { type: String },
    region:String,      /* 项目所属区域/系统部 */
    operator:String,    /* 项目所属运营商 */
    category:String,    /* 项目细分市场 */
    scenario:String,    /* 应用场景 */

    owner:String        /* 项目owner */
});

var region = new Schema({
    id:{type:String, index:true},
    name:String
});

var scenario = new Schema({
    id:{type:String, index:true}
})

module.exports = mongoose.model("project",project);
module.exports = mongoose.model("region",region);

/* 连接mongodb，对应的数据库为project */
/*
mongoose.connect('mongodb://localhost/project');
 */

/*
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});
*/
