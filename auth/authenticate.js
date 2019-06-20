const jwt = require('jsonwebtoken')
const crypt = require('bcryptjs')
const uuid = require('uuid')
const db = require('../database/dbConfig')
const gen_token = require('./get_token')
const secret = require('./secret')

// quickly see what this file exports
module.exports = {
  authenticate,
  authenticate_user,
  new_user,
}

//checks if body has specific keys
check_fields = (reqbody, ...keys) =>
  keys.reduce((prevkey, key) => (key in reqbody) && (prevkey in reqbody))

//checks for required fields, if user exists, and if password is legit
async function authenticate_user(req, res, next) {
  required_fields = ['username', 'password']

  //check if required fields exist
  if(check_fields(req.body, ...required_fields))
    req.body = {username: req.body.username, password: req.body.password}
  else
    return next(`username and password are required`)

  //check if user exist and if password is legit
  const user = await db('users').first().where({username: req.body.username})
  if(user && crypt.compareSync(req.body.password, user.password))
    req.authorization = gen_token(user)
  else 
    return next(`Stop trying to hack; you're bad at it.`)

  //will only make it here if everything checks out
  next()
}

//checks for required fields
function new_user(req, res, next) {
  required_fields = ['username', 'password']

  //check if required fields exist
  if(check_fields(req.body, ...required_fields))
    //rebuilding the body removes all unwanted fields
    req.body = {
      uid: uuid.v4(),
      username: req.body.username,
      password: crypt.hashSync(req.body.password, 1),
    }
  else
    return next(`username and password are required.`)

  //will only make it here if check_fields is true
  next()
}

// implementation details
function authenticate(req, res, next) {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, secret.jwtSecret, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}
