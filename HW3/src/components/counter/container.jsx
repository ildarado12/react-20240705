import { useState } from "react";
import { Counter } from "../../../../HW2/src/components/counter/counter";

export const ContainerCounter = () => {
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

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
