const mongoose = require('mongoose');

const lobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('LOB', lobSchema);
