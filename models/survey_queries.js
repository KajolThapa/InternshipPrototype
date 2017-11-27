let oracledb = require('oracledb');

function openConnection(query, data){
    // Execute the query, get response
    return new Promise(async function(resolve, reject) {
        let connection;
        try {
            connection = await oracledb.getConnection({
                user: "system",
                password: "Unicorn18",
                connectString: "localhost/xe"
            });

            let result = await connection.execute(query);
            // , {
            // let result = await connection.execute("SELECT * from DEPARTMENT_TABLE");
            //     outFormat: oracledb.OBJECT
            // }
            // });
            data(result.rows[0]);
            resolve(result.rows[0]);
            // console.log(result);
            // doRelease(connection);
            
            // // Release connection to database
            // function doRelease(connection) {
            //     connection.release(
            //         function (err) {
            //             if (err) { console.error(err.message); }
            //         }
            //     );
            // }
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

exports.test = function() {
    let sql = "SELECT * from DEPARTMENT_TABLE";
    openConnection(sql, function(at){
        console.log("data:: " + at);
    });
}

exports.getSurveys = function(department){
    // console.log(department + " -- dept");
    let sql = "SELECT survey_id, survey_name, survey_desc, date_released FROM DEPARTMENT_TABLE WHERE dept_id = " + department;
    // let sql = "SELECT * from DEPARTMENT_TABLE";
    // console.log(sql);
    openConnection(sql);
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
