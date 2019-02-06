import React, { Component } from 'react';
import axios from 'axios';
import './Airplane.css';

export default class Flights extends Component {

  constructor() {
    super()
    this.state = {
      flights: [
        {flightnumber: '1', date: 'Date 1', to: 'This is to field 1', from: 'This is from field 1'},
        {flightnumber: '2', date: 'Date 2', to: 'This is to field 2', from: 'This is from field 2'}]
    }
    this._createFlight = this._createFlight.bind(this);
  }

  componentDidMount() {
    axios.get('https://google.com')
      .then(res => {
        const flights = res.data;
        this.setState({ flights });
      })
    }

  _createFlight(p) {
    // Make POST Request add flights to DB
    axios.post(`https://jsonplaceholder.typicode.com/users`, { p })
      .then(res => {
        // On success, add Flight Object to state Flights Array
        // This will also trigger FlightsDisplay to redner again
        this.setState({
          flights: [...this.state.flights, p]
          })
      })
  }

  render() {
    return (
      <div>
        <h1> Virgin Airlines </h1>
        <FlightForm onSubmit={this._createFlight}/>
        <FlightsDisplay flights={this.state.flights} />
      </div>
    );
  }
}



class FlightForm extends Component {

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
        <form onSubmit={ this._handleSubmit }>
          <input type="text" name="flightnumber" placeholder="flight number" required onInput={ this._handleInput }></input>
          <input type="text" name="date" placeholder="date" required onInput={ this._handleInput }></input>
          <input type="text" name="to" placeholder="top" required onInput={ this._handleInput }></input>
          <input type="text" name="from" placeholder="from" required onInput={ this._handleInput }></input>
          <FormButtons />
        </form>
      </div>
    );
  }
}

function FormButtons(props) {
  return (
    <div>
      <button type="Submit" width="150" height="50" >Save</button>
      <button type="Cancel" width="150" height="50" >Cancel</button>
    </div>
  )
}

function FlightsDisplay(props) {
  return (
    <ul>
      { props.flights.map(flight => <li>{flight.flightnumber} {flight.date} {flight.to} {flight.from}</li>)}
    </ul>
  )
}
