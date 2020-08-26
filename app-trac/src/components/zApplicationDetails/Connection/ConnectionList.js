import React from "react";
import Connection from "./Connection";


function ConnectionList(props) {
  let connectionList=[];
  let companyName = props.companyName;
  const noConnections =
    `Looks like you don’t have any connections at ${companyName}. Go make one!`;

  if (props.connections) {
    connectionList = 
    props.connections.map((Obj) => {
      return <Connection key={Obj._id} connection={Obj}/>;
    });
    if (connectionList.length <= 0) {
      return noConnections;
    }
  }
  
  return <div className="connections-container">{connectionList}</div>;
  
}

export default ConnectionList;
