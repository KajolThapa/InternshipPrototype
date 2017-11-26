let oracledb = require('oracledb');

function openConnection(query, queryReturn){
    oracledb.getConnection({
        user: "system",
        password: "Eighten9121",
        connectString: "localhost/xe"
    }, function (err, connection) {
        if (err) {
            console.error(err.message);
            return;
        }
        // Execute the query, get response
        connection.execute(query, (err, result)=>{
            if(err){
                console.error(err.message);
                doRelease(connection);
                return;
            }
            // return the results of query
            console.log(result.metaData);
            console.log(result.rows);
            // Callback should return data when query is complete
            queryReturn(JSON.stringify(result));
            doRelease(connection);
        });
        // Release connection to database
        function doRelease(connection) {
            connection.release(
                function (err) {
                    if (err) { console.error(err.message); }
                }
            );
        }
    })
}


exports.getSurveys = function(department){
    let sql = "SELECT survey_id, survey_name, survey_desc, date_released FROM DEPARTMENT_TABLE WHERE dept_id = " + department;
    openConnection(sql, function(result){
        console.log(result);
    });
}

exports.getSurveyQuestionList = function(department, survey){
    let sql = "SELECT survey_questions FROM DEPARTMENT_TABLE WHERE dept_id = " + department + " AND survey_id = " + survey;
    openConnection(sql, function(result){
        console.log(result);
    });
}

exports.getQuestionData = function(question){
    let sql = "SELECT * FROM QUESTIONS_TABLE WHERE question_id = " + question;
    openConnection(sql, function(result){
        // forEach() -> append to json object and pass to render
        console.log(result);
    });
}

function storeData(question_id, answer){
    // dept_id_selected, survey_id_selected, question_selected, 
    let sql = "INSERT INTO ANSWER_STORED_TABLE (question_id_selected, answer_selected) " +
                'VALUES (\''+question_id+'\',\''+answer+'\')';

    openConnection(sql, function(result){
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
