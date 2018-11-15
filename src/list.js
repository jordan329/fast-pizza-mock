import React, { Component } from 'react';
import { Link,  } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  click = (e) => {
    e.persist()
    // e.preventDefault();
    console.log(e.target.name)
    this.props.onClick({ place_id: e.target.name });
  }
  componentDidMount() {
    const url =
      "https://xqgy0d8a3l.execute-api.us-east-1.amazonaws.com/Prod/places/" +
      this.props.zip;
    fetch(url)
      .then(res => {
        return res.json();
      }).then(data => {
        let list = data.results.map((item, i) => {          
          return (
            <div>
              <Link to="/details" onClick={this.click} key={i} name={item.place_id}>{item.name}</Link>
              <br />
            </div>
          )
        })
        this.setState({ list: list });
        console.log("state", this.state.list)
      })
  }
  render() {
    // if ((typeof this.props.zip) === 'undefined') {
    //   return (
    //     <Redirect to='/' />
    //   );
    // }
    return (
      <div> {this.state.list}
        < Link to="/details" > Details</Link >
      </div >

    );
  }
}

export default App;
