module.exports = {
    'oracledb': {
        user: process.env.USER || 'system',
        password: process.env.PASSWORD || 'Unicorn18',
        connectString: process.env.CONNECTSTRING ||'localhost/xe'

    }

}

//Testing Kajol


/*var object1 = {name: "John"};
var object2 = {location: "San Jose"};
var object3 = Object.assign(object1,object2);
console.log(object3);*/

/*var messages = [{userId: 2, content: "Salam"}, {userId: 5, content: "Hello"},{userId: 4, content: "Moi"}];
var users = [{userid: 2, name: "Grace"}, {userid: 4, name: "Janetta"},{userid: 5, name: "Sara"}];

var messagesWithUserNames = messages.map((msg)=> {
  var haveEqualId = (user) => user.userid == msg.userId
  var userWithEqualId= users.find(haveEqualId)
  return Object.assign({}, msg, userWithEqualId)
})
console.log(messagesWithUserNames);
*/

var questionMap =  [
        {"question_id": 1, "subQuestionId": null},
        {"question_id": 2, "subQuestionId": 15},
        {"question_id": 2, "subQuestionId": 16},
        {"question_id": 2, "subQuestionId": 17},
        {"question_id": 4, "subQuestionId": null}
    ]



var queryReturn = [
    {"question_id":1, question_type:1, question_string: "sample question 1", answer_id:2},
    {"question_id":2, question_type:3, question_string: "Question Heading", answer_id:5},
    {"question_id":15, question_type:3, question_string: "question matrix 1", answer_id:7},
    {"question_id":16, question_type:3, question_string: "question matrix 2", answer_id:8},
    {"question_id":17, question_type:2, question_string: "question matrix 3", answer_id:9},
    {"question_id":4, question_type:3, question_string: "sample question 8", answer_id:16}
]


var answerReturn = [
    {answer_id:2, answer_set:'sample1, sample2, sample3'},
    {answer_id:5, answer_set:'heading1, heading2, heading3'},
    {answer_id:7, answer_set:'1, 2, 3'},
    {answer_id:8, answer_set:'1, 2, 3'},
    {answer_id:9, answer_set:'1, 2, 3'},
    {answer_id:16, answer_set:'1, 2, 3'},
    {answer_id:2, answer_set:'math, sci, eng'}
]
  
var merge1 = queryReturn.map((query)=> {
    var sameanswerid = (answer) => answer.answer_id == query.answer_id
    var ifsameanswerid= answerReturn.find(sameanswerid)
    return Object.assign({}, query, ifsameanswerid)
  })
  console.log('Merging answerReturn into queryReturn');
  console.log(merge1);
  


  var merge2 = questionMap.map((question)=> {
      var checkquestionid = (query)=>  query.question_id == question.question_id
      var checksubquestionid = (query)=> query.question_id == question.subQuestionId
      var ifsameid = queryReturn.find(checkquestionid, checksubquestionid)
      return Object.assign({}, question,ifsameid )
  })
  console.log('Merging queryReturn into questionMap');
  console.log(merge2);
/*Given these three objects, I want you to first merge answerReturn with queryReturn. 
Then merge queryReturn into questionMap



When checking the questionId from queryReturn against the mapping, if the questionId from object queryReturn does not 
match a questionId from the object questionMap, I want you to check if it is in subQuestionId. If a match is found,
concatenate the result like you did in the sample before*/