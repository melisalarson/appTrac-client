import React from "react";

// import ApplicationList from "./ApplicationList";
// import CompanyList from '../../components/zApplicationDetails/Company/CompanyList'

import "./Application.css";


let applicationStatusList = [
  "Interested",
  "Applied",
  "Phone Screen",
  "Phone Interview",
  "Test/HW",
  "In Person/Zoom",
  "Offer",
  "Rejected",
  "No Openings",
]

let nextStepsList = [
  "Review Company/ Review Opportunities",
  "Prepare For Phone Screen",
  "Prepare For Phone Interview",
  "Complete Assignment",
  "Prepare for Interview",
  "Accept/Decline Offer",
  "Ask For Feedback",
  "None/ N/A",
]



function Application(props) {
  console.log(props,"props from application")
  return (
    <div className="home">
      <button id="add-new">+ Add New</button>

      {/* -----------------------------first row */}
      <div className="status-cards">
        <div className="row">
          {/* A */}
          <div id="application-status-card">{applicationStatusList[0]}</div>

          {/* B */}
          <div className="previous">prev</div>

          {/* C */}
          {/* <ApplicationList /> */}
          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>
                google
                {/* <CompanyList /> */}
              </h4>
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
            </section>
          </div>

          {/* D */}
          <div className="next">next</div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="application-status-card">{applicationStatusList[1]}</div>

          {/* B */}
          <div className="previous">prev</div>

          {/* C */}
          {/* <ApplicationList /> */}
          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>
                google
                {/* <CompanyList /> */}
              </h4>
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
            </section>
          </div>

          {/* D */}
          <div className="next">next</div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="application-status-card">{applicationStatusList[2]}</div>

          {/* B */}
          <div className="previous">prev</div>

          {/* C */}
          {/* <ApplicationList /> */}
          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>
                google
                {/* <CompanyList /> */}
              </h4>
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
            </section>
          </div>

          {/* D */}
          <div className="next">next</div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="application-status-card">{applicationStatusList[3]}</div>

          {/* B */}
          <div className="previous">prev</div>

          {/* C */}
          {/* <ApplicationList /> */}
          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>
                google
                {/* <CompanyList /> */}
              </h4>
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
            </section>
          </div>

          {/* D */}
          <div className="next">next</div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="application-status-card">{applicationStatusList[4]}</div>

          {/* B */}
          <div className="previous">prev</div>

          {/* C */}
          {/* <ApplicationList /> */}
          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>
                google
                {/* <CompanyList /> */}
              </h4>
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
            </section>
          </div>

          {/* D */}
          <div className="next">next</div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="application-status-card">{applicationStatusList[5]}</div>

          {/* B */}
          <div className="previous">prev</div>

          {/* C */}
          {/* <ApplicationList /> */}
          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>
                google
                {/* <CompanyList /> */}
              </h4>
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
            </section>
          </div>

          {/* D */}
          <div className="next">next</div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="application-status-card">{applicationStatusList[6]}</div>

          {/* B */}
          <div className="previous">prev</div>

          {/* C */}
          {/* <ApplicationList /> */}
          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>
                google
                {/* <CompanyList /> */}
              </h4>
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
            </section>
          </div>

          {/* D */}
          <div className="next">next</div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="application-status-card">{applicationStatusList[7]}</div>

          {/* B */}
          <div className="previous">prev</div>

          {/* C */}
          {/* <ApplicationList /> */}
          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>
                google
                {/* <CompanyList /> */}
              </h4>
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
            </section>
          </div>

          {/* D */}
          <div className="next">next</div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="application-status-card">{applicationStatusList[7]}</div>

          {/* B */}
          <div className="previous">prev</div>

          {/* C */}
          {/* <ApplicationList /> */}
          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>
                google
                {/* <CompanyList /> */}
              </h4>
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
            </section>
          </div>

          {/* D */}
          <div className="next">next</div>
        </div>




      </div>
    </div>
  );
}

export default Application;
