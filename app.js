var express = require('express'),
    app = express();

var logger = require('morgan'),
    fs = require('fs');

var dataLink = require('./writeToFile');

app.post('storeSurvey',function(req, res){
    // req data gets passed here
    dataLink.storeResponse(deptCode, surveyCode, response);
})