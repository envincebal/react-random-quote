import React from "react";

const Quote = (props) => {
  return (
    <div>
      <p className="quote-text">"{props.quote}"</p>
      <p className="quote-author">-{props.author}</p>
    </div>
  );
}

export default Quote;