import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Tailwind from "./Tailwind";
import TailwindHTMLController from "./TailwindHTMLController";
import FormTailwind from "./FormTailwind";
import ToDoApp from "./ToDoApp";


function App() {
  const baseButton =
    "px-5 py-2 rounded-lg text-white transition active:scale-95";

  const buttonVariants = {
    primary: "bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300",
    danger: "bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300",
    success:
      "bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300",
  };

  return (
    <>
    
      {/* Navbar */}

      <nav className="bg-black text-white px-6 py-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl font-bold">MyApp</h1>

          <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-yellow-400">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-yellow-400">
                Services
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}

      <div className="p-10 flex flex-col items-center gap-8 bg-gray-100 min-h-screen">
        {/* Card */}

         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Tailwind Card
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            This card uses spacing, typography, border, and shadow utilities.
          </p>

          <button className={`${baseButton} ${buttonVariants.primary}`}>
            Read More
          </button>
        </div> 

        {/* Button Group */}

        <div className="flex gap-4 flex-wrap">
          <button className={`${baseButton} ${buttonVariants.primary}`}>
            Save
          </button>

          <button className={`${baseButton} ${buttonVariants.danger}`}>
            Delete
          </button>

          <button className={`${baseButton} ${buttonVariants.success}`}>
            Submit
          </button>
        </div>
      </div> 
   <ToDoApp/>
    </>
  );
}

export default App;