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
    console.log(req.body);
    // var email = req.body.email,
    //     deptId = req.body.deptId;
    res.send("yay!");
    // console.log('getting email :: '+ email);
    // console.log('getting dept id :: '+ deptId);
})

module.exports = router;