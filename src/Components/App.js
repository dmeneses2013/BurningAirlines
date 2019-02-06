import React, { Component } from 'react';
import AdminPlanes from './Airplanes.js';
import Flights from './Flights.js';
import Search from './Search.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <li>Search</li>
          <li>Flights</li>
          <li>Planes</li>
        </nav>
        <div> <Search /> </div>
      </div>
    );
  }
}

export default App;
