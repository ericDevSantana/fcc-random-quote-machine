import { useEffect, useState } from "react";
import Card from "../src/components/Card";
import Quote from "../src/components/Quote";

// https://api.quotable.io/random  fetch random quote using this link https://github.com/lukePeavey/quotable credits

function App() {
  const [newReq, setNewReq] = useState(false); //everytime newReq changes its state a new request is triggered by changing useEffect dependencies
  const [quote, setQuote] = useState({
    quote: "",
    author: "",
  });

  // useEffect will fetch from this API and populate a new quote object...will trigger again when newReq changes its state
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) =>
        setQuote({
          quote: data.content,
          author: data.author,
        })
      );
  }, [newReq]);

  //passing callback down through Quote to be called when the button is clicked
  const quoteHandler = () => {
    setNewReq((prevState) => {
      return !prevState;
    });
  };

  return (
    <Card>
      <Quote data={quote} onRequest={quoteHandler} />
    </Card>
  );
}

export default App;
