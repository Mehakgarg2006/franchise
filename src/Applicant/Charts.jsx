import { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2006/sales/salescharts');

        console.log('API Response:', response);
        if (!Array.isArray(response.data)) {
          throw new Error('Expected array but received: ' + typeof response.data);
        }


        // Transform your MongoDB data to Google Charts format
        // Example assumes data has 'category' and 'value' fields
        const transformedData = [
          ['Sales', 'Customer'], // Header row
          ...response.data.map(item => [item.Sales, item.Customer])
        ];

        setChartData(transformedData);
      } catch (err) {
        // console.error('Error fetching chart data:', err);
        setError(err.message || 'Failed to load chart data');

      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="chart-container">
      <Chart
      chartType="PieChart"
      ChartComponent={ChartComponent}
      // options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
};

export default ChartComponent;
