import React from "react";
import { withRouter } from "react-router-dom";
import ConnectionModel from "../../../models/connectionModel";
import Connection from "../../../components/zApplicationDetails/Connection/Connection";

class ConnectionContainer extends React.Component {
  state = {
    connection: {},
  };

  componentDidMount() {
    console.log(this.props, "from inside comp did mount -- Connection");
    ConnectionModel.getConnectionById(this.props.match.params.id)
      .then((result) => {
        
        this.setState({ connection: result });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log("i am inside the render of connection cntr");
    console.log(this.props);
    return <Connection connection={this.state.connection} />;
  }
}

export default withRouter(ConnectionContainer);
