import React from "react";
import JobList from "../zApplicationDetails/Job/JobList"
import "./ApplicationStatus.css";

function Application(props) {
  console.log(props)
  console.log(JobList[0], "this is the job list")
  return (
    <div className="home">
      <button id="add-new">+ Add New</button>

      <div className="status-cards">
        <div className="row">
          <div id="application-status-card">Application Status</div>

          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>google</h4>
              {/* {!list && (
            <> */}
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
              {/* </>
          )} */}
            </section>
          </div>

          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>google</h4>
              {/* {!list && (
            <> */}
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
              {/* </>
          )} */}
            </section>
          </div>

          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>google</h4>
              {/* {!list && (
            <> */}
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
              {/* </>
          )} */}
            </section>
          </div>

          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>google</h4>
              {/* {!list && (
            <> */}
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
              {/* </>
          )} */}
            </section>
          </div>

          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>google</h4>
              {/* {!list && (
            <> */}
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
              {/* </>
          )} */}
            </section>
          </div>

          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>google</h4>
              {/* {!list && (
            <> */}
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
              {/* </>
          )} */}
            </section>
          </div>

          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>google</h4>
              {/* {!list && (
            <> */}
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
              {/* </>
          )} */}
            </section>
          </div>

          <div className="application-card">
            <section className="application-content-wrapper">
              <h4>google</h4>
              {/* {!list && (
            <> */}
              <p>software engineer</p>
              <p>Applied On: 8/20/20</p>
              <p>Complete Assignment</p>
              <p>By: 8/22/20</p>
              {/* </>
          )} */}
            </section>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Application;
