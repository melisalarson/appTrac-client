import React from 'react'

import ConnectionModel from '../../../models/connectionModel'
import ConnectionList from '../../../components/zApplicationDetails/Connection/ConnectionList'


class ConnectionListCntr extends React.Component {
  state = {
    connections: [],
  };

  componentDidMount() {
    // console.log("CONNECTION #4 hello from inside comp did mount");
    this.fetchData();
  }

  fetchData = () => {
    ConnectionModel.getAllConnections().then((data) => {
      // console.log("CONNECTION #5 this is the data fetched", data);
      this.setState({ connections: data });
    });
  };

  render() {
    // console.log("CONNECTION #1 and #2 hello in render", this.state.connections);
    return (
      <div>
        {/* <p>CONNECTION hello in the paragraph</p> */}
        <ConnectionList connections={this.state.connections}/>
      </div>
    );
  }
}

export default ConnectionListCntr;