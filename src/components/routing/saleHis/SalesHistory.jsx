import React, { useState, useEffect } from 'react';
import axios from 'axios';


function SalesHistory() {
  const [dateRanges, setDateRanges] = useState([{ startDate: '', endDate: '', salesAmount: null }]);
  const [salesData, setSalesData] = useState([]);
  const [totalSalesAmount, setTotalSalesAmount] = useState(0);
  const [uid, setUid] = useState("");

  useEffect(() => {
    // Get UID from localStorage
    const storedUid = localStorage.getItem('uid');
    if (storedUid) {
      setUid(storedUid);
    }

    async function fetchSalesData() {
      try {
        const response = await axios.get('http://franchisebackend.railway.internal/franData/getall');
        console.log('Fetched Sales Data:', response.data);

        if (Array.isArray(response.data)) {
          // Filter sales data to only include records for the logged-in UID
          const userSalesData = response.data.filter(sale => sale.uid === storedUid);
          setSalesData(userSalesData);
        } else {
          console.error('Expected an array but received:', response.data);
          setSalesData([]);
        }
      } catch (error) {
        console.error('Error fetching sales data:', error);
        setSalesData([]);
      }
    }
    fetchSalesData();
  }, []);

  const handleDateChange = (index, field, value) => {
    const newRanges = [...dateRanges];
    newRanges[index][field] = value;
    setDateRanges(newRanges);
  };

  const calculateSales = (index) => {
    const { startDate, endDate } = dateRanges[index];

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);

      const filteredSales = salesData.filter((sale) => {
        const saleDate = new Date(sale.dos);
        saleDate.setHours(0, 0, 0, 0);
        return saleDate >= start && saleDate <= end;
      });

      const totalSales = filteredSales.reduce((sum, sale) => {
        const saleAmount = parseFloat(sale.sale);
        return !isNaN(saleAmount) ? sum + saleAmount : sum;
      }, 0);

      const newRanges = [...dateRanges];
      newRanges[index].salesAmount = totalSales;
      setDateRanges(newRanges);

      const sumOfAllSales = newRanges.reduce((sum, range) => sum + (range.salesAmount || 0), 0);
      setTotalSalesAmount(sumOfAllSales);
    }
  };

  const addDateRange = () => {
    setDateRanges([...dateRanges, { startDate: '', endDate: '', salesAmount: null }]);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-2xl mx-auto mt-11">
      <h2 className="text-xl font-bold mb-4 text-center">Sales History</h2>

      {/* Display logged-in UID */}
      <div className="text-center mb-4">
      <span className="font-semibold text-gray-700">Logged in as:</span> 
        <span className="text-blue-600 font-bold ml-2">{uid}</span>
      </div>

      <div className="space-y-4">
        {dateRanges.map((range, index) => (
          <div key={index} className="flex items-center space-x-4 border-b pb-3">
            <div>
              <label className="text-gray-700 font-medium block">Start Date:</label>
              <input
                type="date"
                value={range.startDate}
                onChange={(e) => handleDateChange(index, 'startDate', e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium block">End Date:</label>
              <input
                type="date"
                value={range.endDate}
                onChange={(e) => handleDateChange(index, 'endDate', e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium block">Sales Amount:</label>
              <input
                type="text"
                value={range.salesAmount !== null ? range.salesAmount : ''}
                readOnly
                className="border border-gray-300 rounded-md p-2 w-full bg-gray-200"
              />
            </div>

            <button
              onClick={() => calculateSales(index)}
              className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
            >
              Get Sales
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={addDateRange}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full"
      >
        + Add Date Range
      </button>

      <div className="mt-6 text-center text-lg font-semibold">
        Total Sales: <span className="text-blue-600">{totalSalesAmount}</span>
      </div>
    </div>
  );
}

export default SalesHistory;

