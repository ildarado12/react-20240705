import styles from "./styles.module.css";
import classnames from "classnames";

export const Counter = ({ value = 0, increment, decrement }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span className={classnames(styles.counter)}>{value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
