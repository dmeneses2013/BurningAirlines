import React, { Component } from 'react';
import AdminPlanes from './Airplanes.js';
import Flights from './Flights.js';
import Search from './Search.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <a href="/search">Search</a>
          <a href="/flights">Flights</a>
          <a href="/planes">Planes</a>
        </nav>
        <div> <Search /> </div>
      </div>
    );
  }
}

export default App;
