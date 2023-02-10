const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
var bodyParser = require('body-parser')
 
// create application/json parser
var jsonParser = bodyParser.json()
  

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/', jsonParser, usersCtrl.create);

// router.put('/:id', usersCtrl.update);

// POST /api/users/login
router.post('/login', usersCtrl.login);
// GET /api/users/check-token

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;