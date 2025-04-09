import React, { useState, useEffect } from 'react';
// import { AppContext } from '../../Contexts/AppContext'; // Import the context
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/logo2.png';
import { LuLayoutDashboard } from "react-icons/lu";
import { TbListDetails } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import '../../Styles/Admin/Admindashboard.css'
import college from '../../Images/college.jpg'
import { PieChart } from '@mui/x-charts';

function Admindashboard() {
  // const { loginInfo } = useContext(AppContext); // Access loginInfo from context
  // console.log(loginInfo)
  const navigate = useNavigate();
  const [count, setCount] = useState([]);
  
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
    // viewlikes()
    accloggeddetails()
    acccreateddetails()
    mechCount()
    csCount()
    eeeCount()
    ecCount()
    ceCount()
    
  }, []);

  const [mech, setMech] = useState([]);
  const mechCount = async()=>{
    try{
  const cat = await axios.get("http://localhost:5000/sortmech")
  console.log("jajaja")
  console.log(cat.data.data.length)
  setMech(cat.data.data.length)
    }
    catch(error){
  
    }
  }
  const [cs, setCs] = useState([]);
  const csCount = async()=>{
    try{
  const cat = await axios.get("http://localhost:5000/sortcs")
  console.log("jajaja")
  console.log(cat.data.data.length)
  setCs(cat.data.data.length)
    }
    catch(error){
  
    }
  }
  const [ec, setEc] = useState([]);
  const ecCount = async()=>{
    try{
  const cat = await axios.get("http://localhost:5000/sortec")
  console.log("jajaja")
  console.log(cat.data.data.length)
  setEc(cat.data.data.length)
    }
    catch(error){
  
    }
  }
  const [eee, setEee] = useState([]);
  const eeeCount = async()=>{
    try{
  const cat = await axios.get("http://localhost:5000/sorteee")
  console.log("jajaja")
  console.log(cat.data.data.length)
  setEee(cat.data.data.length)
    }
    catch(error){
  
    }
  }
  const [ce, setCe] = useState([]);
  const ceCount = async()=>{
    try{
  const cat = await axios.get("http://localhost:5000/sortce")
  console.log("jajaja")
  console.log(cat.data.data.length)
  setCe(cat.data.data.length)
    }
    catch(error){
  
    }
  }

  const [view,setView]=useState([])
const viewlikes = async()=>{
    try{
        const cat = await axios.get("http://localhost:5000/likeview")
        setView(cat.data.data)
        console.log(cat.data.data);
        
    }
    catch(error){
        console.log(" viewlikes error");
    }
}
const [logged,setLogged] = useState([])
const accloggeddetails = async()=>{
  try{
const cat = await axios.get("http://localhost:5000/userlogintime")
console.log(cat.data.data)
setLogged(cat.data.data)
  }
  catch(error){

  }
}


const [created,setCreated] = useState([])
const acccreateddetails = async()=>{
  try{
const cat = await axios.get("http://localhost:5000/createlogintime")
console.log(cat.data.data)
setCreated(cat.data.data)
  }
  catch(error){

  }
}

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
          
            <div className='Admindashboard-grid-small'>
              <div className='Admindashboard-grid-small1'>
              <h3>Total Number of students: {count}</h3>
              </div>
              
              <div className='Admindashboard-grid-small3'>
              <h3 style={{ marginLeft: '1rem',marginTop:'1rem' }}>Statistics</h3>
  <PieChart className='Admindashboard-piechart'
    series={[
      {
        data: [
          { id: 0, value: cs, label: 'CS' },
          { id: 1, value: eee, label: 'EEE' },
          { id: 2, value: ec, label: 'EC' },
          { id: 3, value: mech, label: 'MECH' },
          { id: 4, value: ce, label: 'CE' },
        ],
        innerRadius: 40,
        outerRadius: 80,
        paddingAngle: 5,
        cornerRadius: 5,
      },
    ]}
    width={300}
    height={200}
  />
              </div>
              <div className='Admindashboard-grid-small2'></div>
              </div>
            <div className='Admindashboard-grid-large'>
              <div className="Admindashboard-grid-small5">
      <div className="Admindashboard-header">
        <h2>Students Login</h2>
      </div>
      <div className="Admindashboard-table-header">
        <span>Name</span>
        <span>Department</span>
        <span>Semester</span>
        <span>Time</span>
        <span>Logged</span>
        <span></span>
      </div>
      {logged.map((item, index) => (
        <div className="Admindashboard-row" key={index}>
          <span>{item.userid?.name}</span>
          <span>{item.userid?.department}</span>
          <span>{item.userid?.semester}</span>

          <span>{new Date(item.logintime).toLocaleString()}</span>
          <span className="more-options">Logged In</span>
        </div>
      ))}
    </div>
              <div className='Admindashboard-grid-small6'>
              <div className="Admindashboard-header">
        <h2>Accounts Created</h2>
      </div>
      <div className="Admindashboard-table-header">
        <span>Name</span>
        <span>Department</span>
        <span>Semester</span>
        <span>Time</span>
        <span>Created</span>
        <span></span>
      </div>
      {created.map((item, index) => (
        <div className="Admindashboard-row" key={index}>
          <span>{item.userid?.name}</span>
          <span>{item.userid?.department}</span>
          <span>{item.userid?.semester}</span>
          <span>{new Date(item.logintime).toLocaleString()}</span>
          <span className="more-options">Acc Created</span>
        </div>
      ))}
              </div>

            </div>
            {/* <div className="Admindashboard-grid" id="grid1">
              <h3>Total Number of students: {count}</h3>
            </div>
            <div className="Admindashboard-grid" id="grid2">
              <h3>Total Number of students in MECH: {/* Mech count here </h3>
              <h3>Total Number of students in CS: </h3>
              <h3>Total Number of students in EC: </h3>
              <h3>Total Number of students in EEE: </h3>
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

            <div className="Admindashboard-grid" id="grid4"> */}

            
          </div>
        </div>
      </div>
    
    
  );
}

export default Admindashboard;
