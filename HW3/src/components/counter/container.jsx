import { useState } from "react";
import { Counter } from "./counter";

export const ContainerCounter = ({ min = 0, max = 5, step = 1 }) => {
  const [value, setValue] = useState(0);

  const decrement = () => {
    if (value === min) {
      setValue(value);
    } else {
      setValue(value - step);
    }
  };
  const increment = () => {
    if (value === max) {
      setValue(value);
    } else {
      setValue(value + step);
    }
  };

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
