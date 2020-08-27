import React from "react";
import { withRouter } from "react-router-dom";
import ConnectionModel from "../../../models/connectionModel";


class NewConnectionCntr extends React.Component {
  state = {
    connectionName: '',
    connectionEmail: '',
    connectionLinkedin: '',
  }

  handleChange = (event) => {
    console.log(event.target.id);
    if (event.target.value === 'on') {
      event.target.value = true;
    }
    
    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let companyId = this.props.match.params.co_id
    console.log(this.props, "this is props")
    console.log(companyId)
    ConnectionModel.createConnection(companyId, this.state)
      .then((result) => {
        console.log(result, "this is the resulttttttttttttt");
        // this.props.history.push(`/companies/${companyId}`)
        this.props.history.goBack();
      });
  }

  render() {
    return (
      <div className="new-connection">
        <form onSubmit={this.handleSubmit}>
          <h2>Add A New Connection</h2>
          <div>
            <label htmlFor="">Name</label>
            <input onInput={this.handleChange} type="text" name="connectionName" />
          </div>
          <div>
            <label htmlFor="">Email Address  </label>
            <input onInput={this.handleChange} type="email" name="connectionEmail" />
          </div>
          <div>
            <label htmlFor="">Linkedin Profile  </label>
            <input onInput={this.handleChange} type="url" name="connectionLinkedin" />
          </div>
          <button type="submit">Add Connection  </button>
        </form>
      </div>
    );
  };
}

export default withRouter(NewConnectionCntr);

