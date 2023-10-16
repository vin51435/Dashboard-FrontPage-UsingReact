import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faArrowsSpin, faVault, faAddressCard, faObjectGroup, faHandHoldingMedical, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

  return (
    <>
      <div className="flex-column flex-shrink-0 p-3 text-white  nav-div" >
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <FontAwesomeIcon className="bi me-2" width="40" height="32" icon={faCompass} />
          <span className="fs-4">Dashboard</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link activa" aria-current="page">
              <FontAwesomeIcon className="bi me-2" width="40" height="32" icon={faChartLine} />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <FontAwesomeIcon className="bi me-2" width="16" height="16" icon={faObjectGroup} />
              Product
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <FontAwesomeIcon className="bi me-2" width="16" height="16" icon={faAddressCard} />
              Customers
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <FontAwesomeIcon className="bi me-2" width="16" height="16" icon={faVault} />
              Income
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <FontAwesomeIcon className="bi me-2" width="16" height="16" icon={faArrowsSpin} />
              Promote
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <FontAwesomeIcon className="bi me-2" width="16" height="16" icon={faHandHoldingMedical} />
              Help
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/vin51435.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>Vin</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">New store...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
