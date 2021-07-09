const express = require('express');
const app = express();
var mongo = require('./mongo')

var bodyparser = require('body-parser');

console.log('fsfsd',bodyparser)
app.use(bodyparser())
app.use(bodyparser.urlencoded());

app.use(bodyparser.json());
app.use('/mongo', mongo)

app.listen(3000);
