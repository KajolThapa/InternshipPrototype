var express = require('express'),
    router = express.Router(),
    async = require('async');

// Static departments for now
var departmentList = require('../departmentList.json');

var surveyQuestions = require('../surveyData.json');

// Integration of database
// Importing queries

var db = require('../models/survey_queries');

var dbTesting = require('../models/finalSurveyQueries');


router.get('/', function(req, res){
    // let departmentList;
    db.getDeptList(function(deptList){
        return res.render('forms/launch', {
            title : "launch",
            list : {"departments":deptList}
        });
    });
});


router.post('/getsurveylist', function(req, res){
    var deptID = req.body.deptID,
        email = req.body.email,
        deptName = req.body.deptName;

    db.getSurveysById(deptID, function(data){
        console.log(data);
        res.json(data);
    });
})

router.post('/survey', function(req, res){
// router.get('/survey/:email/:deptid/:surveyId', function(req, res){
    // Maybe we have to add pooling?
    // console.log(req.body.startSurvey);
    let surveyId = req.body.startSurvey;
    // https://github.com/oracle/node-oracledb/blob/cd1eb6eb406296259ca23fa9e7ed148c2baab090/examples/webapp.js
    dbTesting.getQuestionsBySurveyId(req.body.startSurvey, function(data){
        // console.log(data);
        res.render('forms/survey', {
            email: req.body.email,
            deptId: req.body.deptID,
            surveyId: surveyId,
            surveyData: data
        });
    })
});

router.post('/submit', function(req, res){
    dbTesting.storeSurveyAnswers(req.body, function(data){
        res.send(data);
    })

})

// [ '0',
// '1',
// '3',
// '4',
// '10',
// '12',
// '15',
// '16',
// '19',
// 'email',
// 'deptId',
// 'data.QUESTION_ID' ]
// [ 'Neither require nor recommend',
// 'Units Recommended',
// 'No',
// 'Selective admissions to some programs',
// 'No answer',
// 'No answer',
// 'Printing',
// 'Yes',
// 'Part-Time',
// 'undefined',
// '',
// [ 'asd', 'eg', 'sdfsf', 'sdfsdf', 'qwqw', 'ppp' ] ]


// db.getQuestionsBySurveyId(1, (data)=>{
//     console.log(data);
// })

// db.testingAns((data)=>{
//     console.log(data);
// })

module.exports = router;