import React, { Component } from 'react';
import Quote from "./components/Quote";
import Buttons from "./components/Buttons";
import './index.css';

// "http://quotes.stormconsultancy.co.uk/random.json"
class App extends Component {
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
