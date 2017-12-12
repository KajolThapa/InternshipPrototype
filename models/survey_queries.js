let oracledb = require('oracledb');
let async = require('async');

let dbConfig = require('./config.js').oracledb;

function openConnection(query, binding, data){
    // Execute the query, get response
    // return new Promise(async function(resolve, reject) {
    return new Promise(async function(reject) {
        let connection;
        try {
            connection = await oracledb.getConnection(dbConfig);
            let result = await connection.execute(
                // Execute query, null binding, return as JSON
                query, binding, { outFormat: oracledb.OBJECT }
            );
            data(result.rows);
        } catch (err){
            console.log('Error occurred', err);
            reject(err);  
        } 
        finally {
            if(connection){
                try {
                    await connection.close();
                    console.log("connection closed");
                } catch (err) {
                    console.log('Error closing connection', err);
                }
            }
        }
    });
}

exports.getDeptList = function(queryReturn){
    let sql = "SELECT * FROM DEPARTMENTS";
    openConnection(sql, [], function(data){
        queryReturn(data);
    })
}

exports.getSurveysById = function(deptId, queryReturn){
    console.log('before waterfall:: '+ deptId);
    async.waterfall([
        getSurveyId(deptId),
        getSurveyListing
    ], queryReturn) 
}

function getSurveyId(deptId){
    return function(cb){
        let sql = "select survey_id from survey_connection where dept_id = "+ deptId;
        console.log(sql);
        openConnection(sql, [], function(data){
            console.log(data);
            cb(null, data);
        });
    }
}

function getSurveyListing(data, callback){
    let list = [];
    let sql = "select * from survey where survey_id = :id";

    for(i = 0; i < data.length; i++){
        list.push(data[i].SURVEY_ID);
        if(i<data.length-1)
            sql += ' OR survey_id = :id';
    }
    console.log(list);
    console.log(sql);

    openConnection(sql, list, function(data){
        callback(data);
    })
}

exports.getSurveyQuestionList = function(/*department, */survey, queryReturn){

    let sql = "SELECT survey_questions FROM DEPARTMENT_TABLE WHERE survey_id = " + 56 /*survey*/;
    // There should be double validation to render the survey. For time, it's left out. Needs to recieve a dept_id from post
    // let sql = "SELECT survey_questions FROM DEPARTMENT_TABLE WHERE dept_id = " + department + " AND survey_id = " + survey;
    openConnection(sql, [], function(data){
        queryReturn(data);
    });
}

// CLEARED //
exports.getQuestionData = function(question, queryReturn){
    let sql = "SELECT * FROM QUESTION_TABLE WHERE question_id = " + question;
    console.log(sql);
    openConnection(sql, [], function(data){
        // console.log("Inside query: " + data);
        queryReturn(data);
    });
}

function storeData(question_id, answer){
    // dept_id_selected, survey_id_selected, question_selected, 
    let sql = "INSERT INTO ANSWER_STORED_TABLE (question_id_selected, answer_selected) " +
                'VALUES (\''+question_id+'\',\''+answer+'\')';

    openConnection(sql, [], function(result){
        // forEach() -> append to json object and pass to render
        console.log(result);
    });
}
// Get the response of the survey. For each key/answer pair of the given answer, execute a query to insert
exports.storeSurveyResponse = function(surveyResponse){
    Object.keys(surveyResponse).forEach(function(question_id){
        // console.log(question_id + ' - questionId');
        // console.log(obj[question_id] + ' - answer')
        if(surveyResponse[question_id] !== "undefined"){
            storeData(question_id, surveyResponse[question_id]);
        }
    });
}



// get survey data


exports.getQuestionsBySurveyId = function(surveyId, queryReturn){
    async.waterfall([
        getQuestionList(surveyId),
        parseResults
    ], queryReturn)
}

function getQuestionList(surveyId){
    return function(cb){
        let sql = "select survey_question from survey where survey_id = " + surveyId;
        openConnection(sql, [], (data)=>{
            cb(null, data);
        })
    }
}

function parseResults(queryReturn, cb){
    console.log(queryReturn);
    let parentList = [],
        childList = [];
    let parsedQuestionsList = queryReturn[0].SURVEY_QUESTION.split(',');
    console.log(parsedQuestionsList);
    parsedQuestionsList.forEach((data, index)=>{
        console.log(data);
        if(data.includes("_")){
            let child = data.split("_");
            childList.push(child[1]);
            parentList.push(child[0]);
        } else {
            childList.push(0);
            parentList.push(data);
        }
    });
    cb([parentList, childList]);
}

function returnMappingObject(parent, child){
    return {"questionId": parent, "subQuestionId": child};
}

function buildQuestionMapping(queryReturn, cb){
    let questionListMapping = [];
    queryReturn.forEach((data, index)=>{
        if(data.includes('_')){
            let temp = data.split('_');
            // temp[0] is the parent of the matrix
            questionListMapping.push(returnMappingObject(temp[0], temp[1]));
        } else {
            questionListMapping.push(returnMappingObject(data, null));
        }
    });
    cb(questionListMapping);
}

// function testingAns(sample){
//     let sql = "select * from answers_bank where answer_id = "+sample;
//     openConnection(sql, [], (data)=>{
//         // let sample = data[0].ANSWER_SET.split('>');
//         // sample.forEach((data=>{
//             console.log(data);
//         // }))
//     })
// }

// testingAns(3);
// testingAns()


