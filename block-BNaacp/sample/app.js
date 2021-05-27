let express = require('express');
let logger = require('morgan');
let mongoose = require('mongoose');

let User = require('./models/user');

let app = express();
//database connector
mongoose.connect(
  'mongodb://localhost:27017/test',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log(err ? err : 'database connected');
  }
);
//logger
app.use(logger('dev'));
//middlewares

app.use(express.json());
app.use(express.urlencoded());

//routers
app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/users', (req, res) => {
  let data = req.body;
  User.create(data, (err, product) => {
    console.log(err, product);
    res.send(product);
  });
});

app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    res.json({ users: users });
  });
});

app.get('/users/:id', (req, res) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    res.json(user);
  });
});

app.put('/users/:id', (req, res) => {
  let id = req.params.id;
  let data = req.body;
  User.findByIdAndUpdate(id, data, { new: true }, (err, updated) => {
    res.json(updated);
  });
});

app.delete('/users/:id', (req, res) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (err, deleted) => {
    res.json(deleted);
  });
});

//listener
app.listen(3000, () => {
  console.log('server is live on port 3000');
});
