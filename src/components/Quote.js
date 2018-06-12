import React from "react";

const Quote = (props) => {
  return (
    <div className="quote-box">
      <h1 className="quote-text">{props.quote}</h1>
      <p className="quote-author">{props.author}</p>
    </div>
  );
}

export default Quote;