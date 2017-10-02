var fs = require('fs');
// var deptObject = JSON.parse(fs.readFileSync('departmentList.json', 'utf8'));
// console.log(deptObject.departments);

var surveyStore = require('./surveyResponse.json');

// How to access all of the data and print it to a console. Same idea can be paired with rendering html 
var i, j, k, o = '';

exports.viewAllResponse = function(){
    for (i in surveyStore.departments) {
        console.log("Main Dept :: " + surveyStore.departments[i].name);
        for (j in surveyStore.departments[i].surveys) {
            console.log('\tSurvey Name Belonging To Dept :: ' + surveyStore.departments[i].surveys[j].id);
            console.log('\n');
            for (k in surveyStore.departments[i].surveys[j].results) {
                console.log('\t\tResults For Each Survey To Dept :: ' + surveyStore.departments[i].surveys[j].results[k].ct);
                for (o in surveyStore.departments[i].surveys[j].results[k].questionBank) {
                    console.log('\t\t\tQuestions For Each Survey To Dept By Sheet :: ' + surveyStore.departments[i].surveys[j].results[k].questionBank[o].question);
                    console.log('\t\t\tAnswers For Each Survey To Dept By Sheet :: ' + surveyStore.departments[i].surveys[j].results[k].questionBank[o].answer);
                    console.log('\n');
                }
            }
        }
    }
}


var sample = require('./departmentDemo.json');

console.log(sample.departments.forEach(function(el){
    console.log(el);
}));