const jwt = require('jsonwebtoken');

module.exports.generateToken= function(user) {
    return jwt.sign({ id: user._id }, process.env.JWT_KEY )
    }

