import React from "react";

const Quote = (props) => {
  return (
    <div id="quote-box" className="App">
      <div id="text">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h2>
      </div>
      <div id="author">
        <h3>Some Author</h3>
      </div>
      <a
        href="https://twitter.com/intent/tweet"
        target="_blank"
        id="tweet-quote"
      >
        Tweet
      </a>
      <button id="new-quote">new quote</button>
    </div>
  );
};

export default Quote;
