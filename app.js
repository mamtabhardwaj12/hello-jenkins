var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello i');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;

