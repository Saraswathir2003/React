import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import UserDetails from "./UserDetails";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <Link to="/">Home</Link> |

        <Link to="/about">About</Link>|

        <Link to="/users">Users</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/users" element={<Users />} />

        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;