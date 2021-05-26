let mongoose = require('mongoose');

let Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  id: Number,
  author: String,
});
