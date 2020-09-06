var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/ExpressAPI', { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
  if (err) {
    throw err;
  } else console.log('-----------------Connected mongoose-----------------');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 3000;


var router = require('./routes/v1/');
app.use('/api/v1/', router);


app.listen(port);
console.log('listen on port ' + port);