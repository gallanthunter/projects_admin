var express = require('express');
var router = express.Router();
var Project = require('../models/project');

// create project
router.post('/projects', function (req, res) {
    Project.create(req.body, function (err, project) {
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

router.get('/projects', function (req, res) {
    Project.find({})
        .sort({update_at: -1})
        .then(function (projects) {
            res.json(projects)
        })
        .catch(function (err) {
            res.json(err)
        })
});

router.get('/projects/:operator', function (req, res) {
    Project.findByOperator(res.params.operator)
        .then(function (projects) {
            res.json(projects);
        })
        .catch(function (err) {
            res.json(err)
        })
});

router.get('/projects/:region', function (req, res) {
    Project.findByRegion(res.params.region)
        .then(function (projects) {
            res.json(projects);
        })
        .catch(function (err) {
            res.json(err)
        })
});

router.get('/projects/:marketSeg', function (req, res) {
    Project.findByMarketSeg(res.params.marketSegment)
        .then(function (projects) {
            res.json(projects);
        })
        .catch(function (err) {
            res.json(err)
        })
});

router.get('/projects/:scenario', function (req, res) {
    Project.findByScenario(res.params.scenario)
        .then(function (projects) {
            res.json(projects);
        })
        .catch(function (err) {
            res.json(err)
        })
});

router.get('/projects/:status', function (req, res) {
    Project.findByStatus(res.params.status)
        .then(function (projects) {
            res.json(projects);
        })
        .catch(function (err) {
            res.json(err)
        })
});

router.put('/projects/:id', function (req, res) {
    Project.findOneAndUpdate({_id: req.params._id}
        , {
            $set: {
                name: req.body.name,
                region: req.body.region,
                operator: req.body.operator,
                marketSegment: req.body.marketSegment,
                scenario: req.body.scenario,
                status: req.body.status,
                applicationPartner: req.body.applicationPartner,
                devicePartner: req.body.devicePartner,
                owner: req.body.owner
            }
        }, {
            new: true
})
.
    then(function (projects) {
        res.json(projects);
    })
        .catch(function (err) {
            res.json(err);
        })
})


router.delete('/projects/:id', function (res, req) {
    Project.findOneAndRemove({
        _id: req.params._id
    })
        .then(function (project) {
            res.json('${project.title}删除成功')
        })
        .catch(function (err) {
            res.json(err)
        })
})

module.exports = router;