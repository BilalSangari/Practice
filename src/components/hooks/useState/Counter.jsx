import { useState } from "react";
import "./Counter.css"; // Import CSS

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const min = 0;
  const max = 100;

  const increment = () => {
    if (count + step <= max) {
      setCount(count + step);
    }
  };

  const decrement = () => {
    if (count - step >= min) {
      setCount(count - step);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const handleStepChange = (e) => {
    setStep(parseInt(e.target.value) || 1);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">⚡ Modern Counter App</h1>
      <div className="counter-display">{count}</div>

      <div className="button-group">
        <button 
          onClick={decrement} 
          disabled={count - step < min} 
          className="btn btn-decrement"
        >
          -
        </button>

        <button 
          onClick={increment} 
          disabled={count + step > max} 
          className="btn btn-increment"
        >
          +
        </button>

        <button onClick={reset} className="btn btn-reset">
          Reset
        </button>
      </div>

      <div className="step-input">
        <label>Step Value:</label>
        <input
          type="number"
          value={step}
          onChange={handleStepChange}
          min="1"
          className="input-box"
        />
      </div>
    </div>
  );
}

export default Counter;
