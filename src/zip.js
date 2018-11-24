import React, { Component } from 'react';
import {Link } from 'react-router-dom'

import './App.css';

class Zip extends Component {
  change = e => {
    var num = e.target.value.replace(/-*\D/gi, "");

    var num2 = num.replace(/\d{5}(?=(?:\d{1})+$)/gm, '$&-');

    this.props.onChange({ [e.target.name]: num2 });
  };
  render() {

    return (
      <div>
        <form>
          <h1>Enter Zip</h1>
          <input name="zip" onChange={this.change}></input>
          <br />
          <Link to="/list">
            <button>List</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Zip;
