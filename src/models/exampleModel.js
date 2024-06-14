const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema({
  firebaseId: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Example', ExampleSchema);
