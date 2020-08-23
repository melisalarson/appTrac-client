const url = `http://localhost:4004/connections`;


class ConnectionModel {
  static getAllConnections = () => {
    return fetch(url).then((response) => response.json())
  };
}

export default ConnectionModel;
