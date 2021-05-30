import "./App.css";

function App() {
  return (
    <div id="quote-box" className="App">
      <div id="text">some text</div>
      <div id="author">some author</div>
      <button id="new-quote">new quote</button>
      <a
        href="https://twitter.com/intent/tweet"
        target="_blank"
        id="tweet-quote"
      >
        Tweet
      </a>
    </div>
  );
}

export default App;
