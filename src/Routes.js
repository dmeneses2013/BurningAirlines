import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Airplanes from './Components/Airplanes';
import Flights from './Components/Flights';
import FlightProfile from './Components/FlightProfile';
import Search from './Components/Search';


const Routes = (
  <Router>
    <div>
      <Route exact path="/airplanes" component={ Airplanes } />
      <Route exact path="/flights" component={ Flights } />
      <Route path="/flights/:id" component={ FlightProfile } />
      <Route path="/search" component={ Search } />
    </div>
  </Router>
);

export default Routes;
