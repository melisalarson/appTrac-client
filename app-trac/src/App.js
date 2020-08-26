import React from 'react';
import { withRouter } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Routes from './config/routes';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
