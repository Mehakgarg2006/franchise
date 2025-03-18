import React, { useState,useEffect } from 'react';
import axios from 'axios'

const Today = () => {

    const [obj, setObj] = useState({ uid: "", dos: "", sale: "", cust: "" });

    // Load UID from localStorage on component mount
    useEffect(() => {
      const storedUid = localStorage.getItem("uid");
      if (storedUid) {
        setObj((prev) => ({ ...prev, uid: storedUid }));
      }
    }, []);

  function doUpdate(event) {
    var { name, value } = event.target
    setObj({ ...obj, [name]: value })

  }

  async function doSavewithpost() {

    // let url = `http://localhost:2006/sales/savesaleswithpost`;
    let url = "http://localhost:2006/franData/save";

    let resp = await axios.post(url, obj, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });

    if (resp.data.status == true)
      alert(resp.data.msg);
    else {
      alert(resp.data.msg);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Daily Sales Upload</h2>
      <form >
      <label className="block mb-2">Email Id</label>
      <input type="text" name="uid" value={obj.uid} readOnly className="w-full p-2 border rounded-lg mb-3 bg-gray-200" />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"

            onChange={doUpdate}
            name="dos"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="revenue">
            Total Revenue Generated
          </label>
          <input
            type="text"

            name="sale"

            onChange={doUpdate}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 appearance-none placeholder-black-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customers">
            Customers Visited
          </label>
          <input
            type="text"

            name="cust"

            onChange={doUpdate}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 appearance-none"
            required
          />
        </div>

        <button
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50"
          onClick={doSavewithpost}
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default Today;
