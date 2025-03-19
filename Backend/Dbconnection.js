var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/studentmanagement")
var db = mongoose.connection
db.on('error',console.error.bind(console,'connection error'))
db.once('open',function(){
    console.log("Db connection Succesfull")
})

module.exports = db
