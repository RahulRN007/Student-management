import { Link, useNavigate } from 'react-router-dom'
import "../../Styles/Admin/Adminstudentdetails.css"
import React, { useEffect, useState } from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { TbListDetails } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import axios from 'axios'
import logo from '../../Images/logo2.png'



function Adminstudentdetails() {
    const [students, setStudents] = useState([])
    const [editdetails, setEditdetails] = useState({})
    const [editbutton, setEditbutton] = useState(false)
    const navigate = useNavigate()
    const [activeMenu, setActiveMenu] = useState(2)
    const [searchQuery, setSearchQuery] = useState("")
    const handleMenuClick = (menuId) => {
        if (menuId == 1) {
            setActiveMenu(menuId);
            navigate("/admindashboard")
        }
        else if (menuId == 3) {
            setActiveMenu(menuId);

        }
    };

    const studentDetails = async () => {
        const api = await axios.get("http://localhost:5000/adminstudentdetails")
        setStudents(api.data.data)
        studentDetails()

    }

    useEffect(() => {
        studentDetails()
    }, [])


    const handleActive = async (id) => {

        const val = id
        try {
            var api = await axios.post(`http://localhost:5000/activedeactive/${val}`)
            console.log("blah");
            setEditdetails(api.data.data.status)
            studentDetails()
        }
        catch (error) {
            console.log("Delete error!!!", error)
        }
    }


    const handleEdit = async (id) => {
        setEditbutton(!editbutton)
        const val = id
        try {
            var cat = await axios.post(`http://localhost:5000/editdetails/${val}`)
            setEditdetails(cat.data.data);
            studentDetails()

        }
        catch (error) {
            console.log("Edit error!!!")
        }
    }


    const handleupdate = async (e) => {
        e.preventDefault()
        setEditbutton(!editbutton)
        try {
            const cat = await axios.post(`http://localhost:5000/updatedetails/${editdetails._id}`, editdetails)
            await studentDetails()
            setEditbutton(false);

        } catch (error) {
            console.log(" handleupdate error");

        }
    }
    const filteredStudents = students.filter(student =>

        student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className='Adminstudentdetails-main'>
            <div className='Adminstudentdetails-container'>
                <div class="searchBox">
                    <form className='Adminstudentdetails-form'>
                        <input class="searchInput" type="text" name="" placeholder="Search something" onChange={(e) => setSearchQuery(e.target.value)}></input>
                        <button class="searchButton" href="#"  value={searchQuery}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                <g clip-path="url(#clip0_2_17)">
                                    <g filter="url(#filter0_d_2_17)">
                                        <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"></path>
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                        <feOffset dy="4"></feOffset>
                                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
                                    </filter>
                                    <clipPath id="clip0_2_17">
                                        <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button></form>
                </div>
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
                <div className='Adminstudentdetails-rightside'>

                    {editbutton && (

                        <div className='update_details_popup'>
                            <div className='update_details_popup_contents'>

                                <div className='Userregistration-form-maindiv'>
                                    <div className='Userregistration-form-subdiv'>
                                        <form class="Userregistration-form" onSubmit={handleupdate}>
                                            <p class="Userregistration-title">{editdetails.name} Details</p>
                                            <p class="Userregistration-message"><h4>Personal Details</h4> </p>
                                            <div class="Userregistration-flex">
                                                <label>
                                                    <input type="text" class="Userregistration-input" name='name' onChange={e => setEditdetails({ ...editdetails, name: e.target.value })} value={editdetails.name} ></input>
                                                    <span>Name</span>
                                                </label>

                                                <label>
                                                    <input type="text" class="Userregistration-input" name='id' onChange={e => setEditdetails({ ...editdetails, id: e.target.value })} value={editdetails.id}></input>
                                                    <span>College ID</span>
                                                </label>
                                            </div>
                                            <div class="Userregistration-flex">
                                                <label>
                                                    <input type="email" class="Userregistration-input" name='email' onChange={e => setEditdetails({ ...editdetails, email: e.target.value })} value={editdetails.email}></input>
                                                    <span>Email</span>
                                                </label>

                                                <label>
                                                    <input min={18} max={24} type="number" name='age' class="Userregistration-input" onChange={e => setEditdetails({ ...editdetails, age: e.target.value })} value={editdetails.age}></input>
                                                    <span>Age</span>
                                                </label>
                                            </div>
                                            <div className='Userregistration-flex'>
                                                <label>
                                                    <input required="" placeholder="Ex: Male" type="text" class="Userregistration-input" name='gender' onChange={e => setEditdetails({ ...editdetails, gender: e.target.value })} value={editdetails.gender}></input>
                                                    <span>Gender</span>
                                                </label>
                                                <label>
                                                    <input required="" placeholder="Ex: B-ve" type="text" class="Userregistration-input" name='bloodgroup' onChange={e => setEditdetails({ ...editdetails, bloodgroup: e.target.value })} value={editdetails.bloodgroup}></input>
                                                    <span>BloodGroup</span>
                                                </label>
                                            </div>
                                            <div class="Userregistration-flex">
                                                <label>
                                                    <input type="date" class="Userregistration-input" name='dob' onChange={e => setEditdetails({ ...editdetails, dob: e.target.value })} value={editdetails.dob}></input>
                                                    <span>Dob</span>
                                                </label>
                                                <label>
                                                    <input type="number" class="Userregistration-input" name='semester' onChange={e => setEditdetails({ ...editdetails, semester: e.target.value })} value={editdetails.semester}></input>
                                                    <span>Semester</span>
                                                </label>
                                            </div>
                                            <div class="Userregistration-flex">
                                                <label>
                                                    <input type="text" class="Userregistration-input" name='department' onChange={e => setEditdetails({ ...editdetails, department: e.target.value })} value={editdetails.department}></input>
                                                    <span>Department</span>
                                                </label>
                                                <label>
                                                    <input type="number" class="Userregistration-input" name='phonenumber' onChange={e => setEditdetails({ ...editdetails, phonenumber: e.target.value })} value={editdetails.phonenumber}></input>
                                                    <span>PhoneNumber</span>
                                                </label>
                                            </div>
                                            <div className='Userregistration-flex'>
                                                <label>
                                                    <input type="text" class="Userregistration-input" name='address' onChange={e => setEditdetails({ ...editdetails, address: e.target.value })} value={editdetails.address}></input>
                                                    <span>Address</span>
                                                </label>
                                                <label>
                                                    <input required="" placeholder="number" type="text" class="Userregistration-input" name='pincode' onChange={e => setEditdetails({ ...editdetails, pincode: e.target.value })} value={editdetails.pincode}></input>
                                                    <span>Pincode</span>
                                                </label>
                                            </div>
                                            <p class="Userregistration-message"><h4>Guardian's Details</h4> </p>

                                            <div className='Userregistration-flex'>
                                                <label>
                                                    <input type="text" class="Userregistration-input" name='mothername' onChange={e => setEditdetails({ ...editdetails, mothername: e.target.value })} value={editdetails.mothername}></input>
                                                    <span>Mother's Name</span>
                                                </label>
                                                <label>
                                                    <input type="text" class="Userregistration-input" name='motheroccupation' onChange={e => setEditdetails({ ...editdetails, motheroccupation: e.target.value })} value={editdetails.motheroccupation}></input>
                                                    <span>Mother's Occupation</span>
                                                </label>
                                                <label>
                                                    <input type="number" class="Userregistration-input" name='motherphonenumber' onChange={e => setEditdetails({ ...editdetails, motherphonenumber: e.target.value })} value={editdetails.motherphonenumber}></input>
                                                    <span>Mother's PhoneNumber</span>
                                                </label>
                                            </div>
                                            <div className='Userregistration-flex'>
                                                <label>
                                                    <input type="text" class="Userregistration-input" name='fathername' onChange={e => setEditdetails({ ...editdetails, fathername: e.target.value })} value={editdetails.fathername}></input>
                                                    <span>Father's Name</span>
                                                </label>
                                                <label>
                                                    <input type="text" class="Userregistration-input" name='fatheroccupation' onChange={e => setEditdetails({ ...editdetails, fatheroccupation: e.target.value })} value={editdetails.fatheroccupation}></input>
                                                    <span>Father's Occupation</span>
                                                </label>
                                                <label>
                                                    <input type="number" class="Userregistration-input" name='fatherphonenumber' onChange={e => setEditdetails({ ...editdetails, fatherphonenumber: e.target.value })} value={editdetails.fatherphonenumber}></input>
                                                    <span>Father's PhoneNumber</span>
                                                </label>
                                            </div>
                                            <p class="Userregistration-message"><h4>Education Details</h4> </p>
                                            <div className='Userregistration-flex'>
                                                <label>
                                                    <input type="number" min={1} max={100} class="Userregistration-input" name='sslcpercentage' onChange={e => setEditdetails({ ...editdetails, sslcpercentage: e.target.value })} value={editdetails.sslcpercentage}></input>
                                                    <span>SSLC Percentage</span>
                                                </label>
                                                <label>
                                                    <input type="number" min={1} max={100} class="Userregistration-input" name='plustwopercentage' onChange={e => setEditdetails({ ...editdetails, plustwopercentage: e.target.value })} value={editdetails.plustwopercentage}></input>
                                                    <span>Plus Two Percentage</span>
                                                </label>
                                            </div>
                                            <p class="Userregistration-message"><h4>Education Details</h4> </p>
                                            <div className='Userregistration-flex'>
                                                <label>
                                                    <input type="number" min={1} max={100} class="Userregistration-input" name='entrancepercentage' onChange={e => setEditdetails({ ...editdetails, entrancepercentage: e.target.value })} value={editdetails.entrancepercentage}></input>
                                                    <span>Entrance Percentage</span>
                                                </label>
                                                <label>
                                                    <input type="date" class="Userregistration-input" name='dobpassing' onChange={e => setEditdetails({ ...editdetails, dobpassing: e.target.value })} value={editdetails.dobpassing}></input>
                                                    <span>Date-of-passing(Plus Two)</span>
                                                </label>
                                            </div>
                                            <div className='Userregistration-flex'>
                                                <label>
                                                    <input type="text" class="Userregistration-input" name='status' onChange={e => setEditdetails({ ...editdetails, status: e.target.value })} value={editdetails.status}></input>
                                                    <span>Status</span>
                                                </label>

                                            </div>


                                            <button class="Userregistration-submit" type='submit'>Submit</button></form></div>

                                </div>


                            </div>
                        </div>
                    )}

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
                                    <th>Edit</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            {filteredStudents.map((student, index) => (
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
                                        <td><button onClick={() => handleEdit(student._id)}>Edit</button></td>
                                        <td><button type='button' onClick={() => handleActive(student._id)}>{student.status}</button></td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adminstudentdetails