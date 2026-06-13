import React from "react";
import "./App.css";

import Counter from "./DAY47/Counter";
import Todos from "./DAY47/Todos";

function App() {
  return (
    <div>
      <h1>Redux Toolkit Demo</h1>

      <Counter />

      <hr />

      <Todos />
    </div>
  );
}

export default App;
