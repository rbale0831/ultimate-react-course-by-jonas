import React, { useState } from "react";

const Increaser = ({ type, steps, count }) => {
  const [value, setValue] = useState(count);

  const handleStepPlus = () => {
    /*if (steps > 0)*/ setSteps((s) => s + 1);
  };

  const handleStepMinus = () => {
    /*if (steps > 1)*/ setSteps((s) => s - 1);
  };

  const handleCountPlus = () => {
    /*if (count > -1)*/ setValue((c) => c + steps);
  };

  const handleCountMinus = () => {
    /*if (count > 0)*/ setValue((c) => c - steps);
  };

  return (
    <div>
      <button>-</button>
      <span>
        {type}: {value}
      </span>
      <button>+</button>
    </div>
  );
};

export default Increaser;
