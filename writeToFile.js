var fs = require('fs');

// var deptObject = JSON.parse(fs.readFileSync('surveyResponse.json', 'utf8'));

// console.log(deptObject.departments[0].surveys[0].results.length); // get length

// var results = deptObject.departments[0].surveys[0].results;

// results.push({
//     "ct": deptObject.departments[0].surveys[0].results.length + 1,
//     "questionBank": [{
//         "answer": "New answer pushed",
//         "question": "New question pushed"
//     }]
// })

// var surveyStorage = JSON.stringify(deptObject);

// fs.writeFile("surveyResponse.json", surveyStorage, 'utf8', function (err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("File saved");
// })


// Below is a unified 

// THE DEPT CODE AND SURVEY MUST EXIST! IT WILL BREAK WITH FOREIGN VALUES
exports.storeResponse = function(deptCode, surveyCode, response) {
    // console.log(response);
    fs.readFile('surveyResponse.json', 'utf8', function readFileCB(err, data) {
        if (err) {
            console.log(err);
        } else {
            var readResults = JSON.parse(data);

            // add ct and question bank
            readResults.departments[deptCode].surveys[surveyCode].results.push({
                "ct": count+1,
                "questionBank": []
            });
            var count = readResults.departments[deptCode].surveys[surveyCode].results.length;
            var resLen = response.length;
            readResults.departments[deptCode].surveys[surveyCode].results.push({
                "ct": count+1,
                "questionBank": []
            });
            for (i = 0; i < resLen; i++) {
                readResults.departments[deptCode].surveys[surveyCode].results[count].questionBank.push({
                    "answer": response[resLen-1].answer,
                    "question": response[resLen-1].question
                })
            }
            var surveyStore = JSON.stringify(readResults);
            fs.writeFile('surveyResponse.json', surveyStore, 'utf8', function(err){
                if(err){
                    return console.log(err);
                } else {
                    console.log('file saved');
                }
            })
        }
    })
}

// var res = {
//     "questionBank": [{
//         "answer": "Some New Data",
//         "question": "Some New Data"
//     }, {
//         "answer": "sample data 2",
//         "question": "What are chips?"
//     }]
// }

// storeResponse(0, 0, res.questionBank);