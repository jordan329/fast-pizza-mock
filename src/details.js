import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./App.css";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      details: {}
    };
  }
  componentDidMount() {
    const url =
      "https://xqgy0d8a3l.execute-api.us-east-1.amazonaws.com/Prod/details/" +
      this.props.place_id;
    fetch(url)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(res => {
        console.log(res);
        let details = res.result;
        if (details) {
          this.setState({
            website: details.website,
            phone: details.international_phone_number
          });
          console.log("state", this.state.details);
        }
      });
  }
  render() {
    if (typeof this.props.zip === "undefined") {
      return <Redirect to="/" />;
    }
    return (
      <div>
        {" "}
        {JSON.stringify(this.state.details, null, 2)}
        <Link to="/"> This page shows details</Link>
        <br />
        <a href={this.state.website}>{this.state.website}</a>
        <h1>{this.state.phone}</h1>
      </div>
    );
  }
}

export default Details;
