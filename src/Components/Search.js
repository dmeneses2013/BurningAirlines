import React, { Component } from 'react';
import axios from 'axios';
import './Airplanes.css';
import Navbar from './Navbar';

export default class Search extends Component {

    constructor() {
      super()
      this.state = {
          flights: [{id: "1", flightnumber: "Plane",}]
        }
    }

    _searchFlights(p) {
      axios.get('localhost:3001/search', {
          params: {
            to: p.to,
            from: p.from
          }
        })
      //  localhost:3001/search?to="Orlando"&from="Sydney" [{id:1, plane: Whatever}]
        .then(function (response) {
          this.setState({
            flights: [...this.state.flights, p]
            })
        })
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

  constructor() {
    super()
    this.state = {
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
    let props = {
      to: this.state.to,
      from: this.state.from,
    }
    this.props.onSubmit(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this._handleSubmit }>
          <input type="text" name="to" placeholder="To" required onInput={ this._handleInput }></input>
          <input type="text" name="from" placeholder="From" required onInput={ this._handleInput }></input>
          <FormButtons />
        </form>
      </div>
    );
  }
}

function FlightsDisplay(props) {
  return (
    <ul>
      { props.flights.map(flight => <li key={flight.id}>{flight.flightnumber} {flight.date} {flight.to} {flight.from}</li>)}
    </ul>
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
