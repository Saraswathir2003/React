import { useState } from "react";

function CalculatorApp() {
  const [input, setInput] = useState("");

  function handleClick(value) {
    setInput(input + value);
  }

  function clearInput() {
    setInput("");
  }

  function calculate() {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  }

  return (
    <div
      style={{
        width: "300px",
        margin: "50px auto",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h1>Calculator</h1>

      <input
        type="text"
        value={input}
        readOnly
        style={{
          width: "100%",
          padding: "15px",
          fontSize: "20px",
          marginBottom: "10px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button
          onClick={clearInput}
          style={{
            gridColumn: "span 4",
            padding: "10px",
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default CalculatorApp;
