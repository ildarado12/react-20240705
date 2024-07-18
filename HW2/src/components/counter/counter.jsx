import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);

  const decrement = () => {
    if (value === 0) {
      setValue(value);
    } else {
      setValue(value - 1);
    }
  };
  const increment = () => {
    if (value === 5) {
      setValue(value);
    } else {
      setValue(value + 1);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      {value}
      <button onClick={increment}>+</button>
    </div>
  );
};
