import React from 'react'
import {Link} from 'react-router-dom'
import '../../Styles/Admin/Adminuserpage.css'

function Adminuserpage() {
  return (
    <div className='Adminuserpage-main'>
        <div className='Adminuserpage-button-container'>
       <Link to='/userlogin'> <button>User</button></Link>
       <Link to='/Adminlogin'> <button>Admin</button></Link>
        
        </div>
    </div>
  )
}

export default Adminuserpage