import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const DishLink = ({ id }) => {
  const { name } = useSelector((state) => selectDishById(state, id)) || {};

  if (!name) {
    return null;
  }

  return (
    <Link className={styles.dish} to={id}>
      <h2>{name}</h2>
    </Link>
  );
};
