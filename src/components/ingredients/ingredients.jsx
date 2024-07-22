import styles from "./styles.module.css";
import classnames from "classnames";

export const Ingredients = ({ ingredient }) => {
  if (!ingredient) {
    return null;
  }

  return (
    <span className={classnames(styles.ingredient)}>&#x25CF;{ingredient}</span>
  );
};
