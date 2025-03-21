import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../Contexts/AppContext'; // Import the context
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/logo2.png';
import { LuLayoutDashboard } from "react-icons/lu";
import { TbListDetails } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import '../../Styles/Admin/Admindashboard.css'

function Admindashboard() {
  const { loginInfo } = useContext(AppContext); // Access loginInfo from context
  console.log(loginInfo)
  const navigate = useNavigate();
  const [count, setCount] = useState([]);
  const [messages, setMessages] = useState([
    
  ]);
  const [activeMenu, setActiveMenu] = useState(1)
      const handleMenuClick = (menuId) => {
          if (menuId == 2) {
              setActiveMenu(menuId);
              navigate("/studentdetails")
          }
          else if (menuId == 3) {
              setActiveMenu(menuId);
  
          }
      };
  useEffect(() => {
    const fetchStudentDetails = async () => {
      const api = await axios.get("http://localhost:5000/adminstudentdetails");
      setCount(api.data.data.length);
    };
    fetchStudentDetails();
    ;
    
  }, []);

  return (
    <div className="Admindashboard-main">
      <div className="Admindashboard-container">
        <img src={logo} className="Admindashboard-logo" alt="Logo" />

        <div className='Adminstudentdetails-sidebar'>
                    <img src={logo} className="Adminstudentdetails-logo"></img>
                    <div
                        className={`Adminstudentdetails-menu ${activeMenu === 1 ? 'active' : ''}`}
                        onClick={() => handleMenuClick(1)}
                    >
                        <LuLayoutDashboard className='menu-icons' /> <h4 className='menu-names'>Dashboard</h4>
                    </div>
                    <div
                        className={`Adminstudentdetails-menu ${activeMenu === 2 ? 'active' : ''}`}
                        onClick={() => handleMenuClick(2)}
                    >
                        <TbListDetails className='menu-icons' /><h4 className='menu-names'>StudentDetails</h4>
                    </div>
                    <div
                        className={`Adminstudentdetails-menu ${activeMenu === 3 ? 'active' : ''}`}
                        onClick={() => handleMenuClick(3)}
                    >
                        <RiSettings4Line className='menu-icons' /><h4 className='menu-names'>Menu3</h4>
                    </div>
                    </div>

        <div className="Admindashboard-rightside">
          <div className="Admindashboard-gridcontainer">
            <div className="Admindashboard-grid" id="grid1">
              <h3>Total Number of students: {count}</h3>
            </div>
            <div className="Admindashboard-grid" id="grid2">
              <h3>Total Number of students in MECH: {/* Mech count here */}</h3>
              <h3>Total Number of students in CS: {/* CS count here */}</h3>
              <h3>Total Number of students in EC: {/* EC count here */}</h3>
              <h3>Total Number of students in EEE: {/* EEE count here */}</h3>
            </div>

            <div className="Admindashboard-grid" id="grid3">
              <h3>Messages:</h3>
              <div className="message-tiles">
                {messages.map((msg, index) => (
                  <div key={index} className="message-tile">
                    <p>{msg}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="Admindashboard-grid" id="grid4"> {loginInfo && (
    <p>{loginInfo.username} signed in at {loginInfo.time}</p>
  )}</div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Admindashboard;
