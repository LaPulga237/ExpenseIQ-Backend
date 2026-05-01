const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: ['purchase', 'transaction', 'subscription', 'food_dining', 'transport', 'healthcare', 'entertainment', 'education', 'utilities', 'other']
  },
  type: { type: String, enum: ['debit', 'credit'], default: 'debit' },
  description: { type: String, default: '' },
  date: { type: Date, default: Date.now },
  paymentMethod: { type: String, enum: ['cash', 'card', 'bank_transfer', 'mobile_money', 'other'], default: 'cash' },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
