var express = require('express');
var router = express.Router();
const path = require('path');

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', function (req, res) {
  res.sendFile('/public/form.html', { 
    root: path.join(__dirname, '/..')
   });
});

router.post('/new', function (req, res) {

  const message = req.body.message;
  const name = req.body.name;

  messages.push({
    user: name,
    text: message,
    added: new Date()
  });
  
  res.redirect('/');
})




module.exports = router;


