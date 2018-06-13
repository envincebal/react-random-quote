import React from "react";

const Quote = (props) => {
  return (
    <div className="quote-box">
      <blockquote className="quote-text">{props.quote}</blockquote>
      <p className="quote-author">-{props.author}</p>
    </div>
  );
}

export default Quote;