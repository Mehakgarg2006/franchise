import React from 'react';
import { useNavigate } from "react-router-dom";

const SideBar = () => {

    let doRedirect = useNavigate(); //useNavigate is a function that returns the refrence of a function 
    // the function is then called and takes the path as parameter to load that component
    function doNavigate(path) {
        doRedirect(path);
    }


  
    return (
        <div className="flex h-screen w-full bg-yellow-100">
            <div className="top-0 left-0 w-64 h-full bg-black text-yellow-300">
                <div className="p-4 text-lg font-bold">LOGO</div>
                <nav className="flex flex-col p-4">


                    <button className="py-2 hover:bg-orange-500" onClick={() => doNavigate("/sales")}>Today's Sales</button>
                    <button className="py-2 hover:bg-orange-500">Sales History</button>
                    <button className="py-2 hover:bg-orange-500" onClick={() => doNavigate("/charts")}>Charts</button>

                    <button className="py-2 hover:bg-orange-500">Settings</button>
                    <button className="py-2 hover:bg-orange-500">Logout</button>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;
