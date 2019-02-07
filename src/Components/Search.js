import React, { Component } from 'react';
import axios from 'axios';
import './Airplanes.css';
import Navbar from './Navbar';

import { Link } from 'react-router-dom';

const SERVER_URL = (query, value) => `http://localhost:3000/flights/search/${query}/${value}.json`;
let URL = "";

export default class Search extends Component {

    constructor() {
      super()
      this.state = { flights : [] };
      this._searchFlights = this._searchFlights.bind(this);
    }

    _searchFlights() {
      axios.get(URL).then( results => {this.setState({ flights : results.data.flights });
      console.log(results);});
      setTimeout(this._searchFlights,3000);
    }

    render() {
      return (
        <div>
          <Navbar />
          <h1> Virgin Airlines </h1>
          <SearchField onSubmit={this._searchFlights}/>
          <FlightsDisplay flights={this.state.flights}/>
        </div>
      );
    }
  }

class SearchField extends Component {

  constructor(props) {
    super()
    this.state = {
      to: '',
      from: ''
      }
      this._handleInputFrom = this._handleInputFrom.bind(this);
      this._handleInputTo = this._handleInputTo.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInputFrom(e) {
    this.setState({ from: e.target.value});
    URL = SERVER_URL("origin", e.target.value);
  }

  _handleInputTo(e) {
    this.setState({ to: e.target.value});
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <div>
        <form onSubmit={ this._handleSubmit }>
          <input type="text" name="from" placeholder="From" required onInput={ this._handleInputFrom }></input>
          <input type="text" name="to" placeholder="To" required onInput={ this._handleInputTo }></input>
          <FormButtons />
        </form>
      </div>
    );
  }
}

function FlightsDisplay(props) {
  return (
    <table>
      <tbody>
          <tr>
          <th>Date</th>
          <th>Flight</th>
          <th>From</th>
          <th>To</th>
          <th>Airplane</th>
          <th>Seats</th>
          <th>Book</th>
          </tr>
        { props.flights.map( f =>
          <tr key={f.id}>
          <td>{f.date}</td>
          <td>{f.flight_number}</td>
          <td>{f.origin}</td>
          <td>{f.destination}</td>
          <td>{f.airplane}</td>
          <td>{f.rows * f.columns - f.booked_seats.length}</td>
          <td><Link to={`/flights/${f.id}`}>Book</Link></td>
          </tr>
         ) }
      </tbody>
      </table>
  )
}

 function FormButtons(props) {
  return (
    <div>
      <button type="Submit" width="150" height="50" >Save</button>
      <button type="Cancel" width="150" height="50" >Cancel</button>
    </div>
  )
}
