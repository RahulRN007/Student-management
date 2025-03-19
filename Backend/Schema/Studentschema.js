const mongoose = require('mongoose')
const studentschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    id:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    bloodgroup:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    pincode:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    semester:{
        type:Number,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    phonenumber:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true,
    },
    mothername:{
        type:String,
        required:true,
    },
    motheroccupation:{
        type:String,
        required:true,
    },
    motherphonenumber:{
        type:Number,
        required:true,
    },
    fathername:{
        type:String,
        required:true,
    },
    fatheroccupation:{
        type:String,
        required:true,
    },
    fatherphonenumber:{
        type:Number,
        required:true,
    },
    sslcpercentage:{
        type:Number,
        required:true,
    },
    plustwopercentage:{
        type:Number,
        required:true,
    },
    entrancepercentage:{
        type:Number,
        required:true,
    },
    dobpassing:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:"active",
        enum:["active","deactive"]
    }


})
module.exports = new mongoose.model("students",studentschema)