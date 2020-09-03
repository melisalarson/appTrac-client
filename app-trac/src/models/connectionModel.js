const deploy = `https://app-trac-m.herokuapp.com/companies`;
const local = `http://localhost:4004/companies`;
const url = local;
// const url = deploy;

// to create a connection we need a company id
// will i always need a company id to access connections-yes
class ConnectionModel {
  // static getAllConnections = () => {
  //   return fetch(url).then((response) => response.json());
  // };

  static getConnectionById = (companyId, connectionId) => {
    console.log(companyId)
    return fetch(`${url}/${companyId}/connections/${connectionId}`).then((response) => response.json());
  }; 

  static createConnection = (companyId, connection) => {
    console.log(companyId)
    // let connectionObj = {
    //   connection: connection,
    //   companyId: companyId,
    // }
    
    return fetch(`${url}/${companyId}/connections`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(connection)
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  static updateConnection = (companyId, connection, connectionId) => {
    console.log(companyId)
    // let connectionObj = {
    //   connection: connection,
    //   companyId: companyId,
    // }
    return fetch(`${url}/${companyId}/connections/${connectionId}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(connection)
    }).then((response) => response.json());
  };

  static deleteConnection = (connectionId) => {
    return fetch(`${url}/connections/${connectionId}/delete`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };
}

export default ConnectionModel;
