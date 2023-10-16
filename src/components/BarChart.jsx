import { Bar } from 'react-chartjs-2';
import React, { useEffect, useRef, useState } from "react";
import { UserData } from '../Data';
import { Chart as ChartJS } from 'chart.js/auto';

function BarChart({ chartData }) {

  const currentMonth = 10;
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "",
        data: UserData.map((data) => data.income),
        backgroundColor: [
          'rgba(240, 239, 239,1 )',
        ], // Different colors for each bar
        borderColor: [
          'rgba(33, 37, 41,0.2)',
        ],
        // borderWidth: 2,
        barPercentage: 0.5, // Adjust the bar width
        categoryPercentage: 1, // Adjust the spacing between bars
        borderRadius: 10,
      }
    ]
  });



  const changeBarColor = (barIndex, backgroundColor) => {
    const newArray = Array.from({ length: UserData.length }, () => 'rgba(200, 200, 200,1 )');
    const updatedData = { ...userData };
    updatedData.datasets[0].backgroundColor = newArray;
    updatedData.datasets[0].backgroundColor[barIndex] = backgroundColor;
    setUserData(updatedData);
    // console.log(updatedData.datasets[0].backgroundColor);
    // console.log(allBackgroundColor);
  };

  useEffect(() => {
    changeBarColor((currentMonth - 1), 'rgb(21, 21, 87,1 )');
  }, []);

  const options = {
    scales: {
      x: {
        display: true, // Hide the x-axis labels
        grid: {
          display: false, // Hide the grid lines for the x-axis
        },
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };
  return (
    <Bar data={userData} options={options} className='graphColumn' />
    );
}
export default BarChart
// options={} 