const mongoose = require('mongoose')
const likeschema = new mongoose.Schema({
    liker:{
            type:mongoose.Types.ObjectId,
            required:true,
            ref:"students"
        },
    liked:{
        type:mongoose.Types.ObjectId,
            required:true,
            ref:"students"

        },
    
    })
    module.exports = new mongoose.model("likes",likeschema)