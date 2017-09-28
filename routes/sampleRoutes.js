var express = require('express'),
    app = express(),
    router = express.Router(),
    bodyParser = require('body-parser');

// Use bodyParser to parse incoming requests to server
// https://github.com/expressjs/body-parser
app.use(bodyParser.json()); // parses only json objects
app.use(bodyParser.urlencoded({
  extended:true // allow foor rich json objects and arrays
}));

router.get('/form', function(req, res){
  return res.render('forms/login',{
    title:'login'
  });
});

router.get('/a', function(req, res){
  return res.render('forms/sampleA',{
    title:'sample form a'
  });
});

router.get('/b', function(req, res){
  return res.render('forms/sampleB',{
    title:'Sample form b'
  });
});

router.post('/setDepartment', function(req, res){
  var department = req.body.sample;
  // Need to resolve accessing datalist object
  console.log(department);
});


module.exports = router;
