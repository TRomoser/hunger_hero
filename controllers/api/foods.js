const Food = require('../../models/food');

module.exports = {
  create,
  index,
  getFood,
  delete: deleteFood
}

async function create(req, res) {
    try {
      // Add the food to the db
      console.log("THIS IS REQ.USER", req.user)
      console.log(req.body, "food object")
      req.body.user = req.user._id
      console.log("AFTER", req.body)
      const food = await Food.create(req.body);
      
    
      res.json(food);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async function getFood(req, res) {
    console.log("GET FOOD CALLED")
    console.log("REQ.BODY", req.params)
    

    const food = await Food.findById(req.params.id)
    console.log("FOOD", food)
    res.json(food)
  }

  async function index(req, res){
    console.log('index almost called')
    const food = await Food.find({}).exec()
    console.log(food, 'index fnc called')
    res.json(food);
  }

  async function deleteFood(req, res) {
    req.body.user = req.user._id;
    const food = await Food.findByIdAndDelete(req.params.id);
    res.json(food);
  }