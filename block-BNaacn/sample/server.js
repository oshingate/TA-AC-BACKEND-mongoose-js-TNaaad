let express = require('express');
let logger = require('morgan');
let mongoose = require('mongoose');

let app = express();

mongoose.connect('mongodb://localhost:27017/test', (err) => {
  console.log(err ? err : 'database connected');
});

app.use(logger('dev'));

app.listen(3000, () => {
  console.log('server is live on port 3000 ');
});
