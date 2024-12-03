const mongoose=require('mongoose')
const userschema = new mongoose.Schema({
     title:String,
     amount:Number,
     options:String
     
})

const usermodel =mongoose.model("budget",userschema);
module.exports=usermodel