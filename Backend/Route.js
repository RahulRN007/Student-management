var express = require("express")
var route = express.Router()
const Studentcontroller = require("./Controller/Studentcontroller")
const Admincontroller = require("./Controller/Admincontroller")


route.post('/registration',Studentcontroller.saveData)
route.get('/adminstudentdetails',Studentcontroller.showData)
route.post('/deletedetails/:id',Studentcontroller.deleteData)
route.post('/editdetails/:id',Studentcontroller.editData)
route.post('/updatedetails/:id',Studentcontroller.updateData)
route.post('/userloginverification',Studentcontroller.userLoginVerification)
route.get('/studentprofiledetails/:id',Studentcontroller.studentProfileDetails)
route.post('/activedeactive/:id',Studentcontroller.activeDeactive)
route.post('/search/',Admincontroller.searchValues)
route.get('/sortmech',Admincontroller.sortMech)
route.get('/sortcs',Admincontroller.sortCs)
route.get('/sorteee',Admincontroller.sortEee)
route.get('/sortec',Admincontroller.sortEc)



module.exports = route