import { useEffect, useState } from "react";
import Card from "../src/components/Card";
import Quote from "../src/components/Quote";

// https://api.quotable.io/random  fetch random quote using this link https://github.com/lukePeavey/quotable credits

function App() {
  const [quote, setQuote] = useState({
    quote: "",
    author: "",
  });
  const [newReq, setNewReq] = useState(false);

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
