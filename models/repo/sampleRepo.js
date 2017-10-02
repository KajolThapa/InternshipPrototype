var Sequalize = require('sequelize'),
    pgConnString = require('../../config/secret').connString,
    sequalizeConn = new Sequalize(pgConnString);

exports.getPGString = function(){
  return pgConnString;
};
