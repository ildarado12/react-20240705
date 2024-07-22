import styles from "./styles.module.css";
import classnames from "classnames";

export const Header = () => {
  return <h1 className={classnames(styles.header)}>Restaurants</h1>;
};
