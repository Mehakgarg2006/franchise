import React, { useState } from "react";
import axios from 'axios'


function Signup() {
    const [obj, setObj] = useState({
        uid: "",
        Addresss: "",
        dos: "",
        phone: "",
        fnamee: "",
        lnamee: "",
        tarea: "",
        pincode: "",
        floor: "",
        city: "",
        state: "",
        citeadd: "",
        radioname: ""
    })

    function doUpdate(event) {
        var { name, value } = event.target
        setObj({ ...obj, [name]: value })

    }

    const [darkMode, setDarkMode] = useState(false);



    async function doSavewithpost() {
        // alert("");
        let url = `http://localhost:2006/user/saveuserwithpost`;
        let resp = await axios.post(url, obj, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
        //used to convert the object to query string these headers 
        //alert(JSON.stringify(resp.data)); 
        if (resp.data.status == true)
            alert(resp.data.msg);
        else {
            alert(resp.data.msg);
        }
    }


    return (
        
        <div>
            {/* Navbar */}
      <nav className="flex items-center justify-between p-4 shadow-md bg-white">
        <img src="/kidzee-logo.png" alt="Kidzee Logo" className="h-12" />
        <ul className="flex space-x-4 text-sky-900 font-semibold">
          <li>
            <button className="px-4 py-2 bg-sky-500 text-white rounded">Home</button>
          </li>
          <li>
            <button className="px-4 py-2 bg-sky-500 text-white rounded" onClick={() => navigate("/signup")}>Signup</button>
          </li>
          <li>
            <button className="px-4 py-2 bg-sky-500 text-white rounded">Login</button>
          </li>
          <li>
            <button className="px-4 py-2 bg-sky-500 text-white rounded">Admin</button>
          </li>
        </ul>
      </nav>
            <div className="flex flex-col justify-center items-center w-full h-full bg-[#282D2D] px-5">
                <div className=" flex flex-col items-end justify-start  overflow-hidden mb-2 xl:max-w-3xl w-full h-full">
                    <div className="flex">
                        <h3 className="text-white">Dark Mode : &nbsp;</h3>
                        <label className="inline-flex relative items-center mr-5 cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={darkMode}
                                readOnly
                            />
                            <div
                                onClick={() => {
                                    setDarkMode(!darkMode);
                                }}
                                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                            ></div>
                        </label>
                    </div>
                </div>
                <div
                    className={`xl:max-w-3xl ${darkMode ? "bg-black" : "bg-white"
                        }  w-full p-5 sm:p-10 rounded-md`}
                >
                    <h1
                        className={`text-center text-xl sm:text-3xl font-semibold ${darkMode ? "text-white" : "text-black"
                            }`}
                    >
                        Apply for a Frachise                         <br></br>
                    </h1>
                    <h4
                        className={`text-left text-xl sm:text-2xl font-semibold ${darkMode ? "text-white" : "text-blue"
                            }`}
                    >
                        <br></br>Personal Information
                    </h4>
                    <div className="w-full mt-8">
                        <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    type="text"
                                    placeholder="Your first name" onChange={doUpdate} name="fnamee"
                                />
                                <input
                                    className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    type="text"
                                    placeholder="Your last name" onChange={doUpdate} name="lnamee"
                                />
                            </div>
                            <input
                                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                    ? "bg-[#302E30] text-white focus:border-white"
                                    : "bg-gray-100 text-black focus:border-black"
                                    }`}
                                type="email"
                                placeholder="Enter your email" onChange={doUpdate} name="uid"
                            />
                            <input
                                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                    ? "bg-[#302E30] text-white focus:border-white"
                                    : "bg-gray-100 text-black focus:border-black"
                                    }`}
                                type="String"
                                placeholder="Enter your phone" onChange={doUpdate} name="phone"
                            />
                            <input
                                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                    ? "bg-[#302E30] text-white focus:border-white"
                                    : "bg-gray-100 text-black focus:border-black"
                                    }`}
                                type="text"
                                placeholder="Address" onChange={doUpdate} name="Addresss"
                            />
                            <h4
                                className={`text-left text-xl sm:text-2xl font-semibold ${darkMode ? "text-white" : "text-blue"
                                    }`}
                            >
                                <br></br>Site Information
                            </h4>
                            <div className="w-full mt-8">
                                <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                                                ? "bg-[#302E30] text-white focus:border-white"
                                                : "bg-gray-100 text-black focus:border-black"
                                                }`}
                                            type="text"
                                            placeholder="State" onChange={doUpdate} name="state"
                                        />
                                        <input
                                            className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                                ? "bg-[#302E30] text-white focus:border-white"
                                                : "bg-gray-100 text-black focus:border-black"
                                                }`}
                                            type="text" onChange={doUpdate} name="city"
                                            placeholder="City"
                                        />
                                        <input
                                            className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                                ? "bg-[#302E30] text-white focus:border-white"
                                                : "bg-gray-100 text-black focus:border-black"
                                                }`}
                                            type="tel"
                                            placeholder="Pincode" onChange={doUpdate} name="pincode"
                                        />
                                    </div>
                                    <input
                                        className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                            ? "bg-[#302E30] text-white focus:border-white"
                                            : "bg-gray-100 text-black focus:border-black"
                                            }`}
                                        type="text"
                                        placeholder="Total area in Sq (length/width)" onChange={doUpdate} name="tarea"
                                    />
                                    <input
                                        className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                            ? "bg-[#302E30] text-white focus:border-white"
                                            : "bg-gray-100 text-black focus:border-black"
                                            }`}
                                        type="text"
                                        placeholder="Address" onChange={doUpdate} name="citeadd"
                                    />
                                    <input
                                        className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                            ? "bg-[#302E30] text-white focus:border-white"
                                            : "bg-gray-100 text-black focus:border-black"
                                            }`}
                                        type="text"
                                        placeholder="Floor" onChange={doUpdate} name="floor"
                                    />
                                    <div className="flex justify-center items-center flex-col gap-1">
                                        <h2 className="text-xl font-bold">Ownership Status</h2>
                                        {/* INLINE RADIO BUTTON START */}
                                        <div className="flex justify-center gap-3 py-5">
                                            <div>
                                                <input
                                                    className="mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white align-top checked:border-4 checked:border-blue-600"
                                                    type="radio"
                                                    name="radioname"
                                                    id="radioidthree"
                                                    value="Owned"
                                                    // checked={radioname == "Owned"}
                                                     onChange={doUpdate}
                                                />
                                                <label className="text-gray-800" htmlFor="radioidthree">
                                                    Owned
                                                </label>
                                            </div>
                                            <div>
                                                <input
                                                    className="mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white  align-top checked:border-4 checked:border-blue-600  disabled:border-blue-400"
                                                    type="radio"
                                                    name="radioname"
                                                    id="radioidfour"
                                                    value="Rented"
                                                    // checked={radioname == "Rented"}
                                                    onChange={doUpdate}
                                                />
                                                <label className="text-gray-800" htmlFor="radioidfour">
                                                    Rented
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={doSavewithpost} className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg
                                            className="w-6 h-6 -ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"

                                        >
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3" >Register </span>
                                    </button>
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                        Already have an account?{" "}
                                        <a href="">
                                            <span className="text-[#E9522C] font-semibold">Login</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
