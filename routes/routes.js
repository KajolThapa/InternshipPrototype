var express = require('express'),
    router = express.Router();

// Static departments for now
var departmentList = require('../departmentList.json');

var surveyQuestions = require('../surveyData.json');
router.get('/', function(req, res){
    // console.log(departmentList.departments);
    return res.render('forms/launch', {
        title : "launch",
        list : departmentList
    });
});

router.post('/getsurveylist', function(req, res){
    var deptID = req.body.deptID,
        email = req.body.email,
        deptName = req.body.deptName;
    console.log(req.body);

    // Lives inside dbCtrl.js
    // exports.getSurveys = function(deptID){
    //     return 'SELECT * FROM SURVEYS_BANK WHERE department-id = deptID';
    // }
    
    // res.json(dbCtrl.getSurveys(deptID));

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
    console.log(req.body);
    res.send(
        JSON.stringify(req.body, null, 4)
    );
})


//Connecting to Database
var oracledb = require('oracledb');  
  router.get('/dbresult', function(req, res) {


 
oracledb.getConnection({  
     user: "system",  
     password: "Eighten9121",  
     connectString: "localhost/xe"  
}, function(err, connection) {  
     if (err) {  
          console.error(err.message);  
          return;  
     }  
     connection.execute( "SELECT * from AIRLINE",  
       
     function(err, result) {  
          if (err) {  
               console.error(err.message);  
               doRelease(connection);  
               return;  
          }  
          console.log(result.metaData);  
          console.log(result.rows); 
          res.send(JSON.stringify (result)); 
          doRelease(connection);  
     });  
});  
  
function doRelease(connection) {  
     connection.release(  
          function(err) {  
               if (err) {console.error(err.message);}  
          }  
     );  
}  

 });



module.exports = router;