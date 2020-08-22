import React from 'react';

// import '../ApplicationDetails.css';


function Company () {
  return (
      <div className="content-wrapper-company">
        <section className="company-overview">
          <a href="companyWebsite"> companyName </a>
          <br />
          <a href="companyCareersPage"> Career's Page </a>
          <br />
        </section>
        <section className="linkedin">
          <a href="companyLinkedin"> Linkedin </a>
          <br />
          Employees: employeeCount
          <br />
          HQ: companyHQ
        </section>
        <section className="glassdoor">
          <a href="companyLinkedin"> Glassdoor </a>
          <br />
          GD Score: glassdoorScore
        </section>
      </div>
  );
}

export default Company;