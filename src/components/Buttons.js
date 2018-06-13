import React from "react";

const Buttons = (props) => {
  return (
    <div className="buttons-container">
      <button className="tweet-quote buttons"><i className="fab fa-twitter"></i></button>
      <button className="random-quote buttons" onClick={props.randomQuote}>New Quote</button>
    </div>
  )
}
export default Buttons;