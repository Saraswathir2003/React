import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Counter from "./Counter";

import { useReducer, useRef, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

const savedCount = localStorage.getItem("count");

const initialState = {
  count: savedCount ? JSON.parse(savedCount) : 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(state.count));
  }, [state.count]);

  return (
    <div>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>

      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

      <br />
      <br />

      <input ref={inputRef} placeholder="Enter text" />

      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

export default App;
