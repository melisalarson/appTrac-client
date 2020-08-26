const url = `http://localhost:4004`;

// to create a connection we need a company id
// will i always need a company id to access connections-yes
// 
class ConnectionModel {
  // static getAllConnections = () => {
  //   return fetch(url).then((response) => response.json());
  // };

  static getConnectionById = (connectionId) => {
    return fetch(`${url}/${connectionId}`).then((response) => response.json());
  }; 

  static createConnection = (companyId, connection) => {
    console.log(companyId)
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

  static updateConnection = (connection, connectionId) => {
    return fetch(`${url}/${connectionId}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(connection)
    }).then((response) => response.json());
  };

  static deleteConnection = (connectionId) => {
    return fetch(`${url}/${connectionId}/delete`, {
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
