let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    content: String,
    author: String,
    article: String,
  },
  { timestamps: true }
);

let User = mongoose.model('User', userSchema);

module.exports = User;
