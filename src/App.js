import React, { useState } from "react";
import ReactDom from "react-dom";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input));
      } catch (e) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult(null);
    } else {
      setInput(input + value);
    }
  };
  return (
    <>
      <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result !== null ? result : "0"}</div>
        </div>
      </div>
      <div className="buttons">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
          "C",
        ].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
