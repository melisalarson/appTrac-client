import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import "../../App.css";


class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API}/login`, this.state)
      .then((res) => {
        console.log(res);
        this.props.setCurrentUser(res.data.token);
        this.props.history.push('/companies');
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data);
        console.log(err.response.data.message);
      });
  }

  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h2>Login</h2>
          <label htmlFor="name">Email</label>
          <input
            onChange={this.handleChange}
            type="email"
            id="email"
            name="email"
            value={this.state.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={this.handleChange}
            type="password"
            id="password"
            name="password"
            value={this.state.password}
          />
        </div>
        <button className="buttons" id="login" type="submit">
          Login
        </button>
      </form>
    );
  }
};

export default withRouter(Login);