import { ContainerCounter } from "../counter/container";
import { Ingredients } from "../ingredients/ingredients";
import styles from "./styles.module.css";

export const Menu = ({ name, price, ingredients }) => {
  if (!name) {
    return null;
  }

  return (
    <div className={styles.restaurantName}>
      "{name}" - {price}$<p className={styles.ingredients}>Ingredients:</p>
      <p>
        {ingredients.map((ingredient) => (
          <Ingredients ingredient={ingredient} />
        ))}
      </p>
      <ContainerCounter min={0} max={100} step={1} />
    </div>
  );
};