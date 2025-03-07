const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    phonenumber:{
        type:String,
        required:true,
    },
    password:{
      type:String,  
      required:true,
    },
    role:{
        type:String,
        default:'user',
    },
});
const User = mongoose.model('user',userSchema)
module.exports = User;