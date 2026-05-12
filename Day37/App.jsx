import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import TextPreview from "./TextPreview";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <>
      <ThemeToggle />
      <TextPreview />
    </>
  );
}


export default App;
