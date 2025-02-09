import React, { useState, useEffect } from "react";
import "../App.css";
import logo from "../assets/images/dsa.jpg"; // Replace with actual image path

const Header = () => {
  // Fix: Convert string to boolean
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? true : false;
  });

  // Fix: Ensure dark mode is applied on first load
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Fix: Toggle function
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="header">
      <section className="flex">
        <a href="/" className="logo">EchoLearn</a>

        <form action="/search" method="post" className="search-form">
          <input type="text" name="search_box" required placeholder="Search Problems..." maxLength="100" />
          <button type="submit" className="fas fa-search"></button>
        </form>

        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
          <div id="search-btn" className="fas fa-search"></div>
          <div id="user-btn" className="fas fa-user"></div>
          <div 
            id="toggle-btn" 
            className={`fas ${darkMode ? "fa-moon" : "fa-sun"}`} 
            onClick={toggleDarkMode} 
            style={{ cursor: "pointer" }}>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
