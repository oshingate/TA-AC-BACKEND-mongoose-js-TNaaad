let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let addressSchema = new Schema(
  {
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

let Address = mongoose.model('Address', addressSchema);

module.exports = Address;
