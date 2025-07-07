import { useState } from "react";

export const State = () => {
  const [count,setcount] = useState(0);
  const handlebuttonclick = () => {
    setcount(count +1)
  }
  return(
    <section className="main-div">
      <h1>{count}</h1>
      <button onClick={handlebuttonclick}>Increament</button>
    </section>
  )
}