// import React, { Fragment, PureComponent } from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import Sidebar from './Applicant/Sidebar';
// import Sales from './Applicant/Sales';
// import App from './App';
// import ApplicantsTable from './Applicant/ApplicantsTable';
// import Sales2 from './Applicant/Sales2';
// import SideBar2 from './Applicant/Sidebar2';
// import Login from './Applicant/Login';
// import Dashboard from './Applicant/Dashboard';

// let roots = ReactDOM.createRoot(document.getElementById('root'));
// roots.render(<Fragment>
//     {/* <Sidebar></Sidebar> */}
//     {/* <Sales></Sales> */}
//     <App></App>
//     {/* <ApplicantsTable></ApplicantsTable> */}
//     {/* <Sales2></Sales2> */}
//     {/* <SideBar2></SideBar2> */}
//     {/* <Login></Login> */}
//     {/* <Dashboard></Dashboard> */}

// </Fragment>);


import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App.jsx';
import Applications from './components/axioss/Applications.jsx';
import Signup from './components/routing/signup/Signup.jsx';
import Today from './components/routing/today/Today.jsx';

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
    {/* <Applications></Applications> */}
    {/* <Applications></Applications> */}
    {/* <Signup></Signup> */}


  </StrictMode>
);

