const createaccschema = require("../Schema/createaccschema")
var schema = require("../Schema/Studentschema")
var useridschema = require("../Schema/Useridschema")



const searchValues = async (req, res) => {
  const search = req.body
  
  try {
    const result = await schema.find({ search: search })
    if (result == null) {
      res.status(200).json({
        msg: "Not found",
      });
    }
  }
  catch (error) {

  }
}


const deactiveAcc = async(req,res)=>{
  try {
    const result = await schema.find({status:"deactive"})
    console.log(result)
    res.status(200).json({
      data:result
    })
  }
  catch (error) {
    res.status(500).json({ error: "deactive details Server Error",})
  }
}


const sortMech = async (req, res) => {
  
  try {
    const result = await schema.find({department:"mech"})

    res.status(200).json({
      data:result
    })
  }
  catch (error) {
    res.status(500).json({ error: "Internal Server Error",})
  }
}
const sortEc = async (req, res) => {
  try {
    const result = await schema.find({department:"ec"})
    
    res.status(200).json({
      data:result
    })
  }
  catch (error) {
    res.status(500).json({ error: "Internal Server Error",})
  }
}
const sortEee = async (req, res) => {
  try {
    const result = await schema.find({department:"eee"})
    
    res.status(200).json({
      data:result
    })
  }
  catch (error) {
    res.status(500).json({ error: "Internal Server Error",})
  }
}
const sortCs = async (req, res) => {
  try {
    const result = await schema.find({department:"cs"})
    
    res.status(200).json({
      data:result
    })
  }
  catch (error) {
    res.status(500).json({ error: "Internal Server Error",})
  }
}
const sortCe = async (req, res) => {
  try {
    const result = await schema.find({department:"ce"})
    
    res.status(200).json({
      data:result
    })
  }
  catch (error) {
    res.status(500).json({ error: "Internal Server Error",})
  }
}

const saveuserId =async(req,res)=>{
  

  try{
    const saveuser = new useridschema({
      userid: req.body.id,
    });
    await saveuser.save();
    console.log("user id save Success");
    res.status(200).json({
      msg: "userid saved successfully",
      
    })
  }
  catch(error){
    res.status(500).json({ msg: "userid save failed!!!", error });
  }
}


const userLoginTime = async(req,res)=>{
try{
  const result = await useridschema.find({}).populate("userid")
  
  res.status(200).json({
    data:result
  })
}catch(error){
res.status(500).json({ msg: "userlogged view failed!!!", error });
}
}


const createaccId =async(req,res)=>{
 
  try{
    const saveuser = new createaccschema({
      userid: req.body.id,
    });
    await saveuser.save();
    console.log("create acc id save Success");
    res.status(200).json({
      msg: "create acc saved successfully",
      
    })
  }
  catch(error){
    res.status(500).json({ msg: "create acc save failed!!!", error });
  }
}


const createLoginTime = async(req,res)=>{
  try{
    const result = await createaccschema.find({}).populate("userid")
    
    res.status(200).json({
      data:result
    })
  }catch(error){
  res.status(500).json({ msg: "acccreated view failed!!!", error });
  }
  }


module.exports = { deactiveAcc,createLoginTime,createaccId,userLoginTime,saveuserId ,searchValues, sortCe,sortMech, sortEc,sortCs,sortEee }