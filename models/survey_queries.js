let oracledb = require('oracledb');

function openConnection(query, data){
    // Execute the query, get response
    // return new Promise(async function(resolve, reject) {
    return new Promise(async function(reject) {
        let connection;
        try {
            connection = await oracledb.getConnection({
                user: "system",
                password: "Unicorn18",
                connectString: "localhost/xe"
            });

            let result = await connection.execute(
                // Execute query, null binding, return as JSON
                query, [], { outFormat: oracledb.OBJECT }
            );
            // call back returns response
            data(result.rows);
        } catch (err){
            console.log('Error occurred', err);
            reject(err);  
        } finally {
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
    // })
}

exports.test = function(queryReturn) {
    let sql = "SELECT * from question_table";
    openConnection(sql, function(data){
        queryReturn(data);
    });
}


// CLEARED //
exports.getSurveys = function(department, queryReturn){
    // console.log(department + " -- dept");
    let sql = "SELECT survey_id, survey_name, survey_desc, date_released FROM DEPARTMENT_TABLE WHERE dept_id = " + department;
    // let sql = "SELECT * from DEPARTMENT_TABLE";
    // console.log(sql);
    openConnection(sql, function(data){
        queryReturn(data);
    });
}
// CLEARED //
exports.getSurveyQuestionList = function(/*department, */survey, queryReturn){

    let sql = "SELECT survey_questions FROM DEPARTMENT_TABLE WHERE survey_id = " + 56 /*survey*/;
    // There should be double validation to render the survey. For time, it's left out. Needs to recieve a dept_id from post
    // let sql = "SELECT survey_questions FROM DEPARTMENT_TABLE WHERE dept_id = " + department + " AND survey_id = " + survey;
    openConnection(sql, function(data){
        queryReturn(data);
    });
}

// CLEARED //
exports.getQuestionData = function(question, queryReturn){
    let sql = "SELECT * FROM QUESTION_TABLE WHERE question_id = " + question;
    console.log(sql);
    openConnection(sql, function(data){
        // console.log("Inside query: " + data);
        queryReturn(data);
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
