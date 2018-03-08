var express = require('express');
var router = express.Router();
var projectModel = require('../models/project');

// create project
router.post('/project', function (req, res) {
    projectModel.create(req.body, (err, project) = > {
        if(err) {
            console.log(err);
            res.json(err)
        }
        else {
            console.log('save success');
    res.json(project);
}
})
});

router.get('/project', function (req, res) {
    projectModel.find({})
        .sort({update_at: -1})
        .then(projects = > {
        console.log(projects);
    console.log(Date.now() + '\tThis is get message!')
    res.json(projects)
})
.
    catch(err = > {
        console.log(err);
    res.json(err)
})
});

router.get('/project/:operator', function (req, res) {
    console.log("********")
});

router.get('/project/:region', function (req, res) {

});

router.get('/project/:sgmarket', function (req, res) {

});

router.get('/project/:scenario', function (req, res) {

});

// // 通过ObjectId查询单个电影
// router.get('/movie/:id', (req, res) => {
//     Movie.findById(req.params.id)
//     .then(movie => {
//     res.json(movie)
// })
// .catch(err => {
//     res.json(err)
// })
// })
// // 添加一部电影
// router.post('/movie', (req, res) => {
//     //使用Movie model上的create方法储存数据
//     Movie.create(req.body, (err, movie) => {
//     if (err) {
//         res.json(err)
//     } else {
//         res.json(movie)
// }
// })
// //使用实例的save方法存储数据
// // let movie = new Movie({
// //   title : req.body.title,
// //   year : req.body.year,
// //   poster : req.body.poster,
// //   introduction : req.body.introduction
// // })
// // movie.save( (err,movie) => {
// //   if (err) {
// //     res.json(err)
// //   } else {
// //     res.json(movie)
// //   }
// // })
// })
// //更新一部电影
// router.put('/movie/:id',(req,res) => {
//     Movie.findOneAndUpdate({ _id : req.params.id}
//     ,{ $set : { title: req.body.title,
//             rating : req.body.rating,
//             poster : req.body.poster,
//             introduction : req.body.introduction }
//     },{
//         new : true
//     })
//     .then(movie => res.json(movie))
// .catch(err => res.json(err))
// })
// //删除一部电影
// router.delete('/movie/:id',(req,res) => {
//     Movie.findOneAndRemove({
//     _id : req.params.id
// })
//     .then(movie => res.send(`${movie.title}删除成功`))
// .catch(err => res.json(err))
// })


module.exports = router;