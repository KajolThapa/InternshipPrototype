let async = require('async');
// let data = [1,4,3,18, 19];
// async.each(data, function(item, index, arr){
//     // console.log("each", item, index, arr);
//     console.log('each:: ' + item);
// });

var delta = function(){
    console.log('delta');
}

let sample = [
    console.log('echo'),
    delta
];

async.waterfall([
    function(callback){
        console.log('echo1');
      callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback){
      callback(null, 'three');
    },
    function(arg1, callback){
        console.log('echo3');
      // arg1 now equals 'three' 
      callback(null, 'done');
    }
  ], function (err, result) {
    // result now equals 'done' 
    console.log(result);
  });




// let execArray = [];

// sample.forEach((data, index)=>{
//     console.log(index);
//     // execArray.push({"data": 'function(){console.log("a result!!!:: ' + index + '");}'})
//     execArray[]

// })

// console.log(execArray[0].data);


var temple = require('./arrayReturn');

var fs = [];
// fs['f1'] = new Function('name', 'return name;');
// fs['f1'](temple.echo('1'));

// fs['f1'] = new Function('name', 'return temple.echo(name);');
// fs['f1'](1);

// console.log(fs);

var arrayFunctions = [
    function(){temple.echo('1')},
    function(){temple.echo('5')}
]

for (i = 0; i < arrayFunctions.length; i++) {
    arrayFunctions[i]();
}

var deltaArray = [];
sample.forEach((data, index)=>{
    // console.log(index);
    deltaArray.push(function(){temple.echo(index)});
})
// console.log(deltaArray[0]);

// for(i=0;i<deltaArray.length; i++){
//     deltaArray[i]();
// }

while (deltaArray.length){
    deltaArray.shift().call();
}


let dample = {"SURVEY_ID":0,"SURVEY_NAME":"Sample A","SURVEY_DESC":"National Survey of Student Engagement (NSSE)","SURVEY_QUESTION":"0,2_8,2_9,2_10,2_11,2_13,2_14,2_19","SURVEY_START_TIME":"2017-06-03T15:03:20.000Z","SURVEY_END_TIME":"2017-06-03T16:03:20.000Z","SURVEY_DOCUMENT_ID":"ABC111","SURVEY_AVAILABILITY":1};

console.log(dample.SURVEY_DESC);