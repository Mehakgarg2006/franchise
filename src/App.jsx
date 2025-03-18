// import { useState } from 'react'
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css'
// import SideBar from './Applicant/Sidebar';
// import Sales from './Applicant/Sales';
// import Charts from './Applicant/Charts';
// import Sales2 from './Applicant/Sales2';
// import SideBar2 from './Applicant/Sidebar2';
// import Dashboard from './Applicant/Dashboard';

// function App() {
//   return (
//     // <div>
//     // <BrowserRouter>
//     //   <SideBar2></SideBar2>
//     //   <div/>
//     //   <div/>
//     //   <Routes>
//     //     <Route path="/sales" element={<Sales2 />} />
//     //     <Route path="/charts" element={<Charts />} />
//     //   </Routes>
//     // </BrowserRouter>
//     // </div>
//     <BrowserRouter>
//       {/* <TopBar /> */}
      
//       <Routes>
//         {/* <Route path='/signup' element={<Signup />} />
//         <Route path='/login' element={<Login />} /> */}
//         {/* <Route path="/details/:uid" element={<Details />} /> */}

//         <Route path="/big/*" element={<Dashboard/>}>
//          </Route>
        

//       </Routes>
      
//     </BrowserRouter>
   
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/routing/topbar/Topbar';
import Signup from './components/routing/signup/Signup';
import Login from './components/routing/login/Login';
import Big from './components/axioss/Big';
import Applications from './components/axioss/Applications';
import AdminLogin from './components/routing/Adminlogin/Adminlogin';
// import Details from './components/routing/details/Details';
// import Today from './components/routing/today/Today';
// import SalesHistory from './components/routing/saleHis/SalesHistory';
// import DashboardLayout from './components/layouts/DashboardLayout';
// import Setting from './components/routing/Setting/Setting';
// import Small from './components/axioss/Small';

function App() {
  return (
    <BrowserRouter>
    
      
      <Routes>
      <Route path="/" element={<TopBar></TopBar>} />
        <Route path='/signup' element={<Signup />} /> 
        <Route path='/login' element={<Login />} />
         {/* <Route path="/details/:uid" element={<Details />} />  */}
         <Route path='/adminlogin' element={<AdminLogin />} />
         <Route path='/applications' element={<Applications />} />

        <Route path="/big/*" element={<Big/>}>
         </Route> 
        

      </Routes>
      
    </BrowserRouter>
  );
}
export default App;
