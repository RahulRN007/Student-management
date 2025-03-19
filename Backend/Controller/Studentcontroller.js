var schema = require("../Schema/Studentschema")


const saveData = async (req, res) => {
  console.log(req.body)
  try {
    const details = new schema({
      name: req.body.name,
      dob: req.body.dob,
      id: req.body.id,
      email: req.body.email,
      age: req.body.age,
      address: req.body.address,
      pincode: req.body.pincode,
      semester: req.body.semester,
      department: req.body.department,
      phonenumber: req.body.phonenumber,
      password: req.body.password,
      confirmpassword:req.body.confirmpassword,
      gender: req.body.gender,
      bloodgroup: req.body.bloodgroup,
      mothername: req.body.mothername,
      motheroccupation: req.body.motheroccupation,
      motherphonenumber: req.body.motherphonenumber,
      fathername: req.body.fathername,
      fatheroccupation: req.body.fatheroccupation,
      fatherphonenumber: req.body.fatherphonenumber,
      sslcpercentage: req.body.sslcpercentage,
      plustwopercentage: req.body.plustwopercentage,
      entrancepercentage: req.body.entrancepercentage,
      dobpassing: req.body.dobpassing,
      status:"active"

    });
    await details.save();
    console.log("Success");

    res.status(200).json({
      msg: "Saved successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Error saving data",
    });
  }
};


const showData = async (req, res) => {
  try {
    const result = await schema.find(req.body)
    res.status(200).json({
      data: result
    })
  }
  catch (error) {
    console.error("error fetching details", error)
    res.status(500).json({
      msg: "an error occured while fetching data"
    })

  }
}


const deleteData = async (req, res) => {
  try {
    const value = await schema.findByIdAndDelete({ _id: req.params.id })
    console.log(value)
    res.status(200).json({
      msg: "Deleted successfully"
    })
  }
  catch (error) {
    res.status(500).json({
      msg: "deletion failed!!!"
    })
  }
}

const activeDeactive = async (req, res) => {
  try {
      const user = await schema.findById(req.params.id);
      if (!user) {
          return res.status(404).json({ msg: "User not found" });
      }
      const newStatus = user.status === "active" ? "deactive" : "active";
      const updatedUser = await schema.findByIdAndUpdate(
          req.params.id,
          { status: newStatus },
          { new: true }
      );
      res.status(200).json({
          msg: `Status updated to ${newStatus}`,
          data: updatedUser
      });

  } catch (error) {
      res.status(500).json({ msg: "Status update failed!!!", error });
  }
};


const editData = async (req, res) => {
  try {
    const del = await schema.findById(req.params.id)
    res.status(200).json({
      data: del,
    });
  }
  catch (error) {
    console.log(" Edit details error")
  }
}


const updateData = async (req, res) => {
  const { id } = req.params
  const updatedData = req.body
  try {
    const result = await schema.findByIdAndUpdate(id, updatedData, { new: true })
    console.log(result);

    res.status(200).json({ msg: "details successfully updated", data: result })
  }
  catch (error) {
    console.log("updatedetails error")
    res.status(500).json({ msg: "Failed to update details", error });
  }
}


const userLoginVerification = async (req, res) => {
  const { email, password } = req.body
  console.log(email)
  console.log(password)
  
  try {
    const result = await schema.findOne({ email: email })
    if (result == null) {
      res.status(200).json({
        msg: "Username not found",
      });
    }
    else if (result.email==email && result.password == password && result.status == "active") {
      res.status(200).json({
        msg: "Successfull found",
        data: result,
      });
    }
    else if (result.email==email && result.password == password && result.status == "deactive") {
      res.status(200).json({
        msg: "Account is deactivated. Contact admin! ",
      });
    }
    else {
      res.status(500).json({ msg: "Password incorrect", error });
    }


  } catch (error) {
    console.log("userLoginVerification error")
    res.status(500).json({ msg: "Failed to login", error });
  }
}



const studentProfileDetails = async (req, res) => {
  // const {id} = req.params
  try {
    const del = await schema.findById(req.params.id)
    res.status(200).json({
      data: del,
    });
  }
  catch (error) {
    console.log(" fetch student profile details error")
  }
}

module.exports = { activeDeactive,saveData, showData, deleteData, editData, updateData, userLoginVerification, studentProfileDetails }