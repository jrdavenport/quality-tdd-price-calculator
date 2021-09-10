import React, { useState } from "react";
import { calculatePrice } from "./price-calculator";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <header className="App-header">Quality Price Calculator</header>

      <form
        onSubmit={(event) => {
          const result = calculatePrice(input);
          setResult(result);
          event.preventDefault();
        }}
      >
        <label>
          Input:
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <p>{result}</p>
    </div>
  );
}

export default App;
