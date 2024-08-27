import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const MenuLink = ({ id }) => {
  const { name } = useSelector((state) => selectDishById(state, id)) || {};

  if (!name) {
    return null;
  }

  return (
    <Link className={styles.menu} to={`/dish/${id}`}>
      <h4>{name}</h4>
    </Link>
  );
};
