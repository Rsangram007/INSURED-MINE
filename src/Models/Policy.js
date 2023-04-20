const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  number: {
    type: String,
    required: true
  },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true
  },
  lobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LOB',
    required: true
  },
  carrierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Carrier',
    required: true
  },
  effectiveDate: {
    type: Date,
    required: true
  },
  expirationDate: {
    type: Date,
    required: true
  },
  premium: {
    type: Number,
    required: true
  },
  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agent',
    required: true
  }
});

module.exports = mongoose.model('Policy', policySchema);
