import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user";
import styles from "./styles.module.css";

export const User = ({ id }) => {
  const user = useSelector((state) => {
    return selectUserById(state, id);
  });

  const { name } = user || {};

  if (!name) {
    return null;
  }

  return (
    <div>
      <span className={styles.user}>{name}</span>
    </div>
  );
};
