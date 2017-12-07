let async = require('async');
let data = [1,4,3];
async.each(data, function(item, index, arr){
    console.log("each", item, index, arr);
});