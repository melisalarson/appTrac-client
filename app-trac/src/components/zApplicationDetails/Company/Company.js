import React from 'react';
import { Link } from "react-router-dom";

// import '../../zApplicationDetails/ApplicationDetails.css';
import JobList from '../Job/JobList'
import ConnectionList from "../Connection/ConnectionList";

const Company = (props) => {
  let { company } = props;
  // console.log("props in company.js =", props);

  return (
    // <Link id="company-index" to={`/applicationdetails`}>

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
          <p>
            Jobs:
            <JobList
              jobs={
                props.job

                // [
                //   {
                //     _id: "5f43e368aa87ed7a98be753e",
                //     applicationDate: "2020-08-30T00:00:00.000Z",
                //     applicationStatus: "Phone Interview",
                //     nextSteps: "Prepare For Phone Interview",
                //     nextStepsDate: "2020-08-30T00:00:00.000Z",
                //     jobTitle: "Software Engineer",
                //     jobURL: "https://www.google.com/careers/softwareengineer",
                //     jobLocation: "San Francisco",
                //     jobDescription:
                //       "i should copy and paste job desription here",
                //     jobNotes: "this is a note",
                //     createdAt: "2020-08-24T15:57:28.401Z",
                //     updatedAt: "2020-08-24T15:57:28.401Z",
                //     __v: 0,
                //   },
                // ]
              }
            />
          </p>
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
          <p>
            Connections:
            <ConnectionList
              connections={
                props.connection
                // company.connections
                // connections.company
              //   [
              //   {
              //     _id: "5f43e368aa87ed7a98be7541",
              //     connectionName: "Melisa Larson",
              //     connectionEmail: "melisa@email.com",
              //     createdAt: "2020-08-24T15:57:28.429Z",
              //     updatedAt: "2020-08-24T15:57:28.429Z",
              //     __v: 0,
              //   },
              // ]
            }
            />
          </p>
        </section>
      </div>
    </div>
    // </Link>
  );
};

export default Company;
