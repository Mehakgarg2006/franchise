import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Small from './Small';
import Today from '../routing/today/Today';
import SalesHistory from '../routing/saleHis/SalesHistory';
import { useNavigate } from 'react-router-dom';
import Setting from '../routing/Setting/Setting';
import Charts from '../routing/Charts/Charts';
function Big() {

  return (

    <div className="flex bg-gray-100">

      <Small />
      <div className="flex-1 p-6">
        <center>
        <h1 className="text-2xl font-bold">Welcome to Dashboard!</h1>
        </center>
        <Routes>
          <Route path="today" element={<Today />} />
         <Route path='saleHis' element={<SalesHistory />} />
        <Route path='Setting' element={<Setting />} /> 
           <Route path='Charts' element={<Charts />} />
          
          
        </Routes>
      </div>
    </div>

  );
}

export default Big;


