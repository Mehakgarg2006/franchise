import React from "react";
import { useNavigate } from "react-router-dom";


const Topbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 shadow-md">
  <div className="flex items-center space-x-2">
    <img src="/pictures/myweblogo.jpg" alt="Franchise Logo" className="h-12" />
    <span className="text-lg font-semibold">FranchisePulse</span>
  </div>
        <ul className="flex space-x-4 text-sky-900 font-semibold">
          <li>
            <button className="px-4 py-2 bg-sky-500 text-white rounded">Home</button>
          </li>
          <li>
            <button className="px-4 py-2 bg-sky-500 text-white rounded" onClick={() => navigate("/signup")}>Signup</button>
          </li>
          <li>
            <button className="px-4 py-2 bg-sky-500 text-white rounded" onClick={() => navigate("/login")}>Login</button>
          </li>
          <li>
            <button className="px-4 py-2 bg-sky-500 text-white rounded"onClick={() => navigate("/adminlogin")}>Admin</button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center bg-sky-700 text-white p-12">
        <div className="max-w-lg text-center">
          <h1 className="text-5xl font-bold">START YOUR OWN <br /> FRANCHISE NOW!</h1>
          <p className="mt-4 text-lg">
            All you need is a <span className="text-yellow-300">2000-3000 sq foot</span> space and an <br />
            investment <span className="text-yellow-300">₹ 15-16 lakhs*</span>
          </p>
          <div className="mt-6 flex justify-center space-x-6">
            <div className="text-center">
              <p className="text-xl font-bold">2000+</p>
              <p className="text-sm">Centers</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">750+</p>
              <p className="text-sm">Cities</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">20+</p>
              <p className="text-sm">years of Legacy</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">1.4M</p>
              <p className="text-sm">Stores</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white p-12">
        <div className="max-w-5xl flex items-center space-x-8">
          {/* Image Section */}
          <div className="w-1/2">
            <img
              src="/pictures/franpic.jpg"
              alt="Kids Learning"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Text Section */}
          <div className="w-1/2">
            <h2 className="text-xl italic text-red-600">About Us</h2>
            <h1 className="text-4xl font-bold text-purple-800 mt-2">GET FRANCHISES</h1>
            <p className="text-gray-700 mt-4">
              Welcome to Franchise, your trusted partner in business growth! We connect aspiring entrepreneurs with top brands, offering them the opportunity to own and operate successful franchises. Our mission is to simplify the franchising process by providing expert guidance, exclusive brand partnerships, and a seamless experience from start to launch. Whether you're looking to invest in a well-established brand or explore emerging opportunities, we help you make informed decisions and build a thriving business. Join us and take the first step toward your entrepreneurial journey today!

            </p>
          </div>
        </div>
      </div>

      {/* Why Kidzee Section */}
      <div className="bg-blue-500 p-20">
        <h2 className="text-3xl font-semibold text-purple-700 text-center">The Franchise Advantage</h2>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="flex flex-col items-center p-4">
            <img src="/pictures/a1.jpg" alt="Preschool" className="h-12 mb-2" />
            <p>India’s largest chain</p>
          </div>

          <div className="flex flex-col items-center p-4">
      <img src="/pictures/franpic.jpg" alt="Recognition" className="h-12 mb-2" />
      <p>Recognized & Award-Winning Opportunities</p>
    </div>
    <div className="flex flex-col items-center p-4">
      <img src="/pictures/a2.jpg" alt="Industry Leader" className="h-12 mb-2" />
      <p>Strong Market Presence with High Brand Recall</p>
    </div>
          <div className="flex flex-col items-center p-4">
            <img src="/pictures/a3.jpg" alt="Market Leader" className="h-12 mb-2" />
            <p>Market leader with a strong brand recall & brand lineage of 20 years</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <img src="/pictures/a4.jpg" alt="Support" className="h-12 mb-2" />
            <p>4 layers of support</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <img src="/pictures/a5.png" alt="Curriculum" className="h-12 mb-2" />
            <p>Most advanced curriculum</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>&copy; {new Date().getFullYear()} Franchise. All rights reserved.</p>
      </footer>
    </div>

  );
};

export default Topbar;
