const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  name: String,
  description: String,
  city: String,
  country: String,
  averageRating: Number
});

module.exports = mongoose.model('Destination', destinationSchema);