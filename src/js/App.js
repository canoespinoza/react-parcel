import React, { Component } from 'react';

import '../css/custom.scss';

const axios = require('axios')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      title: '',
      content: '',
      pictures: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios.get("/api").then(response => {
      this.setState({
        quotes: response.data,
        title: response.data[0].title,
        content: response.data[0].content
      });
    });
    this.setState({ pictures: "https://source.unsplash.com/random/300x200" });
    console.log(this.state.pictures)
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            <button className="btn" onClick={this.handleClick}>
              CLICK ME!
            </button>
            <h2 className=''>{this.state.content}</h2>
            <h3>{this.state.title}</h3>
            <img src={this.state.pictures} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;