var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello cateina');
});
 
app.listen(process.env.PORT || 5002);
 
module.exports = app;

