import React, { Component } from 'react';

export default class Navbar extends Component {

    constructor() {
      super()
      this.state = {

        }
    }


    render() {
      return (
        <nav>
          <a href="#/search">Search</a>
          <a href="#/flights">Flights</a>
          <a href="#/airplanes">Planes</a>
        </nav>
      );
    }
  }
