import { useParams } from "react-router-dom";
import { Dish } from "../dish/dish";
import styles from "./styles.module.css";

export const DishPage = () => {
  const { dishId } = useParams();

  return (
    <div className={styles.dish}>
      <Dish id={dishId} />
    </div>
  );
};
