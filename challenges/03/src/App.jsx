import React, { useState } from "react";
import "./styles.css";
import Increaser from "./Increaser";

export default function App() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("Jun 21 2027");
  date.setDate(date.getDate() + count);

  const handleStepPlus = () => {
    /*if (steps > 0)*/ setSteps((s) => s + 1);
  };

  const handleStepMinus = () => {
    /*if (steps > 1)*/ setSteps((s) => s - 1);
  };

  const handleCountPlus = () => {
    /*if (count > -1)*/ setCount((c) => c + steps);
  };

  const handleCountMinus = () => {
    /*if (count > 0)*/ setCount((c) => c - steps);
  };

  return (
    <div className="App">
      {/* <Increaser type={"Steps"} steps={steps} />
      <Increaser type={"Count"} steps={steps} count={count} /> */}

      <div>
        <button onClick={handleStepMinus}>-</button>
        <span>Steps: {steps}</span>
        <button onClick={handleStepPlus}>+</button>
      </div>

      <div>
        <button onClick={handleCountMinus}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountPlus}>+</button>
      </div>

      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}
