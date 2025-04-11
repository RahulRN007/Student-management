import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admindashboard from './Components/Admin/Admindashboard';
import Adminstudentdetails from './Components/Admin/Adminstudentdetails';
import Adminuserpage from './Components/User/Adminuserpage';
import Userlogin from './Components/User/Userlogin';
import Userregistration from './Components/User/Userregistration';
import Userlandingpage from './Components/User/Userlandingpage';
import Adminlogin from './Components/Admin/Adminlogin';
import Usermark from './Components/User/Usermark';
import Userattendence from './Components/User/Userattendence';
import Userstudents from './Components/User/Userstudents';
// import { AppProvider } from '../src/Contexts/AppContext';
function App() {
  return (
    // <AppProvider>
     <BrowserRouter>
     <Routes>
      <Route path='/admindashboard' element={<Admindashboard/>}></Route>
      <Route path='/' element={<Adminuserpage/>}></Route>
      <Route path='/userlogin' element={<Userlogin/>}></Route>
      <Route path='/usersignup' element={<Userregistration/>}></Route>
      <Route path='/studentdetails' element={<Adminstudentdetails/>}></Route>
      <Route path='/userlandingpage' element={<Userlandingpage/>}></Route>
      <Route path='/adminlogin' element={<Adminlogin/>}></Route>
      <Route path='/usermark' element={<Usermark/>}></Route>
      <Route path='/userattendence' element={<Userattendence/>}></Route>
      <Route path='/userstudents' element={<Userstudents/>}></Route>
      
      </Routes></BrowserRouter>
      // </AppProvider>
  );
}

export default App;
