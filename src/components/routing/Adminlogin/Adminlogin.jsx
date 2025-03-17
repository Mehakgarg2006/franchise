// Frontend: AdminLogin.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [uid, setUid] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2006/adminlogin/login', { uid, password });
      alert(response.data.message);
      navigate('/applications');
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md'>
        <h2 className='text-2xl mb-4'>Admin Login</h2>
        {error && <p className='text-red-500'>{error}</p>}
        <input className='w-full p-2 border' type='text' placeholder='Admin UID' value={uid} onChange={(e) => setUid(e.target.value)} required />
        <input className='w-full p-2 border mt-2' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className='w-full bg-blue-500 text-white p-2 mt-2' type='submit'>Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
