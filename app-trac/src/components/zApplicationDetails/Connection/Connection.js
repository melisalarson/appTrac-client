import React from 'react';

const Connection = (props) => {
  let { connection } = props;
  console.log('props in connection.js =', props)
  return (
    <div className="content-wrapper-connections">
      {connection.connectionName} -
      <a href={connection.connectionLinkedin} target="_blank"> LinkedIn </a>
      <br />
      {connection.connectionEmail}
    </div>
  );
}

export default Connection;
