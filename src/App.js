import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Zip from "./zip"
import List from "./list"
import Details from "./details"
import './App.css';

class App extends Component {
  state = {
    fields: {
    },
  };
  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };
  onClick = updatedValue => {
    console.log(updatedValue)
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };
  render() {
    const zipWp = () => {
      return (
        <Zip onChange={this.onChange} />
      )
    }
    const listWp = () => {
      return (
        <List zip={this.state.fields.zip} onClick={this.onClick} />
      )
    }
    const detailsWp = () => {
      return (
        <Details onClick={this.onClick} zip={this.state.fields.zip} place_id={this.state.fields.place_id} />
      )
    }
    return (
      <Router className="App">
        <Switch>
          <Route path="/" exact render={zipWp} />
          <Route path="/list" exact render={listWp} />
          <Route path="/details" exact render={detailsWp} />
          <div>
            <p>
              {JSON.stringify(this.state.fields, null, 2)}
            </p>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
