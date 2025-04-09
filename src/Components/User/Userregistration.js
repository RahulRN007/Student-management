import React, { useState, } from 'react'
import '../../Styles/User/Userregistration.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../../Images/logo2.png'

function Userregistration() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        id: "",
        age: null,
        gender: "",
        bloodgroup: "",
        semester: "",
        department: "",
        dob: "",
        email: "",
        phonenumber: null,
        address: "",
        pincode: null,
        password: "",
        mothername: "",
        motheroccupation: "",
        motherphonenumber: null,
        fathername: "",
        fatheroccupation: "",
        fatherphonenumber: null,
        sslcpercentage: null,
        plustwopercentage: null,
        entrancepercentage: null,
        dobpassing: "",
        
    })
    const handlechange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: name === 'age' || name === 'phonenumber' || name === 'fatherphonenumber' || name === 'motherphonenumber' || name === 'pincode' || name === 'sslcpercentage' || name === 'plustwopercentage' || name === 'entrancepercentage'
                ? Number(value)
                : value

        }));
        console.log(data)
    };

    const handlesubmit = async (e) => {
        e.preventDefault()
        console.log(data)
        try {
            console.log("adi sakke")
            const cat = await axios.post("http://localhost:5000/registration", data)
            if(cat.data.msg == "Saved successfully"){
                console.log(cat.data.id)
                const val = cat.data.id
                accCreated(val)
                navigate("/userlogin")
                
            }
            
        }
        catch (error) {
            console.log('error', error)
        }
    }

const accCreated=async(e)=>{
    
    const id = e
    console.log(id)
    try{ 
        const cat = await axios.post("http://localhost:5000/createaccid",{id})
          }
          catch(error)
          {
            console.log("error in createaccid saving")
          }
}

    return (
        <div className='Userregistration-main'>
            <div className='Userregistration-container'>
                <img src={logo} className="logo"></img>
                <div className='Userregistration-form-maindiv'>
                    <div className='Userregistration-form-subdiv'>
                        <form class="Userregistration-form" onSubmit={handlesubmit}>
                            <p class="Userregistration-title">Register </p>
                            <p class="Userregistration-message"><h4>Personal Details</h4> </p>
                            <div class="Userregistration-flex">
                                <label>
                                    <input type="text" class="Userregistration-input" name='name' value={data.name} onChange={handlechange} ></input>
                                    <span>Name</span>
                                </label>

                                <label>
                                    <input type="text" class="Userregistration-input" name='id' value={data.id} onChange={handlechange}></input>
                                    <span>College ID</span>
                                </label>
                            </div>
                            <div class="Userregistration-flex">
                                <label>
                                    <input type="email" class="Userregistration-input" name='email' value={data.email} onChange={handlechange}></input>
                                    <span>Email</span>
                                </label>

                                <label>
                                    <input min={18} max={24} type="number" name='age' class="Userregistration-input" value={data.age} onChange={handlechange}></input>
                                    <span>Age</span>
                                </label>
                            </div>
                            <div className='Userregistration-flex'>
                                <label>
                                    <input required="" placeholder="Ex: Male" type="text" class="Userregistration-input" name='gender' onChange={handlechange} value={data.gender}></input>
                                    <span>Gender</span>
                                </label>
                                <label>
                                    <input required="" placeholder="Ex: B-ve" type="text" class="Userregistration-input" name='bloodgroup' onChange={handlechange} value={data.bloodgroup}></input>
                                    <span>BloodGroup</span>
                                </label>
                            </div>
                            <div class="Userregistration-flex">
                                <label>
                                    <input type="date" class="Userregistration-input" name='dob' onChange={handlechange} value={data.dob}></input>
                                    <span>Dob</span>
                                </label>
                                <label>
                                    <input type="number" class="Userregistration-input" name='semester' onChange={handlechange} value={data.semester}></input>
                                    <span>Semester</span>
                                </label>
                            </div>
                            <div class="Userregistration-flex">
                                <label>
                                    <input type="text" class="Userregistration-input" name='department' onChange={handlechange} value={data.department}></input>
                                    <span>Department</span>
                                </label>
                                <label>
                                    <input type="number" class="Userregistration-input" name='phonenumber' onChange={handlechange} value={data.phonenumber}></input>
                                    <span>PhoneNumber</span>
                                </label>
                            </div>
                            <div className='Userregistration-flex'>
                                <label>
                                    <input type="text" class="Userregistration-input" name='address' onChange={handlechange} value={data.address}></input>
                                    <span>Address</span>
                                </label>
                                <label>
                                    <input required="" placeholder="number" type="text" class="Userregistration-input" name='pincode' onChange={handlechange} value={data.pincode}></input>
                                    <span>Pincode</span>
                                </label>
                            </div>
                            <p class="Userregistration-message"><h4>Guardian's Details</h4> </p>

                            <div className='Userregistration-flex'>
                                <label>
                                    <input type="text" class="Userregistration-input" name='mothername' onChange={handlechange} value={data.mothername}></input>
                                    <span>Mother's Name</span>
                                </label>
                                <label>
                                    <input type="text" class="Userregistration-input" name='motheroccupation' onChange={handlechange} value={data.motheroccupation}></input>
                                    <span>Mother's Occupation</span>
                                </label>
                                <label>
                                    <input type="number" class="Userregistration-input" name='motherphonenumber' onChange={handlechange} value={data.motherphonenumber}></input>
                                    <span>Mother's PhoneNumber</span>
                                </label>
                            </div>
                            <div className='Userregistration-flex'>
                                <label>
                                    <input type="text" class="Userregistration-input" name='fathername' onChange={handlechange} value={data.fathername}></input>
                                    <span>Father's Name</span>
                                </label>
                                <label>
                                    <input type="text" class="Userregistration-input" name='fatheroccupation' onChange={handlechange} value={data.fatheroccupation}></input>
                                    <span>Father's Occupation</span>
                                </label>
                                <label>
                                    <input type="number" class="Userregistration-input" name='fatherphonenumber' onChange={handlechange} value={data.fatherphonenumber}></input>
                                    <span>Father's PhoneNumber</span>
                                </label>
                            </div>
                            <p class="Userregistration-message"><h4>Education Details</h4> </p>
                            <div className='Userregistration-flex'>
                                <label>
                                    <input type="number" min={1} max={100} class="Userregistration-input" name='sslcpercentage' onChange={handlechange} value={data.sslcpercentage}></input>
                                    <span>SSLC Percentage</span>
                                </label>
                                <label>
                                    <input type="number" min={1} max={100} class="Userregistration-input" name='plustwopercentage' onChange={handlechange} value={data.plustwopercentage}></input>
                                    <span>Plus Two Percentage</span>
                                </label>
                            </div>
                            <p class="Userregistration-message"><h4>Education Details</h4> </p>
                            <div className='Userregistration-flex'>
                                <label>
                                    <input type="number" min={1} max={100} class="Userregistration-input" name='entrancepercentage' onChange={handlechange} value={data.entrancepercentage}></input>
                                    <span>Entrance Percentage</span>
                                </label>
                                <label>
                                    <input type="date" class="Userregistration-input" name='dobpassing' onChange={handlechange} value={data.dobpassing}></input>
                                    <span>Date-of-passing(Plus Two)</span>
                                </label>
                            </div>
                            <div class="Userregistration-flex">
                                <label>
                                    <input type="password" class="Userregistration-input" name='password' onChange={handlechange} value={data.password}></input>
                                    <span>Password</span>
                                </label>
                                <label>
                                    <input type="password" class="Userregistration-input" name='confirmpassword' onChange={handlechange}></input>
                                    <span>Confirm password</span>
                                </label>

                            </div>
                            <button class="Userregistration-submit" type='submit'>Submit</button></form></div>
                    <div className='Userregistration-signin-div'>
                        <p class="Userregistration-signin">Already have an acount ? <Link to='/Userlogin'><a href="#">Signin</a></Link> </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Userregistration