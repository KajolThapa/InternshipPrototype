var express = require('express'),
    router = express.Router();

router.get('/form', function(req, res){
  return res.render('layout');
});



module.exports = router;
