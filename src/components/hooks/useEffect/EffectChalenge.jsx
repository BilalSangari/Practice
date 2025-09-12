import { useState } from "react";
import "./index.css";

export const Challenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="challenge-wrapper">
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
