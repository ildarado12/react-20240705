import styles from "./styles.module.css";

export const Counter = ({ value = 0, increment, decrement }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span className={styles.counter}>{value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
