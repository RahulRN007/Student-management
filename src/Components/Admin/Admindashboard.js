import React, { useState } from 'react'
import "../../Styles/Admin/Admindashboard.css"
import { LuLayoutDashboard } from "react-icons/lu";
import { TbListDetails } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/logo2.png'


function Admindashboard() {
  
  const navigate = useNavigate()
  const [activeMenu, setActiveMenu] = useState(1)
  const handleMenuClick = (menuId) => {
    if(menuId == 2){
      navigate("/studentdetails")
      setActiveMenu(menuId);
      
    }
    else if(menuId == 3){
      setActiveMenu(menuId);

    }
  };


  


  return (
    <div className='Admindashboard-main'>
      <div className='Admindashboard-container'>
      <img src={logo} className="Admindashboard-logo"></img>

        <div className='Admindashboard-sidebar'>
          <div
            className={`Admindashboard-menu ${activeMenu === 1 ? 'active' : ''}`}
            onClick={() => handleMenuClick(1)}
          >
           <LuLayoutDashboard className='menu-icons'/> <h4 className='menu-names'>Dashboard</h4>
          </div>
          <div
          
            className={`Admindashboard-menu ${activeMenu === 2 ? 'active' : ''}`}
            onClick={() => handleMenuClick(2)}
          >
            <TbListDetails className='menu-icons'/><h4 className='menu-names'>StudentDetails</h4>
             </div>
            <div
              className={`Admindashboard-menu ${activeMenu === 3 ? 'active' : ''}`}
              onClick={() => handleMenuClick(3)}
            >
              <RiSettings4Line className='menu-icons'/><h4 className='menu-names'>Menu3</h4>
            </div>       
        </div>
        <div className='Admindashboard-rightside'>
          <div className='Admindashboard-gridcontainer'>
            <div className='Admindashboard-grid' id='grid1'></div>
            <div className='Admindashboard-grid' id='grid2'></div>
            <div className='Admindashboard-grid' id='grid3'></div>
            <div className='Admindashboard-grid' id='grid4'></div>
          </div>
        </div>
      </div>
      </div>
      )
}

      export default Admindashboard