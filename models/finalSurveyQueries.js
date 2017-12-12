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

exports.getQuestionsBySurveyId = function(surveyId, queryReturn){
    async.waterfall([
        getQuestionList(surveyId),
        cleanQuestionIds,
        buildQuestionMappingAndQuerySet
        ,getQuestionData
        ,getAnswerSet
        ,rebuildMapForRender
    ], queryReturn)
    // ], function(err, test){
    //     console.log(test);
    // });
}


function getQuestionList(surveyId, cb){
    return function(cb){
        let sql = "select survey_question from survey where survey_id = " + surveyId;
        openConnection(sql, [], (data)=>{
            cb(null, data);
        })
    }
}

function cleanQuestionIds(queryReturn, callback){
    // return function(callback){
    let parsedQuestionsList = queryReturn[0].SURVEY_QUESTION.split(',');
    // console.log(parsedQuestionsList);
    callback(null, parsedQuestionsList);    

}

function buildQuestionMappingAndQuerySet(queryReturn, cb){
        let questionListMapping = [];
        let parentList = [], childList = [];
        let questionQueryList;

        let sql = "select * from questions_bank where question_id = :id";
        
        queryReturn.forEach((data, index)=>{
            if(data.includes('_')){
                let temp = data.split('_');
                // temp[0] is the parent of the matrix
                questionListMapping.push(returnMappingObject(temp[0], temp[1]));
                childList.push(temp[1]);
                parentList.push(temp[0]);
            } else {
                questionListMapping.push(returnMappingObject(data, null));
                parentList.push(data);
            }
        });
        // console.log(questionListMapping);
        questionQueryList = parentList.concat(childList).unique();
        // after we have the list of question ids to send for query, we loop
        // to concatinate any additional OR clauses when we pass the binding
        for(i = 0; i <questionQueryList.length-1; i++){
            sql += " OR question_id = :id";
        }
        // console.log(sql);
        // console.log(questionQueryList);
        cb(null, questionListMapping, questionQueryList, sql);
}

function returnMappingObject(parent, child){
    return {"QUESTION_ID": parent, "SUB_QUESTION_ID": child};
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
// custom method to cut duplicates out of query
Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
};

// getQuestionData(questionMap, queryList, sql, callback)
function getQuestionData(questionListMapping, questionQueryList, sql, callback){
    openConnection(sql, questionQueryList, (questionData)=>{
        callback(null, questionListMapping, questionData);
    });
}

function rebuildMapForRender(questionListMapping, questionData, answerSet, callback){
    // console.log(questionData);
    // // console.log(questionListMapping);
    // let updatedQuestionList = []; // This holds our original question map along with the 
    //                             // question data returned by the query
    // let questionMerge = questionListMapping.map((question)=>{
    //     let checkQuestionId = (query)=> query.QUESTION_ID == question.QUESTION_ID
    //     let checkSubQuestionId = (query)=> query.QUESTION_ID == question.SUB_QUESTION_ID
    //     let ifSameId = questionData.find(checkQuestionId, checkSubQuestionId);
    //     updatedQuestionList = Object.assign({}, question, ifSameId);
    // });

    // // console.log(updatedQuestionList);
    // callback(updatedQuestionList);


//     [ { ANSWER_ID: 2, ANSWER_SET: 'Units Required>Units Recommended' },
//     { ANSWER_ID: 4,
//       ANSWER_SET: 'Selective admission for out-of-state students>Selective admissi
//   ons to some programs' } ]
//   [ { QUESTION_ID: 1,
//       QUESTION_TYPE: 1,
//       QUESTION_STRING: 'Does your institution require or recommend a general colle
//   ge-preparatory program for degree-seeking students?',
//       ANSWER_ID: 2 },
  

    let mergedAnswers = questionData.map((questionReference)=>{
        let sameAnswerId = (queryResult)=> queryResult.ANSWER_ID == questionReference.ANSWER_ID;
        let hasAnsID = answerSet.find(sameAnswerId);
        return Object.assign({}, questionReference, hasAnsID);
    });
    console.log(mergedAnswers);

    let finalSurveyQuestionSet = questionListMapping.map((questionRenderMap)=>{
        let checkQuestionId = (questionSet) => questionSet.QUESTION_ID == questionRenderMap.QUESTION_ID;
        let checkSubQuestionId = (questionSet) => questionSet.QUESTION_ID == questionRenderMap.SUB_QUESTION_ID;
        let hasQuestionId = mergedAnswers.find(checkQuestionId, checkSubQuestionId);
        return Object.assign({}, questionRenderMap, hasQuestionId);
    })
    console.log(finalSurveyQuestionSet);
}

function getAnswerSet(questionListMapping, questionData, callback){
    let sql = "select * from answers_bank where answer_id = :id";
    let answerIdList = [];
    questionData.forEach((data=>{
        answerIdList.push(data.ANSWER_ID);
    }));
    answerIdList = answerIdList.unique();
    for(i = 0; i <answerIdList.length-1; i++){
        sql += " OR answer_id = :id";
    }
    openConnection(sql, answerIdList, (answerSet)=>{
        callback(null, questionListMapping, questionData, answerSet);
    })
}