import React from "react";
import { Link } from "react-router-dom";

// import "../zApplicationDetails/ApplicationDetails.css";
import "../Application/Application.css"
import PretendApplicationCard from "./PretendApplicationCard"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const FA = require("react-fontawesome");
// React.render(<FA name="rocket" />, document.body);
// import ReactDOM from 'react-dom'import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'import { faCoffee } from '@fortawesome/free-solid-svg-icons' const element = <FontAwesomeIcon icon={faCoffee} /> ReactDOM.render(element, document.body)
// import ReactDOM from "react-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const element = <FontAwesomeIcon icon={chevronright} />;
// ReactDOM.render(element, document.body);

import { render } from "react-dom";
// get our fontawesome imports
import FontAwesome from "react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// // create our App
// const App = () => (
//   <div>
//     <FontAwesomeIcon icon={faHome} />
//   </div>
// );

// render to #root
// render(<App />, document.getElementById("root"));






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
];

function Home(props) {
  console.log(props, "props from HOME");
  return (
    <div className="home">
      <Link to="/companies/new">
        <button className="buttons" id="add-new-home">
          + Add New
        </button>
      </Link>

      {/* -----------------------------first row */}
      <div className="status-cards">
        <div className="row">
          {/* A */}
          <div id="interested">{applicationStatusList[0]}</div>
          {/* B */}
          <div className="previous">
            <FontAwesome
              name="chevron-left"
              size="2x"
              // spin
              // style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
            />
          </div>
          {/* C */}
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />
          {/* D */}
          <div className="next">
            <FontAwesome name="chevron-right" size="2x" />
          </div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="applied">{applicationStatusList[1]}</div>

          {/* B */}
          <div className="previous">
            <FontAwesome name="chevron-left" size="2x" />
          </div>

          {/* C */}
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />

          {/* D */}
          <div className="next">
            <FontAwesome name="chevron-right" size="2x" />
          </div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="phone-screen">{applicationStatusList[2]}</div>

          {/* B */}
          <div className="previous">
            <FontAwesome name="chevron-left" size="2x" />
          </div>

          {/* C */}
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />

          {/* D */}
          <div className="next">
            <FontAwesome name="chevron-right" size="2x" />
          </div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="phone-interview">{applicationStatusList[3]}</div>

          {/* B */}
          <div className="previous">
            <FontAwesome name="chevron-left" size="2x" />
          </div>

          {/* C */}
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />

          {/* D */}
          <div className="next">
            <FontAwesome name="chevron-right" size="2x" />
          </div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="test-hw">{applicationStatusList[4]}</div>

          {/* B */}
          <div className="previous">
            <FontAwesome name="chevron-left" size="2x" />
          </div>

          {/* C */}
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />

          {/* D */}
          <div className="next">
            <FontAwesome name="chevron-right" size="2x" />
          </div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="in-person">{applicationStatusList[5]}</div>

          {/* B */}
          <div className="previous">
            <FontAwesome name="chevron-left" size="2x" />
          </div>

          {/* C */}
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />

          {/* D */}
          <div className="next">
            <FontAwesome name="chevron-right" size="2x" />
          </div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="offer">{applicationStatusList[6]}</div>
          {/* B */}
          <div className="previous">
            <FontAwesome name="chevron-left" size="2x" />
          </div>
          {/* C */}
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />
          {/* D */}
          <div className="next">
            <FontAwesome name="chevron-right" size="2x" />
          </div>{" "}
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="rejected">{applicationStatusList[7]}</div>

          {/* B */}
          <div className="previous">
            <FontAwesome name="chevron-left" size="2x" />
          </div>

          {/* C */}
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />
          {/* D */}
          <div className="next">
            <FontAwesome name="chevron-right" size="2x" />
          </div>
        </div>

        {/* -----------------------------second row */}
        <div className="row">
          {/* A */}
          <div id="no-openings">{applicationStatusList[7]}</div>

          {/* B */}
          <div className="previous">
            <FontAwesome name="chevron-left" size="2x" />
          </div>

          {/* C */}
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />
          <PretendApplicationCard />
          {/* D */}
          <div className="next">
            <FontAwesome name="chevron-right" size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
