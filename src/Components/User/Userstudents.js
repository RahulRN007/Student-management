import React, { useEffect, useState } from "react";
import "../../Styles/User/Userstudents.css";
import { FaMapPin, FaMapMarkerAlt, FaFemale, FaBriefcase, FaMale, FaUser, FaIdCard, FaBirthdayCake, FaUniversity, FaBook, FaCalendarAlt, FaEnvelope, FaPhone, FaVenusMars, FaTint, FaUserFriends } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { CgPassword } from "react-icons/cg";

function Userstudents() {
  const [profilePic, setProfilePic] = useState(localStorage.getItem("profilePic") || "https://via.placeholder.com/150");

  const [selectedSemester, setSelectedSemester] = useState("Semester 1");
  const [activeMenu, setActiveMenu] = useState(4)
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
    else if(menuId == 1){
        setActiveMenu(menuId);
        navigate("/userlandingpage")
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

    const [students, setStudents] = useState([])
const studentDetails = async () => {
        const api = await axios.get("http://localhost:5000/adminstudentdetails")
        setStudents(api.data.data)

        studentDetails()

    }


const [like,setLike] = useState({})
    const handleLike = async(id)=>{
        setLike((prev) => ({
            ...prev,
            [id]: !prev[id], 
          }));
        const likeruserid = id
        const likeduserid = localStorage.getItem("userid");
        try{
           var api = await axios.post("http://localhost:5000/like",{likeruserid,likeduserid})
           

        }
        catch(error){
            console.log("like error");
            
        }
    }

useEffect(()=>{
    studentDetails()

},[])


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
          <Link to='/userstudents'><li className={`Userlanding-menu ${activeMenu === 4 ? 'active' : ''}`}
            onClick={() => handleMenuClick(4)}>Students</li></Link>
          <li className="Userlanding-menu" onClick={logout}>Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="profile-content">
        {/* Profile Header */}
        <div className="profile-header">
          <label htmlFor="profilePicInput" className="profile-pic-container">
            {/* <img src={profilePic} alt="Profile" className="profile-pic" />
            <input type="file" id="profilePicInput" accept="image/*" onChange={handleImageChange} hidden /> */}
          </label>
          <h2 className="profile-name">Students Details</h2>
        </div>
        <div className='Adminstudentdetails-details-tab'>
                        <table className='Adminstudentdetails-table'>
                            <thead className='Adminstudentdetails-table-heading'>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Dob</th>
                                    <th>Email</th>
                                    <th>Semester</th>
                                    <th>Department</th>
                                    <th>PhoneNumber</th>
                                    <th>Like</th>
                                    
                                </tr>
                            </thead>
                            {students.map((student, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.age}</td>
                                        <td>{student.dob}</td>
                                        <td>{student.email}</td>
                                        <td>{student.semester}</td>
                                        <td>{student.department}</td>
                                        <td>{student.phonenumber}</td>
                                        <td><button type="button" onClick={() => handleLike(student._id)}>{like[student._id] ? "liked" : "like"}</button></td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>

                    </div>
      </div>
    </div>
  );
}

export default Userstudents;
