import React from "react";
import Connection from "./Connection";


function ConnectionList(props) {
  let connectionList=[];
  const noConnections =
    "Looks like you don’t have any connections at ___.Go make one!";

  // if (props.connections) {
  //   connectionList = 
  //   props.connections.map((Obj) => {
  //     return <Connection key={Obj._id} connection={Obj}/>;
  //   });
  // }
  
  // return <div className="connections-container">{connectionList}</div>;

  if (props.connections.length > 0) {
    if (props.connections) {
      connectionList = props.connections.map((Obj) => {
        return <Connection key={Obj._id} connection={Obj} />;
      });
    }
    return <div className="connections-container">{connectionList}</div>;
  } else if (props.connections.length <= 0) {
    return noConnections;
  }
  
}

export default ConnectionList;

