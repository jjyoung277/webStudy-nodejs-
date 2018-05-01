var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/form', function(req, res) {
  res.render('form');
});

app.get('/form_receiver', function(req, res) {
  var title = req.query.title;
  var description = req.query.description;
  res.send(title+','+description);
});

app.post('/form_receiver', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  res.send(title+','+description);
})

app.get('/topic/:id/:name', function(req, res) {
  var topics = [
    'Javascript is....',
    'Nodejs is...',
    'Express is...'
  ];

  var output = `
    <a href="/topic/0`+'/'+req.params.name+`">JavaScript</a><br>
    <a href="/topic/1`+'/'+req.params.name+`">Nodejs</a><br>
    <a href="/topic/2`+'/'+req.params.name+`">Express</a><br>
    ${topics[req.params.id]}
  `;

  res.send(output + req.params.name);
});

app.get('/topic/:id', function(req, res) {
  var topics = [
    'Javascript is....',
    'Nodejs is...',
    'Express is...'
  ];

  var output = `
    <a href="/topic/0">JavaScript</a><br>
    <a href="/topic/1">Nodejs</a><br>
    <a href="/topic/2">Express</a><br>
    ${topics[req.params.id]}
  `;

  res.send(output);
});

app.listen(3000, function() {
  console.log('connected 3000 port');
});







/*var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/template', function(req, res) {
  res.render('temp', {time: Date(), _title: "First Template"});
});

app.get('/index', function(req, res) {
  res.render('index', {name: "주준영"});
});

app.get('/', function (req, res) {
  res.send('Hello home page');
});

app.get('/dynamic', function(req, res) {
  var lis = '';
  for(var i=0; i<5; i++) {
    lis += '<li>coding</li>';
  }
  var time = Date();
  var output = `<!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello Dynamic
      ${lis}
      ${time}
    </body>
  </html>
`;
  res.send(output);
});
app.get('/route', function(req, res) {
  res.send('Hello Router, <img src="/img.jpg">');
});

app.get('/login', function(req, res) {
  res.send('<h1>Login Please<h1>');
})

app.listen(3000, function() {
  console.log("connected 3000 port");
});
*/
