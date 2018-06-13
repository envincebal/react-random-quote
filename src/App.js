import React, { Component } from 'react';
import Quote from "./components/Quote";
import Buttons from "./components/Buttons";
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    }
  }
  componentDidMount = () => {
    this.getQuote();
  }

  getQuote = () => {
    const url = "http://quotes.stormconsultancy.co.uk/random.json"
  }

  render() {
    return (
      <div className="App">
        <div className="quote-box">
          <Quote />
          <Buttons />
        </div>
      </div>
    );
  }
}

export default App;
