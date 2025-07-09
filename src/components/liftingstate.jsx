import { useState } from "react";
import "./EV.css"; // Make sure to import your CSS file

export const Liftingstate = () => {
  const [inputValue, setInputvalue] = useState("");

  return (
    <div className="container">
      <h1 className="heading">Lifting State Up Example</h1>
      <InputComponent inputValue={inputValue} setInputvalue={setInputvalue} />
      <DisplayComponent inputValue={inputValue} />
    </div>
  );
};

const InputComponent = ({ inputValue, setInputvalue }) => {
  return (
    <input
      className="input-box"
      type="text"
      placeholder="Enter Your Text"
      value={inputValue}
      onChange={(e) => setInputvalue(e.target.value)}
    />
  );
};

const DisplayComponent = ({ inputValue }) => {
  return <p className="display-text">You entered: <strong>{inputValue}</strong></p>;
};
