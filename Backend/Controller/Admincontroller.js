var schema = require("../Schema/Studentschema")

const searchValues = async (req, res) => {
  const search = req.body
  console.log(search)
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

const sortMech = async (req, res) => {
  
  try {
    const result = await schema.find({department:"mech"})
    console.log("bbbb")
    console.log(result)
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
    console.log("bbbb")
    console.log(result)
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
    console.log("bbbb")
    console.log(result)
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
    console.log("bbbb")
    console.log(result)
    res.status(200).json({
      data:result
    })
  }
  catch (error) {
    res.status(500).json({ error: "Internal Server Error",})
  }
}



module.exports = { searchValues, sortMech, sortEc,sortCs,sortEee }