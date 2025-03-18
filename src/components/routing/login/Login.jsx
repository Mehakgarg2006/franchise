import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [obj, setObj] = useState({ uid: "", pwd: "" });
  const navigate = useNavigate();

  function doUpdate(event) {
    const { name, value } = event.target;
    setObj({ ...obj, [name]: value });
  }

  const doSave = async () => {
    try {
      const resp = await axios.post("http://localhost:2006/franchisees/checkuser", obj, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (resp.data.status) {
        alert(resp.data.msg);
        localStorage.setItem('uid', obj.uid);
        navigate('/big'); // Navigate to dashboard
      } else {
        alert(resp.data.msg);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="bg-white w-8/12 shadow-3xl rounded-xl p-12">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <form>
          <input
            type="text"
            name="uid"
            onChange={doUpdate}
            placeholder="Username"
            className="w-full p-2 border rounded my-2"
            required
          />
          <input
            type="password"
            name="pwd"
            onChange={doUpdate}
            placeholder="Password"
            className="w-full p-2 border rounded my-2"
            required
          />
          <button
            type="button"
            onClick={doSave}
            className="w-full bg-blue-500 text-white p-2 rounded mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
