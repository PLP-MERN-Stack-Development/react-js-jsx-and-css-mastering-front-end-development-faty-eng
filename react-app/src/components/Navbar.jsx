import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">My React App</h1>

      <div className="flex items-center gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/api" className="hover:underline">API Data</Link>

    <button
     onClick={toggleTheme}
     className="bg-white text-blue-600 px-3 py-1 rounded shadow"
    >
     Toggle Theme
    </button>

      </div>
    </nav>
  );
}
