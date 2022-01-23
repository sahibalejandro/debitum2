const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model('Payment', paymentSchema);
