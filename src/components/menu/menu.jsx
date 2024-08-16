import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { selectDisheById } from "../../redux/entities/dishes";
import { Ingredients } from "../ingredients/ingredients";
import { RestaurantCartSection } from "../restaurant-cart-section/restaurant-cart-section";

export const Menu = ({ id }) => {
  const menu = useSelector((state) => {
    return selectDisheById(state, id);
  });
  const { name, price, ingredients } = menu || {};

  if (!name) {
    return null;
  }

  return (
    <div>
      <span className={styles.dishe}> "{name}"</span> - {price}$
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
