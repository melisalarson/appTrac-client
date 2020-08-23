import React from 'react';

// import '../ApplicationDetails.css';


const Company = (props) => {
  let { company } = props;
  console.log("props in company.js =", props);
  return (
    <div className="content-wrapper-companies">
      <section className="company-overview">
        <a href="{company.companyWebsite}"> {company.companyName} </a>
        <br />
        <a href="{company.companyCareersPage}"> Career's Page </a>
        <br />
      </section>
      <section className="linkedin">
        <a href="{company.companyLinkedin}"> Linkedin </a>
        <br />
        Employees: {company.employeeCount}
        <br />
        HQ: {company.companyHQ}
      </section>
      <section className="glassdoor">
        <a href="{company.companyGlassdoor}"> Glassdoor </a>
        <br />
        GD Score: {company.glassdoorScore}
      </section>
    </div>
  );
};

export default Company;
