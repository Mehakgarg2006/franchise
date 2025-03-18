import React from 'react';
import { useNavigate } from 'react-router-dom';
import Today from '../routing/today/Today';

function Small() {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex flex-col w-64 bg-gray-800 rounded-2xl h-screen">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex flex-col flex-1 overflow-y-auto bg-gradient-to-b from-gray-700 to-blue-500 px-2 py-4 gap-10 rounded-2xl">
          <div>
            <label href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Dashboard
            </label>
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <label className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-opacity-25 rounded-2xl cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
              </svg>
<input type="button" value="Today's Sale"  onClick={() => navigate("/big/today")}className="bg-transparent text-gray-100 cursor-pointer" />

            </label>
            <label className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-opacity-25 rounded-2xl cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" style={{ marginRight: '8px' }}>
                <path fill="currentColor" d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm0-26h10v2H22zm0 5h10v2H22zm0 5h7v2h-7z" />
              </svg>
              <input type="button" value="Sales History" onClick={() => navigate("/big/saleHis")} className="bg-transparent text-gray-100 cursor-pointer" />
            </label>
            <label className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-opacity-25 rounded-2xl cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: '8px' }}>
                <path fill="none" stroke="currentColor" strokeWidth="2" d="M16 7h3v4h-3zm-7 8h11M9 11h4M9 7h4M6 18.5a2.5 2.5 0 1 1-5 0V7h5.025M6 18.5V3h17v15.5a2.5 2.5 0 0 1-2.5 2.5h-17" />
              </svg>
              <input type="button" value="Charts" onClick={() => navigate("/big/Charts")} className="bg-transparent text-gray-100 cursor-pointer" />
            </label>
            <label className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-opacity-25 rounded-2xl cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1.5a10.5 10.5 0 1 0 10.5 10.5A10.5 10.5 0 0 0 12 1.5zm0 18a7.5 7.5 0 1 1 7.5-7.5a7.5 7.5 0 0 1-7.5 7.5zm0-13.5a6 6 0 1 0 6 6a6 6 0 0 0-6-6zm0 10.5a4.5 4.5 0 1 1 4.5-4.5a4.5 4.5 0 0 1-4.5 4.5z" />
              </svg>
              <input type="button" value="Settings" onClick={() => navigate("/big/setting")} className="bg-transparent text-gray-100 cursor-pointer" />
            </label>
            <label className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-opacity-25 rounded-2xl cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path fill="currentColor" d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.985 9.985 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4" />
              </svg>
              <input type="button" value="Logout" onClick={ () => navigate("/")} className="bg-transparent text-gray-100 cursor-pointer" />
            </label>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Small;


