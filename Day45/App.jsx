import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Day42/Home";
import About from "./Day42/About";
import Users from "./Day42/Users";
import UserDetails from "./Day42/UserDetails";
import WeatherApp from "./WeatherApp";
import CalculatorApp from "./CalculatorApp";

function App() {
  return (
  <>
 
  <WeatherApp/>
  </>
  );
}

export default App;