import React from "react";
import styles from "./Quote.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Quote = (props) => {
  return (
    <div id="quote-box" className={styles.quote}>
      <div id="text">
        <h2>
          <FontAwesomeIcon icon={faQuoteLeft} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h2>
      </div>
      <div id="author" className={styles.author}>
        <h3>-Some Author</h3>
      </div>
      <div className={styles["bottom-bar"]}>
        <div className={styles["anchor-links"]}>
          <a
            href="https://twitter.com/intent/tweet"
            target="_blank"
            id="tweet-quote"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://twitter.com/intent/tweet"
            target="_blank"
            id="tumblr-quote"
          >
            <FontAwesomeIcon icon={faTumblr} size="2x" />
          </a>
        </div>
        <button id="new-quote">New Quote</button>
      </div>
    </div>
  );
};

export default Quote;
