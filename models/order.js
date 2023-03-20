const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  distributor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  foodItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food',
    required: true
  }],
  status: {
    type: String,
    enum: ['pending', 'claimed', 'delivered'],
    default: 'pending'
  },
  message: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);
