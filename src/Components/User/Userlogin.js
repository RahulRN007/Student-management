import React, { useState } from 'react'
import '../../Styles/User/Userlogin.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../../Images/logo2.png'
// import { AppContext } from '../../Contexts/AppContext';

// {state:{id:userid}}
function Userlogin() {

  const [email,setEmail] = useState([])
  const [password,setPassword] = useState([])
  // const { updateLoginInfo } = useContext(AppContext);
  const navigate = useNavigate()
  
  const verification = async(e) =>{
    e.preventDefault()
    try{
      var cat = await axios.post("http://localhost:5000/userloginverification",{email,password})
      const userid = cat.data.data._id
      
      if(cat.data.msg == "Successfull found"){
        // updateLoginInfo(cat.data.data.name);
      navigate("/userlandingpage")
      const userData = {
        userid: cat.data.data._id,
        name: cat.data.data.name,
        email: cat.data.data.email,
        age: cat.data.data.age,
        id: cat.data.data.id,
        dob: cat.data.data.dob,
        address: cat.data.data.address,
        pincode: cat.data.data.pincode,
        semester: cat.data.data.semester,
        department: cat.data.data.department,
        phonenumber: cat.data.data.phonenumber,
        gender: cat.data.data.gender,
        bloodgroup: cat.data.data.bloodgroup,
        mothername: cat.data.data.mothername,
        motheroccupation: cat.data.data.motheroccupation,
        motherphonenumber: cat.data.data.motherphonenumber,
        fathername: cat.data.data.fathername,
        fatheroccupation: cat.data.data.fatheroccupation,
        fatherphonenumber: cat.data.data.fatherphonenumber,
        sslcpercentage: cat.data.data.sslcpercentage,
        plustwopercentage: cat.data.data.plustwopercentage,
        entrancepercentage: cat.data.data.entrancepercecntage,
        dobpassing: cat.data.data.dobpassing,
        status: cat.data.data.status,
        
    };
    saveUserId(userid)
    localStorage.setItem("userDetails", JSON.stringify(userData));
    localStorage.setItem("userid",userid)
      }
    }catch(error)
    {
      alert("Username or Password invalid")
      
    }
  }
 const saveUserId = async(e)=>{
  const id = e
  console.log("ahem")
  console.log(id)
  try{ 
const cat = await axios.post("http://localhost:5000/saveuserid",{id})
  }
  catch(error)
  {
    console.log("error in userid saving")
  }
 }

  return (
    <div className='Userlogin-main'>
    <div className='Userlogin-container'>
    <img src={logo} className="logo"></img>

      <div className='Userlogin-loginbox'>
        <form className='Userlogin-form' onSubmit={verification}>
          <h2 className='Userlogin-form-text'>StudentLogin</h2>
          <input className='Userlogin-form-input' id='Userlogin-form-input-username'  onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'></input><br></br>
          <input className='Userlogin-form-input' id='Userlogin-form-input-password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'></input><br></br>
          <p className='Userlogin-form-termstext'>By login, you agree to over Terms & Conditions</p>
          <button type='submit' className='Userlogin-form-button'>Login Now</button>
          <p className='Userlogin-form-forgottext'>Forgot password?</p>
          <p className='Userlogin-form-createtext'>Don't have an account? <Link to='/usersignup'><span>Sign Up</span></Link>
          </p>
        </form>

      </div>
    </div>
  </div>
  )
}

export default Userlogin