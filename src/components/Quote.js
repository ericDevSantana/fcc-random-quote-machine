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
          <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: "10px" }} />
          {props.data.quote}
        </h2>
      </div>
      <div id="author" className={styles.author}>
        <h3>-{props.data.author}</h3>
      </div>
      <div className={styles["bottom-bar"]}>
        <div className={styles["anchor-links"]}>
          <a
            href={
              "https://twitter.com/intent/tweet?text=" +
              `${props.data.quote} -${props.data.author}`
            }
            rel="noreferrer"
            target="_blank"
            id="tweet-quote"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.tumblr.com/"
            rel="noreferrer"
            target="_blank"
            id="tumblr-quote"
          >
            <FontAwesomeIcon icon={faTumblr} size="2x" />
          </a>
        </div>
        <button type="submit" onClick={props.onRequest} id="new-quote">
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
