import React from "react";
import { Link } from "react-router-dom";

import "../../zApplicationDetails/ApplicationDetails.css";
import ConnectionModel from "../../../models/connectionModel";


const ConnectionDelete = (props) => {
  let goBack = () => props.history.goBack();
  let connectionId= props.match.params.id
  // console.log(props)
  // console.log(props.match.params.id);
  return (
    <div className="">
      Are you sure you want to delete this Connection?
      <br />
      <button onClick={goBack}>Go Back</button>
      <button onClick={() => ConnectionModel.deleteConnection(connectionId).then(goBack)}>Delete</button>
    </div>
  );
};

export default ConnectionDelete;
