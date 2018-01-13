var express = require('express');
var wagner = require('wagner-core');
var bodyParser = require('body-parser')

require('./models/models.js')(wagner);

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/tickets',  require('./routes/ticket-router')(wagner));

app.listen(3000);

console.log("Server started and listening in port 3000");