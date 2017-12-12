// var absorb = require('absorb');
// var obj1, obj2;

// obj1 = { foo: 123, bar: 456 };
// obj2 = { bar: 123, key: 'value' }

// absorb(obj1, obj2);

// console.log(obj1); // Output: { foo: 123, bar: 123, key: 'value' }


// //Testing Kajol


// /*var object1 = {name: "John"};
// var object2 = {location: "San Jose"};
// var object3 = Object.assign(object1,object2);
// console.log(object3);*/

// /*var messages = [{userId: 2, content: "Salam"}, {userId: 5, content: "Hello"},{userId: 4, content: "Moi"}];
// var users = [{userid: 2, name: "Grace"}, {userid: 4, name: "Janetta"},{userid: 5, name: "Sara"}];

// var messagesWithUserNames = messages.map((msg)=> {
//   var haveEqualId = (user) => user.userid == msg.userId
//   var userWithEqualId= users.find(haveEqualId)
//   return Object.assign({}, msg, userWithEqualId)
// })
// console.log(messagesWithUserNames);
// */


// /*Given these three objects, I want you to first merge answerReturn with queryReturn. 
// Then merge queryReturn into questionMap.
// When checking the questionId from queryReturn against the mapping, if the questionId from object queryReturn does not 
// match a questionId from the object questionMap, I want you to check if it is in subQuestionId. If a match is found,
// concatenate the result like you did in the sample before*/

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

// var merge1 = queryReturn.map((query)=> {
// var sameanswerid = (answer) => answer.answer_id == query.answer_id
// var ifsameanswerid= answerReturn.find(sameanswerid)
// return Object.assign({}, query, ifsameanswerid)
// })
// console.log('Merging answerReturn into queryReturn');
// console.log(merge1);



var merge2 = questionMap.map((question)=> {
  var checkquestionid = (query)=>  query.question_id == question.question_id
  var checksubquestionid = (query)=> query.question_id == question.subQuestionId
  console.log(queryReturn);
  var ifsameid = queryReturn.find(checkquestionid, checksubquestionid)
  return Object.assign({}, question,ifsameid )
})
console.log('Merging queryReturn into questionMap');
// console.log(merge2);





// var array1 = [1,3,6], array2= [3,4,9];
// var array3 = array1.filter(function(obj) { return array2.indexOf(obj) == -1; });
// console.log(array3);

// Array.prototype.unique = function() {
//   var a = this.concat();
//   for(var i=0; i<a.length; ++i) {
//       for(var j=i+1; j<a.length; ++j) {
//           if(a[i] === a[j])
//               a.splice(j--, 1);
//       }
//   }
//   return a;
// };

// var array1 = ["Vijendra","Singh"];
// var array2 = ["Singh", "Shakya"];
// var array3 = array1.concat(array2).unique(); 
// console.log(array3);