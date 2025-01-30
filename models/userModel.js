const mongoose=require('mongoose')


const userSchema=mongoose.Schema({
    fullname:{
        type: String,
        minLength:3,
        trim:true,  
        required:true
    },
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    },
    isadmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,
})

const user=mongoose.model('user',userSchema)

module.exports=user