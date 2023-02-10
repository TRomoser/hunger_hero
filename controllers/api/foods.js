const Food = require('../../models/food');

module.exports = {
  create
}

async function create(req, res) {
    try {
      // Add the food to the db
      console.log(req.body, "food object")
      const food = await Food.create(req.body);
      res.json(food);
    } catch (err) {
      res.status(400).json(err);
    }
  }