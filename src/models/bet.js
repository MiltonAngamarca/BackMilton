// models/Bet.js
const mongoose = require('mongoose');

const BetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  eventId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 1, 
  },
  selectedResult: {
    type: String,
    enum: ['1', 'X', '2'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Bet', BetSchema);
