import React from "react";

const Buttons = (props) => {
  return (
    <div className="buttons-container">
      <button className="tweet-quote buttons"><i class="fab fa-twitter"></i></button>
      <button className="random-quote buttons">New Quote</button>
    </div>
  )
}
export default Buttons;