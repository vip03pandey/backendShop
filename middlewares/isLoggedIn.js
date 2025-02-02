const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');





module.exports.isLoggedIn = async function (req, res, next) {
  if (!req.cookies.token) {
    req.flash("error", "You need to login first");
    return res.redirect('/');
  }

  try {
    let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    let user = await userModel.findById(decoded.id).select('-password');
    if (!user) {
      req.flash("error", "User not found");
      return res.redirect('/');
    }
    req.user = user;
    next();
  } catch (err) {
    req.flash("error", "Invalid Token");
    return res.redirect('/');
  }
};
