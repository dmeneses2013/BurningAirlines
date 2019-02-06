import React, { Component } from 'react';
import axios from 'axios';
import './Airplanes.css';
import Navbar from './Navbar';

export default class Flights extends Component {

  constructor() {
    super()
    this.state = {
      flightnumber: '',
      date: '',
      to: '',
      from: ''
      }
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  _handleSubmit(e) {
    e.preventDefault();
    let flightObject = {
      flightnumber: this.state.flightnumber,
      date: this.state.date,
      to: this.state.to,
      from:  this.state.from
    }
    this.props.onSubmit(flightObject);
  }

  render() {
    return (
      <div>

      </div>
    );
  }


}
