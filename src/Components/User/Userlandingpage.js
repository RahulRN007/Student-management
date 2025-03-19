  import React, { useEffect, useState } from "react";
  import "../../Styles/User/Userlandingpage.css";
  import { FaMapPin, FaMapMarkerAlt, FaFemale, FaBriefcase, FaMale, FaUser, FaIdCard, FaBirthdayCake, FaUniversity, FaBook, FaCalendarAlt, FaEnvelope, FaPhone, FaVenusMars, FaTint, FaUserFriends } from "react-icons/fa";
  import { Link, useNavigate } from "react-router-dom";
  import { useLocation } from "react-router-dom";
  import axios from 'axios'
  import { CgPassword } from "react-icons/cg";

  function Userlandingpage() {
    const [profilePic, setProfilePic] = useState(localStorage.getItem("profilePic") || "https://via.placeholder.com/150");

    const [selectedSemester, setSelectedSemester] = useState("Semester 1");
    const [activeMenu, setActiveMenu] = useState(1)
    const navigate = useNavigate()
    const location = useLocation()
    
    const handleMenuClick = (menuId) => {
      if(menuId == 2){
          setActiveMenu(menuId);
          navigate("/usermark")
      }
      else if(menuId == 3){
          setActiveMenu(menuId);
          navigate("/attendence")

      }
      };
      

    const [student , setStudent] = useState({
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
      password:"",
        mothername: "",
        motheroccupation: "",
        motherphonenumber: null,
        fathername: "",
        fatheroccupation: "",
        fatherphonenumber:null,
        sslcpercentage:null,
          plustwopercentage:null,
          entrancepercentage:null,
          dobpassing:"",
      
    //   marks: {
    //     "Semester 1": [85, 78, 92, 88, 76, 95],
    //     "Semester 2": [80, 85, 90, 86, 78, 92],
    //     "Semester 3": [88, 79, 94, 91, 83, 97],
    //     "Semester 4": [82, 81, 89, 87, 79, 93],
      // },
    });

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file); // Convert to Base64
        reader.onload = () => {
          const base64Image = reader.result; // Get Base64 string
          setProfilePic(base64Image);
          localStorage.setItem("profilePic", base64Image); // Store Base64 in localStorage
        };
      }
    };

  const displayProfileDetails=()=>{
    
    // const userid = location.state?.id
    
    // var cat = await axios.get(`http://localhost:5000/studentprofiledetails/${userid}`)
    // setStudent(cat.data.data)
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails) {
      setStudent(userDetails);
    }
  }
  useEffect(()=>{
    displayProfileDetails()
    if(localStorage.getItem("userDetails") == null){
      navigate('/userlogin')
    }
    const storedProfilePic = localStorage.getItem("profilePic");
    if (storedProfilePic) {
      setProfilePic(storedProfilePic);
    }
  
  },[location.state?.id])


  const logout = () =>{
    localStorage.removeItem("userDetails");
    navigate("/userlogin")
  }

    return (
      <div className="student-profile">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Dashboard</h2>
          <ul>
            
            <li className={`Userlanding-menu ${activeMenu === 1 ? 'active' : ''}`}
              onClick={() => handleMenuClick(1)}>Profile</li>
            <Link to='/usermark'><li className={`Userlanding-menu ${activeMenu === 2 ? 'active' : ''}`}
              onClick={() => handleMenuClick(2)}>Performance</li></Link>
            <Link to='/userattendence'><li className={`Userlanding-menu ${activeMenu === 3 ? 'active' : ''}`}
              onClick={() => handleMenuClick(3)}>Attendance</li></Link>
            <li className="Userlanding-menu">Subjects</li>
            <li className="Userlanding-menu" onClick={logout}>Logout</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="profile-content">
          {/* Profile Header */}
          <div className="profile-header">
            <label htmlFor="profilePicInput" className="profile-pic-container">
              <img src={profilePic} alt="Profile" className="profile-pic" />
              <input type="file" id="profilePicInput" accept="image/*" onChange={handleImageChange} hidden />
            </label>
            <h2 className="profile-name">{student.name}</h2>
          </div>

          {/* Student Details */}
          
          <div className="profile-details">
            <div className="info-box"><FaUser className="icon" /><span>Name: {student.name}</span></div>
            <div className="info-box"><FaIdCard className="icon" /><span>ID: {student.id}</span></div>
            <div className="info-box"><FaBirthdayCake className="icon" /><span>Age: {student.age}</span></div>
            <div className="info-box"><FaVenusMars className="icon" /><span>Gender: {student.gender}</span></div>
            <div className="info-box"><FaTint className="icon" /><span>Blood Group: {student.bloodgroup}</span></div>
            <div className="info-box"><FaUniversity className="icon" /><span>Semester: {student.semester}</span></div>
            <div className="info-box"><FaBook className="icon" /><span>Department: {student.department}</span></div>
            <div className="info-box"><FaEnvelope className="icon" /><span>Email: {student.email}</span></div>
            <div className="info-box"><FaPhone className="icon" /><span>Phone: {student.phonenumber}</span></div>
            <div className="info-box"><FaMapMarkerAlt className="icon" /><span>Address: {student.address}</span></div>
            <div className="info-box"><FaMapPin className="icon" /><span>Pincode: {student.pincode}</span></div>

          </div>

          {/* Parent Details Section */}
          <div className="parent-details">
            <div className="parent-header">
              <h3>Parent Details</h3></div>
            <div className="parent-details-data">
              <div className="info-box"><FaFemale className="icon" /><span>Mother's Name: {student.mothername}</span></div>
              <div className="info-box"><FaBriefcase className="icon" /><span>Mother's Occupation: {student.motheroccupation}</span></div>
              <div className="info-box"><FaPhone className="icon" /><span>Mother's Number: {student.motherphonenumber}</span></div>

              <div className="info-box"><FaMale className="icon" /><span>Father's Name: {student.fathername}</span></div>
              <div className="info-box"><FaBriefcase className="icon" /><span>Father's Occupation: {student.fatheroccupation}</span></div>
              <div className="info-box"><FaPhone className="icon" /><span>Father's Number: {student.fatherphonenumber}</span></div>
              <div className="info-box"><FaPhone className="icon" /><span>SSLC Percentage: {student.sslcpercentage}</span></div>
              <div className="info-box"><FaPhone className="icon" /><span>Plus Two Percentage: {student.plustwopercentage}</span></div>
              <div className="info-box"><FaPhone className="icon" /><span>Entrance Percentage: {student.entrancepercentage}</span></div>
              <div className="info-box"><FaPhone className="icon" /><span>Date-of-Passing(Plus Two): {student.dobpassing}</span></div>
            </div>
          </div>

        
        </div>
      </div>
    );
  }

  export default Userlandingpage;
