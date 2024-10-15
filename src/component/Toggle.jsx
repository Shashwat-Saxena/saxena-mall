import React, { useState, useEffect } from 'react';
import { LiaToggleOnSolid } from "react-icons/lia";

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  // Check localStorage for theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save theme preference in localStorage
  };

  return (
    <button onClick={toggleTheme} className="btn btn-outline-dark">
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
    // <LiaToggleOnSolid  />
  );
};

export default ThemeToggle;
