var oracledb = require('oracledb');
var dbConfig = {
    user: "system",
    password: "poznan",
    connectString: "localhost/xe"
};

function getSurveyId(deptId){
    oracledb.getConnection(
    {
        user          : dbConfig.user,
        password      : dbConfig.password,
        connectString : dbConfig.connectString
    })
    .then(function(connection) {
        return connection.execute(
            "select * from survey where survey_id = :id OR survey_id = :id",
        [4,5]
        )
        .then(function(result) {
            console.log(result.metaData);
            console.log(result.rows);

            return connection.close();
        })
        .catch(function(err) {
            console.log(err.message);

            return connection.close();
        });
    })
    .catch(function(err) {
        console.error(err.message);
    });
}

getSurveyId(1);