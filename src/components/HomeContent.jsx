import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import incomePng from '../assets/income.png';
import salesPng from '../assets/sales.png';
import clipboardPng from '../assets/clipboard.png';
import walletPng from '../assets/wallet.png';
import downArrowPng from '../assets/arrow-down.png';
import upArrowPng from '../assets/up-down.png';
import { Products } from "./Products";

const HomeContent = () => {

  return (
    <div className="container  m-3 main-div">
      <div className="container text-center">
        <div className="row  justify-content-between align-items-center">
          <div className="col-4 text-start align-middle">
            Hello Vinay 👋🏼,
          </div>
          <div className="col-4">
            <div className="form-inline">
              <form className="nosubmit">
                <input className="nosubmit" type="search" placeholder="Search..." />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row gx-3 gy-4">
          <div className="col-3 ">
            <div className="container circ-bg earning-container">
              <div className="row">
                <div className="col-4 circ-img-container">
                  <img className="circ-img" src={incomePng} alt="Image Description" />
                </div>
                <div className="col-8">
                  <div className="circ-text"><span className="circ-text-top">Earning</span><br />$198k<br />
                    <span className="circ-text-bottom"><img className="up-arrow" src={upArrowPng} alt="Image Description" />
                      <span className="up-arrow">37.5 </span>this month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="container circ-bg orders-container">
              <div className="row">
                <div className="col-4">
                  <img className="circ-img" src={clipboardPng} alt="Image Description" />
                </div>
                <div className="col-8">
                  <div className="circ-text"><span className="circ-text-top">Orders</span><br />$2.5k<br />
                    <span className="circ-text-bottom"><img className="down-arrow" src={downArrowPng} alt="Image Description" />
                      <span className="down-arrow">37.5 </span>this month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="container circ-bg balance-container">
              <div className="row">
                <div className="col-4">
                  <img className="circ-img" src={walletPng} alt="Image Description" />
                </div>
                <div className="col-8">
                  <div className="circ-text">
                    <span className="circ-text-top">Balance</span><br />$5.1k<br />
                    <span className="circ-text-bottom"><img className="down-arrow" src={downArrowPng} alt="Image Description" />
                      <span className="down-arrow">2% </span> this month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="container circ-bg sales-container">
              <div className="row">
                <div className="col-4">
                  <img className="circ-img" src={salesPng} alt="Image Description" />
                </div>
                <div className="col-8">
                  <div className="circ-text"><span className="circ-text-top">Total Sales</span><br />$98k<br />
                    <span className="circ-text-bottom"><img className="up-arrow" src={upArrowPng} alt="Image Description" />
                      <span className="up-arrow">11% </span> this month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 ">
            <BarChart />
          </div>
          <div className="col-4 ">
            <DoughnutChart />
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default HomeContent;