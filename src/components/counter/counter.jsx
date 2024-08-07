import classnames from "classnames";
import { Button } from "../button/button";
import { useUser } from "../login-context/context";
import styles from "./styles.module.css";

export const Counter = ({ value = 0, increment, decrement }) => {
  const { value: user } = useUser();

  return (
    <div
      className={classnames({
        [styles.login]: user === `Login`,
      })}
    >
      <Button text={`-`} onClick={decrement} />
      <span className={styles.counter}>{value}</span>
      <Button text={`+`} onClick={increment} />
    </div>
  );
};
