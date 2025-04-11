import { React, useState } from 'react'
import '../../Styles/Admin/Adminlogin.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../../Images/logo2.png'

function Adminlogin() {
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const navigate = useNavigate()
    const verification = async (e) => {
        e.preventDefault()
        const admin1 = "admin1"
        const pass1 = "admin123"
        const admin2 = "admin2"
        const pass2 = "admin321"
        if(admin1 == email && pass1 == password){
            navigate("/admindashboard")
            alert("Successfully logged in")
            localStorage.setItem("admin",admin1)

        }
        else if(admin2 == email && pass2 == password){
            navigate("/admindashboard")
            alert("Successfully logged in")
            localStorage.setItem("admin",admin2)
        }
        else
        {
            alert("Invalid Credentials")
        }

        }
    
    return (
        <div className='Adminlogin-main'>
            <div className='Adminlogin-container'>
                <img src={logo} className="logo"></img>

                <div className='Adminlogin-loginbox'>
                    <form className='Adminlogin-form' onSubmit={verification}>
                        <h2 className='Adminlogin-form-text'>AdminLogin</h2>
                        <input className='Adminlogin-form-input' id='Adminlogin-form-input-username' placeholder='Username' onChange={(e) => { setEmail(e.target.value) }}></input><br></br>
                        <input className='Adminlogin-form-input' id='Adminlogin-form-input-password' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }}></input><br></br>
                        <button type='submit' className='Adminlogin-form-button'>Login Now</button>
                        <p className='Adminlogin-form-forgottext'>Forgot password?</p>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Adminlogin