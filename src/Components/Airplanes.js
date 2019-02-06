import React, { Component } from 'react';
import axios from 'axios';
import './Airplanes.css';
import Navbar from './Navbar';

export default class AdminPlanes extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      rows: '',
      cols: ''
      }
    this._createPlane = this._createPlane.bind(this);
  }

  _createPlane(p) {
    this.setState({name: p.name});
    this.setState({rows: p.rows});
    this.setState({cols: p.cols});
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1> Virgin Airlines </h1>
        <AdminPlaneForm onSubmit={this._createPlane}/>
        <Gallery2 name={this.state.name} rows={this.state.rows} columns={this.state.columns}/>
      </div>
    );
  }
}


class AdminPlaneForm extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      rows: '',
      cols: ''
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
      name: this.state.name,
      rows: this.state.rows,
      cols: this.state.cols
    }
    this.props.onSubmit(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this._handleSubmit }>
          <input type="text" name="name" placeholder="name" required onInput={ this._handleInput }></input>
          <input type="text" name="rows" placeholder="rows" required onInput={ this._handleInput }></input>
          <input type="text" name="cols" placeholder="cols" required onInput={ this._handleInput }></input>
          <FormButtons />
        </form>
      </div>
    );
  }
}

function Gallery2(props) {
  const grid = <div id="grid-container"> </div>;
  return (
    grid
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
