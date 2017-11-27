var express = require('express'),
    router = express.Router();

// Static departments for now
var departmentList = require('../departmentList.json');

var surveyQuestions = require('../surveyData.json');

// Integration of database
// Importing queries

var db = require('../models/survey_queries');


router.get('/', function(req, res){
    // console.log(departmentList.departments);
    db.test(function(data){
        res.send(data);
    });
    // return res.render('forms/launch', {
    //     title : "launch",
    //     list : departmentList
    // });
});

// router.get('/', function(req, res){
//     // console.log(departmentList.departments);
//    console.log(db.test());
// });

router.post('/getsurveylist', function(req, res){
    var deptID = req.body.deptID,
        email = req.body.email,
        deptName = req.body.deptName;
    // console.log(db.getSurveys(deptID));
    // console.log(db.test());
    console.log(db.getSurveys(deptID));
    // console.log('getting email :: '+ email);
    // console.log('getting dept id :: '+ deptId);
})

router.post('/survey', function(req, res){
// router.get('/survey/:email/:deptid/:surveyId', function(req, res){
    console.log(req.body);
    console.log('build survey');
    res.render('forms/survey', {
        email: req.body.email,
        deptId: req.body.deptID,
        surveyData: surveyQuestions
    });
});

router.post('/submit', function(req, res){
    var obj = req.body;
    // function storeSurveyResponse(){
        Object.keys(obj).forEach(function(question_id){
            console.log(question_id + ' - questionId');
            console.log(obj[question_id] + ' - answer')
    
        });
    // }
    // res.send(
    //     JSON.stringify(req.body, null, 4)
    // );
})


module.exports = router;