import React from 'react';
import { Link } from "react-router-dom";

import CompanyListCntr from '../../pages/Company/CompanyListCntr/CompanyListCntr';
import JobListCntr from '../../pages/Job/JobListCntr/JobListCntr';
import ConnectionListCntr from "../../pages/Connection/ConnectionListCntr/ConnectionListCntr";

import CompanyContainer from '../../pages/Company/CompanyCntr/CompanyCntr'
import JobContainer from "../../pages/Job/JobCntr/JobCntr";
import ConnectionContainer from "../../pages/Connection/ConnectionCntr/ConnectionCntr";

import './ApplicationDetails.css';

function ApplicationDetails() {
  return (
    <div className="application-details">
      <div className="company">
        <section className="company-section">
          <div className="section-header">
            <h3>Company</h3>
            <div className="buttons">
              <Link to={`/applicationdetails`}>
                <button>Edit</button>
              </Link>
              <Link to={`/applicationdetails`}>
                <button>Delete</button>
              </Link>
            </div>
          </div>
          {/* <CompanyListCntr /> */}
          {/* this above needs to be changed to the container for just one Company */}
          <CompanyContainer />
        </section>
      </div>

      <div className="jobs-connections">
        <section className="jobs-section">
          <div className="section-header">
            <h3>Jobs</h3>
            <div className="buttons">
              <Link to={`/applicationdetails`}>
                <button>Add</button>
              </Link>
              <Link to={`/applicationdetails`}>
                <button>Edit</button>
              </Link>
              <Link to={`/applicationdetails`}>
                <button>Delete</button>
              </Link>
            </div>
          </div>
          {/* <JobListCntr /> */}
          {/* this above needs to be changed to the container for just one Company */}
          <JobContainer />
        </section>

        <section className="connections-section">
          <div className="section-header">
            <h3>Connections</h3>
            <div className="buttons">
              <Link to={`/applicationdetails`}>
                <button>Add</button>
              </Link>
              <Link to={`/applicationdetails`}>
                <button>Edit</button>
              </Link>
              <Link to={`/applicationdetails`}>
                <button>Delete</button>
              </Link>
            </div>
          </div>
          {/* <ConnectionListCntr /> */}
          {/* this above needs to be changed to the container for just one Company */}
          <ConnectionContainer />
        </section>
      </div>
    </div>
  );
}

export default ApplicationDetails;
