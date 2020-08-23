import React from "react";

import "./Application.css";

function Application(props) {
  console.log(props)
  return (
    // -----------------------------first row
    <div className="status-cards">
      <div className="row">
        <div id="application-status-card">Application Status</div>

        <div className="previous">prev</div>

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

        <div className="next">next</div>
      </div>

      {/* -----------------------------second row */}
      <div className="row">
        <div id="application-status-card">Application Status</div>

        <div className="previous">prev</div>

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

        <div className="next">next</div>
      </div>
    </div>
  );
}

export default Application;
