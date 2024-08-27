import { useSelector } from "react-redux";
import { selectDishIds } from "../../redux/entities/dishes";
import { DishLink } from "../dish-link/dish-link";
import styles from "./styles.module.css";

export const DishesList = () => {
  const ids = useSelector(selectDishIds);

  if (!ids.length) {
    return null;
  }

  return (
    <ul className={styles.dishes}>
      {ids.map((id) => (
        <li className={styles.dish} key={id}>
          <DishLink id={id} />
        </li>
      ))}
    </ul>
  );
};
