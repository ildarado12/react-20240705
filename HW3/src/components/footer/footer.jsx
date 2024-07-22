import styles from "./styles.module.css";
import classnames from "classnames";

export const Footer = () => {
  return (
    <div className={classnames(styles.footer)}>
      &copy; 2024 Ильдар Гатауллин
    </div>
  );
};
