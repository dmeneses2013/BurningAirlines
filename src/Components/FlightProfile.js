import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = (id) => `http://localhost:3000/flights/${id}.json`;



class Seats extends Component {
  constructor(props){
    super();
    this.state = {flight : {"id":0,"flight_number":"test","origin":"test","destination":"test","date":"01-01-0000","airplane":"Aaaaa A000-000","rows":1,"columns":1,"booked_seats":[["1","1"]]}, id : props.match.params.id};
    this.createTable = this.createTable.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.fetchFlight = this.fetchFlight.bind(this);
    this.fetchFlight();
  }



  fetchFlight() {
    const url = SERVER_URL(this.state.id);
    axios.get(url).then( results => {
      this.setState({ flight : results.data.flights[0] });
      console.log(results.data.flights[0]);
      setTimeout(this.fetchFlight,100);
    });

  }

  arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(let i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
  }

  _handleSubmit(e){
    const rowAndCol = e.target.value.split(",");
    axios.post('http://localhost:3000/reservations', {"flight_id" : this.state.flight.id, "user_id": 1, "row": rowAndCol[0], "column": rowAndCol[1]}).then(console.log("posted"))

  }

  createTable = () => {
    const table = [];
    for (let i = 1; i <=this.state.flight.rows; i++) {
      const row = [];
      for (let j = 1; j <= this.state.flight.columns; j++) {
        let booked = false;
        for (let k = 0; k < this.state.flight.booked_seats.length; k++) {
          booked = this.arraysEqual([`${i}`,`${j}`], this.state.flight.booked_seats[k]);
          if (booked) {
            break;
          }
        }
        if (!booked) {
          row.push(<td><span>{`R${i} C${j}`}</span><button onClick={ this._handleSubmit } value={[i,j]} >Book</button></td>);
        }
        if (booked) {
          row.push(<td>{`R${i} C${j}`}</td>);
          console.log(booked);
        }

      }
      table.push(<tr>{row}</tr>);
    }

    return table;
  }

  render(){

    return (
      <div>
      <h1>{this.state.flight.flight_number}</h1>
      <h2>{this.state.flight.origin} - {this.state.flight.destination}</h2>
      <h3>{this.state.flight.date}</h3>

      <table>
        { this.createTable() }
      </table>
      </div>
    );
  }
}

export default Seats;
