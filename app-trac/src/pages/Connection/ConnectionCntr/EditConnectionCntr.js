import React from "react";
import { withRouter } from "react-router-dom";
import ConnectionModel from "../../../models/connectionModel";


class EditConnectionCntr extends React.Component {
  state = {
    connectionName: "",
    connectionEmail: "",
    connectionLinkedin: "",
  };
  
  componentDidMount() {
    ConnectionModel.getConnectionById(this.props.match.params.id)
      .then((result) => this.setState(result))
      .catch((err) => console.log(err));
  }

  handleChage = (event) => {
    console.log(event.target.id);
    if (event.target.value === "on") {
      event.target.value = true;
    }

    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let companyId = this.props.match.params.co_id
    ConnectionModel.updateConnection(companyId, this.state, this.props.match.params.id)
    .then((result) => {
      console.log(this.props);
      console.log(this.props.match.params.id)
      console.log(result);
    });
    this.props.history.goBack();
  };

  render() {
    console.log(this.state)
    const { connectionName, connectionEmail, connectionLinkedin } = this.state;
    return (
      <div className="new-connection">
        <form onSubmit={this.handleSubmit}>
          <h2>Edit Connection</h2>
          <div>
            <label htmlFor="">Name</label>
            <input
              onChange={this.handleChage}
              type="text"
              name="connectionName"
              value={connectionName}
            />
          </div>
          <div>
            <label htmlFor="">Email Address </label>
            <input
              onChange={this.handleChage}
              type="email"
              name="connectionEmail"
              value={connectionEmail}
            />
          </div>
          <div>
            <label htmlFor="">Linkedin Profile </label>
            <input
              onChange={this.handleChage}
              type="url"
              name="connectionLinkedin"
              value={connectionLinkedin}
            />
          </div>
          <button type="submit">Save </button>
        </form>
      </div>
    );
  }
}

export default withRouter(EditConnectionCntr);

