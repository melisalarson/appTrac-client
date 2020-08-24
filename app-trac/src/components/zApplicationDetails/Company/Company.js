import React from 'react';
import { Link } from "react-router-dom";

// import '../../zApplicationDetails/ApplicationDetails.css';


const Company = (props) => {
  let { company } = props;
  console.log("props in company.js =", props);

  return (
  // <Link id="company-index" to={`/applicationdetails`}>
    <div className="content-wrapper-companies">
      <section className="company-overview">
        <h1>{company._id}</h1>
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
        <br />
        <h1>Jobs: {company.jobs}</h1>
        <h1>Connections: {company.connections}</h1>
      </section>
    </div>

  // </Link>  
  );
};

export default Company;
