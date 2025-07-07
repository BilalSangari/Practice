import { useState } from "react";

export const Task = () => {
  const [value, setvalue] = useState([
    { name: "ali", age: 25 },
    { name: "Ahmad", age: 30 },
    { name: "khan", age: 34 },
    { name: "mahmod", age: 23 },
  ]);

  console.log(value);
  const userCount = value.length;
  console.log(userCount);
  const averageAge =
    value.reduce((accum, currElm) => accum + currElm.age, 0) / userCount;

  return (
    <div className="counter-wrapper">
      <h1>Users list</h1>
      <ul className="counter-box">
        {value.map((currElm, index) => {
          return (
            <li key={index}>
              {currElm.name} - {currElm.age} years old
            </li>
          );
        })}
        <p>total: {userCount}</p>
        <p>Average age: {averageAge}</p>
      </ul>
    </div>
  );
};
