const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken'); 
const { generateToken } = require('../utils/generateToken');


module.exports.registeredUser=async function (req, res) {
    try {
      const { email, password, fullname } = req.body;
  
      const existingUser = await userModel.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const user = await userModel.create({
        fullname: fullname,
        email: email,
        password: hashedPassword,
      });
  
  
      let token=generateToken(user)
  
      res.cookie('token', token)
  
      res.status(201).json({ message: "User created successfully", token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports.loginUser=async function (req, res) {
   let {email,password}=req.body
   let user=await userModel.findOne({email:email})
   if(!user)return res.send("Email or Password not found")
    
   bcrypt.compare(password,user.password,function(err,result){
       if(result){
        let token=generateToken(user)
        res.cookie('token',token)
        res.status(200).redirect('/shop')
       }
       else{
        res.redirect('/')
       }
   })
}