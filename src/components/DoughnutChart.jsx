import { Doughnut } from 'react-chartjs-2';
import React, { useEffect, useRef, useState } from "react";
import { CustomerData } from '../Data';
import { Chart as ChartJS } from 'chart.js/auto';



function DoughnutChart() {

  const [customerData, setCustomerData] = useState({
    labels: CustomerData.map((data) => data.month),
    datasets: [
      {
        label: "",
        data: CustomerData,
        backgroundColor: [
          'rgb(194 ,143, 194)',
          'rgba(21, 21, 87,1)',
          'rgba(200, 200, 200,1 )'
        ],
        // borderColor: [
        //   'rgba(33, 37, 41,0.2)',
        // ],
        borderWidth: 0,
        // hoverOffset: 4,
        // radius: ['90%', '70%', '50%'],
        radius: '80%'
      }
    ]
  });

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
      scales: {
        x: {
          display: false, // Hide the x-axis
        },
        y: {
          display: false, // Hide the y-axis
        },
      },
    },
  };
  return (
    <React.Fragment >
      <Doughnut data={customerData} options={options} className='graphColumn' />
      <div className="center-text">{(CustomerData[0]+CustomerData[1])}% <br/> <span className='doughnut-small-text'> Total new customers</span></div>
    </React.Fragment>
  );
}

{/* <Doughnut data={customerData} options={options} className='graphColumn'/> */ }

export default DoughnutChart;