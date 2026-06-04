"use client";

import React, { useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <button onClick={toggleTheme} style={{ padding: '8px', borderRadius: '4px', backgroundColor: isDarkMode ? '#333' : '#eee', color: isDarkMode ? '#fff' : '#000' }} data-testid="theme-toggle">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
