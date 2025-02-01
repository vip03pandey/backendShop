const express = require('express')
const { route } = require('./ownerRoutes')
const router=express.Router()

const userModel=require('../models/userModel')

router.get('/',function(req,res){
    res.send("hey it is working")
})

router.post('/register',async function(req,res){
   try{
    let {email,password,fullname}=req.body
    await userModel.findOne({email:email})
        .then(function(user){
            if(user){
                return res.status(400).send("email already exists")
            }
        })

    let user=await userModel.create({
        fullname:fullname,
        email:email,
        password:password,
    })
    res.send(user)
   }catch(err){
      res.send(err)
   }
})

module.exports=router