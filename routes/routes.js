var express = require('express'),
    router = express.Router();

// Static departments for now
var departmentList = require('../departmentList.json');

router.get('/', function(req, res){
    // console.log(departmentList.departments);
    return res.render('forms/launch', {
        title : "launch",
        list : departmentList
    });
});

router.post('/getsurvey', function(req, res){
    var deptID = req.body.deptID,
        email = req.body.email,
        deptName = req.body.deptName;
        console.log(req.body);
    if(deptID == 0){
        res.json([{
            "id":"id-821",
            "date":"April 2017",
            "desc":"sample",
            "survey": "Math-123"
        }, {
            "id":"id-418",
            "date":"Jane 2017",
            "desc":"new data",
            "survey": "Eng-231"
        }, {
            "id":"id-821",
            "date":"April 2017",
            "desc":"sample",
            "survey": "Math-123"
        }, {
            "id":"id-418",
            "date":"Jane 2017",
            "desc":"new data",
            "survey": "Eng-231"
        }, {
            "id":"id-821",
            "date":"April 2017",
            "desc":"sample",
            "survey": "Math-123"
        }, {
            "id":"id-418",
            "date":"Jane 2017",
            "desc":"new data",
            "survey": "Eng-231"
        }, {
            "id":"id-821",
            "date":"April 2017",
            "desc":"sample",
            "survey": "Math-123"
        }, {
            "id":"id-418",
            "date":"Jane 2017",
            "desc":"new data",
            "survey": "Eng-231"
        }]);
    }
    else if (deptID == 1){
        res.json([{
            "id":"id-121",
            "date":"Dec 2014",
            "desc":"Some survey data",
            "survey": "Phys-218"
        }, {
            "id":"id-345",
            "date":"Jan 2011",
            "desc":"chips",
            "survey": "The-782"
        }, {
            "id":"id-345",
            "date":"Jan 2011",
            "desc":"chips",
            "survey": "The-782"
        }, {
            "id":"id-121",
            "date":"Dec 2014",
            "desc":"Some survey data",
            "survey": "Phys-218"
        }, {
            "id":"id-121",
            "date":"Dec 2014",
            "desc":"Some survey data",
            "survey": "Phys-218"
        }, {
            "id":"id-345",
            "date":"Jan 2011",
            "desc":"chips",
            "survey": "The-782"
        }, {
            "id":"id-345",
            "date":"Jan 2011",
            "desc":"chips",
            "survey": "The-782"
        }, {
            "id":"id-121",
            "date":"Dec 2014",
            "desc":"Some survey data",
            "survey": "Phys-218"
        }]);
    }
    // console.log('getting email :: '+ email);
    // console.log('getting dept id :: '+ deptId);
})

module.exports = router;