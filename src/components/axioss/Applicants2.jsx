import React, { useState, useEffect } from "react"; 
import { useNavigate } from 'react-router-dom'; // Added import for navigation

import emailjs from "emailjs-com"; 

import axios from "axios";
import "./applications.css";

const Applications = () =>{
  const [applications, setApplications] = useStaate([]); // All applications
  const [activeTab, setActiveTab] = useState('pending'); // Filtered list


  // 🔥 Fetch users when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // 🔥 Fetch all users from API
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:1963/user/getallusers"); // Ensure the backend is running

      if(response.data.status)
        {
      setApplications(response.data.data);
    }
  }catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAccept = async (uid) => {
    let url="http://localhost:1963/user/updateStatus";
    try {
      let resp = await axios.post(url,
        { uid, status: 1 }, // ✅ Sending JSON body correctly
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded'  } } // ✅ Ensure headers
      );
  
      if (resp.data.status) {
        alert(resp.data.msg);
        fetchData();
      } else {
        alert(resp.data.msg);
      }
    } catch (error) {
      console.error("Error updating user status:", error);
      alert("Failed to update user status.");
    }
  };
  


  const handleDecline = async (uid) => {
    let url="http://localhost:1963/user/updateStatus";
    try {
      let resp = await axios.post(url,
        { uid, status: -1 },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded'  } }
      );
  
      if (resp.data.status) {
        alert(resp.data.msg);
        fetchData();
      } else {
        alert(resp.data.msg);
      }
    } catch (error) {
      console.error("Error updating user status:", error);
      alert("Failed to update user status.");
    }
  };

  const handleFranchise = async (uid) => {
    let url = "http://localhost:1963/user/updateStatus";
    console.log("Sending Franchise Request:", { uid, status: 2 });
    try {
      let resp = await axios.post(url,
        { uid, status: 2 },
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log("Franchise Response:", resp.data);
  
      if (resp.data.status) {
        alert(resp.data.msg);
        fetchData();
      } else {
        alert(resp.data.msg);
      }
    } catch (error) {
      console.error("Error updating user status:", error);
      alert("Failed to update user status.");
    }
  };

   const filteredApplications = applications.filter(app => {
    switch (activeTab) {
      case 'pending': return app.status === 0;
      case 'accepted': return app.status === 1;
      case 'declined': return app.status === -1;
      case 'franchise': return app.status === 2;
      default: return true;
    }
  });

  return (
      <div className="applications-container"> 

      <div className="bg-gray-50 w-1300px rounded-lg">
        <h1 className="text-2xl font-bold text-center">Applications</h1>

        <div className="flex justify-center space-x-4 mt-4">
        <input type="button" value="Pending" 
  className={`px-4 py-2 rounded-lg ${activeTab === 'pending' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
  onClick={() => setActiveTab('pending')} />

          

          <input type="button" value="Accepted"
          className={`px-4 py-2 rounded-lg ${activeTab === 'accepted' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
          onClick={() => setActiveTab('accepted')} />
          

          <input type="button" value="Declined"
          className={`px-4 py-2 rounded-lg ${activeTab === 'declined' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}` }
          onClick={() => setActiveTab('declined')} />
          

          <input type="button" value="Franchise"
          className={`px-4 py-2 rounded-lg ${activeTab === 'franchise' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
          onClick={() => setActiveTab('franchise')} />
          
    </div>

    <div className="mt-4">
      <table className="w-full">
        <thead className="bg-gray-100">
               <tr>
                <th className="p-4">Sr No.</th>
                <th className="p-4">Email</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Date of Application</th>
                  <th className="p-4">Existing Business</th>
                  <th className="p-4">City</th>
                  <th className="p-4">ID Proof</th>
                  {activeTab === 'pending' && <th className="p-4">Actions</th>}
                  {activeTab === 'accepted' && <th className="p-4">Actions</th>}
                  {activeTab === 'declined' && <th className="p-4">Actions</th>}
               </tr>
        </thead>
      <tbody>
      {filteredApplications.map((app, index) => (
      <tr key={app._id} className="bg-gray-50">
        <td className="p-4">{index + 1}</td>
        <td className="p-4">{app.uid}</td>
        <td className="p-4">{app.name}</td>
        <td className="p-4">{new Date(app.dos).toLocaleDateString()}</td>
        <td className="p-4">{app.eB}</td>
        <td className="p-4">{app.city}</td>
        <td className="p-4"><img src={app.picpath || "default-image.png"} alt={app.name} width="100" /></td>

        {activeTab === 'pending' && (
          <td className="p-4">
            <input type="button" value="Info"  />
            <input type="button" value="Accept" onClick={() => handleAccept(app.uid)} />
            <input type="button" value="Decline" onClick={() => handleDecline(app.uid)} />
            </td>
        )}
        
        {activeTab === 'accepted' && (
          <td className="p-4">
            <input type="button" value="Info"  />
           <input type="button" value="Franchise" onClick={() => handleFranchise(app.uid)} />
          </td>
           )}

      {activeTab ==='franchise' && (
        <td className="p-4">
          <input type="button" value="Info"  />
        </td> 
        )}

      </tr> 
      ))} 
     </tbody>
     </table>
     </div>
     </div>
    </div>
  )};


export default Applications;
