const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
  create,
  login,
  checkToken,
  fetchUser

};

// async function update(req, res) {
//   try{
//     const image = req.body.image
//     await User.findByIdAndUpdate(
//       {_id: req.user._id}, req.body
//     )
//     const user = await User.findById(req.user._id);
//     req.json(user);
//   } catch(err) {
//     res.status(400).json(err);
//   }
// }

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

async function fetchUser(req, res) {
  let userId = req.params.id
  try {
    const user = await User.findById(userId);
    console.log("this is the user", user)
    res.json(user)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  console.log(req.body, "REQ.BODY")
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}