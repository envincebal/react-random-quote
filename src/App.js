import React, { Component } from 'react';
import Quote from "./components/Quote";
import Buttons from "./components/Buttons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    }
  }

  componentDidMount = () => {
    this.getQuote();
  }

  getQuote = () => {
    const url = "https://talaikis.com/api/quotes/random/";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data.quote,
          author: data.author
        })
      })
  }

  tweetQuote = () => {
    const currentQuote = document.querySelector(".quote-text");
    const currentAuthor = document.querySelector(".quote-author");

    window.open(`https://twitter.com/intent/tweet?text=${currentQuote.textContent} ${currentAuthor.textContent}`);
  }

  render() {
    return (
      <div className="App">
        <p className="title">Random Quote Generator</p>
        <div className="quote-box">
          <Quote
            quote={this.state.quote}
            author={this.state.author}
          />
          <Buttons
            tweet={this.tweetQuote}
            randomQuote={this.getQuote}
          />
        </div>
      </div>
    );
  }
}

export default App;
