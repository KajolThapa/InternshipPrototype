var express = require('express'),
    router = express.Router(),
    async = require('async');

// Static departments for now
var departmentList = require('../departmentList.json');

var surveyQuestions = require('../surveyData.json');

// Integration of database
// Importing queries

var db = require('../models/survey_queries');


router.get('/', function(req, res){
    let departmentList;
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

    db.getSurveys(deptID, function(data){
        res.send(data);
    });
})

router.post('/survey', function(req, res){
// router.get('/survey/:email/:deptid/:surveyId', function(req, res){
    // Maybe we have to add pooling?
    // https://github.com/oracle/node-oracledb/blob/cd1eb6eb406296259ca23fa9e7ed148c2baab090/examples/webapp.js
    db.getSurveyQuestionList(req.body.startSurvey, function(data){
        let questionIdList = data[0].SURVEY_QUESTIONS.split(','); // Yeah...
        // THE STORAGE OF QUESTIONS NEEDS TO BE FIXED. OVERRIDING THE QUERY RESULTS
        questionIdList = [15, 17, 18];
        let questionBuild = [];
        // Array.prototype.forEach() does not apply to callbacks. 
        // Can't be used to append data to the array
        async.each(
            questionIdList, // array of data
            (item, callback)=>{
                callback(
                    db.getQuestionData(item, function(data){
                        questionBuild.push(data[0]);
                        console.log(data[0]);
                    })
                )
            }, 
            function(err, result){
                if(err){
                    console.log(err);
                    return;
                }
                console.log("result:: " + questionBuild);
            }
            
        )   
    })
    // console.log("Post survey:: "+ JSON.stringify(req.body));
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