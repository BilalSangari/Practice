import { useState, useEffect } from "react";
import "./Toggle.css";

export const ToggleSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply or remove the dark mode class on body element
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="toggle-container">
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleHandler} />
        <span className="slider">
          <span className="circle-text">{isDarkMode ? "ON" : "OFF"}</span>
        </span>
      </label>
      <p style={{ marginLeft: "12px", fontWeight: "bold" }}>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </p>
    </div>
  );
};
