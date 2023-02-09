const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {type: String, enum: ["Canned", "Fresh Produce", "Shelf Stable", "Fresh Food", "Mixed"], required: true},
    quantity: {type: String, required: true, default: "unknown"},
    description: {type: String, required: true}
}, {
  timestamps: true,
});

module.exports = mongoose.model('Food', foodSchema);