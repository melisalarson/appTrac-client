import React from 'react';
// import { withRouter } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Routes from './config/routes'

import ApplicationDetails from "./components/zApplicationDetails/ApplicationDetails";

import './App.css';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="routes">
          {/* <Routes /> */}
          {/* <h1>hello from app.js</h1> */}
          <ApplicationDetails />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
