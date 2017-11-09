var data = {
            "id": 3,
            "question": "Rate your experience from 1-5",
            "questionType": 3,
            "answerKey": [
                {
                    "heading": [
                        {"head": "Very Important"},
                        {"head": "Important"},
                        {"head": "Considered"},
                        {"head": "Not Considered"},
                        {"head": "No Answer"}
                    ]
                }, {
                    "ans": "Sample Heading_1"
                }, {
                    "ans": "1"
                }, {
                    "ans": "2"
                }, {
                    "ans": "3"
                }, {
                    "ans": "4"
                }, {
                    "ans": "5"
                }
            ]
        };

console.log(JSON.stringify(data.answerKey[0].heading, null, 4));