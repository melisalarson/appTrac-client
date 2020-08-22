import React from 'react';
import Navbar from './components/Navbar/Navbar'

import './App.css';
import Application from './components/Application/Application';
import ApplicationDetails from "./components/ApplicationDetails/ApplicationDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Application /> */}
      <ApplicationDetails />
      {/* <Job />
      <Connection /> */}
    </div>
  );
}

export default App;
