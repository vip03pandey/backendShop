const express = require('express');
const router = express.Router();
const {registeredUser}=require('../controllers/authController')
const {loginUser}=require('../controllers/authController')

router.get('/', function (req, res) {
  res.send("Hey, it is working");
});

router.post('/register',registeredUser );

router.post('/login',loginUser)

module.exports = router;
