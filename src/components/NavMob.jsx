import React from "react";
import 'bootstrap/dist/js/bootstrap.js';
import 'popper.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';


const NavMob = () => {
  return (
    <nav className="navbar navbar-dark nav-mob" aria-label="First navbar example">
      <div className="container-fluid nav-mob-container">
        {/* <a className="navbar-brand" href="#">DASHBOARD</a> */}
        <a href="/" className="d-flex align-items-center text-white text-decoration-none">
          <FontAwesomeIcon className="bi me-2" width="40" height="32" icon={faCompass} />
          <span className="fs-4">Dashboard</span>
        </a>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarsExample01">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Customers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Income</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Promote</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Help</a>
            </li>
           
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavMob;