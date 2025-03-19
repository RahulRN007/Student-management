var schema = require("../Schema/Studentschema")

const searchValues = async(req,res)=>{
  const search = req.body
  console.log(search)
  try{
    const result = await schema.find({search:search})
    if (result == null) {
      res.status(200).json({
        msg: "Not found",
      });
    }
  }
  catch(error){

  }
}

      
      


  module.exports = {searchValues}