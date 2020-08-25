const url = `http://localhost:4004/connections`;


class ConnectionModel {
  static getAllConnections = () => {
    return fetch(url).then((response) => response.json());
  };

  static getConnectionById = (connectionId) => {
    return fetch(`${url}/${connectionId}`).then((response) => response.json());
  };

  static createConnection = () => {
    return fetch(url, {
      method: "POST",
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  static updateConnection = (connectionId) => {
    return fetch(`${url}/${connectionId}`, {
      method: "PUT",
    }).then((response) => response.json());
  };

  static deleteConnection = (connectionId) => {
    return fetch(`${url}/${connectionId}/delete`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };
}

export default ConnectionModel;
