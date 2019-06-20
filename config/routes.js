const axios = require('axios')
const db = require('../database/dbConfig')

const { authenticate, new_user, authenticate_user } = require('../auth/authenticate')

module.exports = server => {
  server.post('/api/register', new_user, register)
  server.post('/api/login', authenticate_user, login)
  server.get('/api/jokes', authenticate, getJokes)
}

//add a new user to the database
//required fields: username, password
//returns:
//  {message, {user}} upon success
//  {message, {err}} upon fail
async function register(req, res) {
  try {
    const userNum = await db('users').insert(req.body)
    if(userNum) {
      //if successful, get the user
      const user = await db('users').where({'username': req.body.username})
      res.status(201).json({message: `new user added`, user: user[0]})
    } else {
      //chances are it will catch before it gets here
      res.status(404).json({message: `user couldn't be added`})
    }
  } catch (err) {
    //console.log(err) is more descriptive... why?
    console.log(err)
    res.status(500).json({message: `user couldn't be added`, err})
  }
}

//add a new user to the database
//required fields: username, password
//returns:
//  {message, {user}, token} upon success
//  {message, {err}} upon fail
async function login(req, res) {
  try {
    const user = await db('users').first().where({username: req.body.username})
    user
    ? res.status(201).json({message: `login successfull`, user, token: req.authorization})
    : res.status(404).json({message: `Wong!`})
  } catch (err) {
    //console.log(err) is more descriptive... why?
    // console.log(err)
    res.status(500).json({message: `couldn't log you in, surry`, err})
  }
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
