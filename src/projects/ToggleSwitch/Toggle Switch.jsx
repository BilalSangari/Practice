import { useState, useEffect } from "react";
import "./Toggle.css";
import { IoMdSwitch } from "react-icons/io";
import { GiCamelHead } from "react-icons/gi";

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
    <>
    <div className="top">
    <h1>Toggle Switch</h1>
    <IoMdSwitch style={{fontSize: "32px"}}/>
    <GiCamelHead style={{fontSize: "32px"}}/>
    </div>
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
    </>
  );
};
