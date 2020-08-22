import React from 'react';
import Navbar from './components/Navbar/Navbar'

import './App.css';
import Application from './components/Application/Application';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Application />
      <Company />
      {/* <Job />
      <Connection /> */}
    </div>
  );
}

export default App;
