var oracledb = require('oracledb');
var config = {
    user: "system",
    password: "poznan",
    connectString: "localhost/xe"
};

let deptList = require('./../departmentList.json');
console.log(deptList.departments[0].name);

var store = [];
var idx;
var deptListLen = deptList.departments.length;
function getThings(count) {
  var store = [];

  for (idx = 0; idx < count; idx += 1) {
    store[idx] = {
      id: idx,
      name: deptList.departments[idx].name
    };
  }
//   console.log(store[1])

  return store;
}

// Imagine the 'things' were fetched via a REST call or from a file.
// We end up with an array of things we want to insert.
store = getThings(deptListLen);

oracledb.getConnection(config, function(err, conn) {
  var deptIds = [];
  var deptArray = [];
  var start = Date.now();

  if (err) {throw err;}

  for (idx = 0; idx < store.length; idx += 1) {
    deptIds.push(store[idx].id);
    deptArray.push(store[idx].name);
  }

  conn.execute(
    ` declare
        type number_aat is table of number(10)
          index by pls_integer;
        type varchar2_aat is table of varchar2(255)
          index by pls_integer;

        l_dept_ids   number_aat := :dept_ids;
        l_deptArray varchar2_aat := :deptArray;
      begin
        forall x in l_dept_ids.first .. l_dept_ids.last
          insert into departments (dept_id, dept_name) values (l_dept_ids(x), l_deptArray(x));
      end;`,
    {
      dept_ids: {
        type: oracledb.NUMBER,
        dir: oracledb.BIND_IN,
        val: deptIds
      }, 
      deptArray: {
        type: oracledb.STRING,
        dir: oracledb.BIND_IN,
        val: deptArray
      }
    },
    {
      autoCommit: true
    },
    function(err) {
      if (err) {console.log(err); return;}

      console.log('Success. Inserted ' + store.length + ' rows in ' + (Date.now() - start) + ' ms.');
    }
  );
});