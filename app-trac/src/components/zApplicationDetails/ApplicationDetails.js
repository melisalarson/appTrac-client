import React from 'react';
import CompanyListCntr from '../../pages/CompanyListCntr/CompanyListCntr';
import JobListCntr from '../../pages/JobListCntr/JobListCntr';
import ConnectionListCntr from "../../pages/ConnectionListCntr/ConnectionListCntr";

import './ApplicationDetails.css';

function ApplicationDetails() {
  return (
    <div className="application-details">
      <div className="company">
        <section className="company-section">
          <div className="section-header">
            <h3>Company</h3>
            <div className="buttons">
              <button>Edit</button> <button>Delete</button>
            </div>
          </div>
        <CompanyListCntr />
        </section>
      </div>

      <div className="jobs-connections">
        <section className="jobs-section">
          <div className="section-header">
            <h3>Jobs</h3>
            <div className="buttons">
              <button>Add</button> <button>Edit</button> <button>Delete</button>
            </div>
          </div>
          <JobListCntr />
        </section>

        <section className="connections-section">
          <div className="section-header">
            <h3>connections</h3>
            <div className="buttons">
              <button>Add</button> <button>Edit</button> <button>Delete</button>
            </div>
          </div>
          <ConnectionListCntr />
        </section>
      </div>
    </div>
  );
}

export default ApplicationDetails;
