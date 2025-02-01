const mongoose = require('mongoose')



const ownerSchema=mongoose.Schema({
    fullname:{
        type: String,
        minLength:3,
        trim:true,  
        required:true
    },
    email:String,
    password:String,
    products:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin:String,
})

const owner=mongoose.model('owner',ownerSchema)

module.exports=owner