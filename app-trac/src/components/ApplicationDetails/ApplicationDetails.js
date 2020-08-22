import React from 'react';
import Company from './Company/Company';
import Job from './Job/Job';
import Connection from './Connection/Connection';

import './ApplicationDetails.css';

function ApplicationDetails() {
  return (
    <div className="application-details">
      <section className="company-section">
        <h3>Company</h3>
        <Company />
      </section>

      <div className="jobs-connections">
        <section className="jobs-section">
          <h3>Jobs</h3>
          <Job />
        </section>

        <section className="connections-section">
          <h3>Connections</h3>
          <Connection />
        </section>
      </div>
    </div>
  );
}

export default ApplicationDetails;
