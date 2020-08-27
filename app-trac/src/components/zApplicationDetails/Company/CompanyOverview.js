import React from "react";
import { Link } from "react-router-dom";

// import CompanyModel from '../../../models/companyModel';
// import JobModel from "../../../models/jobModel";
import ConnectionModel from "../../../models/connectionModel";

import JobList from "../Job/JobList";
import ConnectionList from "../Connection/ConnectionList";

import "../../zApplicationDetails/ApplicationDetails.css";

const Company = (props) => {
  let { company } = props;
  // console.log("props in company.js =", props);

  return (
    <Link to={`/companies/${company._id}`}>
      <div className="company-overview-details">
        <section className="company-list">
          <div className="content-wrapper-companies">
            <section className="company-overview">
              <a href={company.companyWebsite} target="_blank">
                <h3>{company.companyName}</h3>
              </a>
              <a href={company.companyCareersPage} target="_blank">
                Careers{" "}
              </a>{" "}
              |<a href={company.companyLinkedin}> Linkedin </a> <br />
              Employees: {company.employeeCount} <br />
              HQ: {company.companyHQ} <br />
              <a href={company.companyGlassdoor}> Glassdoor </a> -{" "}
              {company.glassdoorScore}
            </section>
          </div>
        </section>
      </div>
    </Link>
  );
};

export default Company;
