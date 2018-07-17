const express = require('express');
const app = express();
const data = require('../data/data.js')

// Set view engine to ejs
app.set('view engine', 'ejs');

// index.page
app.get('/', function(req, res) {
  const drinks = [
    { name: 'Bloody Mary', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scotch', drunkness: 10 }
  ];

  const tagLine = 'We have any code that no one has looked at for ages...';

  res.render('pages/index', {
    drinks: drinks,
    tagLine: tagLine
  });
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080, function() {
  console.log('Serving ejs magic on 8080!');
});
