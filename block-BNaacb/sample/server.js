let express = require('express');
let logger = require('morgan');
let mongoose = require('mongoose');

let app = express();

//mongoose connector
mongoose.connect(
  'mongodb://localhost:27017/test',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'database connected to "test" database');
  }
);

//logger middleware
app.use(logger('dev'));

//middleware

app.listen(3000, () => {
  console.log('server is live on port 3000');
});
