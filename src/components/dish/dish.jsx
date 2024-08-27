import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes";
import { Ingredients } from "../ingredients/ingredients";
import { RestaurantCartSection } from "../restaurant-cart-section/restaurant-cart-section";
import styles from "./styles.module.css";

export const Dish = ({ id }) => {
  const dish = useSelector((state) => {
    return selectDishById(state, id);
  });
  const { name, price, ingredients } = dish || {};

  if (!name) {
    return null;
  }

  return (
    <div className={styles.dishCard}>
      <span className={styles.dish}> "{name}"</span> - {price}$
      <p className={styles.ingredients}>Ingredients:</p>
      <p className={styles.ingredient}>
        {ingredients.map((ingredient) => (
          <Ingredients ingredient={ingredient} key={ingredient} />
        ))}
      </p>
      <RestaurantCartSection id={id} />
    </div>
  );
};
