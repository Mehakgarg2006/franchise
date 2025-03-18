import React, { useState } from "react";
import Sales2 from "./Sales2";



const SideBar2 = () => {
    const [activeComponent, setActiveComponent] = useState("sales");

    const renderComponent = () => {
        switch (activeComponent) {
            case "sales":
               return <Sales2></Sales2>

            default:
                return <Sales2></Sales2>
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-64 border-r bg-gray-900 border-blue-200">
                <div className="bg-gray-800 p-4 text-center">
                    <p className="text-white">Franchisee Id: ------</p>
                </div>
                <hr className="text-white" />
                <nav className="p-4">
                    <div className="space-y-3">
                        <div>
                            <button
                                onClick={() => setActiveComponent("sales")}
                                className="block w-full p-3 text-gray-700 bg-white rounded-md hover:bg-blue-300 transition-colors duration-200"
                            >
                                Today's Sale
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => setActiveComponent("saleshistory")}
                                className="block w-full p-3 text-gray-700 bg-white rounded-md hover:bg-blue-300 transition-colors duration-200"
                            >
                                Sales History
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => setActiveComponent("charts")}
                                className="block w-full p-3 text-gray-700 bg-white rounded-md hover:bg-blue-300 transition-colors duration-200"
                            >
                                Charts
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => setActiveComponent("settings")}
                                className="block w-full p-3 text-gray-700 bg-white rounded-md hover:bg-blue-300 transition-colors duration-200"
                            >
                                Settings
                            </button>
                        </div>
                        <div>
                            <button className="block w-full p-3 text-gray-700 bg-red-400 rounded-md hover:bg-blue-300 transition-colors duration-200">
                                Logout
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {renderComponent()}
            </div>
        </div>
    );
};

export default SideBar2;