var express = require('express');
var router = express.Router();


/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

var suggestions = [
  {
    sugg: 'Skydiving'
  },
  {
    sugg: 'A trip to Space'
  }
];

router.get('/suggestions', function(req, res) {
    var index = Math.floor(Math.random() * suggestions.length);
    var suggestion = suggestions[index];
    suggestions.splice(index, 1);
    res.send(suggestion);
});

router.post('/suggestions', function(req, res) {
    console.log("In Suggestion Post");
    console.log(req.body);
    suggestions.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
}); 

module.exports = router;


//$(document).ready(function(){
//  var ideaArray=[];
//  document.getElementById("Add").addEventListener("click", addIdea);
//  function addIdea(){
//    var input = document.getElementById("addIdea");
//    ideaArray.push(input);
//  }
//
//  document.getElementById("retrieveIdea").addEventListener("click", showIdea);
//
//  function showIdea() {
//    var index = Math.floor(Math.random() * ideaArray.length);
//    document.getElementById("idea").innerHTML = ideaArray[index];
//  }
//});