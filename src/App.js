import React, { Component } from 'react';
import Quote from "./components/Quote";
import Buttons from "./components/Buttons";
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      quote: "",
      author:""
    }
  }
  componentDidMount = () => {
    this.getQuote();
  }

  getQuote = () => {
    const url = "http://quotes.stormconsultancy.co.uk/random.json";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          quote: data.quote,
          author: data.author
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div className="quote-box">
          <Quote
            quote={this.state.quote}
            author={this.state.author}
          />
          <Buttons
          randomQuote={this.getQuote}
          />
        </div>
      </div>
    );
  }
}

export default App;
