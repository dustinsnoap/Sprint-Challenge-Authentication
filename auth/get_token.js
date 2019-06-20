const jwt = require('jsonwebtoken')
const secret = require('./secret')

module.exports = user => {
    const payload = {
        subject: user.id,
        username: user.username,
    }
    const options = {
        expiresIn: '2h'
    }
    return jwt.sign(payload, secret.jwtSecret, options)
}