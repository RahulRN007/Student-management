import React from 'react'
import {Link} from 'react-router-dom'
import '../../Styles/Admin/Adminuserpage.css'
import logo from "../../Images/logo2.png"

function Adminuserpage() {
  return (
    <div className='Adminuserpage-main'>
      <div className='Adminuserpage-navbar'>
        <div className='Adminuserpage-logo-div'>
          <img src={logo} className='Adminuserpage-logo'></img>
        </div>
        <div className='Adminuserpage-menu'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='Adminuserpage-navbar-button'>
        <Link to='/userlogin'> <button className='Adminuserpage-navbar-button-buttons'>Student Login</button></Link>
        <Link to='/Adminlogin'> <button className='Adminuserpage-navbar-button-buttons'>Admin Login</button></Link>
        </div>
      </div>
      <div className='Adminuserpage-mid'>
        <div className='Adminuserpage-mid-first'>        <h1 className='Adminuserpage-mid-first-learn'>Learn</h1> <h1 className='Adminuserpage-mid-first-lead'>Lead</h1> <h1 className='Adminuserpage-mid-first-succeed'>Succeed</h1>
        <h4>Empowering students through excellence in education, innovation, and integrity.<br></br>
        Join a vibrant campus where learning meets opportunity and dreams take flight.</h4>
</div>
        {/* <div className='Adminuserpage-button-container'> */}
       {/* 
         */}
        {/* </div> */}
      </div>
        
    </div>
  )
}

export default Adminuserpage