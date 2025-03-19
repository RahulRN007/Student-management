import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import '../../Styles/User/Userattendence.css'
import React, { useEffect, useState } from "react";
import { FaMapPin, FaMapMarkerAlt, FaFemale, FaBriefcase, FaMale, FaUser, FaIdCard, FaBirthdayCake, FaUniversity, FaBook, FaCalendarAlt, FaEnvelope, FaPhone, FaVenusMars, FaTint, FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Userattendence() {

  // Example attendance data (Date : Status)
  const [attendance, setAttendance] = useState({
    "2024-03-01": "Present",
    "2024-03-05": "Absent",
    "2024-03-07": "Present",
    "2024-03-10": "Absent",
    "2024-03-12": "Present",
  });

  // Format date as YYYY-MM-DD
  const formatDate = (date) => date.toISOString().split("T")[0];

  // Customize calendar tiles (highlight attendance)
  const tileClassName = ({ date }) => {
    const dateStr = formatDate(date);
    if (attendance[dateStr] === "Present") return "present-day";
    if (attendance[dateStr] === "Absent") return "absent-day";
    return null;
  };



  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/150");
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");
  const [activeMenu, setActiveMenu] = useState(2)
  const navigate = useNavigate()

  const handleMenuClick = (menuId) => {
    if (menuId == 1) {
      setActiveMenu(menuId);
      navigate("/userlandingpage")
    }
    else if (menuId == 3) {
      setActiveMenu(menuId);
      navigate("/attendence")

    }
  };


  useEffect(() => {
    displayProfileDetails()

    // Retrieve profile picture from localStorage if available
    const storedProfilePic = localStorage.getItem("profilePic");
    if (storedProfilePic) {
      setProfilePic(storedProfilePic);
    }

  }, [])


  const [student, setStudent] = useState({
    name: "",
    marks: {
      "Semester 1": [85, 78, 92, 88, 76, 95],
      "Semester 2": [80, 85, 90, 86, 78, 92],
      "Semester 3": [88, 79, 94, 91, 83, 97],
      "Semester 4": [82, 81, 89, 87, 79, 93],
    },
  });


  const displayProfileDetails = () => {

    // const userid = location.state?.id

    // var cat = await axios.get(`http://localhost:5000/studentprofiledetails/${userid}`)
    // setStudent(cat.data.data)
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails) {
      setStudent(userDetails);
    }
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
      localStorage.setItem("profilePic", imageUrl); // Store image in local storage
    }
  };

  const logout = () => {
    localStorage.removeItem("userDetails");
    navigate("/userlogin")
  }

  return (
    <div className='student-profile'>
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

        <div className="calendar-container">
          <h2>Student Attendance</h2>
          <Calendar tileClassName={tileClassName} />
          <div className="legend">
            <span className="legend-box present"></span> Present
            <span className="legend-box absent"></span> Absent
          </div>
        </div>
      </div>

    </div>
  )
}

export default Userattendence