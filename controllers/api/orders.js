// Import the required models
const Order = require('../models/order');
const User = require('../models/user');

module.exports = {
  makeOrder,
  claimOrder,
  showOrder
};

// Create a new order
const makeOrder = async (req, res) => {
  try {
    const { food, expiryDate } = req.body;
    const user = req.user; // Assuming authenticated user is making the order

    // Create a new order with the provided food and expiry date
    const newOrder = await Order.create({
      food,
      expiryDate,
      distributor: user._id // Set the distributor to be the authenticated user
    });

    // Add the new order to the distributor's orders list
    await User.findByIdAndUpdate(user._id, { $push: { orders: newOrder._id } });

    res.status(201).json({ success: true, order: newOrder });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}

// Show an order
const showOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}

// Claim an existing order
const claimOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const user = req.user; // Assuming authenticated user is claiming the order

    // Find the order by ID and ensure it exists
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    // If the order has already been claimed, return an error
    if (order.receiver) {
      return res.status(400).json({ success: false, error: 'Order has already been claimed' });
    }

    // Update the order to set the receiver to the authenticated user
    order.receiver = user._id;
    order.status = 'claimed';
    await order.save();

    // Add the order to the receiver's claimed orders list
    await User.findByIdAndUpdate(user._id, { $push: { claimedOrders: order._id } });

    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
