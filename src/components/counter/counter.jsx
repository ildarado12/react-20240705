import { Button } from "../button/button";
import styles from "./styles.module.css";

export const Counter = ({ value = 0, increment, decrement }) => {
  return (
    <div>
      <Button text={`-`} onClick={decrement} />
      <span className={styles.counter}>{value}</span>
      <Button text={`+`} onClick={increment} />
    </div>
  );
};
