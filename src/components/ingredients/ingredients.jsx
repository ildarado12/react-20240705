import styles from "./styles.module.css";

export const Ingredients = ({ ingredient }) => {
  if (!ingredient) {
    return null;
  }

  return <span className={styles.ingredient}>&#x25CF;{ingredient}</span>;
};
