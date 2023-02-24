const express = require('express');
const router = express.Router();
const foodsCtrl = require('../../controllers/api/foods');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/:id', foodsCtrl.getFood)
router.post('/',ensureLoggedIn, foodsCtrl.create)
router.get('/', foodsCtrl.index)
router.delete('/:id', ensureLoggedIn, foodsCtrl.deleteFood)

module.exports = router;