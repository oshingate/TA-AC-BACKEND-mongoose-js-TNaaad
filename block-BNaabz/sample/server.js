let express = require('express');
let mongoose = require('mongoose');

let app = express();

mongoose.connect(
  'mongodb://localhost:27017/test',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'connected to database');
  }
);

app.listen(3000, () => {
  console.log('server is live on port 3000');
});
