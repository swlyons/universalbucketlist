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
res.send(suggestions);

});

router.post('/suggestions', function(req, res) {
    console.log("In Suggestion Post");
    console.log(req.body);
    suggestions.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
}); 

module.exports = router;
