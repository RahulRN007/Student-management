const mongoose = require('mongoose')
const createaccschema = new mongoose.Schema({
    userid:{
            type:mongoose.Types.ObjectId,
            required:true,
            ref:"students"
        },
        logintime: {
            type: Date,
            default: Date.now
          }
    })
    module.exports = new mongoose.model("acc.creates",createaccschema)