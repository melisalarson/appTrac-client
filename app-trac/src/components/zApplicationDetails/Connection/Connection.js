import React from 'react';

// import '../ApplicationDetails.css';


const Connection = (props) => {
  let { connections } = props;
  console.log('props in connection.js =', props)
  return (
    <h1>{connections}</h1>
    // <ConnectionListCntr />
      // <div className="content-wrapper-connections">
      //   {connectionName}
      //   <br />
      //   {connectionEmail}
      //   <br />
      //   {connectionLinkedinUrl}
      // </div>
  );
}

export default Connection;
