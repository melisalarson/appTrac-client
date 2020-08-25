import React from "react";
import Connection from "./Connection";


function ConnectionList(props) {
  let connectionList=[];

  if (props.connections) {
    connectionList = 
    props.connections.map((Obj) => {
      return <Connection key={Obj._id} connection={Obj}/>;
    });
  }
  // else no jobs blah

  return <div className="connections-container">{connectionList}</div>;
}

export default ConnectionList;

