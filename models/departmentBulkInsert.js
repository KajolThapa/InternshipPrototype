let oracledb = require('oracledb');

let deptList = require('./../departmentList.json');



console.log("delta:: "+deptList.departments[0].name);
// console.log(deptList.departments.length);
// Object.keys(deptList.departments).forEach(function(deptId){
//     bulkInsertDeptList(deptList.departments[deptId].name);
// });
// bulkInsertDeptList(deptList.departments[0].name);


// function bulkInsertDeptList(deptName){
    
//     let sql = "INSERT INTO DEPARTMENTS VALUES (:deptName)",
//         bind = [deptName],
//         tag = {autoCommit: true};

//     // let flag = "insert";
//     openConnection(sql, bind, tag, function(ret){
//         // console.log(ret);
//         // console.log(bind);
//     });
// }

var async = require('async');
// var oracledb = require('oracledb');
var dbConfig = {
    user: "system",
    password: "poznan",
    connectString: "localhost/xe"
};
var asyncFunc = 'series'; //or parallel

oracledb.getConnection(dbConfig, function(err, conn) {
    console.log(dbConfig);
    var funcs = [];
    var start = Date.now();
    var idx;

    if (err) {throw err;}

    function insertData(callback) {
        conn.execute(
            'insert into perf_test values (:deptName)', 
            ['asda'],
            function(err, result) {
                callback(err);
            }
        );
        // console.log(i);
    }

    for (idx = 0; idx <= deptList.length-1; idx += 1) {
        funcs[idx] = insertData;
        console.log(funcs[idx]);
    }

    async[asyncFunc](funcs, function(err, results) {
        if (err) {throw err;};

        conn.commit(function(err) {
        if (err) {throw err;};

        conn.close(function(err) {
            if (err) {throw err;};

            console.log('done', Date.now() - start);
        });
        });
    });
});