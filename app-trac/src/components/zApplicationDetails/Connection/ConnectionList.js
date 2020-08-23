import React from "react";
import Connection from "./Connection";


function ConnectionList(props) {
  let connectionsList = props.connections.map((Obj) => {
    return <Connection key={Obj._id} connection={Obj}/>;
  });
  console.log("#3 Obj from connectionList.js = ", connectionsList);

  return <div className="connections-container">{connectionsList}</div>;
}

export default ConnectionList;
