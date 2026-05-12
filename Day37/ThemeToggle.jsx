import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "yellowgreen",
        color: darkMode ? "black" : "white",
        height: "100vh",
        padding: "20px",
        transition: "0.3s",
      }}
    >
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={() => setDarkMode(!darkMode)}>Toggle Mode</button>
    </div>
  );
}

export default ThemeToggle;
