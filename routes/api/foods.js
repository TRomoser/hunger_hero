const express = require('express');
const router = express.Router();
const foodsCtrl = require('../../controllers/api/foods');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/hero/create',ensureLoggedIn, foodsCtrl.create)

module.exports = router;