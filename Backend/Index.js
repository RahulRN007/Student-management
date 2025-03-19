var express = require("express")
var cors = require("cors")
var app = express()
var database = require("./Dbconnection")

const parser = require("body-parser")
const route = require("./Route")

app.use(cors())
app.use(parser.json())
app.use("/",route)

app.listen(5000,function(){
    console.log("Index success")
})
 