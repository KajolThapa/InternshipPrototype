var fs = require('fs');

var deptObject = JSON.parse(fs.readFileSync('surveyResponse.json', 'utf8'));

// console.log(deptObject.departments[0].surveys[0].results.length); // get length

var results = deptObject.departments[0].surveys[0].results;

console.log(results);

results.push({
    "ct": deptObject.departments[0].surveys[0].results.length+1,
    "questionBank": [{
        "answer": "New answer pushed",
        "question": "New question pushed"
    }]
})

var surveyStorage = JSON.stringify(results);
console.log(deptObject.departments[0].surveys[0]);

fs.writeFile("surveyResponse.json", surveyStorage, 'utf8', function(err){
    if(err){
        return console.log(err);
    }
    console.log("File saved");
})


// Below is a unified 