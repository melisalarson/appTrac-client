import React from "react";
import Application from "./Application";

import "../Application/Application.css";


function ApplicationList(props) {

  const applicationList = props.games.map((gameObj) => {
    return <Application key={gameObj._id} game={gameObj} list={true} />;
  });

  return <div className="application-container">{applicationList}</div>;
}

export default ApplicationList;
