import React, { Component } from 'react';
import axios from 'axios';
import './Airplanes.css';
import Navbar from './Navbar';

export default class FlightProfile extends Component {

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

// <Seats plane={} />

class Seats extends Component {
  constructor() {
    super()
    this.state = {
      seats: []
      }
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount(props) {
    const cols = parseInt(props.cols, 10);
    const rows = parseInt(props.rows, 10);
    const total = cols + rows;
    let divs = [];
    let labels = ['A','B','C','D','E','F','G','H','I','J','K']
    // The first row will label the columns
    for(let i = 0; i < parseInt(props.cols, 10); i++) {
        divs.push (<div className='grid-item-label' key={labels[i]} > {labels[i]}</div>)
    }
    // Display seats all seats in a single horizontal line
    for(let i = 0; i < total; i++) {
        divs.push (<div onClick={this._reserveSeat} className='grid-item' key={i} >{i}</div>)
    }
    // Now wrap seats by column number
    document.documentElement.style.setProperty("--colNum", props.cols);
      return (
        divs
      )
    }

  _reserveSeat(e) {
  //  e.target.id
  }


  render() {
    return (
      <div>
          <DisplaySeats />
      </div>
    );
  }
}

function DisplaySeats(props) {
  const cols = parseInt(props.cols, 10);
  const rows = parseInt(props.rows, 10);
  const total = cols + rows;
  let divs = [];
  let labels = ['A','B','C','D','E','F','G','H','I','J','K']
  // The first row will label the columns
  for(let i = 0; i < parseInt(props.cols, 10); i++) {
      divs.push (<div className='grid-item-label' key={labels[i]} > {labels[i]}</div>)
  }
  // Display seats all seats in a single horizontal line
  for(let i = 0; i < total; i++) {
      divs.push (<div className='grid-item' key={i} >{i}</div>)
  }
  // Now wrap seats by column number
  document.documentElement.style.setProperty("--colNum", props.cols);
  return (
    divs
  )
}
