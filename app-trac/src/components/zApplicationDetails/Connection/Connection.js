import React from 'react';

// import '../ApplicationDetails.css';


const Connection = (props) => {
  let { connection } = props;
  console.log('props in connection.js =', props)
  return (
    <div className="content-wrapper-connections">
      {connection.connectionName}
      <br />
      {connection.connectionEmail}
      <br />
      {connection.connectionLinkedinUrl}
    </div>
  );
}

export default Connection;
