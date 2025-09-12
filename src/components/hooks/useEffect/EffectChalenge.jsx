import { useEffect, useState } from "react";
import "./index.css";

export const Challenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Name: ${name}`;
  },[name])

  return (
    <div className="challenge-wrapper">
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <span className="shape circle"></span>
        <span className="shape blob"></span>
        <span className="shape star"></span>
      </div>

      {/* Main Card */}
      <div className="challenge-card">
        <h1>🌟 UseEffect Challenge</h1>

        {/* Counter */}
        <div className="counter-section">
          <p>
            Count: <span>{count}</span>
          </p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>

        {/* Name */}
        <div className="name-section">
          <p>
            Name: <span>{name || "—"}</span>
          </p>
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
