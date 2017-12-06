var async = require('async');
var oracledb = require('oracledb');
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
      'insert into perf_test (c) values (:string)', 
      [Math.random().toString(36).replace(/[^a-z]+/g, '')],
      function(err, result) {
        callback(err);
      }
    );
  }

  for (idx = 0; idx <= 100; idx += 1) {
    funcs[idx] = insertData;
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