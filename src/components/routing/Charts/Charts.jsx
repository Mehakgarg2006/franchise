import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";

const Charts = () => {
    const [uid, setUid] = useState(null);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        const storedUid = localStorage.getItem("uid");
        if (storedUid) {
            setUid(storedUid);
        }
    }, []);

    useEffect(() => {
        if (uid && startDate && endDate) {
            fetchSalesData();
        }
    }, [uid, startDate, endDate]);

    const fetchSalesData = async () => {
        if (!uid) {
            console.warn("UID not set yet. Waiting before fetching sales data.");
            return;
        }

        if (!startDate || !endDate) {
            alert("Please select a start and end date.");
            return;
        }

        try {
            const response = await axios.get("http://localhost:2006/franData/sales", {
                params: { uid, startDate, endDate },
            });

            console.log("Fetched Sales Data:", response.data);

            if (Array.isArray(response.data) && response.data.length > 0) {
                const formattedData = response.data.map(item => ({
                    date: item.date,
                    sale: item.sale || 0,
                    cust: item.cust || 0
                }));
                
                setSalesData(formattedData);
            } else {
                setSalesData([]);
                console.warn("No sales data found for this UID and date range.");
            }
        } catch (error) {
            console.error("Error fetching sales data:", error);
            setSalesData([]);
        }
    };

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <div>
            <h2 className="text-center underline">Sales Data Charts</h2>
            <div className="text-center">
                <label>Start Date: </label>
                <input type="date" value={startDate} className="border border-gray-300 rounded-md p-2" onChange={(e) => setStartDate(e.target.value)} />
                <label className="ml-8">End Date: </label>
                <input type="date" value={endDate} className="border border-gray-300 rounded-md p-2" onChange={(e) => setEndDate(e.target.value)} />
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginTop: "20px" }}>
                {/* Line Chart */}
                <ResponsiveContainer width="45%" height={300}>
                    <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sale" stroke="#8884d8" name="Sales" />
                    </LineChart>
                </ResponsiveContainer>
                
                {/* Bar Chart for Monthly Sales */}
                <ResponsiveContainer width="45%" height={300}>
                    <BarChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sale" fill="#8884d8" name="Sales" />
                    </BarChart>
                </ResponsiveContainer>

                {/* Pie Chart for Sales vs Customers */}
                <ResponsiveContainer width="45%" height={300}>
                    <PieChart>
                        <Pie
                            data={[{ name: "Sales", value: salesData.reduce((acc, cur) => acc + cur.sale, 0) }, { name: "Customers", value: salesData.reduce((acc, cur) => acc + cur.cust, 0) }]}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        >
                            {[0, 1].map((index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Charts;
