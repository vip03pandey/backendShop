const express=require('express')
const router=express.Router()
const ownerModel=require('../models/owner-model')

if(process.env.NODE_ENV=='development'){
    router.post('/create',async function(req,res){
        let owners=await ownerModel.find();
        if(owners.lenght>0)
            return res
            .send(503)
            .send("you don't have permission to create a new owner")

       let createdowner= await ownerModel.create({
            fullname:req.body.fullname,
            email:req.body.email,
            password:req.body.password,
        })
        res.status(201).send(createdowner)
    })
}

router.get('/',function(req,res){
    res.send("heyit is owners")
})




module.exports=router